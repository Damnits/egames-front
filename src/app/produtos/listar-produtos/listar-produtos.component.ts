import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/models/produto";
import {ProdutosService} from "../../services/produtos.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-listar',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<Produto> | undefined;


  constructor(private produtosService: ProdutosService, private router:Router) { }


  ngOnInit(): void {
    this.listarTodos()
  }
  deletar(produto: Produto): void{
    this.produtosService.deletar(produto.id)
      .pipe(first())
      .subscribe(()=>this.produtos = this.produtos?.filter(x => x.id !==produto.id));
  }
  editar(produto: Produto): void{
    this.router.navigate([`produtos/editar/${produto.id}`])
  }
  listarTodos(): void{
    this.produtosService.listar().subscribe(
      objs => this.produtos = objs
    )
  }
}
