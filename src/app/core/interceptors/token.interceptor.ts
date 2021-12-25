import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private cookie:CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    try {
      
      const token = this.cookie.get('token');
      const newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest);

    } catch (error) {
      console.log(`Atención ⚠️`, error);
      return next.handle(request);
    }
  }
}