import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../../shared/services/usuarios.service";
import {Router} from "@angular/router";
import {Usuario} from "../../../shared/models/usuario";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Array<Usuario> | undefined;

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  editar(usuario: Usuario): void {
    this.router.navigate([`usuarios/editar/${usuario.id}`])

  }

  deletar(usuario: Usuario): void {
    this.usuariosService.deletar(usuario.id)
      .pipe(first())
      .subscribe(()=> this.usuarios = this.usuarios?.filter(x => x.id !==usuario.id));
  }

  private listarTodos(): void {
    this.usuariosService.listar().subscribe(
      objs => this.usuarios = objs
    )
  }
}
