import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  colunasExibidas: String[] = [
    "id",
    "NomeCliente",
    "CPF",
    "email",
    "data",
  ];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
      this.service.list().subscribe((clientes) => {
          this.clientes = clientes;
      });
  }
}
