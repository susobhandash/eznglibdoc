import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EzNgLibModule } from 'ez-ng-lib';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ComponentPageComponent } from '../pages/component-page/component-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

import { TabbarCompComponent } from '../components/tabbar-comp/tabbar-comp.component';
import { ReorderCompComponent } from '../components/reorder-comp/reorder-comp.component';
import { ListboxCompComponent } from '../components/listbox-comp/listbox-comp.component';
import { RoundProgressComponent } from '../components/round-progress/round-progress.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ComponentPageComponent,
    ContactPageComponent,
    TabbarCompComponent,
    NotFoundPageComponent,
    ReorderCompComponent,
    ListboxCompComponent,
    RoundProgressComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    EzNgLibModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
