import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../services/auth.login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private serviceAuth: AuthLoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneRequest = request;
    if(this.serviceAuth.isAuthenticated()){
      cloneRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.serviceAuth.getAccessToken()}`
        }
      });
    }
    return next.handle(cloneRequest);
  }
}
