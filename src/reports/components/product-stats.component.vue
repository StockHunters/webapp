<template>
  <div class="product-stats">
    <h3 class="stats-title">{{ title }}</h3>
    <div class="stats-table">
      <table>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="product-name">{{ item.name }}</td>
            <td class="product-value">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStats',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.product-stats {
  width: 100%;
  margin-bottom: 2rem;
}

.stats-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.stats-table {
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

tr {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #eaeaea;
}

td {
  padding: 0.75rem;
}

.product-name {
  font-weight: bold;
}

.product-value {
  text-align: right;
}
</style>