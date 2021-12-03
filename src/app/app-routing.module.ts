import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdutosComponent} from "./produtos/produtos.component";
import {AdicionarProdutosComponent} from "./produtos/adicionar-produtos/adicionar-produtos.component";
import {ListarProdutosComponent} from "./produtos/listar-produtos/listar-produtos.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
