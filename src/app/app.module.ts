/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Certifique-se de que este arquivo já existe
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRatingPipe } from './movie-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieRatingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Certifique-se de que isso está aqui
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRatingPipe } from './movie-rating.pipe';
import { HomeComponent } from './home/home.component'; // Importe aqui
import { MovieListComponent } from './movie-list/movie-list.component'; // Importe aqui
import { MovieDetailComponent } from './movie-detail/movie-detail.component'; // Importe aqui

@NgModule({
  declarations: [
    AppComponent,
    MovieRatingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeComponent,         // Adicione como import
    MovieListComponent,    // Adicione como import
    MovieDetailComponent    // Adicione como import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
