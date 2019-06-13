import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8090/oauth/token';
  clientId = 'fisiopar';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) : Promise<void>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZmlzaW9wYXI6YWRzQDAw'
    });

    const body = `cliente_id=${this.clientId}&username=${email}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, {headers})
    .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      console.log(response);
    })
  }
}
