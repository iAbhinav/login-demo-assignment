export class User {

  name: string;
  phone: string;
  password: string;
  gender: string;

  constructor(name: string, phone: string, password: string, gender: string) {
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.gender = gender;
  }
}
