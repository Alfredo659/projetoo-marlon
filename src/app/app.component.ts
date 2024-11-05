/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Se houver um arquivo CSS
})
export class AppComponent {}*/

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/movies">Movies</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [HomeComponent, MovieListComponent, MovieDetailComponent, RouterOutlet]
})
export class AppComponent { }
