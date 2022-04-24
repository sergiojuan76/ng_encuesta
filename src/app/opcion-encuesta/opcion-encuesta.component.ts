import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Encuesta } from '../model/encuesta';
import { Opcion } from '../model/opcion';

@Component({
  selector: 'app-opcion-encuesta',
  templateUrl: './opcion-encuesta.component.html',
  styleUrls: ['./opcion-encuesta.component.css']
})
export class OpcionEncuestaComponent implements OnInit {

  @Input() opcion!: Opcion;
  @Input() encuesta!: Encuesta;
  @Output() voto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  votar(): void {
    console.log("En voto");
    this.voto.emit();
  }
}