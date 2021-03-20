import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_shared/services/user/user.service';
import {Group} from '../_models/group';
import {GroupService} from '../_shared/services/group/group.service';
import {UserGroup} from '../_models/user-group';
import {Admin} from '../_models/admin';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showGroupForm = false;
  groups: Group[];
  group = new Group(0, '', '', new Admin(0, '', '', '', '', ''));
  user = new User(0, '', '', '', '', '');
  message = '';

  constructor(
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.users = this.getUsers();
    this.groups = this.groupService.getGroups();
  }

  ngOnInit(): void {
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }

  showGroups(user: User): void {
    this.showGroupForm = true;
    this.user = user;
  }

  addUserToGroup(): void {
    console.log(this.user.firstName);
    console.log(this.group.name);
    const userGroupId = this.userService.userCount += 1;
    this.userService.addUserToGroup(new UserGroup(userGroupId, this.user, this.group));
    this.message = `User "${this.user.firstName} ${this.user.lastName}" has been added to group "${this.group.name}"`;
    this.showGroupForm = false;
  }
}
