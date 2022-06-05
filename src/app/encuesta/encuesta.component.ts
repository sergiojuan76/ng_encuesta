import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuesta, encuesta1 } from '../model/encuesta';
import { EncuestaService } from '../encuesta.service';
import { DynamoDBClient, BatchExecuteStatementCommand, BatchExecuteStatementInput } from '@aws-sdk/client-dynamodb';
import { environment } from 'src/environments/environment';
import { DbService } from '../db.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta!: Encuesta|null;
  nuevaOpcion!: string|null;
  error!: string|null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private encuestaService : EncuestaService,
    private dbService: DbService) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const idEncuesta = Number(routeParams.get('idEncuesta'));
    console.log(`En EncuestaComponent.ngOnInit() ${idEncuesta}`);
    this.encuesta = this.encuestaService.getEncuesta(idEncuesta);
  }

  onNotify() {
    console.log("Voto");
  }

  onAnyadirOpcion() {
    if ((this.nuevaOpcion==null) || (this.nuevaOpcion.trim().length == 0)) {
      return;
    }
    // Comprobar que no está repetido el nombre
    let existeOpcion = this.encuesta?.opciones.find(opcion => opcion.nombre === this.nuevaOpcion);
    if (existeOpcion != undefined) {
      this.error = `Ya existe la opcion ${this.nuevaOpcion}`;
      return;
    }
    // Buscar nuevo id
    const ids: Number[]|undefined = this.encuesta?.opciones.map(opcion => opcion.id).sort((a, b) => b.valueOf() - a.valueOf());
    let id = 1;
    if ((ids != undefined) && (ids.length > 0)) {
      id = ids[0].valueOf() + 1;
    }
    console.log(`El nuevo id es ${id}`);
    this.encuesta?.opciones.push({id: id, nombre: this.nuevaOpcion, votos: []});
    this.error = null;
    this.nuevaOpcion = null;
  }

  onDbClick() {
    this.dbService.getEncuesta(
      'sjuan1',
      (data: any) => {console.log(data)});
  }
}