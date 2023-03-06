import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

export const routes: Routes = [
  {
    path: '',
    component: ProjectPageComponent
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ],
  declarations: [
    ProjectPageComponent
  ],
  exports: [
    ProjectPageComponent
  ]
})
export class ProjectPageModule { }
