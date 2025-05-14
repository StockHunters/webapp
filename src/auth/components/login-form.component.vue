<template>
  <div class="login-form-container">
    <h2>{{ $t('auth.login.title') }}</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">{{ $t('auth.login.email') }} <span class="required">*</span></label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          :placeholder="$t('auth.login.emailPlaceholder')" 
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password">{{ $t('auth.login.password') }} <span class="required">*</span></label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          :placeholder="$t('auth.login.passwordPlaceholder')" 
          required
        />
      </div>
      
      <div class="forgot-password">
        <a href="#" @click.prevent="forgotPassword">{{ $t('auth.login.forgotPassword') }}</a>
      </div>
      
      <button type="submit" class="btn-primary">{{ $t('auth.login.loginButton') }}</button>
      
      <div class="social-login">
        <button type="button" class="btn-google" @click="loginWithGoogle">
          <span class="google-icon">G</span>
          Google
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Implementar lógica de inicio de sesión
      this.$emit('login', {
        email: this.email,
        password: this.password
      });
    },
    forgotPassword() {
      // Implementar lógica para recuperar contraseña
      this.$emit('forgot-password');
    },
    loginWithGoogle() {
      // Implementar lógica para inicio de sesión con Google
      this.$emit('google-login');
    }
  }
}
</script>

<style scoped>
.login-form-container {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.required {
  color: #ff0000;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.forgot-password {
  text-align: center;
  margin: 1rem 0;
}

.forgot-password a {
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.btn-primary:hover {
  background-color: #1565c0;
}

.social-login {
  margin-top: 1rem;
}

.btn-google {
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  color: #555;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-icon {
  margin-right: 0.5rem;
  font-weight: bold;
}
</style>