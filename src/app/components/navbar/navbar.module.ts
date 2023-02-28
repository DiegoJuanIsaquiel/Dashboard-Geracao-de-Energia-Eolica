import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
})
export class NavbarModule { }
