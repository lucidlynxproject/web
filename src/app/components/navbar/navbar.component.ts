import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  userLogged?: User | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userLogged = this.authService.getUserFromLocalStorage();
  }
}
