import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { PricingComponent } from './components/pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
