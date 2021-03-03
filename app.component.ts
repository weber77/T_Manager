import { Component } from '@angular/core';
import {StorageService} from './_shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';

  constructor(
    private storageService: StorageService
  ) {
    this.storageService.initializeStorage();
  }

}
