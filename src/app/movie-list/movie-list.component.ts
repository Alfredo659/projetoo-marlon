import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service'; // Importando a interface Movie
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieRatingPipe } from '../movie-rating.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [CommonModule, RouterModule, MovieRatingPipe, FormsModule]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = []; // Usando a interface Movie
  searchTerm: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    console.log('MovieListComponent loaded');
    this.fetchPopularMovies();
  }

  fetchPopularMovies() {
    this.movieService.getPopularMovies().subscribe(data => {
      console.log(data);
      this.movies = data.results;
      console.log('Movies:', this.movies);
    });
  }

  searchMovies() {
    if (this.searchTerm) {
      this.movieService.getMovies(this.searchTerm).subscribe(data => {
        this.movies = data.Search; // Atualizando para usar a propriedade correta
      });
    } else {
      this.fetchPopularMovies();
    }
  }
}