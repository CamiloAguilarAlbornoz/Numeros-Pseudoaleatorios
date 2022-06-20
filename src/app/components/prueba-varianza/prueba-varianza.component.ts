import { ZTable } from './../../models/Z_table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-varianza',
  templateUrl: './prueba-varianza.component.html',
  styleUrls: ['./prueba-varianza.component.css']
})
export class PruebaVarianzaComponent implements OnInit {

  @Input() Ri : number[] = [];
  @Input() aceptacion : number = 0;
  public alfa : number = 0;
  public promedio : number = 0;
  public unoMenosAlfaEntreDos : number = 0;
  public z : number = 0;
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
    this.unoMenosAlfaEntreDos = 1 - (this.alfa / 2);
    let zTable = new ZTable();
    this.z = zTable.findZ(this.unoMenosAlfaEntreDos);
    this.limiteInferior = (1/2) - (this.z * (1 / Math.sqrt(12 * n)));
    this.limiteSuperior = (1/2) + (this.z * (1 / Math.sqrt(12 * n)));
    this.estaAprobado = this.promedio >= this.limiteInferior && 
      this.promedio <= this.limiteSuperior ? 'Si' : 'No';
  }
  
  calcularPromedio(n : number): number {
    let promedio = 0;
    this.Ri.forEach(actual => {
      promedio += actual;
    });
    return promedio / n;
  }
}
