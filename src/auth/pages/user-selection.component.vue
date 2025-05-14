<template>
  <div class="user-selection-container">
    <div class="user-selection-header">
      <img class="company-logo" src="" alt="Logo" />
      <h2>{{ $t('auth.userSelection.welcome', { company: companyName }) }}</h2>
      <p>{{ $t('auth.userSelection.selectUser') }}</p>
    </div>
    
    <div class="user-avatars">
      <div 
        v-for="user in users" 
        :key="user.id" 
        class="user-avatar"
        @click="selectUser(user)"
      >
        <div class="avatar">
          <img v-if="user.avatar" :src="user.avatar" :alt="user.name" />
          <div v-else class="avatar-placeholder"></div>
        </div>
        <div class="user-name">{{ user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSelection',
  props: {
    companyName: {
      type: String,
      default: '[empresa]'
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectUser(user) {
      this.$emit('user-selected', user);
    }
  }
}
</script>

<style scoped>
.user-selection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.user-selection-header {
  text-align: center;
  margin-bottom: 3rem;
}

.company-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

p {
  color: #666;
  font-size: 1rem;
}

.user-avatars {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.user-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.user-avatar:hover {
  transform: scale(1.05);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.5rem;
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

.user-name {
  font-size: 0.9rem;
  color: #333;
  text-align: center;
}
</style>