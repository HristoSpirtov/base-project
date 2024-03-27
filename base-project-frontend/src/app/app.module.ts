import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BaseInterceptor} from "./interceptor/base.interceptor";
import {IndexComponent} from "./index/index.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ErrorDialogComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
