import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../encuesta.service';
import { Encuesta } from '../model/encuesta';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-lista-encuesta',
  templateUrl: './lista-encuesta.component.html',
  styleUrls: ['./lista-encuesta.component.css']
})
export class ListaEncuestaComponent implements OnInit {

  nuevaEncuesta: FormGroup = this.formBuilder.group({
    titulo: ['', Validators.required]
  })
  constructor(
    private encuestaService : EncuestaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getEncuestas(): Encuesta[] {
    return this.encuestaService.getEncuestas();
  }

  onNuevaEncuestaSubmit(): void {
    console.log(this.nuevaEncuesta.value['titulo']);
  }
}