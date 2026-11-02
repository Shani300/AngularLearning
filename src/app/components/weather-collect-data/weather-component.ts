import { Component, inject, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather-service';
import { min } from 'rxjs';

@Component({
  selector: 'app-weather-component',
  imports: [FormsModule],
  templateUrl: './weather-component.html',
  styleUrl: './weather-component.scss',
})
export class WeatherComponent {
    minTemp=signal(0)
    maxTemp=signal(0)
    hail=signal(false)
    snow=signal(false)
    date=signal(new Date())
    precipitionQuantity=signal(0)

    weatherService=inject(WeatherService)

    enterDayWeatherDetailes(){
        this.weatherService.addNewDate(this.date(),this.minTemp(),this.maxTemp(),this.precipitionQuantity(),this.hail(),this.snow())
    }
}
