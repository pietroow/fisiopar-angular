import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../seguranca/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private auth: AuthService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError(error => {
                if (error.status === 401 && error.error.error_description.includes('Access token expired')) {
                    return this.auth.refreshToken().pipe(
                        mergeMap((newToken: string) => {
                            req = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
                            return next.handle(req);
                        })
                    )
                }
                if(error.error.error_description.includes('Invalid refresh token (expired):')){
                    this.router.navigateByUrl('login');
                }
            })
        );
    }

}