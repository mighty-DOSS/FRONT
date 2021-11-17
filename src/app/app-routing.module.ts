import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoComponent } from "./components/views/home/carrinho/carrinho.component";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarProdutoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/views/produto/listar-produto/listar-produto.component";
import { CadastrarClienteComponent } from "./components/views/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { ListarClienteComponent } from "./components/views/cliente/listar-cliente/listar-cliente.component";
import { ListarQuartoComponent } from "./components/views/quarto/listar-quarto/listar-quarto.component";
import { CadastrarQuartoComponent } from "./components/views/quarto/cadastrar-quarto/cadastrar-quarto.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "home/carrinho",
        component: CarrinhoComponent,
    },
    {
        path: "produto/listar",
        component: ListarProdutoComponent,
    },
    {
        path: "produto/cadastrar",
        component: CadastrarProdutoComponent,
    },
    {
        path: "cliente/listar",
        component: ListarClienteComponent,
    },
    {
        path: "cliente/cadastrar",
        component: CadastrarClienteComponent,

    },
    {
        path: "quarto/listar",
        component: ListarQuartoComponent,
    },
    {
        path: "quarto/cadastrar",
        component: CadastrarQuartoComponent,

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
