import { DistribucionNormal } from './../../models/distribucion_normal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribucion-normal',
  templateUrl: './distribucion-normal.component.html',
  styleUrls: ['./distribucion-normal.component.css']
})
export class DistribucionNormalComponent implements OnInit {

  public cantidadIntervalos : number;
  public cantidadXi : number;
  public Ni : number[];
  public Xi : number[];
  public distribucionNormalList : Array<DistribucionNormal>;
  public promedio : number;
  public desviacionEstandar : number;
  public Ri : number[];
  public aceptacion : number = 0;
  public frecuencys : number[] = [];

  constructor() {
    this.cantidadIntervalos = 0;
    this.cantidadXi = 0;
    this.Ni = [];
    this.Xi = [];
    this.Ri = [];
    this.distribucionNormalList = new Array();
    this.promedio = 0;
    this.desviacionEstandar = 0;
  }

  enviarFrecuencias(event : any) {
    let vector : any[] = event.split(',');
    vector.forEach(actual => {
      this.frecuencys.push(parseInt(actual));
    });
  }

  onSubmit() {
    for (let i = 0; i < this.cantidadXi; i++) {
      this.Xi.push(Math.ceil(Math.random()*20));
    }
    this.promedio = this.calcularPromedio();
    this.desviacionEstandar = this.calcularDistribucionEstandar(this.promedio);
    for (let i = 0; i < 50; i++) {
      let distribucionNormal = new DistribucionNormal(this.desviacionEstandar, this.promedio);
      this.Ni.push(distribucionNormal.Ni);
      this.Ri.push(distribucionNormal.Ri);
      this.distribucionNormalList.push(distribucionNormal);
    }
  }

  calcularDistribucionEstandar(promedio : number) {
    let desviacionEstandar = 0;
    let length = this.Xi.length;
    for (let i = 0; i < length; i++) {
      desviacionEstandar += (Math.abs(this.Xi[i] - promedio))^2;
    }
    return Math.sqrt(desviacionEstandar / length);
  }

  calcularPromedio() {
    let promedio = 0;
    let length = this.Xi.length;
    for (let i = 0; i < length; i++) {
      promedio += this.Xi[i];
    }
    return promedio / length;
  }

  ngOnInit(): void {
  }

}
