<template>
  <div class="activity-list">
    <h3 class="list-title">{{ title }}</h3>
    <div class="list-container">
      <div 
        v-for="(item, index) in activities" 
        :key="index" 
        class="activity-item"
      >
        <div class="activity-title">{{ item.title }}</div>
        <div class="activity-time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityList',
  props: {
    title: {
      type: String,
      default: 'Actividad Reciente'
    },
    activities: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.activity-list {
  width: 100%;
}

.list-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.list-container {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.activity-title {
  font-size: 0.9rem;
  color: #333;
}

.activity-time {
  font-size: 0.8rem;
  color: #666;
}
</style>