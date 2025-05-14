<script>
import ProductCard from "../components/product-card.component.vue";
import {ProductApiService} from "../services/product-api.service.js"
export default {
  name: "product-catalog.component",
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    try {
      this.products = await ProductApiService.getProducts();
    } catch (err) {
      this.error = 'Error al cargar los productos.';
    } finally {
      this.loading = false;
    }
  }
}
</script>

<template>
  <div>
    <h1>Catálogo de Productos</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="catalog">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}
</style>