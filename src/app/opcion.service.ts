import { Injectable } from '@angular/core';
import { Opcion, opciones1, opciones2 } from './model/opcion';

@Injectable({
  providedIn: 'root'
})
export class OpcionService {

  opciones1: Opcion[] = opciones1;
  opciones2: Opcion[] = opciones2;

  constructor() { }

  getOpciones() : Opcion[] {
    return this.opciones1;
  }
}