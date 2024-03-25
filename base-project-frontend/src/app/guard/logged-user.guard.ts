import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {StoreService} from "../service/store.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard implements CanActivate {
  isLogged!: boolean

  constructor(
    private store: StoreService,
    private router: Router,
  ) {
    this.store.user.subscribe(user => {
      this.isLogged = user.isDefined()
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    if (!this.isLogged) {
      this.router.navigate(['login'], { queryParams: { redirectUri: state.url }});
      return of(false)
    }
    return of(true)
  }


}
