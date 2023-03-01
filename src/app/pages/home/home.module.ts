import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ProjectCardModule } from 'src/app/components/project-card/project-card.module';
import { NbIconModule } from '@nebular/theme';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
    ProjectCardModule,
    NbIconModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
