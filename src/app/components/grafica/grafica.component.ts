import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() Ni: number[] = [];
  @Input() cantidadIntervalos : number = 1;
  @Output() enviarFrecuencias : EventEmitter<string> = new EventEmitter();

  public min: number = 0;
  public max: number = 0;
  public intervals : number[][] = [];
  public frecuencys: number[] = [];
  public dataFrecuency: number[][] = [];

  constructor() { }

  graph() {
    let labels : string[] = [];
    for (let i = 1; i <= this.frecuencys.length; i++) {
      labels.push(`${i}`);
    }
    var chart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Frecuencias",
            data: this.frecuencys,
            backgroundColor: 'orange',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
            yAxes : [
              {
                display : true
              }
            ]
        }
      }
    });
  }

  /*REVISAR */
  getFrecuency(): number[] {
    let frecuencys: number[] = [];
    let newFrecuancy = 0;
    let actualInterval = 0;
    let actualIndex = 0;
    while (actualIndex < this.Ni.length && actualInterval < this.intervals.length) {
      let actualNi = this.Ni[actualIndex];
      if (actualNi >= this.intervals[actualInterval][0]) {
        if (actualInterval != this.intervals.length - 1) {
          if (actualNi < this.intervals[actualInterval][1]) {
            newFrecuancy++;
            actualIndex++;
          } else {
            frecuencys.push(newFrecuancy);
            actualInterval++;;
            newFrecuancy = 0;
          }
        } else if (actualNi <= this.intervals[actualInterval][1]) {
          newFrecuancy++;
          actualIndex++;
        }
      }
    }
    frecuencys.push(newFrecuancy);
    return frecuencys;
  }

  getIntervals(): number[][] {
    let intervals: number[][] = [];
    let initial = this.min;
    let actual = 0;
    while (actual < this.cantidadIntervalos) {
      let final = initial + ((this.max - this.min) / this.cantidadIntervalos);
      intervals.push([initial, final]);
      initial = final;
      actual++;
    }
    return intervals;
  }

  getMax(): number {
    let max: number = this.Ni[0];
    this.Ni.forEach(actual => {
      if (max < actual) {
        max = actual;
      }
    });
    return max;
  }

  getMin(): number {
    let min: number = this.Ni[0];
    this.Ni.forEach(actual => {
      if (min > actual) {
        min = actual;
      }
    });
    return min;
  }

  ngOnInit(): void {
    this.Ni = this.Ni.sort((a, b) => {
      return a - b;
    });
    this.min = this.getMin();
    this.max = this.getMax();
    this.intervals = this.getIntervals();
    this.frecuencys = this.getFrecuency();
    this.dataFrecuency = this.getDataFrecuency();
    this.graph();
    this.enviarFrecuencias.emit(this.convertFrecuencys());
  }

  convertFrecuencys(): string {
    let frecuencysAcum : string = '';
    for (let i = 0; i < this.frecuencys.length - 1; i++) {
      frecuencysAcum += `${this.frecuencys[i]},`;
    }
    return frecuencysAcum += `${this.frecuencys[this.frecuencys.length - 1]}`;
  }

  getDataFrecuency(): number[][] {
    let dataFrecuency: number[][] = [];
    for (let i = 0; i < this.frecuencys.length; i++) {
     dataFrecuency.push([this.intervals[i][0], this.intervals[i][1], this.frecuencys[i]]);
    }
    return dataFrecuency;
  }
}