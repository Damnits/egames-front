import { Injectable } from '@angular/core';
import {Produto} from "../shared/models/produto";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  URL_PRODUTOS = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto);
  }

  pesquisarPorId(id: number | undefined): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/${id}`);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.URL_PRODUTOS}/${produto.id}`, produto);
  }
  
  deletar(id: number | undefined): Observable<Produto>{
    return this.httpClient.delete<Produto>(`${this.URL_PRODUTOS}/${id}`);
  }
}
