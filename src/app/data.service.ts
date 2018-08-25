import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentCity ="";
  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get('http://localhost:3000/cities');
  }

  // getMovies() {
  //   return this.http.get('http://localhost:3000/movies');
  // }

  getMovies() {
    return this.http.get('http://localhost:3000/movies/' + this.currentCity);
  }
}