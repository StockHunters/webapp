<script>
import { ClientApiService } from "../services/client-api.service.js";
import {Column} from "primevue";

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
  },
  computed: {
    companyData() {
      if (!this.client) return [];

      return [
        { field: 'Id', value: this.client.id },
        { field: 'First Name', value: this.client.first_name },
        { field: 'Last Name', value: this.client.last_name },
        { field: 'Phone', value: this.client.phone },
        { field: 'Email', value: this.client.email },
        { field: 'Registration Date', value: this.client.registration_date },
        { field: 'Dni', value: this.client.dni },
        { field: 'Status', value: this.client.status },
        { field: 'Company', value: this.client.company?.business_name || '---' }
      ];
    }
  }
};
</script>

<template>
  <h1 style="text-align: left;">Clients</h1>
  <hr>
  <h1 class="page-title">{{ client.first_name }} {{ client.last_name }}</h1>
  <div v-if="client" class="details-container">



  <pv-card style="width: 25rem; overflow: hidden; text-align: left">
    <template #header>

    </template>
    <template #subtitle>Nombre de Compania</template>
    <template #title>{{ client.company?.business_name || '---' }}</template>

    <template #content>
      <h2>Rubro</h2>
      <p class="m-0">
        {{ client.company?.trade_name || '---' }}
      </p><br>
      <h3>Solucion implementada</h3>

    </template>
    <template #footer>
      <div class=" gap-4 mt-1">
        <h3>Contacto</h3>

        <p><i class="pi pi-phone"></i> &#9; &nbsp{{ client.phone || '---' }}</p>

        <p><i class="pi pi-envelope"></i> &#9; &nbsp{{ client.email || '---' }}</p>
      </div>
    </template>
  </pv-card>

  <pv-table :value="companyData"
            tableStyle="min-width: 30rem"
            :showGridlines="true">
    <pv-column field="field" header="Campo"/>
    <pv-column field="value" header="Valor"/>
  </pv-table>
  </div>
  <div class="action-button">
    <pv-button label="Volver" @click="$router.back()" class="p-button-secondary" />
  </div>

</template>

<style scoped>
.details-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;
}

.action-button{
  margin: 2rem;
  align-self: center;
}
</style>
