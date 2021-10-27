/* IMPORTAR MODULOS DO FRAMEWORK */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
/* IMPORTAR COMPONENTS */
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CadastrarProdutoComponent } from './components/views/produto/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './components/views/produto/listar-produto/listar-produto.component';
import { ComponentSidebarComponent } from './components/component-sidebar/component-sidebar.component';
import { ListarClienteComponent } from './components/views/cliente/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './components/views/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarQuartoComponent } from './components/views/quarto/cadastrar-quarto/cadastrar-quarto.component';
import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { CadastrarReservaComponent } from './components/views/reserva/cadastrar-reserva/cadastrar-reserva.component';
import { ListarReservaComponent } from './components/views/reserva/listar-reserva/listar-reserva.component';
import { TemplateComponent } from './components/template/template.component'

/* caso ocorra erros com '@angular/material' rode "npm install --save @angular/material" */

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    ListarProdutoComponent,
    ComponentSidebarComponent,
    ListarClienteComponent,
    CadastrarClienteComponent,
    CadastrarQuartoComponent,
    ListarQuartoComponent,
    CadastrarReservaComponent,
    ListarReservaComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
