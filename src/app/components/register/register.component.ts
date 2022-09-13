import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/models/interfaces/LoginResponse.interface';
import { User } from 'src/app/models/User';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
 

  constructor(
    private router: Router,
    private authService: AuthService,
    private stateService: StateService
  ) {}

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
        this.stateService.currentUser.next(currentUser);
        this.authService.storageUserOnLocalStorage(currentUser);
        //TODO: Maybe we should add a welcome screen
        this.router.navigate(['/token']);
      }
    } catch (error: any) {
      if (error.error.status === 400 && error.error.text === 'User is already registered with that email') {
      
        //Fix: backend is not sending the correct error
      } else if (
        error.error.status === 400 &&
        error.error.text === 'Wrong credentials'
        //Fix: backend is not sending the correct error
      ) {
        
      } else {
        throw new Error(`Error on login user: ${error}`);
      }
    }
  }
}
