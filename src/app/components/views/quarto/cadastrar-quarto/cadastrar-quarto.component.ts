import { Quarto } from './../../../../models/quarto';
import { Component, OnInit } from '@angular/core';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-cadastrar-quarto',
  templateUrl: './cadastrar-quarto.component.html',
  styleUrls: ['./cadastrar-quarto.component.scss']
})
export class CadastrarQuartoComponent implements OnInit {
  id!: number;
  andarquarto!: number;
  tipoquarto!: number;
  valordiaria!: number;
  disponivel!: number;

  constructor(private service: QuartoService, private router: Router) { }

  ngOnInit(): void {}

  cadastrarcli(): void{
      let quarto: Quarto = {
        Id: this.id,
        AndarQuarto: this.andarquarto,
        TipoQuarto: this.tipoquarto,
        ValorDiaria: this.valordiaria,
        Disponivel: this.disponivel,
        Quarto: ''
      };
      this.service.create(quarto).subscribe((quarto) =>{
        console.log(quarto);
        this.router.navigate([""]);
      });
  }

}