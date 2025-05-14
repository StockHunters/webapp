import axios from "axios";
import { BaseApiService } from "../../public/services/base.service.js";

const invApi = import.meta.env.VITE_INV_API_URL;
const salesEndpoint = "/sales"; // Asegúrate que esto sea correcto según tu .env

const http = axios.create({
    baseURL: invApi,
});

export class SaleApiService extends BaseApiService {
    constructor() {
        super(salesEndpoint);
    }

    // Puedes añadir métodos específicos aquí si los necesitas, por ejemplo:
    getCompletedSales() {
        return http.get(`${this.endpoint}?status=Completado`);
    }
}
