/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { // Verifica se idParam não é null
      const id = +idParam; // Converte para número
      this.movieService.getMovieById(id).subscribe(data => {
        this.movie = data;
      });
    } else {
      console.error('ID do filme não encontrado.');
      // Trate o caso em que o ID não é válido
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // id é uma string
    if (id) {
      this.movieService.getMovieById(id).subscribe(data => {
        this.movie = data;
      });
    }
  }
}