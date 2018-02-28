import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  location = {};
  check:boolean;
  weatherData :any;
  constructor(private http: HttpClient){}
  setPosition(position){
    console.log(position.coords);
     this.location = position.coords;
     console.log(this.location);
     }
    posError(error){
      if(error.code===1){
      this.check=true; 
      console.log(error.message);
      }
    }
    getWeatherOncoun(country, zip)
    {
      alert("success");
      let uri="http://openweathermap.org/data/2.5/weather?zip="+zip+","+country+"&appid=b6907d289e10d714a6e88b30761fae22";
      this.http.get(uri
        ).map(response => response).subscribe(response=>{this.weatherData=response;console.log(this.weatherData);})
    }
    
ngOnInit(){
  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.posError.bind(this));
     
     };
  }
}
