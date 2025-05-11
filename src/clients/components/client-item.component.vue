<script lang="ts">
import {defineComponent} from 'vue'
import {Client} from "../models/client.entity"

export default defineComponent({
  name: "client-item",
  components: {},
  props: {
    client: {type: Client, required: true}
  }
})
</script>

<template>
  <pv-card>
    <template #title>{{client.first_name}} {{client.last_name}}</template>
    <template #content>
      <pv-button>Ver Mas</pv-button>
    </template>
  </pv-card>
</template>

<style scoped>

</style>