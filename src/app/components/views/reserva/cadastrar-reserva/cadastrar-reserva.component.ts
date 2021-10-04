import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-cadastrar-reserva',
  templateUrl: './cadastrar-reserva.component.html',
  styleUrls: ['./cadastrar-reserva.component.scss']
})
export class CadastrarReservaComponent implements OnInit {
    cliente!: string;
    quarto!: number;
    datacheckin!: number;
    datacheckout!: number;
    valortotal!: number;
    criadoem!: number;

  constructor(private service: ReservaService, private router: Router) { }

  ngOnInit(): void {}

  cadastrarreserva(): void{
      let reserva: Reserva = {
        Cliente: this.cliente,
        Quarto: this.quarto,
        DataCheckin: this.datacheckin,
        DataCheckout: this.datacheckout,
        ValorTotal: this.valortotal,
        CriadoEm: this.criadoem,
        
      };
      this.service.create(reserva).subscribe((reserva) =>{
        console.log(reserva);
        this.router.navigate([""]);
      });
  }

}

