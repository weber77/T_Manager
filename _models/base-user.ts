export class BaseUser {
  constructor(id: number, firstName: string, lastName: string, userName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
