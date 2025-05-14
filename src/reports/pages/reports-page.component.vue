<template>
  <main-layout>
    <div class="reports-page">
      <div class="reports-header">
        <h1>{{ $t('reports.title') }}</h1>
      </div>
      
      <div class="reports-content">
        <div class="sales-chart-section">
          <sales-chart 
            :data="salesData" 
            :amount="totalSales" 
            :transactions="totalTransactions" 
          />
        </div>
        
        <div class="product-stats-section">
          <div class="stats-row">
            <product-stats 
              :title="$t('reports.topProducts')" 
              :items="topProducts" 
            />
            <product-stats 
              :title="$t('reports.bottomProducts')" 
              :items="bottomProducts" 
            />
          </div>
        </div>
        
        <div class="inventory-section">
          <inventory-summary 
            :value="totalProducts" 
            @download="downloadInventoryPDF" 
          />
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../../layout/pages/main-layout.component.vue';
import SalesChart from '../components/sales-chart.component.vue';
import ProductStats from '../components/product-stats.component.vue';
import InventorySummary from '../components/inventory-summary.component.vue';

export default {
  name: 'ReportsPage',
  components: {
    MainLayout,
    SalesChart,
    ProductStats,
    InventorySummary
  },
  data() {
    return {
      salesData: [
        { label: 'Lun', value: 30 },
        { label: 'Mar', value: 20 },
        { label: 'Mie', value: 40 },
        { label: 'Jue', value: 60 },
        { label: 'Vie', value: 50 },
        { label: 'Sab', value: 70 },
        { label: 'Dom', value: 80 }
      ],
      totalSales: 'S/ 1250.00',
      totalTransactions: '60 transacciones',
      topProducts: [
        { name: 'Producto A', value: '120' },
        { name: 'Producto B', value: '150' },
        { name: 'Producto C', value: '30' }
      ],
      bottomProducts: [
        { name: 'Producto A', value: '120' },
        { name: 'Producto B', value: '150' },
        { name: 'Producto C', value: '30' }
      ],
      totalProducts: '350'
    }
  },
  methods: {
    downloadInventoryPDF() {
      // Implementar lógica para descargar PDF
      console.log('Downloading inventory PDF');
    }
  }
}
</script>

<style scoped>
.reports-page {
  width: 100%;
}

.reports-header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}

.reports-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>