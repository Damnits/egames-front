import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL_PEDIDOS = 'https://railsegame.herokuapp.com/orders';
  // URL_PEDIDOS = 'http://localhost:3000/orders';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.URL_PEDIDOS);
  }
  inserir(obj: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.URL_PEDIDOS, obj);
  }
  pesquisarPorId(id: number | undefined): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.URL_PEDIDOS}/${id}`);
  }
  atualizar(obj: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(`${this.URL_PEDIDOS}/${obj.id}`, obj);
  }
  deletar(id: number | undefined): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(`${this.URL_PEDIDOS}/${id}`);
  }
}
