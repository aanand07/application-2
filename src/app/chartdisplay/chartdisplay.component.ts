import {ChartsModule, Color} from 'ng2-charts';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as Chart from 'chart.js';
import { weatherModelComponent } from '../weatherModel.component';


@Component({
  selector: 'app-chartdisplay',
  templateUrl: `./chartdisplay.component.html`,
  styleUrls: ['./chartdisplay.component.css']
})
export class ChartdisplayComponent implements OnInit {
  model: weatherModelComponent;
  ngOnInit() {
  var ctx = document.getElementById("myChart"); 
   var mychart = new Chart(ctx, { 
    type: 'line',
    data: {
        labels: [0,1.5,2],
        datasets: [{
            label: 'pressure',
            data: [0,0.5,1],
            borderColor: "#3e95cd",
            fill: false,
            // backgroundColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(255, 206, 86, 1)'
            // ],
            borderWidth: 2
        }]
    },
    options: {
      responsive: false,
      display:true
    }
  });
}

  constructor() { }

  // ngOnInit() {
  // }

}