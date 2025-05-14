<template>
  <div class="register-form-container">
    <h2>{{ $t('auth.register.title') }}</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="name">{{ $t('auth.register.name') }} <span class="required">*</span></label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          :placeholder="$t('auth.register.namePlaceholder')" 
          required
        />
      </div>
      
      <div class="form-group">
        <label for="lastName">{{ $t('auth.register.lastName') }} <span class="required">*</span></label>
        <input 
          type="text" 
          id="lastName" 
          v-model="lastName" 
          :placeholder="$t('auth.register.lastNamePlaceholder')" 
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">{{ $t('auth.register.email') }} <span class="required">*</span></label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          :placeholder="$t('auth.register.emailPlaceholder')" 
          required
        />
        <div v-if="emailError" class="error-message">{{ emailError }}</div>
      </div>
      
      <div class="form-group">
        <label for="password">{{ $t('auth.register.password') }} <span class="required">*</span></label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          :placeholder="$t('auth.register.passwordPlaceholder')" 
          required
        />
      </div>
      
      <button type="submit" class="btn-primary">{{ $t('auth.register.registerButton') }}</button>
      
      <div class="social-login">
        <button type="button" class="btn-google" @click="registerWithGoogle">
          <span class="google-icon">G</span>
          Google
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      password: '',
      emailError: ''
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = this.$t('auth.register.invalidEmail');
        return false;
      }
      this.emailError = '';
      return true;
    },
    handleRegister() {
      if (this.validateEmail()) {
        // Implementar lógica de registro
        this.$emit('register', {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
      }
    },
    registerWithGoogle() {
      // Implementar lógica para registro con Google
      this.$emit('google-register');
    }
  }
}
</script>

<style scoped>
.register-form-container {
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
  position: relative;
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

.error-message {
  color: #ff0000;
  font-size: 0.8rem;
  margin-top: 0.25rem;
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