<template>
  <div class="summary-card">
    <div class="card-title">{{ title }}</div>
    <div class="card-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'SummaryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped>
.summary-card {
  background-color: #e9e9e9;
  border-radius: 8px;
  padding: 1rem;
  min-width: 120px;
}

.card-title {
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>