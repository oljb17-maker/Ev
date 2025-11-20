<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EV Logbook</title>
  <meta name="theme-color" content="#10141a" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<div class="app">
  <header class="app-header">
    <h1>EV Logbook</h1>
    <span class="subtitle">Kairos Edition</span>
  </header>

  <nav class="tabs">
    <button class="tab active" data-tab="dashboard">Dashboard</button>
    <button class="tab" data-tab="charges">Cargas</button>
    <button class="tab" data-tab="vehicle">Vehículo</button>
  </nav>

  <main>
    <!-- DASHBOARD -->
    <section id="dashboard" class="tab-panel active">
      <div class="card">
        <h2>Resumen</h2>
        <div class="stats-grid">
          <div class="stat">
            <span class="label">Autonomía estimada</span>
            <span class="value" id="stat-range">–</span>
          </div>
          <div class="stat">
            <span class="label">Consumo medio</span>
            <span class="value" id="stat-consumption">–</span>
          </div>
          <div class="stat">
            <span class="label">Costo / 100 km</span>
            <span class="value" id="stat-cost">–</span>
          </div>
          <div class="stat">
            <span class="label">Cargas registradas</span>
            <span class="value" id="stat-charges">0</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>Última carga</h2>
        <p id="last-charge">Aún no has registrado cargas.</p>
      </div>
    </section>

    <!-- CARGAS -->
    <section id="charges" class="tab-panel">
      <div class="card">
        <h2>Nueva carga</h2>
        <form id="charge-form" autocomplete="off">
          <div class="field">
            <label>% inicio</label>
            <input type="number" id="startSoc" min="0" max="100" required />
          </div>
          <div class="field">
            <label>% final</label>
            <input type="number" id="endSoc" min="0" max="100" required />
          </div>
          <div class="field">
            <label>kWh entregados</label>
            <input type="number" step="0.01" id="kwh" required />
          </div>
          <div class="field">
            <label>Costo total (moneda local)</label>
            <input type="number" step="0.01" id="cost" required />
          </div>
          <div class="field">
            <label>Km recorridos desde la última carga</label>
            <input type="number" step="0.1" id="km" required />
          </div>
          <div class="field">
            <label>Notas (opcional)</label>
            <input type="text" id="notes" placeholder="EA - 150 kW, clima frío…" />
          </div>
          <button type="submit" class="primary">Guardar carga</button>
        </form>
      </div>

      <div class="card">
        <h2>Historial de cargas</h2>
        <ul id="charges-list" class="list"></ul>
      </div>
    </section>

    <!-- VEHÍCULO -->
    <section id="vehicle" class="tab-panel">
      <div class="card">
        <h2>Datos del vehículo</h2>
        <form id="vehicle-form" autocomplete="off">
          <div class="field">
            <label>Marca</label>
            <input type="text" id="brand" placeholder="Hyundai" />
          </div>
          <div class="field">
            <label>Modelo</label>
            <input type="text" id="model" placeholder="Ioniq 5" />
          </div>
          <div class="field">
            <label>Año</label>
            <input type="number" id="year" placeholder="2023" />
          </div>
          <div class="field">
            <label>Capacidad batería usable (kWh)</label>
            <input type="number" step="0.1" id="usableKwh" placeholder="72.6" />
          </div>
          <div class="field">
            <label>Consumo WLTP / EPA (kWh/100 km)</label>
            <input type="number" step="0.1" id="ratedConsumption" placeholder="17.0" />
          </div>
          <button type="submit" class="primary">Guardar vehículo</button>
        </form>
      </div>
    </section>
  </main>
</div>

<script src="app.js"></script>
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js');
    });
  }
</script>
</body>
</html>