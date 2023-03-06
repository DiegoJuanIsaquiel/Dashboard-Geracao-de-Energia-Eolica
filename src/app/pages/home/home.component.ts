import { getLocaleDateFormat } from '@angular/common';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryStateEnum } from 'src/app/models/enum/category-state.enum';
import { LanguagesEnum } from 'src/app/models/enum/languages.enum';
import { ProjectProxy } from 'src/app/models/proxies/project.proxy';
import { ScrollService } from 'src/app/services/scroll-to-element/scroll-to-element.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  //#region Lifecycle Event

  public ngOnInit(): void {
    if(this.router.url.includes('#')){
      this.scrollToElement(this.router.url.split("#").pop()?.toString())
    }
  }

  //#endregion

  //#region Public Properties

  public languagesEnum: typeof LanguagesEnum = LanguagesEnum

  public selectedLanguage: string | null = '';

  public categoryStateEnum: typeof CategoryStateEnum = CategoryStateEnum;

  public selectedCategory: CategoryStateEnum = CategoryStateEnum.WEB_APP;

  public webAppProjectList: ProjectProxy[] = [
    {
      id: 1,
      name: 'Portfolio Diego Isaquiel',
      description: 'Neste portfolio você encontrará todos os projetos que eu já desenvolvi ao longo de minha carreira com criação e desenvolvimento de interfaces',
      imageUrl: '../../../assets/uiux_project_03.png',
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,

      tags: [
        {
          id: 1,
          name: 'UI/UX',
          backgroundColor: '#167FFC',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 3,
          name: 'Front-end',
          backgroundColor: '#53D86A',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 5,
          name: 'Angular',
          backgroundColor: '#DD1B16',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 6,
          name: 'Back-end',
          backgroundColor: '#8D37F6',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 7,
          name: 'NestJs',
          backgroundColor: '#323330',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
      ]
    }
  ];

  public mobileAppProjectList: ProjectProxy[] = [
    {
      id: 1,
      name: 'APP NoteIt - Notes Sharing',
      description: 'App de compartilhamento de notas entre amigos. Compartilhe seus ultimos acontencimentos com seus amigos. Se é bom, vale anotar!',
      imageUrl: '../../../assets/mobile_app_project_01.png',
      category: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,

      tags: [
        {
          id: 3,
          name: 'Front-end',
          backgroundColor: '#53D86A',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 5,
          name: 'Angular',
          backgroundColor: '#DD1B16',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 8,
          name: 'Ionic',
          backgroundColor: '#489AFF',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        }
      ]
    },
  ];

  public uiUxProjectList: ProjectProxy[] = [
    {
      id: 1,
      name: 'Sigefis - Sistema de Gestão e Fiscalização',
      description: 'Protótipo de aplicativo para registro de ocorrências da Guarda Cívil Municipal da Prefeitura da Cidade Itu.',
      imageUrl: '../../../assets/uiux_project_01.png',
      category: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,

      tags: [
        {
          id: 1,
          name: 'UI/UX',
          backgroundColor: '#167FFC',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 2,
          name: 'Mobile',
          backgroundColor: '#FE9526',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 3,
          name: 'Front-end',
          backgroundColor: '#53D86A',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 4,
          name: 'Figma',
          backgroundColor: '#5958D4',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        }
      ]
    },
    {
      id: 2,
      name: 'Fast Entregas - APP Delivery',
      description: 'Evite esperas. Faça seus pedidos pelo app Fast Entregas, com entregadores parceiros, seus pacotes são entregues em menos de 12h',
      imageUrl: '../../../assets/uiux_project_02.png',
      category: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,

      tags: [
        {
          id: 1,
          name: 'UI/UX',
          backgroundColor: '#167FFC',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 3,
          name: 'Front-end',
          backgroundColor: '#53D86A',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 4,
          name: 'Figma',
          backgroundColor: '#5958D4',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        }
      ]
    },
    {
      id: 3,
      name: 'Portfolio Diego Isaquiel',
      description: 'Neste portfolio você encontrará todos os projetos que eu já desenvolvi ao longo de minha carreira com criação e desenvolvimento de interfaces',
      imageUrl: '../../../assets/uiux_project_03.png',
      category: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,

      tags: [
        {
          id: 1,
          name: 'UI/UX',
          backgroundColor: '#167FFC',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 3,
          name: 'Front-end',
          backgroundColor: '#53D86A',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 5,
          name: 'Angular',
          backgroundColor: '#DD1B16',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 6,
          name: 'Back-end',
          backgroundColor: '#8D37F6',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
        {
          id: 7,
          name: 'NestJs',
          backgroundColor: '#323330',
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
        },
      ]
    },
  ];

  //#endregion

  //#region Public Methods

  public scrollToElement(target?: string): void {
    if(!target)
      return

    this.scrollService.scrollToElementById(target);
  }

  //#endregion
}
