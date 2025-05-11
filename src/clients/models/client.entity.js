export class Client {
    constructor({client_id = 0, first_name = '', last_name = '', phone='', email='', registration_date='', dni='', status = '', company = 'null'}) {
        this.client_id = client_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.registration_date = registration_date;
        this.dni = dni;
        this.status = status;
        this.company = company;
    }
}