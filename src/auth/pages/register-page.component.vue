<template>
  <div class="register-page">
    <div class="auth-container">
      <div class="auth-header">
        <div class="logo">
          <div class="logo-circle"></div>
        </div>
        <div class="auth-actions">
          <router-link to="/login" class="login-link">
            {{ $t('auth.register.login') }}
          </router-link>
          <button class="register-btn">{{ $t('auth.register.registerButton') }}</button>
        </div>
      </div>
      
      <div class="auth-content">
        <div class="form-container">
          <register-form @register="handleRegister" @google-register="handleGoogleRegister" />
        </div>
        <div class="illustration-container">
          <img src="" alt="Register Illustration" class="register-illustration" />
        </div>
      </div>
      
      <div class="auth-footer">
        <div class="contact-info">
          <div class="phone">{{ $t('footer.phone') }}: +51 999 999 999</div>
          <div class="email">{{ $t('footer.email') }}: usuario@ejemplo.com</div>
        </div>
        <div class="social-links">
          <div class="social-circle"></div>
          <div class="social-circle"></div>
          <div class="social-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/register-form.component.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegisterForm
  },
  methods: {
    handleRegister(userData) {
      // Implementar lógica de registro
      console.log('Register with:', userData);
      // Redirigir al login después del registro exitoso
      this.$router.push('/login');
    },
    handleGoogleRegister() {
      // Implementar lógica para registro con Google
      console.log('Google register');
    }
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-container {
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 600px;
}

.auth-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
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

.auth-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.register-btn {
  background-color: white;
  color: #1976d2;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.auth-content {
  display: flex;
  flex: 1;
  padding: 2rem;
}

.form-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-illustration {
  max-width: 100%;
  height: auto;
}

.auth-footer {
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
}

@media (max-width: 768px) {
  .auth-content {
    flex-direction: column;
  }

  .illustration-container {
    display: none;
  }
}
</style>