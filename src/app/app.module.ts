import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AppRoutingModule } from './app-routing.module';
import { OpcionEncuestaComponent } from './opcion-encuesta/opcion-encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    EncuestaComponent,
    OpcionEncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
