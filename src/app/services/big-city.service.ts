import { BigCity } from './../components/big-city-task/bigcity.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigCityService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  getJSON() {
    return this.http.get('../../assets/scorecard.json');
  }
}
