import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=0f40325425aaf722c94a006f7477c6e7');
    
    //api.openweathermap.org/data/2.5/weather?q=Galway&appid=0f40325425aaf722c94a006f7477c6e7
  }
}
