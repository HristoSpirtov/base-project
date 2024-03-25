import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userSource = new BehaviorSubject<User>(new User());
  public user: Observable<User> = this.userSource.asObservable();

  constructor() { }

  enhanceUserWithDetails(responseUser: User) {
    const user = this.userSource.getValue();
    user.username = responseUser.username
    user.accessToken = responseUser.accessToken
    this.changeUser(user);
  }

  changeUser(user: User): void {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.userSource.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.user
  }

}
