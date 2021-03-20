import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BaseUser} from '../_models/base-user';
import {AuthService} from '../_shared/services/auth.service';
import {StorageService} from '../_shared/services/storage.service';
import {UserService} from '../_shared/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  baseUser: BaseUser;
  role = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.baseUser = {email: "", firstName: "", id: 0, lastName: "", password: "", userName: ""};
  }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.baseUser);

    if (this.role === 'user') {
      this.userService.userCount += 1;
      this.baseUser.id = this.userService.userCount;
      this.authService.createUser(this.baseUser);
    } else if (this.role === 'admin') {
      this.baseUser.id = this.storageService.adminCount + 1;
      this.authService.createAdmin(this.baseUser);
    }

    this.router.navigate(['/']);
  }
}
