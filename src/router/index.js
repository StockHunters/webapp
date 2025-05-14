import {createRouter, createWebHistory} from 'vue-router';
import clientsViewComponent from "../clients/pages/clients-view.component.vue";
import ClientDetails from "../clients/pages/client-details.component.vue";
import SalesPage from "../sales/pages/sales-page.component.vue";
import paymentForm from "../planes/components/payment-form.component.vue";
import ProductCatalogComponent from "../products/pages/product-catalog.component.vue";

const routes = [
    {path: '/clients', name: 'clients', component: clientsViewComponent},
    {path: '/clients/:id', name: 'client-details', component: ClientDetails, props: true },
    {path: '/sales', name: 'sales', component: SalesPage},
    {path: '/payment', name: 'payment', component: paymentForm},
    {path: '/products', name: 'products', component: ProductCatalogComponent},

]
const router = createRouter({
    history: createWebHistory('/Frontend-Web-Application/'), // 👈 Agrega la base aquí
    routes: routes,
});


export default router;