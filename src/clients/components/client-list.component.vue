<script lang="ts">

import ClientItem from "./client-item.component.vue"
export default {
  name: "client-list.component",
  components: { ClientItem},
  props: {clients: {type: Array, required: true}},
  data() {
    return {
      showAll: false,
      visibleCount: 4
    }
  },
  computed: {
    visibleClients() {
      return this.showAll ? this.clients : this.clients.slice(0, this.visibleCount);
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    }
  }
}
</script>

<template>
  <div class="clientList">
    <client-item
        v-for="client in visibleClients"

        :client="client"
        class="clientCard"
    />
  </div>

  <div class="text-center mt-4">
    <pv-button @click="toggleShowAll">
      {{ showAll ? 'Ver menos' : 'Ver más' }}
    </pv-button>
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
