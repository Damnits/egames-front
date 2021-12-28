import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './view/produtos/produtos.component';
import { NavComponent } from './view/nav/nav.component';
import { AdicionarProdutosComponent } from './view/produtos/adicionar-produtos/adicionar-produtos.component';
import { ListarProdutosComponent } from './view/produtos/listar-produtos/listar-produtos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UsuariosComponent } from './view/usuarios/usuarios.component';
import { ListarUsuariosComponent } from './view/usuarios/listar-usuarios/listar-usuarios.component';
import { CadastrarUsuariosComponent } from './view/usuarios/cadastrar-usuarios/cadastrar-usuarios.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AuthModule } from '@auth0/auth0-angular';
import { AppAuthButtonComponent } from './auth/app-auth-button/app-auth-button.component';
import { LoginComponent } from './view/login/login.component';

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
    LoginComponent,

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
