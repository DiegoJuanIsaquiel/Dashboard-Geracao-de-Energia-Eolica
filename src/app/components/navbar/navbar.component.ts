import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.selectedLanguage = this.route.snapshot.paramMap.get('language');

    if (this.selectedLanguage != this.languagesEnum.ENGLISH && this.selectedLanguage != this.languagesEnum.PORTUGUESE)
      this.router.navigate(['/pages/main']);

  }

  //#endregion

  //#region Public Properties

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum

  public selectedLanguage: string | null = '';

  public isMouseOver: boolean = false;

  //#endregion

}
