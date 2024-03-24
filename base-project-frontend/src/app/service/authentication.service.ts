import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host = environment.apiUrl

  constructor(private http: HttpClient) { }

  public register(registerForm: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.host}/api/register`, registerForm, { observe: 'response' });
  }

  login(loginForm: any) {
    return this.http.post<any>(`${this.host}/api/login`, loginForm, { observe: 'response' });
  }
}
