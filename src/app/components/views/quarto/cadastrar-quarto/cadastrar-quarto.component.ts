import { Quarto } from './../../../../models/quarto';
import { Component, OnInit } from '@angular/core';
import { QuartoService } from 'src/app/services/quarto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-quarto',
  templateUrl: './cadastrar-quarto.component.html',
  styleUrls: ['./cadastrar-quarto.component.css']
})

export class CadastrarQuartoComponent implements OnInit {
  numeroquarto!: string;
  andarquarto!: string;
  tipoquarto!: string;
  valordiaria!:string;
  disponivel!: string;

  constructor(private Service: QuartoService, private router: Router) { }

  ngOnInit(): void {}

  cadastrarQ(): void{
      let quarto: Quarto = {
        NumeroQuarto: this.numeroquarto,
        AndarQuarto: this.andarquarto,
        TipoQuarto: this.tipoquarto,
        ValorDiaria: this.valordiaria,
        Disponivel: this.disponivel,
      };
      this.Service.create(quarto).subscribe((quarto) =>{
        console.log(quarto);
        this.router.navigate(["quarto/listar"]);
      });
  }

}