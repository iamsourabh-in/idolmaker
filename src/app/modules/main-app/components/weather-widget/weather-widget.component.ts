import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [WeatherService]
})
export class WeatherWidgetComponent implements OnInit {

  WeatherReponse: any;
  weatherData: any;
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.getWeather('New Delhi');
  }

  PoplulateWeatherWidget(cityName: String) {

    this._weather.getWeatheritemsbyCity(cityName).subscribe(
      (res) => this.WeatherReponse = res,
    );
  }

  getDateCustom() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    return weekdays[d.getDay()] + ', ' + monthNames[d.getMonth()] + ' ' + d.getDate() + 'th';
  }

}
