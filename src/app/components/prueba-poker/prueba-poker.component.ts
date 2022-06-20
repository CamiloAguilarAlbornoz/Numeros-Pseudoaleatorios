import { Poker } from './../../models/poker';
import { ChiCuadrado } from './../../models/chi_cuadrado';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-poker',
  templateUrl: './prueba-poker.component.html',
  styleUrls: ['./prueba-poker.component.css']
})
export class PruebaPokerComponent implements OnInit {

  @Input() Ri : number[] = [];
  @Input() aceptacion : number = 0;
  
  public contadorD : number = 0;
  public contadorO : number = 0;
  public contadorT : number = 0;
  public contadorK : number = 0;
  public contadorF : number = 0;
  public contadorP : number = 0;
  public contadorQ : number = 0;

  public probabilidadD : number = 0.3024;
  public probabilidadO : number = 0.504;
  public probabilidadT : number = 0.108;
  public probabilidadK : number = 0.072;
  public probabilidadF : number = 0.009;
  public probabilidadP : number = 0.0045;
  public probabilidadQ : number = 0.0001;

  public eiD : number = 0;
  public eiO : number = 0;
  public eiT : number = 0;
  public eiK : number = 0;
  public eiF : number = 0;
  public eiP : number = 0;
  public eiQ : number = 0;

  public pruebaPokerD : number = 0;
  public pruebaPokerO : number = 0;
  public pruebaPokerT : number = 0;
  public pruebaPokerK : number = 0;
  public pruebaPokerF : number = 0;
  public pruebaPokerP : number = 0;
  public pruebaPokerQ : number = 0;

  public totalPruebaPoker : number = 0;

  public estaAprobado : string = '';

  public invChiCuadrado : number = 0;

  constructor() { }

  ngOnInit(): void {
    let alfa = 100 - this.aceptacion;
    this.aceptacion = this.aceptacion / 100;
    alfa = alfa / 100;
    let chiCuadrado = new ChiCuadrado();
    this.invChiCuadrado = chiCuadrado.findChiCuadradoInv(alfa, 6);
    this.Ri.forEach(actualRi => {
      let poker = new Poker(actualRi);
      switch (poker.nombrePoker) {
        case 'D' :
          this.contadorD++;
          break;
        case 'O' :
          this.contadorO++;
          break;
        case 'T' :
          this.contadorT++;
          break;
        case 'K' :
          this.contadorK++;
          break;
        case 'F' :
          this.contadorF++;
          break;
        case 'P' :
          this.contadorP++;
          break;
        case 'Q' :
          this.contadorQ++;
          break;
      }
    });
    this.eiD = this.probabilidadD * 50;
    this.eiO = this.probabilidadO * 50;
    this.eiT = this.probabilidadT * 50;
    this.eiK = this.probabilidadK * 50;
    this.eiF = this.probabilidadF * 50;
    this.eiP = this.probabilidadP * 50;
    this.eiQ = this.probabilidadQ * 50;
    
    this.pruebaPokerD = Math.pow((this.eiD - this.contadorD), 2) / this.eiD;
    this.pruebaPokerO = Math.pow((this.eiO - this.contadorO), 2) / this.eiO;
    this.pruebaPokerT = Math.pow((this.eiT - this.contadorT), 2) / this.eiT;
    this.pruebaPokerK = Math.pow((this.eiK - this.contadorK), 2) / this.eiK;
    this.pruebaPokerF = Math.pow((this.eiF - this.contadorF), 2) / this.eiF;
    this.pruebaPokerP = Math.pow((this.eiP - this.contadorP), 2) / this.eiP;
    this.pruebaPokerQ = Math.pow((this.eiQ - this.contadorQ), 2) / this.eiQ;

    this.totalPruebaPoker = 
      this.pruebaPokerD +
      this.pruebaPokerO +
      this.pruebaPokerT +
      this.pruebaPokerK +
      this.pruebaPokerF +
      this.pruebaPokerP +
      this.pruebaPokerQ;
    
    this.estaAprobado = this.totalPruebaPoker < this.invChiCuadrado ? 'Si' : 'No';
  }
}
