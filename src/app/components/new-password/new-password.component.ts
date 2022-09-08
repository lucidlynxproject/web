import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.sass'],
})
export class NewPasswordComponent implements OnInit {
  password: string = '';
  passwordConfirmation: string = '';
  recoveryToken: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.recoveryToken = this.route.snapshot.data.token;
  }

  ngOnInit(): void {}

  public async onSubmit(): Promise<any> {
    try {
      const response = await this.authService.resetForgottenPassword(
        this.recoveryToken,
        this.passwordConfirmation
      );
    } catch (error) {
      console.log(error);
    }
  }
}
