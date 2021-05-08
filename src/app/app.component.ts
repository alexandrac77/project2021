import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
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


//constructor() {}
//}
