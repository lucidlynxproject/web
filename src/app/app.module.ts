import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackRectangleComponent } from './components/back-rectangle/back-rectangle.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { TokenComponent } from './components/token/token.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RecoverPasswordPageComponent } from './pages/recover-password-page/recover-password-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestorePasswordPageComponent } from './pages/restore-password-page/restore-password-page.component';
import { ResetPasswordDoneComponent } from './components/reset-password-done/reset-password-done.component';
import { EmailSentComponent } from './components/email-sent/email-sent.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NavbarComponent,
    HomeComponent,
    CountdownComponent,
    FooterComponent,
    BackRectangleComponent,
    ContactFormComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    TokenComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RecoverPasswordPageComponent,
    RestorePasswordPageComponent,
    ResetPasswordDoneComponent,
    EmailSentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
