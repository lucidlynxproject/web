import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.sass'],
})
export class NewPasswordComponent implements OnInit {
  password: string = '';
  passwordConfirmation: string = '';
  recoveryToken: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router,) {
    this.recoveryToken = this.route.snapshot.data.token;
  }

  ngOnInit(): void {}

  public valid = true

  public async onSubmit(): Promise<any> {
    if(this.password==this.passwordConfirmation && this.password.length>=8){
    try {
      await this.authService.resetForgottenPassword(
        this.recoveryToken,
        this.passwordConfirmation
      )
      this.router.navigate(['/reset-password-done']);;
    } catch (error) {
      console.log(error);
    }
  }else{
    return this.valid = false
  }}
}
