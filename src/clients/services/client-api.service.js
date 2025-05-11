import axios from 'axios';
import {BaseApiService} from "../../public/services/base.service.js";

const invApi = import.meta.env.VITE_INV_API_URL;
const clientEndpoint = import.meta.env.VITE_CLIENTS_ENDPOINT_PATH;

const http = axios.create({
  baseURL: invApi,
});

export class ClientApiService extends BaseApiService{
    constructor() {
        super(clientEndpoint);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`); // ✅ Ahora simplemente /clients/:id
    }


}

