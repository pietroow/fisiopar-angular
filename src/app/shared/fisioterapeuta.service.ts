import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fisioterapeuta } from '../models/fisioterapeuta';

@Injectable({
  providedIn: 'root'
})
export class FisioterapeutaService {

  endpoint = 'http://localhost:8090/fisioterapeuta';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Fisioterapeuta[]>(this.endpoint);
  }

  create(fisioterapeuta: Fisioterapeuta): any {
    return this.http.post<Fisioterapeuta>(this.endpoint, fisioterapeuta);
  }

}
