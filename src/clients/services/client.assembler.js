import { Client } from "../models/client.entity.js";

export class ClientAssembler {
    static toEntityFromResource(resource) {
        return new Client(resource);
    }

    static toEntitiesFromResponse(response) {
        return response.data.map(resource => this.toEntityFromResource(resource));
    }
}