import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL_USUARIOS = 'https://railsegame.herokuapp.com/users';
  // URL_USUARIOS = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }
  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }
  pesquisarPorId(id: number | undefined): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }
  deletar(id: number | undefined): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
}
