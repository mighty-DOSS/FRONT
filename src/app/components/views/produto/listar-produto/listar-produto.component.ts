
import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/models/produto";
import { ProdutoService } from "src/app/services/produto.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {
  produto: Produto[] = [];
  constructor(private service: ProdutoService) {}

  ngOnInit():void {
    this.service.list().subscribe((produto)) => {

      this.produto = produto;
      for (let produto of produto)
      {
        console.log(produto);
      }

    }
  }
}
