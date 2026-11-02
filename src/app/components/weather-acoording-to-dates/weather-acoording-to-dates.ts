import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather-service';
import {DecimalPipe} from '@angular/common'
import { Day } from '../../models/day-data';

@Component({
  selector: 'app-weather-acoording-to-dates',
  imports: [DecimalPipe],
  templateUrl: './weather-acoording-to-dates.html',
  styleUrl: './weather-acoording-to-dates.scss',
})
export class WeatherAcoordingToDates {
  daysWeather=inject(WeatherService)
  daysList= this.daysWeather.getWeatherData();

  weatherIcon(maxTemp:number,hail:boolean,snow:boolean){
    if(maxTemp>=35) return '☀️';
    if(maxTemp>=30)  return '🌤️';
    if(maxTemp>=25)  return '⛅';
    if(maxTemp>=20)  return '🌥️';
    if(maxTemp>=15)  return '☁️';
    if(maxTemp>=10)  return hail?'🌦️':'☁️';
    else return snow? '❄️':'🌨️';
  }
}
