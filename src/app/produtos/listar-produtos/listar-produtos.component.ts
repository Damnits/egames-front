import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/models/produto";
import {ProdutosService} from "../../services/produtos.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<Produto> | undefined;

  constructor(private produtosService: ProdutosService) { }


  ngOnInit(): void {
    this.produtosService.listar().subscribe(
      objs => this.produtos = objs
    )
  }

}
