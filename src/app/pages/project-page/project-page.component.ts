import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';
import { ScrollService } from 'src/app/services/scroll-to-element/scroll-to-element.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,

    private readonly scrollService: ScrollService
  ) {
    this.selectedLanguage = this.route.snapshot.paramMap.get('language');

    if (this.selectedLanguage != this.languagesEnum.ENGLISH.toString() && this.selectedLanguage != this.languagesEnum.PORTUGUESE.toString())
      this.router.navigate(['/pages/main']);

  }

  //#endregion

  //#region Public Properties

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum

  public selectedLanguage: string | null = '';

  //#endregion

  //#region Public Methods

  public goToHomePage(target: any): void {
    this.router.navigate(['/pages/home/' + this.selectedLanguage], {fragment: target});
  }

  //#endregion

}
