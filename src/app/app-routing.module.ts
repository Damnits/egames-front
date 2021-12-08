import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdicionarProdutosComponent} from "./produtos/adicionar-produtos/adicionar-produtos.component";
import {ListarProdutosComponent} from "./produtos/listar-produtos/listar-produtos.component";
import {ListarUsuariosComponent} from "./usuarios/listar-usuarios/listar-usuarios.component";
import {CadastrarUsuariosComponent} from "./usuarios/cadastrar-usuarios/cadastrar-usuarios.component";
import {ProdutosComponent} from "./produtos/produtos.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
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
