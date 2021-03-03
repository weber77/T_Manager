import {User} from './user';
import {Group} from './group';

export class UserGroup {
  id: number;
  group: Group;
  user: User;
  constructor(id: number, user: User, group: Group) {
    this.id = id;
    this.user = user;
    this.group = group;
  }
}
