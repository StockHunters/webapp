import {createRouter, createWebHistory} from 'vue-router';

import clientsViewComponent from "../clients/pages/clients-view.component.vue";
import ClientDetails from "../clients/pages/client-details.component.vue";
import SalesPage from "../sales/pages/sales-page.component.vue";
import paymentForm from "../planes/components/payment-form.component.vue";
import ProductCatalogComponent from "../products/pages/product-catalog.component.vue";

// Auth
import LoginPage from '../auth/pages/login-page.component.vue';
import RegisterPage from '../auth/pages/register-page.component.vue';
import UserSelectionPage from '../auth/pages/user-selection.component.vue';

// Dashboard
import DashboardPage from '../dashboard/pages/dashboard-page.component.vue';

// Clients
import ClientsView from '../clients/pages/clients-view.component.vue';
//import ClientDetails from '../clients/pages/client-details.component.vue'; // Se sobre escribe

// Products
import ProductCatalog from '../products/pages/product-catalog.component.vue';

// Sales
//import SalesPage from '../sales/pages/sales-page.component.vue'; // Se sobre escribe

// Reports
import ReportsPage from '../reports/pages/reports-page.component.vue';

const routes = [
    {path: '/clients', name: 'clients', component: clientsViewComponent},
    {path: '/clients/:id', name: 'client-details', component: ClientDetails, props: true },
    {path: '/sales', name: 'sales', component: SalesPage},
    {path: '/payment', name: 'payment', component: paymentForm},
    {path: '/products', name: 'products', component: ProductCatalogComponent},

    {path: '/', redirect: '/login' },
    {path: '/login', name: 'Login', component: LoginPage },
    {path: '/register', name: 'Register', component: RegisterPage },
    {path: '/select-user', name: 'UserSelection', component: UserSelectionPage },
    {path: '/dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true }},
    {path: '/reports', name: 'Reports', component: ReportsPage, meta: { requiresAuth: true }}

]
const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
)

export default router;
