import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private service: ClienteService) {}

  ngOnInit():void {
    this.service.list().subscribe((clientes) => {

      this.clientes = clientes;
      for (let cliente of clientes)
      {
        console.log(cliente);
      }

    });
  }
}
