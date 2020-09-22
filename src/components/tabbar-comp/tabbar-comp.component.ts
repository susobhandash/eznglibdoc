import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar-comp',
  templateUrl: './tabbar-comp.component.html',
  styleUrls: ['./tabbar-comp.component.less']
})
export class TabbarCompComponent implements OnInit {

  syntax = '<ez-tabbar><ez-tab></ez-tab></ez-tabbar>';
  import = 'import {eznglibModule} from "ez-ng-lib"';

  constructor() { }

  ngOnInit() {
  }

  tabClicked(e) {
    console.log(e);
  }

}
