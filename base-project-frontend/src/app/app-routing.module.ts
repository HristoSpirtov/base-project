import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {LoggedUserGuard} from "./guard/logged-user.guard";
import {AnonymousUserGuard} from "./guard/anonymous-user.guard";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AnonymousUserGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AnonymousUserGuard] },
  { path: 'home', component: HomeComponent, canActivate: [LoggedUserGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
