import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService,
     private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if(this.router.url != '/login'){
        authReq = authReq.clone({
            setHeaders : {
              'Authorization': 'Bearer ' + this.auth.getToken()
            }
          });
    }

    console.dir('authReq:::');
    console.dir(authReq);
    
    return next.handle(authReq);
  }
}