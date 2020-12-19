import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @ViewChild('option', { static: false }) select: ElementRef;

  apiUrlCovid = 'https://api.covid19api.com/summary';
  apiUrlLocation = 'http://ip-api.com/json/?fields=61439';
  locationData: any;
  data: any;
  loadingLocation = true;
  loadingData = true;
  loading = true;
  currentDisplay;
  selectedOption;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getLocation();
    this.getBaseData();
  }

  getLocation() {
    this.http.get(this.apiUrlLocation).subscribe((res) => {
      this.locationData = res;
      this.locationData = this.locationData.country;
      this.loadingLocation = false;
      this.checkLoading();
    });
  }

  getBaseData() {
    this.http.get(this.apiUrlCovid).subscribe((res) => {
      this.data = res;
      console.log(res)
      this.loadingData = false;
      this.checkLoading();
    });
  }

  appendYourCountry() {
    for (let i = 0; i < this.data.Countries.length; i++) {
      if (this.locationData == this.data.Countries[i].Country) {
        let a = this.data.Countries[i];
        this.data.Countries[i] = this.data.Countries[0];
        this.data.Countries[0] = a;
        this.currentDisplay = this.data.Countries[0];
      }
    }
  }

  getDataByCountry(country: string): any {
    for (let i = 0; i < this.data.Countries.length; i++) {
      if (country == this.data.Countries[i].Country) {
        return this.data.Countries[i].Country;
      }
    }
    return this.data.Countries[0].Country;
  }

  checkLoading() {
    if (!this.loadingData && !this.loadingData) {
      this.appendYourCountry();

      this.loading = false;
    }
  }

  selectChanged() {
    for (let i = 0; i < this.data.Countries.length; i++) {
      if (this.select.nativeElement.value == this.data.Countries[i].Country) {
        this.currentDisplay = this.data.Countries[i];
      }
    }
  }
}
