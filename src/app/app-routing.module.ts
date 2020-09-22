import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ComponentPageComponent } from '../pages/component-page/component-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';

import { TabbarCompComponent } from '../components/tabbar-comp/tabbar-comp.component';
import { ReorderCompComponent } from '../components/reorder-comp/reorder-comp.component';
import { ListboxCompComponent } from '../components/listbox-comp/listbox-comp.component';
import { RoundProgressComponent } from '../components/round-progress/round-progress.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

// const routes: Routes = [];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-page',
    component: NotFoundPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'component-page',
    component: ComponentPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-page',
    component: NotFoundPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'tabbar-component',
    component: TabbarCompComponent,
    pathMatch: 'full'
  },
  {
    path: 'reorder-component',
    component: ReorderCompComponent,
    pathMatch: 'full'
  },
  {
    path: 'listbox-component',
    component: ListboxCompComponent,
    pathMatch: 'full'
  },
  {
    path: 'round-progress-component',
    component: RoundProgressComponent,
    pathMatch: 'full'
  },
  {
    path: 'progress-bar-component',
    component: ProgressBarComponent,
    pathMatch: 'full'
  },
  { path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
