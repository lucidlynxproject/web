import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/interfaces/ApiResponse.interface';
import { UserCredentials } from '../models/interfaces/UserCredentials.interface';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/User';
import { Buffer } from 'buffer';
import { StateService } from './state.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authPath = 'api/auth';
  private readonly USER_CREDENTIAL_KEY = 'userCredentials';
  private readonly USER_KEY = 'user';

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private stateService: StateService
  ) {}

  public loginUser(email: string, password: string): Promise<any> {
    const body = { email, password };
    return this.api.post(`${this.authPath}/login`, body);
  }

  public registerUser(email: string, password: string): Promise<any> {
    const body = { email, password };
    return this.api.post(`${this.authPath}/register`, body);
  }

  public sendResetPasswordEmail(email: string): Promise<ApiResponse> {
    const url = `${environment.apiUrl}/${this.authPath}/request_reset_password`;
    const body = { email };
    return this.api.post(`${this.authPath}/request_reset_password`, body);
  }

  public resetForgottenPassword(
    token: string,
    newPassword: string
  ): Promise<ApiResponse> {
    const url = `${environment.apiUrl}${this.authPath}/reset_forgot_password`;
    const body = { token, newPassword };
    return firstValueFrom(this.http.post<ApiResponse>(url, body));
  }

  public storageUserOnLocalStorage(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public storeUserCredentials(
    email: string,
    password: string,
    rememberPassword: string
  ): void {
    const credentials = {
      email,
      password: Buffer.from(password, 'base64'),
      rememberPassword,
    };
    localStorage.setItem(this.USER_CREDENTIAL_KEY, JSON.stringify(credentials));
  }

  public getUserFromLocalStorage(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getUserCredentials(): UserCredentials {
    const userCredentialsOnStorage =
      localStorage.getItem(this.USER_CREDENTIAL_KEY) ?? '{}';
    const userCredentials = JSON.parse(
      userCredentialsOnStorage
    ) as UserCredentials;
    const { password } = userCredentials;
    if (password) {
      userCredentials.password = Buffer.from(password, 'base64').toString();
    }
    return userCredentials;
  }
  public logOut() {
    this.removeUserFormLocalStorage();
    this.stateService.currentUser.next(null);
  }
  private removeUserFormLocalStorage(): void {
    localStorage.removeItem(this.USER_KEY);
  }
}
