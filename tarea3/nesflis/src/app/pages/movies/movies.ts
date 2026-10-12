import { Component } from '@angular/core';
import { MoviesService } from '../../shared/services/moviesService';
import {Movie} from '../../shared/interfaces/movie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { FormsModule } from '@angular/forms';

@Component({ 
  selector: 'app-movies',
  imports: [MovieCard, FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {

  constructor(private moviesService: MoviesService) {
  this.movies = this.moviesService.getMovies();
  }

  movies: Movie[] = [];

  search: string = ''


  get filteredMovies(): Movie[]{
    const busqueda = this.search.trim().toLowerCase()

    return this.movies.filter(pelicula => pelicula.title.toLowerCase().includes(busqueda) ||
      pelicula.director.toLowerCase().includes(busqueda) ||
      pelicula.producer.toLowerCase().includes(busqueda) ||
      pelicula.genre.toLowerCase().includes(busqueda) ||
      String(pelicula.year).includes(busqueda))
  }

}
