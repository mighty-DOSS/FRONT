import { QuartoService } from 'src/app/services/quarto.service';
import { Quarto } from './../../../../models/quarto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-quarto',
  templateUrl: './listar-quarto.component.html',
  styleUrls: ['./listar-quarto.component.css']
})
export class ListarQuartoComponent implements OnInit {
    quartos: Quarto[] = [];
    colunasExibidas: String[] = [  
        "id",
        "NumeroQuarto",
        "AndarQuarto",
        "TipoQuarto",
        "ValorDiaria",
        "Disponivel",
    ];

  constructor(private service : QuartoService) { }

  ngOnInit(): void {
    this.service.list().subscribe((quartos) => {
    this.quartos = quartos;
    });
  }
}
