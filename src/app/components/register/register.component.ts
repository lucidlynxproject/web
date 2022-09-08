import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/models/interfaces/LoginResponse.interface';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public async onSubmit(): Promise<void> {
    try {
      const response = await this.authService.registerUser(
        this.email,
        this.password
      );
      if (response.status === 200) {
        const { user, token } = response.data as LoginResponse;
        user.authToken = token;
        const currentUser = new User(user);
        this.authService.storageUserOnLocalStorage(currentUser);
        //TODO: Maybe we should add a welcome screen
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
