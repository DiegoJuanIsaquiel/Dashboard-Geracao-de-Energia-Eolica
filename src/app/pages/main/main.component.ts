import { Component, OnInit } from '@angular/core';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  //#region Public Properties

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum;

  public selectedLanguage: LanguagesEnum = LanguagesEnum.PORTUGUESE;

  //#endregion

}
