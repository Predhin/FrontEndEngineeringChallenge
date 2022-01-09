import { AppService } from './app.service';
import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, of, throwError } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService, private appService: AppService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.appService.addLoading(true);
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      let errorMsg = this.errorService.handleError(error);
      this.appService.addError(errorMsg);
      return of();
    }), finalize(() => {
      this.appService.addLoading(false);
    }));
  }
}
