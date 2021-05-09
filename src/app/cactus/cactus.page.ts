import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.page.html',
  styleUrls: ['./cactus.page.scss'],
})
export class CactusPage implements OnInit {

  weather:any[];
  main:any[];

  constructor(private service:WeatherService){
  }

  //get data from weather api
  ngOnInit(){
    this.service.getWeather().subscribe( (data)=> {
      this.weather = data.weather;
      console.log(this.weather);

    } );
  }
}

