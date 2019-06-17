import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8090/oauth/token';
  tokenRevokeUrl = 'http://localhost:8090/tokens/revoke';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.carregarToken();
  }

  public login(email: string, senha: string): Promise<void> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZmlzaW9wYXI6YWRzQDAw'
    });

    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((res: any) => {
        this.armazenarToken(res.access_token);
      })
      .catch(res => {
        if (res.status === 400) {
          const responseJson = res;

          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }

        }
        return Promise.reject(res);
      });
  }

  public logout() {
    return this.http.delete(this.tokenRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.cleanAccessToken();
        this.router.navigateByUrl('login');
      });
  }

  public refreshToken(): Observable<string> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ZmlzaW9wYXI6YWRzQDAw');

    const params = new HttpParams()
      .set('grant_type', 'refresh_token');

    return this.http.post<any>(this.oauthTokenUrl, null, { headers, params, withCredentials: true })
      .pipe(
        map(token => {
          console.log(token);
          this.armazenarToken(token.access_token);
          return token.access_token;
        })
      );
  }

  public obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZmlzaW9wYXI6YWRzQDAw'
    });

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response.access_token);
        console.log('Novo access token criado!');
        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      })
  }

  public hasPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  public hasAnyPermission(roles) {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }
    return false;
  }

  public isAccessTokenInvalido() {
    const token = localStorage.getItem('access_token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  public cleanAccessToken() {
    localStorage.removeItem('access_token');
    this.jwtPayload = null;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('access_token', token);
  }

  public carregarToken() {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.armazenarToken(token);
    }
  }

}
