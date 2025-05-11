<script lang="ts">

import ClientItem from "./client-item.component.vue"
export default {
  name: "client-list.component",
  components: {ClientItem},
  props: {clients: {type: Array, required: true}}
}
</script>

<template>
  <div class="clientList">
    <client-item
        v-for="client in clients"

        :client="client"
        class="clientCard"
    />
  </div>
</template>

<style scoped>
.clientList {
  display: flex;
  flex-wrap: wrap; /* Que bajen si no hay espacio */
  justify-content: center; /* Centrado horizontal */
  gap: 1rem; /* Espacio entre tarjetas */
  padding: 1rem;
}

.clientCard {
  min-width: 200px; /* Asegura que tengan un ancho mínimo */
  text-align: center;
}
</style>
