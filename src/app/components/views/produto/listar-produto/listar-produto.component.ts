import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {
  produto: Produtos[] = [];
  constructor(private service: ProdutoService) {}

  ngOnInit():void {
    this.service.list().subscribe((produtos)) => {

      this.produtos = produtos;
      for (let produto of produtos)
      {
        console.log(produto);
      }

    }
  }
}
