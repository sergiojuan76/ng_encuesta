import { Injectable } from '@angular/core';
import { Encuesta, encuesta1 } from './model/encuesta';
import { Opcion, opciones1 } from './model/opcion';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor() { }

  getEncuesta(id: Number) : Encuesta|null {
    if (id === encuesta1.id) {
      return encuesta1;
    }
    return null;
  }

  getOpcion(idEncuesta: Number, idOpcion: Number) : Opcion|null {
    if (idEncuesta === encuesta1.id) {
      const opcFiltrada = opciones1.filter(opcion => opcion.id === idOpcion);
      if (opcFiltrada.length == 1) {
        return opcFiltrada[0];
      }
    }
    return null;
  }
}