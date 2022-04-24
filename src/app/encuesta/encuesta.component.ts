import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuesta, encuesta1 } from '../model/encuesta';
import { OpcionEncuestaComponent } from '../opcion-encuesta/opcion-encuesta.component';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta!: Encuesta|null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private encuestaService : EncuestaService) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const idEncuesta = Number(routeParams.get('idEncuesta'));
    console.log(`En EncuestaComponent.ngOnInit() ${idEncuesta}`);
    this.encuesta = this.encuestaService.getEncuesta(idEncuesta);
  }
}