import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.less']
})
export class RoundProgressComponent implements OnInit {

  syntax = '<ez-listbox [data]="listData" selection="multiple" (onselection)="someMethod($event)"></ez-listbox>';
  import = 'import {eznglibModule} from "ez-ng-lib"';
  progress = 25;

  constructor() { }

  ngOnInit() {
    this.progress = 52;
  }

  clickOnSvg(evt) {
    console.log(evt);
  }

}
