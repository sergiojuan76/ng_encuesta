import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../encuesta.service';
import { Encuesta } from '../model/encuesta';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-lista-encuesta',
  templateUrl: './lista-encuesta.component.html',
  styleUrls: ['./lista-encuesta.component.css']
})
export class ListaEncuestaComponent implements OnInit {

  constructor(
    private encuestaService : EncuestaService) { }

  ngOnInit(): void {
  }

  getEncuestas(): Encuesta[] {
    return this.encuestaService.getEncuestas();
  }
}