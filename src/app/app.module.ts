import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NavComponent } from './view/nav/nav.component';
import { AdicionarProdutosComponent } from './produtos/adicionar-produtos/adicionar-produtos.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    NavComponent,
    AdicionarProdutosComponent,
    ListarProdutosComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
