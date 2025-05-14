<script>
import { loadStripe } from '@stripe/stripe-js';

export default {
  name: 'PaymentForm',
  data() {
    return {
      stripe: null,
      publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY // 🔑 Reemplaza con tu clave pública de Stripe
    };
  },
  created() {
    this.initStripe();
  },
  methods: {
    async initStripe() {
      this.stripe = await loadStripe(this.publicKey);
    },
    async handlePayment() {
      if (!this.stripe) {
        alert('❌ Stripe no está inicializado.');
        return;
      }

      const { error } = await this.stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1RO9KMQjzoQNilXPB31BObAC', quantity: 1 }], // Reemplaza con tu ID de Price en Stripe
        mode: 'payment',
        successUrl: window.location.origin + '/success',
        cancelUrl: window.location.origin + '/cancel',
      });

      if (error) {
        console.error('Error en el pago:', error.message);
        alert('❌ Error en el pago');
      }
    }
  }
};
</script>

<template>
  <div style="text-align: center; margin-top: 50px;">
    <h2>Stripe Pay</h2>
    <pv-button
        label="Pagar Ahora"
        class="p-button-success"
        @click="handlePayment"
    />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 2rem;
}
</style>
