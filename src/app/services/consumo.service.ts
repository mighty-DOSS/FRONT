import { Consumo } from './../models/consumo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  private baseURL = "http://localhost:5000/api/consumo";

  constructor(private http: HttpClient) {}

  list(): Observable<Consumo[]> {
      return this.http.get<Consumo[]>(`${this.baseURL}/list`);
  }

  create(consumo: Consumo): Observable<Consumo> {
      return this.http.post<Consumo>(`${this.baseURL}/create`, consumo);
  }
}