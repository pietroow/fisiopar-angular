import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FisioterapeutaServiceService {

  endpoint: String = 'http://localhost:8090/fisioterapeuta';

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any>(`${this.endpoint}`);
  }

}
