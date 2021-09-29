
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CadastrarProdutoComponent } from './components/views/produto/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './components/views/produto/listar-produto/listar-produto.component';
import { ListarClienteComponent } from './components/views/cliente/listar-cliente/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './components/views/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarQuartoComponent } from './components/views/quarto/cadastrar-quarto/cadastrar-quarto.component';
import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { CadastrarReservaComponent } from './components/views/reserva/cadastrar-reserva/cadastrar-reserva.component';
import { ListarReservaComponent } from './components/views/reserva/listar-reserva/listar-reserva.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    ListarProdutoComponent,
    ListarClienteComponent,
    CadastrarClienteComponent,
    CadastrarQuartoComponent,
    ListarQuartoComponent,
    CadastrarReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
