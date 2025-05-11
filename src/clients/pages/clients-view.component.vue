<script lang="ts">
import ClientList from "../components/client-list.component.vue"
import {ClientAssembler} from "../services/client.assembler"
import {ClientApiService} from "../services/client-api.service"
import ClientForm from "../components/client-form.component.vue"
export default {
  name: "clients-view.component",
  components: {ClientForm, ClientList},
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
  <client-form></client-form>
</template>


<style scoped>

</style>