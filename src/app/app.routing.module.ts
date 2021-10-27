import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { ListarReservaComponent } from './components/views/reserva/listar-reserva/listar-reserva.component';
import { CadastrarReservaComponent } from './components/views/reserva/cadastrar-reserva/cadastrar-reserva.component';
import { ListarClienteComponent } from './components/views/cliente/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './components/views/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/views/produto/listar-produto/listar-produto.component";
import { ComponentSidebarComponent } from './components/component-sidebar/component-sidebar.component';

const routes: Routes = [
    {
        path: "",
        component: ComponentSidebarComponent,
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
        path: "cliente/cadastrar",
        component: CadastrarClienteComponent,
    },
    {
        path: "cliente/listar",
        component: ListarClienteComponent,
    },
    {
        path: "reserva/cadastrar",
        component: CadastrarReservaComponent,
    },
    {
        path: "reserva/listar",
        component: ListarReservaComponent,
    },
    {
        path: "quarto/cadastrar",
        component: CadastrarReservaComponent,
    },
    {
        path: "quarto/listar",
        component: ListarQuartoComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}