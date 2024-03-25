import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {StoreService} from "../service/store.service";

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private router: Router, private dialog: MatDialog, private store: StoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const httpHeaders = request.headers
      .append('Authorization', `Bearer ${this.store.getToken() ? this.store.getToken() : ""}`)

    let cloned = request.clone({
      headers: httpHeaders,
    })
    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error.httpStatusCode === 403) {
          this.router.navigate(['login']);
          this.dialog.open(ErrorDialogComponent, {
            data: { message: error.error.message },
          });
        }
        return throwError(() => error);
      })
    );
  }
}
