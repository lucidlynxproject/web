import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(
    public stateService: StateService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const userOnLocalStorage = this.authService.getUserFromLocalStorage();
    if (userOnLocalStorage) {
      this.stateService.currentUser.next(userOnLocalStorage);
    }
  }
}
