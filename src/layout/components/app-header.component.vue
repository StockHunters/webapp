<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-circle"></div>
    </div>
    
    <nav-bar />
    
    <div class="user-profile">
      <div class="avatar" @click="toggleUserMenu">
        <img v-if="user && user.avatar" :src="user.avatar" :alt="user.name" />
        <div v-else class="avatar-placeholder"></div>
      </div>
      
      <div v-if="showUserMenu" class="user-menu">
        <div class="menu-item">{{ $t('header.profile') }}</div>
        <div class="menu-item">{{ $t('header.settings') }}</div>
        <div class="menu-item" @click="logout">{{ $t('header.logout') }}</div>
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from './nav-bar.component.vue';

export default {
  name: 'AppHeader',
  components: {
    NavBar
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showUserMenu: false
    }
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    logout() {
      // Implementar lógica de cierre de sesión
      this.$emit('logout');
    }
  },
  mounted() {
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.showUserMenu = false;
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  }
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #1976d2;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
}

.user-profile {
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 50%;
}

.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 150px;
}

.menu-item {
  padding: 0.75rem 1rem;
  color: #333;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f5f5f5;
}
</style>