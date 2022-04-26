import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Encuesta } from '../model/encuesta';
import { Opcion } from '../model/opcion';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-opcion-encuesta',
  templateUrl: './opcion-encuesta.component.html',
  styleUrls: ['./opcion-encuesta.component.css']
})
export class OpcionEncuestaComponent implements OnInit {

  @Input() opcion!: Opcion;
  @Input() encuesta!: Encuesta;
  @Output() voto = new EventEmitter();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  votar(): void {
    console.log("En voto");
    const usuario = this.usuarioService.getUsuarioActivo();
    const index = this.opcion.votos.indexOf(usuario);
    if (index == -1) {
      this.opcion.votos.push(usuario);
    } else {
      this.opcion.votos.splice(index, 1);
    }
    this.voto.emit();
  }

  contarVotos(): Number {
    return this.opcion.votos.length;
  }
}