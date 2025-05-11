import axios from 'axios';

const invApi = import.meta.env.VITE_INV_API_URL;

const http = axios.create({
    baseURL: invApi,
});

export class BaseApiService {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getAll(params = {}) {
        return http.get(this.endpoint, { params });
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    create(data) {
        return http.post(this.endpoint, data);
    }

    update(id, data) {
        return http.put(`${this.endpoint}/${id}`, data);
    }

    delete(id) {
        return http.delete(`${this.endpoint}/${id}`);
    }
}
