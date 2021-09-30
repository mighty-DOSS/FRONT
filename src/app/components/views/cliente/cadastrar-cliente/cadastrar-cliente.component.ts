import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {
  nome!: string;
  CPF!: number;
  Email!: string;
  Data!: number;

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {}

  cadastrarcli(): void{
      let cliente: Cliente = {
        NomeCliente: this.nome,
        CPF: this.CPF,
        email: this.Email,
        data: this.Data,
      };
      this.service.create(cliente).subscribe((cliente) =>{
        console.log(cliente);
        this.router.navigate([""]);
      });
  }

}
