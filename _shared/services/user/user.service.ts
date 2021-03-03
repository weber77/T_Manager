import { Injectable } from '@angular/core';
import {User} from '../../../_models/user';
import {UserGroup} from '../../../_models/user-group';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCount = 3;
  userGroupCount = 8;

  constructor() { }

  getLoggedInUser(): any {
    const userCreds = JSON.parse(localStorage.getItem('user') as string);
    const foundUser = this.getUsers().find(u => (u.userName === userCreds.userName) && (u.password === userCreds.password));
    const foundAdmin = this.getAdmins().find(a => (a.userName === userCreds.userName) && (a.password === userCreds.password));
    if (foundUser) {
      return foundUser;
    }
    else if (foundAdmin) {
      return foundAdmin;
    }
  }

  getUserRole(user: User): string {
    const foundUser = this.getUsers().find(u => (u.userName === user.userName) && (u.password === user.password));
    const foundAdmin = this.getAdmins().find(a => (a.userName === user.userName) && (a.password === user.password));
    if (foundUser) {
      return 'user';
    }
    else if (foundAdmin) {
      return 'admin';
    }
    return '';
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  getAdmins(): User[] {
    return JSON.parse(localStorage.getItem('admins') as string);
  }

  getUserGroups(): UserGroup[] {
    return JSON.parse(localStorage.getItem('userGroups') as string);
  }

  getUsersOfGroup(groupId: number): User[] {
    const userGroups = this.getUserGroups().filter(userGroup => userGroup.group.id === groupId);
    if (userGroups) {
      console.log(userGroups.map(userGroup => userGroup.user));
      return userGroups.map(userGroup => userGroup.user);
    }
    return [];
  }

  addUserToGroup(userGroup: UserGroup): void {
    const userGroups = this.getUserGroups();
    userGroups.push(userGroup);
    this.setUserGroups(userGroups);
  }

  setUserGroups(userGroups: UserGroup[]): void {
    localStorage.setItem('userGroups', JSON.stringify(userGroups));
  }
}
