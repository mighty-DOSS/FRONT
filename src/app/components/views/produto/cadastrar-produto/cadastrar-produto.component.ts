import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  cadastrar(): void{
    let produto: Produto = {
      nome: this.name,
      descricao: this.descricao,
      quantidade: this.quantidade,
      preco: this.preco,
    };
    this.service.create(produto).subscribe((produto) =>{
        console.log(produto);
        this.router.navigate(["produto/listar"]);
    });
  }

}
