export class Client {
    constructor({id = 0, first_name = '', last_name = '', phone='', email='', registration_date='', dni='', status = '', company = 'null'}) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.registration_date = registration_date;
        this.dni = dni;
        this.status = status;
        this.company = company;
    }

    toJson() {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email,
            registration_date: this.registration_date,
            dni: this.dni,
            status: this.status,
            company: this.company
        };
    }
    static createEmpty() {
        return new Client({});
    }
    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }

    isValid() {
        return this.first_name !== '' && this.last_name !== '' && this.dni.length === 8;
    }

    getFormattedDate() {
        const date = new Date(this.registration_date);
        return date.toLocaleDateString(); // Ajusta el formato según lo que necesites
    }


}