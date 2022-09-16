import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { StateService } from 'src/app/services/state.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  userLogged?: User | null;
  documentationUrl = `${environment.apiUrl}/documentation`;

  constructor(
    private authService: AuthService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.userLogged = this.authService.getUserFromLocalStorage();
    this.stateService.currentUser.subscribe((user) => {
      if (user) {
        this.userLogged = user;
      }
    });
  }

  public logout(): void {
    this.authService.logOut();
    window.location.reload();
  }
}
