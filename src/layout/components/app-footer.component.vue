<template>
  <footer class="app-footer">
    <div class="contact-info">
      <div class="phone">{{ $t('footer.phone') }}: +51 999 999 999</div>
      <div class="email">{{ $t('footer.email') }}: usuario@ejemplo.com</div>
    </div>
    <div class="social-links">
      <div class="social-circle"></div>
      <div class="social-circle"></div>
      <div class="social-circle"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1976d2;
  color: white;
}

.contact-info {
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}
</style>