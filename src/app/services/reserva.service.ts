import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from "../models/reserva";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseURL = "http://localhost:5000/api/reserva";

  constructor(private http: HttpClient) {}

  list(): Observable<Reserva[]> {
      return this.http.get<Reserva[]>(`${this.baseURL}/list`);
  }

  create(reserva: Reserva): Observable<Reserva> {
      return this.http.post<Reserva>(`${this.baseURL}/create`, reserva);
  }
}