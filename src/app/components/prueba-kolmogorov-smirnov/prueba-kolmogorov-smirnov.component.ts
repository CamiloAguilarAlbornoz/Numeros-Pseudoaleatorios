import { KolmogorovSmirnov } from './../../models/kolmogorov_smirnov';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prueba-kolmogorov-smirnov',
  templateUrl: './prueba-kolmogorov-smirnov.component.html',
  styleUrls: ['./prueba-kolmogorov-smirnov.component.css']
})
export class PruebaKolmogorovSmirnovComponent implements OnInit {

  @Input() aceptacion : number = 0;
  @Input() frecuencys : number[] = [];
  @Input() cantidadIntervalos : number = 0;
  public alfa : number = 0;
  public min : number = 0;
  public max : number = 0;
  public maxRLessMinR : number = 0;
  public frecuenciasAcumuladas : number[] = [];
  public p_obj : number[] = [];
  public frecuenciasEsperadasAcumuladas : number[] = [];
  public p_esp : number[] = [];
  public dif : number[] = [];
  public maxDif : number = 0;
  public dMaxP : number = 0;
  public estaAprobado : string = '';

  constructor() {}

  ngOnInit(): void {
    this.alfa = 100 - this.aceptacion;
    this.aceptacion = this.aceptacion / 100;
    this.alfa = this.alfa / 100;
    this.calcularFrecuenciasAcumuladas();
    this.calcularP_obj();
    this.calcularFrecuenciasEsperadasAcumuladas();
    this.calcularPEsp();
    this.calcularDif();
    this.getMaxDif();
    this.getDMaxP();
    this.estaAprobado = this.maxDif <= this.dMaxP ? 'Si' : 'No';
  }

  getDMaxP() {
    let ks = new KolmogorovSmirnov();
    this.dMaxP = ks.getDMaxP(this.alfa);
  }

  getMaxDif() {
    this.dif.forEach(actual => {
      if (actual > this.maxDif) {
        this.maxDif = actual;
      }
    });
  }

  muestro() : number[][] {
    let datosParaMostrar = [];
    for (let i = 0; i < this.cantidadIntervalos; i++) {
      datosParaMostrar.push(
        [
          this.frecuencys[i], 
          this.frecuenciasAcumuladas[i],
          this.p_obj[i],
          this.frecuenciasEsperadasAcumuladas[i],
          this.p_esp[i],
          this.dif[i]
        ]
      );
    }
    return datosParaMostrar;
  }

  calcularDif() {
    for (let i = 0; i < this.cantidadIntervalos; i++) {
      this.dif.push(Math.abs(this.p_obj[i] - this.p_esp[i]));
    }
  }

  calcularPEsp() {
    this.frecuenciasEsperadasAcumuladas.forEach(actual => {
      this.p_esp.push(Math.abs(actual/50));
    });
  }

  calcularFrecuenciasEsperadasAcumuladas() {
    let frecuenciaEsperada = 50 / this.cantidadIntervalos;
    let actual = 0;
    let acumulador = 0;
    for (let i = 0; i < this.cantidadIntervalos; i++) {
      acumulador = frecuenciaEsperada + actual;
      this.frecuenciasEsperadasAcumuladas.push(acumulador);
      actual = acumulador;
    }
  }

  calcularP_obj() {
    this.frecuenciasAcumuladas.forEach(actual => {
      this.p_obj.push(actual/50);
    });
  }

  calcularFrecuenciasAcumuladas() {
    let acumulador : number = 0;
    this.frecuencys.forEach(actual => {
      acumulador += actual;
      this.frecuenciasAcumuladas.push(acumulador);
    });
  }
}