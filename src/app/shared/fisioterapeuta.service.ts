import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fisioterapeuta } from '../models/fisioterapeuta';

@Injectable({
  providedIn: 'root'
})
export class FisioterapeutaService {

  endpoint: string = 'http://localhost:8090/fisioterapeuta';
  

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Fisioterapeuta[]>(this.endpoint);
  }

  create(fisioterapeuta: Fisioterapeuta): any {
    return this.http.post<Fisioterapeuta>(this.endpoint, fisioterapeuta);
  }

  createCor(nome: any): any {
    return this.http.post<any>('http://localhost:8090/api/cor', nome);
  }

}
