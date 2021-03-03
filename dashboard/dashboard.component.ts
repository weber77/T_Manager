import {Component, OnInit} from '@angular/core';
import {UserService} from '../_shared/services/user/user.service';
import {User} from "../_models/user";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUsername = '';

  constructor(
    private userService: UserService
    ) {
    this.currentUsername = this.getCurrentUser().userName;
    console.log(this.currentUsername);
  }

  ngOnInit(): void {

  }

  getCurrentUser(): User {
    return this.userService.getLoggedInUser();
  }
}
