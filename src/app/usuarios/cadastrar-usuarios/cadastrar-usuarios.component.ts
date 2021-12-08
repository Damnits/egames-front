import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/models/usuario";
import {AbstractControlOptions, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MustMatch} from "../../util/MustMatch.validator";
import {first} from "rxjs/operators";
// import {GenericValidators} from "../../util/GenericValidators";

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  usuarios!: Array<Usuario>;
  public usuarioForm!: FormGroup;
  id!: number;
  isAddMode!: boolean;


  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private roteador: Router,
    private routeActive: ActivatedRoute
  ) {
    this.usuarioForm = this.fb.group({
      name: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(8), Validators.required ]],
      is_admin: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.usuariosService.pesquisarPorId(this.id)
        .pipe(first())
        .subscribe(x => this.usuarioForm.patchValue(x));
    }
  }

  onSubmit(){
    if(this.usuarioForm.invalid){
      return;
    }

    const form = this.usuarioForm.value;
    const usuario: Usuario = this.usuarioForm.value;
    if (form.is_admin == "Sim") {
      usuario.is_admin = true;
    } else {
      usuario.is_admin = false;
    }

    if(this.isAddMode){
      this.cadastrarUsuario(usuario);
    } else {
      this.atualizarUsuario(usuario);
    }
  }

  cadastrarUsuario(obj: Usuario){
    this.usuariosService.inserir(obj).subscribe(
      usuarioInserido => {
        this.roteador.navigate(['usuarios/listar'])
      }
    )
  }
  atualizarUsuario(obj: Usuario){
    const usuario: Usuario = this.usuarioForm.value;
    usuario.id = this.id;
    this.usuariosService.atualizar(usuario)
      .subscribe(
        usuarioAtualizado => {
          this.roteador.navigate(['usuarios/listar'])
        }
      )
  }

}
