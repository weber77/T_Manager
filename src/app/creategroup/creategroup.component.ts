import { Component, OnInit } from '@angular/core';
import {Group} from '../_models/group';
import {User} from '../_models/user';
import {Admin} from '../_models/admin';
import {StorageService} from '../_shared/services/storage.service';
import {Router} from '@angular/router';
import {GroupService} from '../_shared/services/group/group.service';
import {UserService} from '../_shared/services/user/user.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreateGroupComponent implements OnInit {
  group: Group;
  users: User[];
  admins: Admin[];
  selectedUsers: User[];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.selectedUsers = [];
    this.users = this.userService.getUsers();
    this.admins = this.userService.getAdmins();
    this.group = new Group(0, '', '', new Admin(0, '', '', '', '', ''));
  }

  ngOnInit(): void {
  }

  addGroup(): void {
    console.log(this.group.admin);
    this.groupService.groupCount += 1;
    this.group.id = this.groupService.groupCount;
    const groups = this.groupService.getGroups();
    groups.push(this.group);
    this.storageService.setGroups(groups);
    this.router.navigate(['/allgroups']);
  }

}
