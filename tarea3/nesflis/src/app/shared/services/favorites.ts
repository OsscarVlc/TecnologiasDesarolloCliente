import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Movie[] = [];

  //Metodo para saber si una pelciula ya esta en favoritos
  isFavorite(id : number): boolean{
    return this.favorites.some(peli => peli.id === id)
  }

  //Metodo apra aregar pelicula a favoritos
  addFavorite(movie:Movie): void {
    if( !this.isFavorite(movie.id)){
      this.favorites.push(movie);
    }
  }

  //Metodo para uitar pelicula de favoritos
  removeFavorite( id : number ): void {
    this.favorites= this.favorites.filter(
      peli => peli.id !== id
    )
  }


  getFavorites(): Movie[]{
    return this.favorites;
  }


}
