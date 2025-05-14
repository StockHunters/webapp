<template>
  <div class="main-layout">
    <app-header :user="user" @logout="handleLogout" />
    
    <main class="content">
      <slot></slot>
    </main>
    
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '../components/app-header.component.vue';
import AppFooter from '../components/app-footer.component.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      user: {
        name: 'User',
        avatar: null
      }
    }
  },
  methods: {
    handleLogout() {
      // Implementar lógica de cierre de sesión
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #f0f2f5;
}
</style>