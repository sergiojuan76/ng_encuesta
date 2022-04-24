import { Injectable } from '@angular/core';
import { Opcion, opciones1 } from './model/opcion';

@Injectable({
  providedIn: 'root'
})
export class OpcionService {

  opciones1: Opcion[] = opciones1;

  constructor() { }

  getOpciones() : Opcion[] {
    return this.opciones1;
  }
}