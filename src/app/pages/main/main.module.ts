import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  { path: 'home/:language', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
