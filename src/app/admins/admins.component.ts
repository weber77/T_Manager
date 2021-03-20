import { Component, OnInit } from '@angular/core';
import {Admin} from '../_models/admin';
import {UserService} from '../_shared/services/user/user.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[];

  constructor(
    private userService: UserService
  ) {
    this.admins = this.getAdmins();
  }

  ngOnInit(): void {
  }

  getAdmins(): Admin[] {
    return this.userService.getAdmins();
  }
}
