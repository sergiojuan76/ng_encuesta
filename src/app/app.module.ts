import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AppRoutingModule } from './app-routing.module';
import { OpcionEncuestaComponent } from './opcion-encuesta/opcion-encuesta.component';
import { UsuarioSelectorComponent } from './usuario-selector/usuario-selector.component';
import { JsonPipe } from '@angular/common';
import { ConcatenadorPipe } from './concatenador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    EncuestaComponent,
    OpcionEncuestaComponent,
    UsuarioSelectorComponent,
    ConcatenadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
