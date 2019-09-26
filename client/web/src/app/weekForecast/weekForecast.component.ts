import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekforecast',
  templateUrl: './weekForecast.component.html',
  styleUrls: ['./weekForecast.component.scss']
})
export class WeekForecastComponent implements OnInit {
  today: number;
  weekday: string[];
  constructor() {
    this.weekday = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    this.today = new Date().getDay();
  }

  ngOnInit(){
  }
}
