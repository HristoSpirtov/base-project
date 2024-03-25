import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {StoreService} from "../service/store.service";

@Injectable({
  providedIn: 'root'
})
export class Anonymous0userGuard implements CanActivate {

  constructor(
    private store: StoreService,
    private router: Router,

  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    if (this.store.getCurrentUser().isDefined()) {
      this.router.navigate(['home'], { queryParams: { redirectUri: state.url }});
      return of(false)
    }
    return of(true)
  }

}
