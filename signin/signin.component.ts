import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from '../_models/login';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginModel: Login;

  constructor(private authService: AuthService, private router: Router) {
    this.loginModel = new Login('', '');
  }

  ngOnInit(): void {}

  onSignIn(): void {
    const isLogin = this.authService.loginUser(this.loginModel);
    console.log(isLogin);
    if (isLogin) {
      console.log('User exists');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('User does not exist!');
    }
  }
}
