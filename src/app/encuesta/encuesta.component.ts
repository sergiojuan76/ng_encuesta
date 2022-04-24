import { Component, OnInit } from '@angular/core';
import { Encuesta, encuesta1 } from '../model/encuesta';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta: Encuesta = encuesta1;

  constructor() { }

  ngOnInit(): void {
  }
}