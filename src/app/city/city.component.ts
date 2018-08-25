import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
 
  movies: Object;  //declare
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getMovies().subscribe(response => {
      this.movies = response;  //save
     });
  }
  
}
