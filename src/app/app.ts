import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './components/calculator/calculator';
import { Hashing } from './components/hashing/hashing';
import { WeatherComponent } from './components/weather-collect-data/weather-component';
import { WeatherAcoordingToDates } from './components/weather-acoording-to-dates/weather-acoording-to-dates';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Calculator,Hashing,WeatherComponent,WeatherComponent,WeatherAcoordingToDates],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myPro');
}
