import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';
import { ProjectProxy } from 'src/app/models/proxies/project.proxy';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.selectedLanguage = this.route.snapshot.paramMap.get('language');

    if(this.selectedLanguage != this.languagesEnum.ENGLISH.toString() && this.selectedLanguage != this.languagesEnum.PORTUGUESE.toString() )
      this.router.navigate(['/pages/main']);

  }

  //#endregion

  //#region Public Properties

  @Input()
  public projectList!: ProjectProxy;

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum

  public selectedLanguage: string | null = '';

  //#endregion
}
