<template>
  <div class="inventory-summary">
    <h3 class="summary-title">{{ title }}</h3>
    <div class="summary-content">
      <div class="summary-value">{{ value }}</div>
      <div class="summary-label">{{ label }}</div>
      <button class="download-button" @click="downloadPDF">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventorySummary',
  props: {
    title: {
      type: String,
      default: 'Inventario General'
    },
    value: {
      type: [String, Number],
      default: '350'
    },
    label: {
      type: String,
      default: 'Productos'
    },
    buttonText: {
      type: String,
      default: 'Descargar como PDF'
    }
  },
  methods: {
    downloadPDF() {
      // Implementar lógica para descargar PDF
      this.$emit('download');
    }
  }
}
</script>

<style scoped>
.inventory-summary {
  width: 100%;
  margin-bottom: 2rem;
}

.summary-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.summary-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.summary-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.summary-label {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.download-button {
  padding: 0.75rem 1.5rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}

.download-button:hover {
  background-color: #1565c0;
}
</style>