import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({required:true}) movie! : Movie;
  //El required es para que el padre proporcione el dato cuando use la tarjeta
  //el ! le indica  TS que la propiedad recibira su valor despues de construir la instancia
  @Input() showRemoveButton: boolean = false;

  @Output() removeFromFavorites = new EventEmitter<number>(); //Se le apsa number porque se enviara el id de la pelicula
}
