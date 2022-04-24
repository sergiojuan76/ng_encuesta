import { Component, OnInit } from '@angular/core';
import { Opcion } from '../model/opcion';
import { OpcionService } from '../opcion.service';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})
export class OpcionComponent implements OnInit {

  opciones!: Opcion[];

  constructor(private opcionService : OpcionService) { }

  ngOnInit(): void {
    this.opciones = this.opcionService.getOpciones();
    console.log(`Número de opciones ${this.opciones.length}`);
  }
}