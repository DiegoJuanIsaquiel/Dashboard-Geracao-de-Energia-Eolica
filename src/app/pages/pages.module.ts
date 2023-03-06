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
      { path: 'home/:language', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'project/:id/:language', loadChildren: () => import('./project-page/project-page.module').then(m => m.ProjectPageModule) },
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
