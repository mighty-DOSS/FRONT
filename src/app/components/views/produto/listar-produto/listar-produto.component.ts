
import { Component } from "@angular/core";
import { Produto } from "src/app/models/produto";
import { ProdutoService } from "src/app/services/produto.service";


@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private service: ProdutoService) {}

  ngOnInit():void {
    this.service.list().subscribe((produtos) => {

      this.produtos = produtos;
      for (let produto of produtos)
      {
        console.log(produto);
      }

    });
  }
}
