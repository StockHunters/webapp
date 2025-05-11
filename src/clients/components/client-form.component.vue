<script>
import { Client } from "../models/client.entity.js";
import { ClientApiService } from "../services/client-api.service.js";
import {Button as PvButton, Calendar as PvCalendar, Dropdown as PvDropdown} from "primevue";

export default {
  name: "client-form.component",
  components: {PvCalendar, PvDropdown, PvButton},
  data() {
    return {
      client: Client.createEmpty(),
      statusOptions: ['Vigente', 'Deudor'],
      loading: false
    };
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        const apiService = new ClientApiService();

        await apiService.create(this.client.toJson());

        this.client = Client.createEmpty(); // Limpiar el formulario
        this.$emit('refresh-list');
        alert('✅ Cliente registrado correctamente');
      } catch (error) {
        console.error(error);
        alert('❌ Error al registrar el cliente');
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="clientForm">
    <h3>Añadir Nuevo Cliente</h3>

    <div class="field">
      <label>Nombre</label>
      <InputText v-model="client.first_name" required class="w-full" />
    </div>

    <div class="field">
      <label>Apellido</label>
      <InputText v-model="client.last_name" required class="w-full" />
    </div>

    <div class="field">
      <label>Teléfono</label>
      <InputText v-model="client.phone" required class="w-full" />
    </div>

    <div class="field">
      <label>Email</label>
      <InputText v-model="client.email" type="email" required class="w-full" />
    </div>

    <div class="field">
      <label>DNI</label>
      <InputText v-model="client.dni" required class="w-full" />
    </div>

    <div class="field">
      <label>Fecha de Registro</label>
      <pv-calendar v-model="client.registration_date" dateFormat="yy-mm-dd" class="w-full" />
    </div>

    <div class="field">
      <label>Estado</label>
      <pv-dropdown v-model="client.status" :options="statusOptions" class="w-full" />
    </div>

    <pv-button :label="loading ? 'Guardando...' : 'Añadir Cliente'" :disabled="loading" type="submit" class="w-full p-button-success mt-3" />
  </form>
</template>

<style scoped>
.clientForm {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #1e1e1e;
  border-radius: 8px;
  color: white;
}

.field {
  margin-bottom: 1rem;
}

h3 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
