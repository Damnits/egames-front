import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/models/produto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProdutosService} from "../../services/produtos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent implements OnInit {

  produtos: Array<Produto> | undefined;
  public produtoForm: FormGroup;
  id!: number;
  isAddMode: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutosService,
    private roteador: Router,
    private routeActive: ActivatedRoute,

) {
    this.produtoForm = this.fb.group({
      nome: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      preco: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.produtoService.pesquisarPorId(this.id)
        .subscribe(x => this.produtoForm.patchValue(x));
    }
  }
  inserirProduto(){
    const produto = this.produtoForm.value;
    this.produtoService.inserir(produto).subscribe(
      produtoInserido => {
        this.roteador.navigate(['produtos/listar'])
      }
    )
  }

  atualizar(){

    const produto: Produto = this.produtoForm.value;
    produto.id = this.id;
    this.produtoService.atualizar(produto)
      .subscribe(
        produtoAtualizado => {
          this.roteador.navigate(['produtos/listar'])
        }
      )
  }

  onSubmit(){

    if(this.isAddMode){
    this.inserirProduto();
    }
    else{
      this.atualizar();
    }
  }
}
