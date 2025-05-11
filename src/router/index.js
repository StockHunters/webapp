import {createRouter, createWebHistory} from 'vue-router';
import clientsViewComponent from "../clients/pages/clients-view.component.vue";
const routes = [
    {path: '/clients', name: 'clients', component: clientsViewComponent}
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
)

export default router;