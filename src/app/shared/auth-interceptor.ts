import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('/oauth/token')) {
            return next.handle(req);
        }

        const token = localStorage.getItem('access_token');
        req = req.clone({ setHeaders: { Authorization: `Bearer ${token}`}})

        return next.handle(req);
    }
}
