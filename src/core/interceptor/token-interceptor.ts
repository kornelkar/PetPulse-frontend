// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {AuthService} from "../services/auth/auth.service";
//
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//
//   constructor(private authService: AuthService) {}
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let currentToken = this.authService.currentToken;
//     if (currentToken) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${currentToken}`
//         }
//       });
//     }
//
//     return next.handle(request);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentToken = this.authService.currentToken;
    if (currentToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentToken}`
        }
      });
    }

    return next.handle(request);
  }
}
