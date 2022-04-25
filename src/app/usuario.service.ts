import { Injectable } from '@angular/core';

import { Usuario, usuarios } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario = usuarios[0];

  constructor() { }

  getUsuarios(): Usuario[] {
    return usuarios;
  }

  getUsuarioActivo(): Usuario {
    return this.usuario;
  }

  setUsuarioActivo(usuario: Usuario): void {
    this.usuario = usuario;
  }
}