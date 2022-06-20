import { ChiCuadrado } from './../../models/chi_cuadrado';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-medias',
  templateUrl: './prueba-medias.component.html',
  styleUrls: ['./prueba-medias.component.css']
})
export class PruebaMediasComponent implements OnInit {

  @Input() Ri : number[] = [];
  @Input() aceptacion : number = 0;
  public alfa : number = 0;
  public promedio : number = 0;
  public varianza : number = 0;
  public alfaEntreDos : number = 0;
  public unoMenosAlfaEntreDos : number = 0;
  public chiCuadradoAlfaEntreDos : number = 0;
  public chiCuadradoUnoMenosAlfaEntreDos : number = 0;
  public limiteInferior : number = 0;
  public limiteSuperior : number = 0;
  public estaAprobado : string = '';

  constructor() { }

  ngOnInit(): void {
    this.alfa = 100 - this.aceptacion;
    this.aceptacion = this.aceptacion / 100;
    this.alfa = this.alfa / 100;
    let n = this.Ri.length;
    this.promedio = this.calcularPromedio(n);
    this.varianza = this.calcularVarianza(n);
    this.alfaEntreDos = this.alfa / 2;
    this.unoMenosAlfaEntreDos = 1 - this.alfaEntreDos;
    let chiCuadrado = new ChiCuadrado();
    this.chiCuadradoAlfaEntreDos = chiCuadrado.
      findChiCuadrado(this.alfaEntreDos, n-2);
    this.chiCuadradoUnoMenosAlfaEntreDos = chiCuadrado.
      findChiCuadrado(this.unoMenosAlfaEntreDos, n-2);
    this.limiteInferior = this.calcularLimite(this.chiCuadradoAlfaEntreDos, n);
    this.limiteSuperior = this.calcularLimite(this.chiCuadradoUnoMenosAlfaEntreDos, n);
    this.estaAprobado = (this.varianza >= this.limiteSuperior && 
      this.varianza <= this.limiteInferior) ? 'Si' : 'No';
  }
  calcularLimite(chiCuadrado: number, n : number): number {
    return chiCuadrado / (12 * (n - 1));
  }

  calcularVarianza(n: number): number {
    let varianza = 0;
    this.Ri.forEach(actual => {
      varianza += Math.pow((actual - this.promedio), 2);
    });
    return varianza / (n - 1);
  }

  calcularPromedio(n : number): number {
    let promedio = 0;
    this.Ri.forEach(actual => {
      promedio += actual;
    });
    return promedio / n;
  }
}