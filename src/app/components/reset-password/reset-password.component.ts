import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass'],
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {}

  public async onSubmit(): Promise<void> {
    try {
      const response = await this.authService.sendResetPasswordEmail(
        this.email
      );
    } catch (error: any) {
      throw new Error(`Error on sending email: ${error}`);
    }
  }
}
