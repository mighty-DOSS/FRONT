import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  nomeC!: string;
  CPF!: string;
  email!: string;
  data!: string;

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {}

  cadastrarCli(): void{
      let cliente: Cliente = {
        NomeCliente: this.nomeC,
        CPF: this.CPF,
        email: this.email,
        data: this.data,
      };
      this.service.create(cliente).subscribe((cliente) =>{
        console.log(cliente);
        this.router.navigate(["cliente/listar"]);
      });
  }

}
