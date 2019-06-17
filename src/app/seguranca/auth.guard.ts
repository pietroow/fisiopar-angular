import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.auth.isAccessTokenInvalido()) {
      this.auth.refreshToken().subscribe(res => {
        if (this.auth.isAccessTokenInvalido()) {
          this.router.navigateByUrl('login');
          return false;
        } else {
          return true;
        }
      });
      return true;
    } else if (route.data.roles && this.auth.hasAnyPermission(route.data.roles)) {
      return true;
    }
    return false;
  }

}
