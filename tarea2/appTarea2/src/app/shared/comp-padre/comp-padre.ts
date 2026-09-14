import { Component } from '@angular/core';
import { Cancion } from '../interfaces/cancion';
import { PanelIzq } from '../panel-izq/panel-izq';
import { PanelDer } from '../panel-der/panel-der';

@Component({
  selector: 'app-comp-padre',
  imports: [PanelIzq,PanelDer],
  templateUrl: './comp-padre.html',
  styleUrl: './comp-padre.scss',
})
export class CompPadre {
canciones: Cancion[] = [
  {
    nombre: 'Hombre de bien',
    autor: 'NSQK',
    generos: ['Pop', 'R&B'],
    fechaLanzamiento: '2026-09-03' 
  },
  {
    nombre: 'MIA',
    autor: 'Bratty',
    generos: ['Pop alternativo', 'Indie'], 
    fechaLanzamiento: '2026-04-17' 
  },
  {
    nombre: 'ILYSM',
    autor: 'Kali Uchis',
    generos: ['R&B', 'Neo Soul'],
    fechaLanzamiento: '2023-03-03' 
  },
  {
    nombre: 'Un verano sin ti',
    autor: 'Bad Bunny',
    generos: ['Reggaetón', 'Pop Latino'],
    fechaLanzamiento: '2022-05-06'
  },
  {
    nombre: 'Es un secreto',
    autor: 'Plan B',
    generos: ['Reggaetón'],
    fechaLanzamiento: '2010-07-20' 
  },
  {
    nombre: 'Sienna',
    autor: 'The Marías',
    generos: ['Dream Pop', 'Indie'],
    fechaLanzamiento: '2024-05-31' 
  },
  {
    nombre: 'Espectacular',
    autor: 'Rauw Alejandro',
    generos: ['Reggaetón', 'synth-pop'],
    fechaLanzamiento: '2024-04-19' 
  },
  {
    nombre: 'Diferente',
    autor: 'Plastikboy',
    generos: ['Indie', 'Alternativo'], 
    fechaLanzamiento: '2024-11-08' 
  },
  {
    nombre: 'Uii',
    autor: 'Cachirula',
    generos: ['Reggaetón mexa'],
    fechaLanzamiento: '2025-03-13' 
  },
  {
    nombre: 'Swan',
    autor: 'Not for Radio',
    generos: ['Indie', 'Alternativo'], 
    fechaLanzamiento: '2025-10-10' 
  },
  {
    nombre: 'Doma',
    autor: 'Josean Log',
    generos: ['Indie Pop', 'Alternativo'],
    fechaLanzamiento: '2023-03-10'
  },
  {
    nombre: '11:11',
    autor: 'Tainy',
    generos: ['Reggaetón', 'Electrónico', 'Synthwave'],
    fechaLanzamiento: '2023-06-29'
  }
];

  cancionSeleccionada: Cancion | null = null;

  handleCancion(cancion: Cancion){
    this.cancionSeleccionada = cancion;
  }
  
  handleLimpieza(){
    this.cancionSeleccionada = null;
  }
}
