import {Admin} from './admin';

export class Group {
  name: string;
  id: number;
  description: string;
  admin: Admin;
  constructor(id: number, name: string, description: string, admin: Admin) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.admin = admin;
  }
}
