import { JsonPipe  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-usuario-selector',
  templateUrl: './usuario-selector.component.html',
  styleUrls: ['./usuario-selector.component.css']
})
export class UsuarioSelectorComponent implements OnInit {

  usuarioSeleccionado!: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private jsonPipe: JsonPipe) { }

  ngOnInit(): void {
    this.usuarioSeleccionado = this.usuarioService.getUsuarioActivo();
  }

  getUsuarios(): Usuario[] {
    return this.usuarioService.getUsuarios();
  }

  getUsuarioActivo(): Usuario {
    return this.usuarioService.getUsuarioActivo();
  }

  onSelectUsuario(): void {
    console.log(`usuario seleccionado ${this.jsonPipe.transform(this.usuarioSeleccionado)}`);
    this.usuarioService.setUsuarioActivo(this.usuarioSeleccionado);
  }
}