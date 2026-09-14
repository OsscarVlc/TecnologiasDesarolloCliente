import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cancion } from '../interfaces/cancion';

@Component({
  selector: 'app-panel-izq',
  imports: [],
  templateUrl: './panel-izq.html',
  styleUrl: './panel-izq.scss',
})
export class PanelIzq {

  @Input() dataCanciones:Cancion[] = [];
  @Input() cancionActiva: Cancion | null = null;
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();

  seleccionar(cancion:Cancion){
    this.cancionSeleccionada.emit(cancion);
  }
}
