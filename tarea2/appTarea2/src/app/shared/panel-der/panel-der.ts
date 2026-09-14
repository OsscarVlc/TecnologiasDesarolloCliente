import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cancion } from '../interfaces/cancion';

@Component({
  selector: 'app-panel-der',
  imports: [],
  templateUrl: './panel-der.html',
  styleUrl: './panel-der.scss',
})
export class PanelDer {
  @Input() cancionElegida: Cancion | null = null;
  @Output() limpiarSeleccion = new EventEmitter<void>();

  limpiar(){
    this.limpiarSeleccion.emit();
  }
}
