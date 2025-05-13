import axios from 'axios';
import {BaseApiService} from "../../public/services/base.service.js";

const invApi = import.meta.env.VITE_INV_API_URL;
const productsEndpoint = import.meta.env.VITE_PRODUCTS_ENDPOINT_PATH;

const http = axios.create({
    baseURL: invApi,
});

export class ProductApiService extends BaseApiService {
    constructor(){
        super(productsEndpoint);
    }

    static async getProducts() {
        try {
            const response = await axios.get('https://fakeapi-3oxx.onrender.com/api/products');
            return response.data;
        } catch (error) {
            console.error('Error al obtener productos:', error);
            throw error;
        }
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`);
    }
}