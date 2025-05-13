import {createRouter, createWebHistory} from 'vue-router';
import clientsViewComponent from "../clients/pages/clients-view.component.vue";
import ClientDetails from "../clients/pages/client-details.component.vue";
import SalesPage from "../sales/pages/sales-page.component.vue";
import paymentForm from "../planes/components/payment-form.component.vue";
const routes = [
    {path: '/clients', name: 'clients', component: clientsViewComponent},
    { path: '/clients/:id', name: 'client-details', component: ClientDetails, props: true },
    {path: '/sales', name: 'sales', component: SalesPage},
    {path: '/payment', name: 'payment', component: paymentForm},

]
const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
)

export default router;