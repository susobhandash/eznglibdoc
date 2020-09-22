import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {

  syntax = '<ez-progress-bar [progress]=progress [progressOptions]="progressOptions" ></ez-progress-bar>';
  import1 = 'import {eznglibModule} from "ez-ng-lib"';
  progress = 78;
  progressOptions = {
    height: 20,
    bgColor: '#021B79',
    textColor: '#FFC107',
    progressBgColor: '#ffffff',
    time: 1000,
    displayValue: true,
    timingFunc: 'linear',
    striped: true,
    stripeAnimated: true
  };

  constructor() { }

  ngOnInit() {
  }

}
