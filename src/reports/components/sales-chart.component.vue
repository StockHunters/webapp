<template>
  <div class="sales-chart">
    <h3 class="chart-title">{{ title }}</h3>
    <div class="chart-container">
      <div class="chart-bars">
        <div 
          v-for="(item, index) in data" 
          :key="index" 
          class="chart-bar"
          :style="{ height: calculateHeight(item.value) }"
        ></div>
      </div>
      <div class="chart-labels">
        <div 
          v-for="(item, index) in data" 
          :key="index" 
          class="chart-label"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="chart-summary">
      <div class="summary-amount">{{ amount }}</div>
      <div class="summary-transactions">{{ transactions }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesChart',
  props: {
    title: {
      type: String,
      default: 'Ventas por día'
    },
    data: {
      type: Array,
      default: () => [
        { label: 'Lun', value: 30 },
        { label: 'Mar', value: 20 },
        { label: 'Mie', value: 40 },
        { label: 'Jue', value: 60 },
        { label: 'Vie', value: 50 },
        { label: 'Sab', value: 70 },
        { label: 'Dom', value: 80 }
      ]
    },
    amount: {
      type: String,
      default: 'S/ 1250.00'
    },
    transactions: {
      type: String,
      default: '60 transacciones'
    }
  },
  methods: {
    calculateHeight(value) {
      const maxValue = Math.max(...this.data.map(item => item.value));
      const percentage = (value / maxValue) * 100;
      return `${percentage}%`;
    }
  }
}
</script>

<style scoped>
.sales-chart {
  width: 100%;
  margin-bottom: 2rem;
}

.chart-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.chart-container {
  display: flex;
  flex-direction: column;
  height: 200px;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 0.5rem;
}

.chart-bar {
  width: 30px;
  background-color: #1976d2;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s ease;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
}

.chart-label {
  width: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: #666;
}

.chart-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.summary-amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.summary-transactions {
  font-size: 0.9rem;
  color: #666;
}
</style>