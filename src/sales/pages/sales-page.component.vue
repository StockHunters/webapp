<script>
import SaleTable from "../components/sale-table.component.vue";
import { SaleApiService } from "../services/sale-api.service.js";
import { SaleAssembler } from "../services/sale.assembler.js";

export default {
  name: "sales-page",
  components: { SaleTable },
  data() {
    return {
      sales: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    try {
      const apiService = new SaleApiService();
      const response = await apiService.getAll();
      this.sales = SaleAssembler.toEntitiesFromResponse(response);
    } catch (error) {
      console.error("❌ Error al cargar las ventas:", error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<template>




  <h1 style="text-align: left">Sales</h1>
  <hr />
  <div v-if="loading">
    <p>Cargando ventas...</p>
  </div>
  <div v-else>
    <sale-table :sales="sales" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>
