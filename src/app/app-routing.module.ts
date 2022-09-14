import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './components/token/token.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RecoverPasswordPageComponent } from './pages/recover-password-page/recover-password-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthTokenGuard } from './guards/auth-token.guard';
import { AuthTokenResolver } from './resolvers/auth-token.resolver';
import { RestorePasswordPageComponent } from './pages/restore-password-page/restore-password-page.component';
import { EmailSentComponent } from './components/email-sent/email-sent.component';
import { ResetPasswordDoneComponent } from './components/reset-password-done/reset-password-done.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivateChild: [AuthGuard],
    children: [{ path: 'token', component: TokenComponent }],
  },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'recover-password', component: RecoverPasswordPageComponent },
  { path: 'email-sent', component: EmailSentComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },
  {
    path: 'change-password',
    component: RestorePasswordPageComponent,
    canActivate: [AuthTokenGuard],
    resolve: { token: AuthTokenResolver },
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
