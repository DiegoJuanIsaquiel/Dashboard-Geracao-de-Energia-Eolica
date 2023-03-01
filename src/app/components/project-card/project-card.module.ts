import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectCardComponent
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
