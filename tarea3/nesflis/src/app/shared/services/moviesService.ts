import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class  MoviesService {

private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      producer: 'Emma Thomas, Christopher Nolan',
      genre: 'Science Fiction',
      year: 2010,
      description:
        'A thief who steals secrets through dreams must plant an idea in another person’s mind to earn a chance to return to his family.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'
    },
    {
      id: 2,
      title: 'Project Hail Mary',
      director: 'Phil Lord, Christopher Miller',
      producer:
        'Amy Pascal, Ryan Gosling, Phil Lord, Christopher Miller, Aditya Sood, Rachel O’Connor, Andy Weir',
      genre: 'Science Fiction',
      year: 2026,
      description:
        'A science teacher wakes up aboard a distant spaceship with no memory of his mission and must find a way to save Earth from a dying Sun.',
      imageUrl:
        'https://www.sonypictures.co.uk/sites/unitedkingdom/files/2026-03/PHM_Social_WebsiteImages_1Sheet_NOW_1MB.jpg'
    },
    {
      id: 3,
      title: 'Godzilla',
      director: 'Gareth Edwards',
      producer: 'Thomas Tull, Jon Jashni, Mary Parent, Brian Rogers',
      genre: 'Science Fiction, Action',
      year: 2014,
      description:
        'A soldier tries to reunite with his family as Godzilla emerges to confront two giant creatures that threaten humanity.',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYWU5YjAxMWYtMGQyZC00YWUxLTkyNjMtOTU5Y2FlMTZhZWE1XkEyXkFqcGc%40._V1_.jpg'
    },
    {
      id: 4,
      title: 'Made in Abyss: Dawn of the Deep Soul',
      director: 'Masayuki Kojima',
      producer: 'Shinpei Yamashita, Muneki Ogasawara, Noritomo Isogai',
      genre: 'Animation, Adventure, Dark Fantasy',
      year: 2020,
      description:
        'Riko, Reg and Nanachi continue their descent into the Abyss, where they encounter Bondrewd and uncover the disturbing secrets of his research.',
      imageUrl:
        'https://image.tmdb.org/t/p/original/sS3duLWQolU6YnRWiQWnMPTk6xe.jpg'
    },
    {
      id: 5,
      title: 'Demon Slayer: Kimetsu no Yaiba - Infinity Castle',
      director: 'Haruo Sotozaki',
      producer: 'Akifumi Fujio, Masanori Miyake, Yuma Takahashi',
      genre: 'Animation, Action, Fantasy',
      year: 2025,
      description:
        'Tanjiro and the Demon Slayer Corps enter the Infinity Castle, where dangerous battles against powerful demons await them.',
      imageUrl:
        'https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg'
    },
    {
      id: 6,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      producer: 'Emma Thomas, Christopher Nolan, Lynda Obst',
      genre: 'Science Fiction, Adventure, Drama',
      year: 2014,
      description:
        'As Earth becomes increasingly uninhabitable, a former pilot joins a mission through a wormhole to find a new home for humanity.',
      imageUrl:
        'https://i0.wp.com/www.astropt.org/blog/wp-content/uploads/2014/12/interstellar-poster.jpg'
    },
    {
      id: 7,
      title: 'Prometheus',
      director: 'Ridley Scott',
      producer: 'Ridley Scott, David Giler, Walter Hill',
      genre: 'Science Fiction, Horror',
      year: 2012,
      description:
        'A team of explorers follows clues to the origins of humanity, only to discover a terrifying threat on a distant moon.',
      imageUrl:
        'https://www.scified.com/media/prometheusofficialposter.jpg'
    },
    {
      id: 8,
      title: 'Alien: Covenant',
      director: 'Ridley Scott',
      producer:
        'David Giler, Walter Hill, Ridley Scott, Mark Huffam, Michael Schaefer',
      genre: 'Science Fiction, Horror',
      year: 2017,
      description:
        'The crew of a colony ship investigates a seemingly habitable planet, where a hidden danger turns their expedition into a struggle for survival.',
      imageUrl:
        'https://m.media-amazon.com/images/I/61H0SJHgleL._AC_SL1500_.jpg'
    },
    {
      id: 9,
      title: 'Alien: Romulus',
      director: 'Fede Álvarez',
      producer: 'Ridley Scott, Michael Pruss, Walter Hill',
      genre: 'Science Fiction, Horror',
      year: 2024,
      description:
        'A group of young space colonists searches an abandoned station for supplies and encounters a deadly alien organism.',
      imageUrl:
        'https://lumiere-a.akamaihd.net/v1/images/alien_romulus_vn_poster_6260df08.jpeg'
    },
    {
      id: 10,
      title: 'Beverly Hills Chihuahua',
      director: 'Raja Gosnell',
      producer: 'David Hoberman',
      genre: 'Comedy, Adventure, Family',
      year: 2008,
      description:
        'A pampered Chihuahua gets lost in Mexico and relies on unexpected friends to help her find her way back home.',
      imageUrl:
        'https://image.tmdb.org/t/p/original/6Gsy3hVzt62TQCikwsbh1n6oKAH.jpg'
    },
    {
      id: 11,
      title: "I'm No Longer Here",
      director: 'Fernando Frías de la Parra',
      producer:
        'Gerardo Gatica, Alberto Müffelmann, Gerry Kim, Fernando Frías de la Parra',
      genre: 'Drama',
      year: 2019,
      description:
        'After a dangerous misunderstanding, a young cumbia dancer from Monterrey flees to New York and struggles with isolation and the loss of his community.',
      imageUrl:
        'https://resizing.flixster.com/CrSti13BQOi5H4ra9InxGO7VbJc%3D/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U0OTlkM2E4LTI3NjAtNDQzNC1iZTUzLTk4YWVhMGVkZjVmMC53ZWJw'
    },
    {
      id: 12,
      title: 'Split',
      director: 'M. Night Shyamalan',
      producer: 'M. Night Shyamalan, Jason Blum, Marc Bienstock',
      genre: 'Thriller, Horror',
      year: 2016,
      description:
        'Three kidnapped teenagers search for a way to escape their captor as they discover the different identities competing for control of his actions.',
      imageUrl:
        'https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt6b13c24d27cbde2d/691c82d6811dd4b81aeddd21/Split_Poster_2000x3000_uaa.jpg?width=2560'
    },
    {
      id: 13,
      title: 'Arrival',
      director: 'Denis Villeneuve',
      producer: 'Shawn Levy, Dan Levine, Aaron Ryder, David Linde',
      genre: 'Science Fiction, Drama',
      year: 2016,
      description:
        'A linguist tries to understand the language of mysterious alien visitors while international tensions threaten the possibility of peaceful contact.',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMjM0NTcxMjY1Nl5BMl5BanBnXkFtZTgwMDM5NzQ3OTE%40._V1_.jpg'
    },
    {
      id: 14,
      title: 'KPop Demon Hunters',
      director: 'Maggie Kang, Chris Appelhans',
      producer: 'Michelle Wong',
      genre: 'Animation, Musical, Fantasy',
      year: 2025,
      description:
        'Three K-pop stars secretly protect their fans from demons while facing a rival boy band with a supernatural agenda.',
      imageUrl:
        'https://image.tmdb.org/t/p/original/pnXZpZmXoOCDhp4ZJdKARkvT5l9.jpg'
    }
  ];

  getMovies(): Movie[]{
    return this.movies;
  }

  getMovieById(id : number): Movie | undefined { //Devuelve una pelicula o undefined
    return this.movies.find(pelicula => pelicula.id === id);
  }

}
