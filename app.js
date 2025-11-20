const STORAGE_KEY = "evlogbook-data-v1";

let state = {
  vehicle: {
    brand: "",
    model: "",
    year: "",
    usableKwh: "",
    ratedConsumption: ""
  },
  charges: [] // {date, startSoc, endSoc, kwh, cost, km, notes}
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {
    console.warn("No se pudo cargar el estado:", e);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString();
}

// ---- UI ----
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Forms
const chargeForm = document.getElementById("charge-form");
const chargesList = document.getElementById("charges-list");
const lastChargeText = document.getElementById("last-charge");

const statRange = document.getElementById("stat-range");
const statCons = document.getElementById("stat-consumption");
const statCost = document.getElementById("stat-cost");
const statCharges = document.getElementById("stat-charges");

const vehicleForm = document.getElementById("vehicle-form");

// ---- RENDER ----
function renderVehicleForm() {
  const v = state.vehicle;
  vehicleForm.brand.value = v.brand || "";
  vehicleForm.model.value = v.model || "";
  vehicleForm.year.value = v.year || "";
  vehicleForm.usableKwh.value = v.usableKwh || "";
  vehicleForm.ratedConsumption.value = v.ratedConsumption || "";
}

function renderCharges() {
  chargesList.innerHTML = "";
  if (!state.charges.length) {
    chargesList.innerHTML = "<li class='list-item'><span>Aún no hay cargas guardadas.</span></li>";
    lastChargeText.textContent = "Aún no has registrado cargas.";
    statCharges.textContent = "0";
    statRange.textContent = "–";
    statCons.textContent = "–";
    statCost.textContent = "–";
    return;
  }

  statCharges.textContent = state.charges.length.toString();

  let totalKm = 0;
  let totalKwh = 0;
  let totalCost = 0;

  state.charges.slice().reverse().forEach(c => {
    totalKm += Number(c.km);
    totalKwh += Number(c.kwh);
    totalCost += Number(c.cost);

    const li = document.createElement("li");
    li.className = "list-item";
    const eff = c.km && c.kwh ? (c.kwh / (c.km / 100)).toFixed(1) : "–";
    li.innerHTML = `
      <strong>${formatDate(c.date)}</strong><br>
      <span>${c.startSoc}% → ${c.endSoc}% | ${c.kwh} kWh | ${c.cost} $ | ${c.km} km (${eff} kWh/100 km)</span>
      ${c.notes ? "<br><span>Notas: " + c.notes + "</span>" : ""}
    `;
    chargesList.appendChild(li);
  });

  const last = state.charges[state.charges.length - 1];
  const effLast = last.km && last.kwh
    ? (last.kwh / (last.km / 100)).toFixed(1) + " kWh/100 km"
    : "–";

  lastChargeText.innerHTML =
    `<strong>${formatDate(last.date)}</strong><br>
     ${last.startSoc}% → ${last.endSoc}% | ${last.kwh} kWh | ${last.cost} $ | ${last.km} km<br>
     <span>Consumo: ${effLast}</span>`;

  // Stats globales
  if (totalKm > 0 && totalKwh > 0) {
    const avgCons = totalKwh / (totalKm / 100); // kWh / 100km
    statCons.textContent = avgCons.toFixed(1) + " kWh/100 km";

    const avgCostPer100 = (totalCost / totalKm) * 100;
    statCost.textContent = avgCostPer100.toFixed(2) + " $ /100 km";

    const usable = Number(state.vehicle.usableKwh || 0);
    if (usable > 0) {
      const range = (usable / (avgCons / 100));
      statRange.textContent = range.toFixed(0) + " km";
    } else {
      statRange.textContent = "–";
    }
  } else {
    statCons.textContent = "–";
    statCost.textContent = "–";
    statRange.textContent = "–";
  }
}

// ---- HANDLERS ----
chargeForm.addEventListener("submit", e => {
  e.preventDefault();
  const startSoc = Number(document.getElementById("startSoc").value);
  const endSoc   = Number(document.getElementById("endSoc").value);
  const kwh      = Number(document.getElementById("kwh").value);
  const cost     = Number(document.getElementById("cost").value);
  const km       = Number(document.getElementById("km").value);
  const notes    = document.getElementById("notes").value.trim();

  if (isNaN(startSoc) || isNaN(endSoc) || isNaN(kwh) || isNaN(cost) || isNaN(km)) {
    alert("Revisa los campos numéricos.");
    return;
  }

  state.charges.push({
    date: new Date().toISOString(),
    startSoc, endSoc, kwh, cost, km, notes
  });
  saveState();
  chargeForm.reset();
  renderCharges();
});

vehicleForm.addEventListener("submit", e => {
  e.preventDefault();
  state.vehicle = {
    brand: vehicleForm.brand.value.trim(),
    model: vehicleForm.model.value.trim(),
    year: vehicleForm.year.value.trim(),
    usableKwh: vehicleForm.usableKwh.value.trim(),
    ratedConsumption: vehicleForm.ratedConsumption.value.trim()
  };
  saveState();
  renderVehicleForm();
  alert("Vehículo guardado.");
});

// ---- INIT ----
loadState();
renderVehicleForm();
renderCharges();