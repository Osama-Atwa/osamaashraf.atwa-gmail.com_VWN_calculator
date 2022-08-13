import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vwn_calculator';
  Vendor:number=0;
  Media:number=0;
  Corp:number=0;
  TeamProject:number=0;
  sum:number = 0;
  Brex = 0;
  Stripe = 0;
  Amex:number = 0;
  UR:number = 0;
  LR:number = 0;

  Show:number = 0;


  OnBrex(){
    this.sum = this.Vendor + this.Media + this.Corp + this.TeamProject;
    this.Brex =this.sum * 0.3;
    this.UR = this.sum * 1.1;
    this.LR = this.sum * 1.2;
    this.Show = 1;
  }

  OnStripe(){
    this.sum = this.Vendor + this.Media + this.Corp + this.TeamProject;
    this.Stripe = this.sum * 2.9;
    this.UR = this.sum * 1.1;
    this.LR = this.sum * 1.2;
    this.Show = 2;
  }

  OnAmex(){
    this.sum = this.Vendor + this.Media + this.Corp + this.TeamProject;
    this.Amex =this.sum * 1.3
    this.UR = this.sum * 1.1;
    this.LR = this.sum * 1.2;
    this.Show = 3;
  }


}
