<script>
import { ClientApiService } from "../services/client-api.service.js";

export default {
  name: "client-details.component",
  components: {  },
  props: ["id"],
  data() {
    return {
      client: null
    };
  },
  async created() {
    const apiService = new ClientApiService();
    const response = await apiService.getById(this.id);
    this.client = response.data;
  }
};
</script>

<template>
  <div v-if="client" class="details-container">
    <h1 class="page-title">Cliente: {{ client.first_name }} {{ client.last_name }}</h1>

    <div class="details-grid">
      <!-- Columna Izquierda -->
      <div class="left-column">
        <section class="section">
          <h3>Nombre del Cliente</h3>
          <p>{{ client.company?.business_name || '---' }}</p>
        </section>

        <section class="section">
          <h3>Rubro</h3>
          <p>{{ client.company?.trade_name || '---' }}</p>
        </section>

        <section class="section">
          <h3>Solución Implementada</h3>
          <ul>
            <li>Desarrollo de reportes personalizados</li>
            <li>Visualización de productos más vendidos</li>
            <li>Funcionalidad de descarga de reportes en PDF</li>
            <li>Interfaz responsiva, adaptada a dispositivos móviles y escritorio</li>
          </ul>
        </section>

        <section class="section">
          <h3>Contacto</h3>
          <p><i class="pi pi-phone"></i> {{ client.phone || '---' }}</p>
          <p><i class="pi pi-envelope"></i> {{ client.email || '---' }}</p>
        </section>
      </div>

      <!-- Columna Derecha -->
      <div class="right-column">
        <h3>Datos</h3>
        <table>
          <tr><th>RUC</th><td>{{ client.company?.ruc || '---' }}</td></tr>
          <tr><th>Razón Social</th><td>{{ client.company?.business_name || '---' }}</td></tr>
          <tr><th>Nombre Comercial</th><td>{{ client.company?.trade_name || '---' }}</td></tr>
          <tr><th>Dirección</th><td>{{ client.company?.address || '---' }}</td></tr>
          <tr><th>Teléfono</th><td>{{ client.phone }}</td></tr>
          <tr><th>Correo Electrónico</th><td>{{ client.email }}</td></tr>
          <tr><th>Rubro</th><td>{{ client.company?.trade_name || '---' }}</td></tr>
          <tr><th>Fecha de Registro</th><td>{{ client.registration_date }}</td></tr>
          <tr><th>Estado</th><td>{{ client.status }}</td></tr>
        </table>
      </div>
    </div>

    <div class="action-button">
      <pv-button label="Volver" @click="$router.back()" class="p-button-secondary" />
    </div>
  </div>
</template>

<style scoped>
.details-container {
  max-width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  color: white;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
}

.details-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.left-column, .right-column {
  flex: 1 1 400px;
}

.section {
  margin-bottom: 2rem;
}

.section h3 {
  margin-bottom: 0.5rem;
}

.section ul {
  list-style: disc;
  margin-left: 1.5rem;
}

.right-column h3 {
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 0.5rem;
}

th {
  background-color: #2e2e2e;
  width: 40%;
}

td {
  background-color: #1e1e1e;
}

.action-button {
  text-align: center;
  margin-top: 2rem;
}
</style>
