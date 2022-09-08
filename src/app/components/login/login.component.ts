import { formatCurrency } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/models/interfaces/LoginResponse.interface';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public async onSubmit(): Promise<void> {
    try {
      const response = await this.authService.loginUser(
        this.email,
        this.password
      );
      if (response.status === 200) {
        const { user, token } = response.data as LoginResponse;
        user.authToken = token;
        const currentUser = new User(user);
        this.authService.storageUserOnLocalStorage(currentUser);
        this.router.navigate(['/token']);
      }
    } catch (error: any) {
      if (error.error.status === 400 && error.error.text === 'User not found') {
        //TODO: show error message on form
      } else if (
        error.error.status === 400 &&
        error.error.text === 'Wrong credentials'
      ) {
        //TODO: show error message on form
      } else {
        throw new Error(`Error on login user: ${error}`);
      }
    }
  }
}
