import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/models/interfaces/LoginResponse.interface';
import { User } from 'src/app/models/User';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage : string = ""
  constructor(
    private router: Router,
    private authService: AuthService,
    private stateService: StateService
  ) {}
  
  

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
        this.stateService.currentUser.next(currentUser);
        this.authService.storageUserOnLocalStorage(currentUser);
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      if (error.error.status === 400 && error.error.text === 'User not found') {
        return this.errorMessage = error.error.text
      } else if (
        error.error.status === 400 &&
        error.error.text === 'Wrong credentials'
      ) {
        return this.errorMessage = error.error.text
      } else {
        throw new Error(`Error on login user: ${error}`);
      }
    }
  }
  
}
