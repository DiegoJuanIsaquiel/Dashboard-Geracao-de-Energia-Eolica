import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { RegisterProxy } from 'src/app/models/proxies/register.proxy';
import { CurrentRegisterService } from 'src/app/services/current-register/current-register.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //#region Constructor

  constructor(
    private readonly currentRegisterService: CurrentRegisterService,
  ) { }

  //#enregion

  //#region Public Properties

  public registerList!: RegisterProxy;

  public registerValuesList: number[] = [];

  public chartOptions!: Chart;

  public lineChart!: Chart;

  public highestValueRegistered: number = 0;

  public lowestValueRegistered: number = 0;

  public averageOfValuesRegistered: number = 0;

  public shouldGenerateValues: boolean = false;


  //#endregion

  //#region lifecycle methods

  public async ngOnInit(): Promise<void> {
    await this.getRegisters();

    await this.generateGraph();

    setInterval(() => {
      if (!this.shouldGenerateValues)
        return this.getRegisters();

      return this.generateFakeValues();

    }, 1000);
  }

  //#endregion

  //#region Public Methods

  public generateGraph(): void {
    this.chartOptions = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Registro de energia'
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: 'Corrente (mA)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [
        {
          name: 'Valores das energias geradas',
          data: this.registerValuesList
        } as any
      ]

    });

    this.lineChart = this.chartOptions;
  }

  public async getRegisters(): Promise<void> {
    const [success, error] = await this.currentRegisterService.getAllRegister();

    if (!success)
      return

    this.registerList = success;

    this.getRegisterValues();
  }

  public getRegisterValues(): void {
    this.registerList.feeds.forEach(item => {
      this.registerValuesList.push(Math.ceil(item.field1));
    });

    this.getHighestAndLowestValue();
  }

  public getHighestAndLowestValue(): void {
    this.lowestValueRegistered = Math.min(...this.registerValuesList);
    this.highestValueRegistered = Math.max(...this.registerValuesList);

    let summedValues = 0

    this.registerValuesList.forEach(item => {
      summedValues += item;
    })

    this.averageOfValuesRegistered = +(summedValues / this.registerValuesList.length).toFixed(2)
  }

  public generateFakeValues(): void {
    let fakeValue: number = Math.ceil(Math.random() * (24 - 12) + 12);

    this.chartOptions.addPoint(fakeValue);
    this.registerValuesList.push(fakeValue);

    if(this.registerValuesList.length > 45)
      this.chartOptions.removePoint(0)

    this.getHighestAndLowestValue();
  }

  //#endregion

}
