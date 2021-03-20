import {Group} from './group';
import {User} from './user';

export class GroupRequest {
  constructor(id: number, status: string, user: User, group: Group) {
    this.id = id;
    this.status = status;
    this.user = user;
    this.group = group;
  }
  id: number;
  status: string;
  user: User;
  group: Group;
}
