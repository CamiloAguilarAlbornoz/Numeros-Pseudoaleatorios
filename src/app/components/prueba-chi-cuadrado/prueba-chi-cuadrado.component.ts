import { ChiCuadrado } from './../../models/chi_cuadrado';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-chi-cuadrado',
  templateUrl: './prueba-chi-cuadrado.component.html',
  styleUrls: ['./prueba-chi-cuadrado.component.css']
})
export class PruebaChiCuadradoComponent implements OnInit {

  @Input() frecuencys : number[] = [];
  @Input() cantidadIntervalos : number = 0;
  @Input() aceptacion : number = 0;

  public chiCuadrado : number[] = [];
  public frecuenciaEsperada : number = 0;
  public totalChiCuadrado : number = 0;
  public gradosDeLibertad : number = 0;
  public chiCuadradoInv : number = 0;
  public estaAprobado : string = '';

  constructor() { }

  ngOnInit(): void {
    this.frecuenciaEsperada = 50 / this.cantidadIntervalos;
    this.fillChiCuadrad();
    this.gradosDeLibertad = (2 - 1) * (this.cantidadIntervalos - 1);
    let alfa = (100 - this.aceptacion)/100;
    let tableChi = new ChiCuadrado();
    this.chiCuadradoInv = tableChi.findChiCuadradoInv(alfa, this.gradosDeLibertad);
    this.estaAprobado = (this.totalChiCuadrado < this.chiCuadradoInv) ? 'Si' : 'No';
  }

  fillChiCuadrad() {
    this.frecuencys.forEach(actual => {
      let actualChi = Math.pow((actual - this.frecuenciaEsperada), 2) / 
        this.frecuenciaEsperada;
      this.chiCuadrado.push(actualChi);
      this.totalChiCuadrado += actualChi;
    });
  }

}
