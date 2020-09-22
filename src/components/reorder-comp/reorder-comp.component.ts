import { Component, OnInit } from '@angular/core';
import {EzListBox} from 'ez-ng-lib';

@Component({
  selector: 'app-reorder-comp',
  templateUrl: './reorder-comp.component.html',
  styleUrls: ['./reorder-comp.component.less']
})
export class ReorderCompComponent implements OnInit {
  syntax = '<ez-reorderlist [listData]="listData" (onreorder)="someMethod($event)"></ez-reorderlist>';
  import1 = 'import {eznglibModule} from "ez-ng-lib"';
  import2 = 'import {EzListBox} from "ez-ng-lib"';
  data = [];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        label: 'First',
        icon: 'fa fa-home',
        command: event => this.getData(event)
      }, {
        label: 'Second',
        icon: 'fa fa-user'
      }, {
        label: 'Thirds',
        icon: 'fa fa-globe'
      }, {
        label: 'Fourth',
        icon: 'fa fa-clock-o'
      }, {
        label: 'Home',
        icon: 'fa fa-home'
      }, {
        label: 'User',
        icon: 'fa fa-user'
      }, {
        label: 'Globe',
        icon: 'fa fa-globe'
      }, {
        label: 'Clock',
        icon: 'fa fa-clock-o'
      }
    ];
  }

  getData(event) {
    console.log(event);
  }
}
