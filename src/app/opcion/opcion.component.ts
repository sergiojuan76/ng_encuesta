import { Component, OnInit } from '@angular/core';
import { Opcion } from '../model/opcion';
import { EncuestaService } from '../encuesta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})
export class OpcionComponent implements OnInit {

  opcion!: Opcion|null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private encuestaService : EncuestaService) { }

  ngOnInit(): void {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const idEncuesta = paramMap.get("idEncuesta");
    const idOpcion = Number(paramMap.get("idOpcion"));
    console.log(`en OpcionComponent.ngOnInit() -> ${idEncuesta} - ${idOpcion}`);
    if (idEncuesta && idOpcion) {
      this.opcion = this.encuestaService.getOpcion(idEncuesta, idOpcion);
    }
  }
}