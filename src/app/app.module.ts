import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
