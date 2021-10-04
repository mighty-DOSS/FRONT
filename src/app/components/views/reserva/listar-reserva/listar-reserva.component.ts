import { Reserva } from './../../../../models/reserva';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {
  reservas: Reserva[] = [];
  constructor(private service: ReservaService) {}

  ngOnInit():void {
    this.service.list().subscribe((reservas) => {

      this.reservas = reservas;
      for (let reserva of reservas)
      {
        console.log(reserva);
      }

    });
  }
}
