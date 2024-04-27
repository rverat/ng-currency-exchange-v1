import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ApplyConvertionComponent } from './modules/currency/apply-convertion/apply-convertion.component';
import { ApplyListComponent } from './modules/currency/apply-list/apply-list.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navegacion/navbar/navbar.component';
import { TokenInterceptorService } from './core/interceptor/token.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplyConvertionComponent,
    ApplyListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass:TokenInterceptorService ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
