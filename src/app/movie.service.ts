/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b19f0d86'; // Substitua pela sua chave da OMDb API
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string = 'batman'): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?s=${searchTerm}&apikey=${this.apiKey}`);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo a interface para um filme
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated?: string;
}

export interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface PopularMoviesResponse {
  results: Movie[];
  total_results: number;
  page: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b19f0d86'; // Substitua pela sua chave da TMDb API
  private omdbApiUrl = 'http://www.omdbapi.com/';
  private tmdbApiUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string = 'batman'): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.omdbApiUrl}?s=${searchTerm}&apikey=${this.apiKey}`);
  }

  /*getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(`${this.tmdbApiUrl}movie/popular?api_key=${this.apiKey}&language=pt-BR`);
  }*/

    getPopularMovies(): Observable<any> {
      return this.http.get<any>(`${this.tmdbApiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`);
    }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.omdbApiUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}