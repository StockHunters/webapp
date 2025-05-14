<script lang="ts">
import {defineComponent} from 'vue'
import {Client} from "../models/client.entity"

export default defineComponent({
  name: "client-item",
  components: {},
  props: {
    client: {type: Client, required: true}
  },
  methods: {
    goToDetails() {
      this.$router.push(`/clients/${this.client.id}`); // ✅ Usar client.id
    }
  }

})
</script>

<template>
  <pv-card>
    <template #title>{{client.first_name}} {{client.last_name}}</template>
    <template #content>
      <pv-button @click="goToDetails">Ver Mas</pv-button>
    </template>
  </pv-card>
</template>

<style scoped>

</style>