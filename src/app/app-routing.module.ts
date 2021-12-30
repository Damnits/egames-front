import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdicionarProdutosComponent} from "./view/produtos/adicionar-produtos/adicionar-produtos.component";
import {ListarProdutosComponent} from "./view/produtos/listar-produtos/listar-produtos.component";
import {ListarUsuariosComponent} from "./view/usuarios/listar-usuarios/listar-usuarios.component";
import {CadastrarUsuariosComponent} from "./view/usuarios/cadastrar-usuarios/cadastrar-usuarios.component";
import {ProdutosComponent} from "./view/produtos/produtos.component";
import {UsuariosComponent} from "./view/usuarios/usuarios.component";
// import {AuthGuard} from "@auth0/auth0-angular";
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'adicionar',
        component: AdicionarProdutosComponent,
      },
      {
        path: 'listar',
        component: ListarProdutosComponent
      },
      {
        path: 'editar/:id',
        component: AdicionarProdutosComponent
      }
    ],
  },
  {
    path:'usuarios',
    component: UsuariosComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'cadastrar',
        component: CadastrarUsuariosComponent
      },
      {
        path: 'listar',
        component: ListarUsuariosComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarUsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
