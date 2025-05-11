import {createRouter, createWebHistory} from 'vue-router';
import clientsViewComponent from "../clients/pages/clients-view.component.vue";
import ClientDetails from "../clients/pages/client-details.component.vue";
const routes = [
    {path: '/clients', name: 'clients', component: clientsViewComponent},
    { path: '/clients/:id', name: 'client-details', component: ClientDetails, props: true },

]
const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
)

export default router;