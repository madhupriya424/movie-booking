import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cities: Object;
  constructor(private service: DataService) { }

  selected = "city";
  buttonEnabled = true;

  listClick(event, city) {
    this.selected=city.cityName;   //selected item
    this.service.currentCity=city.cityName;
    this.buttonEnabled = false;
  }

  

  ngOnInit() {
    this.service.getCities().subscribe(response => {
      this.cities = response;
    })
  
}

}
