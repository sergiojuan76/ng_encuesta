import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AppRoutingModule } from './app-routing.module';
import { OpcionEncuestaComponent } from './opcion-encuesta/opcion-encuesta.component';
import { UsuarioSelectorComponent } from './usuario-selector/usuario-selector.component';
import { JsonPipe } from '@angular/common';
import { ConcatenadorPipe } from './concatenador.pipe';
import { RelojComponent } from './reloj/reloj.component';
import { DaysComponent } from './days/days.component';
import { ListaEncuestaComponent } from './lista-encuesta/lista-encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    EncuestaComponent,
    OpcionEncuestaComponent,
    UsuarioSelectorComponent,
    ConcatenadorPipe,
    RelojComponent,
    DaysComponent,
    ListaEncuestaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
