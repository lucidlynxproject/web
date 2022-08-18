import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackRectangleComponent } from './components/back-rectangle/back-rectangle.component';
import { CountdownComponent } from './components/countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BackRectangleComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
