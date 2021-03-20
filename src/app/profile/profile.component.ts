import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../_shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }
}
