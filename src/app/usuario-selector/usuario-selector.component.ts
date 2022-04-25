import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-usuario-selector',
  templateUrl: './usuario-selector.component.html',
  styleUrls: ['./usuario-selector.component.css']
})
export class UsuarioSelectorComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  getUsuarios(): Usuario[] {
    return this.usuarioService.getUsuarios();
  }

  getUsuarioActivo(): Usuario {
    return this.usuarioService.getUsuarioActivo();
  }

  onSelectUsuario(usuario: Usuario): void {
    this.usuarioService.setUsuarioActivo(usuario);
  }
}