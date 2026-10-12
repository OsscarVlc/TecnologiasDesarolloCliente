import { Component } from '@angular/core';
import { FavoritesService } from '../../shared/services/favorites';
import { Movie } from '../../shared/interfaces/movie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
@Component({
  selector: 'app-favorites',
  imports: [MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {

  constructor(private favoriteService:FavoritesService){
    
      return 
    }
    


  get favorites(): Movie[]{
    return this.favoriteService.getFavorites();

  }
  removeFavorite(id: number) : void {
    this.favoriteService.removeFavorite(id);
  }
}
