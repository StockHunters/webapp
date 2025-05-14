<script>
import ProductCard from "../components/product-card.component.vue";
import {ProductApiService} from "../services/product-api.service.js"
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
export default {
  name: "product-catalog.component",
  components: {
    Dropdown,
    InputNumber,
    InputSwitch,
    ProductCard
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      loading: true,
      error: null,
      categories: [],
      selectedCategory: null,
      priceRange: { min: 0, max: 10000 },
      stockAvailable: false
    };
  },
  async mounted() {
    try {
      this.products = await ProductApiService.getProducts();
      this.filteredProducts = this.products;
      this.categories = [...new Set(this.products.map(p => p.category))];
    } catch (err) {
      this.error = 'Error al cargar los productos.';
    } finally {
      this.loading = false;
    }
  },
  methods: {
    filterProducts() {
      this.filteredProducts = this.products.filter(product => {
        const categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
        const priceMatch = product.price >= this.priceRange.min && product.price <= this.priceRange.max;
        const stockMatch = !this.stockAvailable || product.stock > 0;
        return categoryMatch && priceMatch && stockMatch;
      });
    }
  },
}
</script>

<template>
  <div>
    <h1>Catálogo de Productos</h1>
    <!-- Controles de filtro -->
    <div style="margin-bottom: 20px;">
      <Dropdown
          v-model="selectedCategory"
          :options="categories"
          placeholder="Selecciona una categoría"
          @change="filterProducts"
      />
      <InputNumber
          v-model="priceRange.min"
          placeholder="Precio mínimo"
          @input="filterProducts"
      />
      <InputNumber
          v-model="priceRange.max"
          placeholder="Precio máximo"
          @input="filterProducts"
      />
      <InputSwitch
          v-model="stockAvailable"
          @change="filterProducts"
      /> Solo productos en stock
    </div>
    <!-- Mostrar productos -->
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="catalog">
      <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
      />
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