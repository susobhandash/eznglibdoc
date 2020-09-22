import { Component, OnInit } from '@angular/core';
import {EzListBox} from 'ez-ng-lib';

@Component({
  selector: 'app-listbox-comp',
  templateUrl: './listbox-comp.component.html',
  styleUrls: ['./listbox-comp.component.less']
})
export class ListboxCompComponent implements OnInit {
  syntax = '<ez-listbox [data]="listData" selection="multiple" (onselection)="someMethod($event)"></ez-listbox>';
  import1 = 'import {eznglibModule} from "ez-ng-lib"';
  import2 = 'import {EzListBox} from "ez-ng-lib"';
  data: EzListBox[] = [];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        label: 'First',
        icon: 'fa fa-home'
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
