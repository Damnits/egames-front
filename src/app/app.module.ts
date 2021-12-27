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
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { CadastrarUsuariosComponent } from './usuarios/cadastrar-usuarios/cadastrar-usuarios.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AuthModule } from '@auth0/auth0-angular';
import { AppAuthButtonComponent } from './auth/app-auth-button/app-auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    NavComponent,
    AdicionarProdutosComponent,
    ListarProdutosComponent,
    UsuariosComponent,
    ListarUsuariosComponent,
    CadastrarUsuariosComponent,
    AppAuthButtonComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        AuthModule.forRoot({
          domain: "dev-feczwkc9.us.auth0.com",
          clientId: "Y36HoI9oWOu6IkYXbRXzNhpSkFAwiObQ"
        }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
