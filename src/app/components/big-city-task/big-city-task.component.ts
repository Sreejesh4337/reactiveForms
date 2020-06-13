import { BigCityService } from './../../services/big-city.service';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'rf-big-city-task',
  templateUrl: './big-city-task.component.html',
  styleUrls: ['./big-city-task.component.scss'],
  providers: [DatePipe]
})
export class BigCityTaskComponent implements OnInit {
  panelOpenState = false;
  public validDataResponse: any;
  public scoreResponse: any;
  public question: any;
  constructor(private appSettingsService: BigCityService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getScoreCards();
  }

  getScoreCards() {
    this.appSettingsService.getJSON().subscribe(result => {
      this.validDataResponse = result;
      this.scoreResponse = this.validDataResponse.data.scorecard;
    });
  }

}
