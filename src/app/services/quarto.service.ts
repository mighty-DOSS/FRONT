import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quarto } from '../models/quarto';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  private baseURL = "http://localhost:5000/api/quarto";

  constructor(private http: HttpClient) {}

  list(): Observable<Quarto[]> {
      return this.http.get<Quarto[]>(`${this.baseURL}/list`);
  }

  create(quarto: Quarto): Observable<Quarto> {
      return this.http.post<Quarto>(`${this.baseURL}/create`, quarto);
  }
}