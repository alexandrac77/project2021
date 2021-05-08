import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.page.html',
  styleUrls: ['./cactus.page.scss'],
})
export class CactusPage implements OnInit {

  weatherData:any[];

  constructor(private service:WeatherService){

  }
  ngOnInit(){
    this.service.getWeather().subscribe( (data)=> {
      this.weatherData = data.weather;
      console.log(this.weatherData);

    } );
   }
  }

/*
weather:any[];

  constructor(private service:WeatherService){

  }
  ngOnInit(){
    this.service.getWeather().subscribe( (data)=> {
      this.weather = data.weather;
      console.log(this.weather);

    } );
   }
  }


  old
  export class CactusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
*/
