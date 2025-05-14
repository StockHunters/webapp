export class User {
  constructor(id = '', name = '', lastName = '', email = '', avatar = null) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}