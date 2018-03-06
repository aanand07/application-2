import {ChartsModule, Color} from 'ng2-charts';
import { Component} from '@angular/core';

@Component({
  selector: 'app-chartdisplay',
  templateUrl: `./chartdisplay.component.html`,
  styleUrls: ['./chartdisplay.component.css']
})
export class ChartdisplayComponent  {
  
  name:string;
  labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data:number[] = [350, 450, 100];
  type:string = 'doughnut';
  
  colorsUndefined: Array<Color>;
  colorsEmpty: Array<Color> = [];
  colorsOverride: Array<Color> = [{
    backgroundColor: 'green',
    hoverBackgroundColor: 'purple'
  }];
  colorsEmptyObject: Array<Color> = [{}];
  
  datasets: any[] = [
  {
    data: this.data,
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#000",
      "#36A2EB",
      "#FFCE56"
    ]
  }];
  constructor() {
    this.name = 'Angular2'
  }
}
