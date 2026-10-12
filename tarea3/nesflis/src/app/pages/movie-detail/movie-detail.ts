import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../shared/services/moviesService';
import { Movie } from '../../shared/interfaces/movie';
import { FavoritesService } from '../../shared/services/favorites';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {

  constructor(private ruta: ActivatedRoute, 
    private moviesService: MoviesService,
    private favoriteService: FavoritesService){

      const idMovieTexto = this.ruta.snapshot.paramMap.get('id'); //Obtener el id de la ruta
      if (idMovieTexto !== null){ //Comprobar que si existe algun valor
        const idMovie = Number(idMovieTexto); //convertir a numero
        this.movie = moviesService.getMovieById(idMovie) //guardamos la pelicula  movie utilizando el servicio con getMovieByID
      }
  }

  movie: Movie | undefined;
  
  toggleFavorite() :void {
    if (!this.movie){
      return;
    }
    if(this.favoriteService.isFavorite(this.movie.id)){
      this.favoriteService.removeFavorite(this.movie.id)
    }else{
      this.favoriteService.addFavorite(this.movie)
    }
  }


  isFavorite() :boolean{
    if (!this.movie){
      return false;
    }
    return this.favoriteService.isFavorite(this.movie.id)
  }






}
