import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class WeatherService {
    constructor(private _http: HttpClient) {

        // this.getWeather('NewDelhi');
    }

    getWeather(city: String) {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Headers', '*');
        const url = 'https://samples.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b6907d289e10d714a6e88b30761fae22';
        this._http.get(url, { headers }).subscribe(res => console.log(res));
    }

    getWeatheritemsbyCity(cityName): Observable<any> {

        const url = 'https://samples.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=b6907d289e10d714a6e88b30761fae22';
        return this._http.get(url);

    }
}
