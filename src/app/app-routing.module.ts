import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  { path: '', component: EncuestaComponent},
  { path: 'opcion/:nombre', component: OpcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
