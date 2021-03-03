import {Injectable} from '@angular/core';
import {Group} from '../../../_models/group';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupCount = 4;

  constructor(
    private userService: UserService
  ) {
  }

  getGroups(): Group[] {
    return JSON.parse(localStorage.getItem('groups') as string);
  }

  getMyGroups(): Group[] {
    const username = this.userService.getLoggedInUser().userName;
    const userGroups = this.userService.getUserGroups().filter(userGroup => userGroup.user.userName === username);
    if (userGroups) {
      console.log(userGroups.map(userGroup => userGroup.user));
      return userGroups.map(userGroup => userGroup.group);
    }
    return [];
  }

  getGroup(id: number): Group {
    return this.getGroups().find(group => group.id === id) as Group;
  }
}
