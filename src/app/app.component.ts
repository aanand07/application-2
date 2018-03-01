import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { weatherModelComponent } from './weatherModel.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  location = {};
  check: boolean;

  model: weatherModelComponent;
  constructor(private http: HttpClient) { }
  setPosition(position) {
    console.log(position.coords);
    this.getWeatherOnLonApiCall(position.coords.latitude, position.coords.longitude)
      .subscribe(response => { this.model = response; console.log(this.model); alert(this.model.id) });
  }
  posError(error) {
    if (error.code === 1) {
      this.check = true;
      console.log(error.message);
    }
  }
  //user allows
  getWeatherOnLonApiCall(lat, lon): Observable<weatherModelComponent> {
    let uri = "http://openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b6907d289e10d714a6e88b30761fae22";
    return this.http.get(uri)
      .map(response => { return response as weatherModelComponent })
  }
  //user blocks
  getWeatherOncoun(country, zip) {

    this.getWeatherOnCounApiCall(country, zip).subscribe(response => { this.model = response; console.log(this.model); alert(this.model.id) });
  }
  getWeatherOnCounApiCall(country, zip): Observable<weatherModelComponent> {
    let uri = "http://openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&appid=b6907d289e10d714a6e88b30761fae22";
    return this.http.get(uri)
      .map(response => { return response as weatherModelComponent })
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.posError.bind(this));

    }
  }
}
