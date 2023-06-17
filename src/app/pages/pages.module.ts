import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
      { path: '**', redirectTo: 'main' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
