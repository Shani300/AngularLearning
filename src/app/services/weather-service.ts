import { computed, inject, Injectable, signal } from '@angular/core';
import { Day } from '../models/day-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherData = signal<Day[]>([]);


addNewDate(date:Date,minTemp:number,maxTemp:number,prec:number,hail:boolean,snow:boolean){
    if(hail) prec=prec*1.05
    if(snow) prec=prec*1.1
    const tempDay:Day={
      date:date,
      minTemp:minTemp,
      maxTemp:maxTemp,
      precQuantity:prec,
      hail:hail,
      snow:snow
    }
    this.addDayToData(tempDay)
  }

addDayToData(day:Day){
    // if(this.findDayInList(day.date)!=null)
      this.weatherData.update(currentArr=>[...currentArr,day])
    // else
    //  alert("This date is already taken")
  }
getWeatherData(){
    return this.weatherData
  }
findDayInList(date:Date){
    return this.weatherData().find((day)=>{
      return day.date==date
    })
}
}
