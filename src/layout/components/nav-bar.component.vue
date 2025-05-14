<template>
  <nav class="nav-bar">
    <div class="nav-items">
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path" 
        class="nav-item"
        :class="{ active: isActive(item.path) }"
      >
        {{ $t(item.label) }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navItems: [
        { path: '/clients', label: 'nav.clients' },
        { path: '/products', label: 'nav.products' },
        { path: '/sales', label: 'nav.sales' },
        { path: '/reports', label: 'nav.reports' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path);
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
}

.nav-items {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  position: relative;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
}

.nav-item:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>