import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ListaEncuestaComponent } from './lista-encuesta/lista-encuesta.component';

const routes: Routes = [
  { path: '', component: ListaEncuestaComponent},
  { path: 'encuesta/:idEncuesta', component: EncuestaComponent},
  { path: 'opcion/:idEncuesta/:idOpcion', component: OpcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }