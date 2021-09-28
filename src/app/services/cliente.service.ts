import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from "../models/cliente";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = "http://localhost:5000/api/cliente";

  constructor(private http: HttpClient) {}

  list(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(`${this.baseURL}/list`);
  }

  create(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(`${this.baseURL}/create`, cliente);
  }
}

