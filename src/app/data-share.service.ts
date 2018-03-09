import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { weatherModelComponent } from './weatherModel.component';
@Injectable()
export class DataShareService {
  mod: weatherModelComponent;
  constructor() { }
  private messageSource = new BehaviorSubject<any[]>([]);
  
  currentMessage = this.messageSource.asObservable();
  
 
  changeMessage(message: any[]) {
    this.messageSource.next(message)
  }
}
