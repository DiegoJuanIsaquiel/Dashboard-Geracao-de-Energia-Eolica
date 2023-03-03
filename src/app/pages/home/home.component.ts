import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';
import { ScrollService } from 'src/app/services/scroll-to-element/scroll-to-element.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly scrollService: ScrollService
  ) {
    this.selectedLanguage = this.route.snapshot.paramMap.get('language');

    if(this.selectedLanguage != this.languagesEnum.ENGLISH.toString() && this.selectedLanguage != this.languagesEnum.PORTUGUESE.toString() )
      this.router.navigate(['/pages/main']);

  }

  //#endregion

  //#region Public Properties

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum

  public selectedLanguage: string | null = '';

  //#endregion

  //#region Public Methods

  public scrollToElement(target: any): void {
    this.scrollService.scrollToElementById(target);
  }

  //#endregion
}
