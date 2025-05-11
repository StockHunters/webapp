<script lang="ts">
import ClientList from "../components/client-list.component.vue"
import {ClientAssembler} from "../services/client.assembler"
import {ClientApiService} from "../services/client-api.service"
export default {
  name: "clients-view.component",
  components: {ClientList},
  data(){
    return {
      clients: []
    }
  },
  methods: {
    async getClients(){
      const apiService = new ClientApiService();
      let resource = await apiService.getAll();
      console.log(resource)
      this.clients = ClientAssembler.toEntitiesFromResponse(resource)
    }
  },
  created() {
    this.getClients();
  }
}
</script>
<template>
  <client-list :clients="clients" />
</template>


<style scoped>

</style>