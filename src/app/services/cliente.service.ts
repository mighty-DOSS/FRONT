import { Injectable } from '@angular/core';
import { Cliente } from "../models/cliente"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {}

  list(): Cliente[] {
      console.log("teste");
      return [];
  }
}
