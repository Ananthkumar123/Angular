import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PrivacyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let API_key ="ananth9";
    let Role_key ="my pass9";
   return next.handle(request.clone({setHeaders:{API_key,Role_key}}))
   
    // return next.handle(request);
  }
}
