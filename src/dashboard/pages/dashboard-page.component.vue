<template>
  <main-layout>
    <div class="dashboard-page">
      <div class="dashboard-header">
        <h1>{{ $t('dashboard.greeting', { user: userName }) }}</h1>
      </div>
      
      <div class="dashboard-content">
        <div class="dashboard-summary">
          <h2>{{ $t('dashboard.summary') }}</h2>
          <div class="summary-cards">
            <summary-card 
              :title="$t('dashboard.monthlyIncome')" 
              value="s/ 8,560" 
            />
            <summary-card 
              :title="$t('dashboard.totalStock')" 
              value="325" 
            />
            <summary-card 
              :title="$t('dashboard.todaySales')" 
              value="325" 
            />
          </div>
        </div>
        
        <div class="dashboard-charts">
          <div class="sales-section">
            <h2>{{ $t('dashboard.sales') }}</h2>
            <sales-chart />
          </div>
          
          <div class="activity-section">
            <activity-list :activities="recentActivities" />
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../../layout/pages/main-layout.component.vue';
import SummaryCard from '../components/summary-card.component.vue';
import SalesChart from '../components/sales-chart.component.vue';
import ActivityList from '../components/activity-list.component.vue';

export default {
  name: 'DashboardPage',
  components: {
    MainLayout,
    SummaryCard,
    SalesChart,
    ActivityList
  },
  data() {
    return {
      userName: 'User',
      recentActivities: [
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' },
        { title: 'Title', time: '00:00 am' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  width: 100%;
}

.dashboard-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}

h1 {
  font-size: 1.8rem;
  color: #333;
}

h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.summary-cards {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.dashboard-charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .summary-cards {
    flex-wrap: wrap;
  }
  
  .dashboard-charts {
    grid-template-columns: 1fr;
  }
}
</style>