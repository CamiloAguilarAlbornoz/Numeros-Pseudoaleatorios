import { CongruencialMultiplicativo } from './../../models/congruencial_multiplicativo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congruencial-multiplicativo',
  templateUrl: './congruencial-multiplicativo.component.html',
  styleUrls: ['./congruencial-multiplicativo.component.css']
})
export class CongruencialMultiplicativoComponent implements OnInit {

  public xi : number = 0;
  public t : number = 0;
  public g : number = 0;
  public min : number = 0;
  public max : number = 0;
  public a : number = 0;
  public m : number = 0;
  public Ni : number[];
  public Ri : number[];
  public cantidadIntervalos : number = 0;
  public aceptacion : number = 0;
  public frecuencys : number[] = [];

  public congruencialMultiplicativoList : Array<CongruencialMultiplicativo>;

  constructor() {
    this.congruencialMultiplicativoList = new Array();
    this.Ni = [];
    this.Ri = [];
  }

  enviarFrecuencias(event : any) {
    let vector : any[] = event.split(',');
    vector.forEach(actual => {
      this.frecuencys.push(parseInt(actual));
    });
  }

  public onSubmit() : void {
    this.a = (8 * this.t) + 3;
    this.m = Math.pow(2, this.g);
    let actualX = this.xi;
    for (let i = 0; i <= 50; i++) {
      let RiLess = actualX / (this.m - 1);
      this.Ri.push(RiLess);
      let NiLess = this.min + ((this.max - this.min) * RiLess);
      this.Ni.push(NiLess);
      let Ri = actualX / this.m;
      let Ni = this.min + ((this.max - this.min) * Ri);
      let congruencialMultiplicativo = new CongruencialMultiplicativo(
        i, actualX, RiLess, NiLess, Ri, Ni);
      this.congruencialMultiplicativoList.push(congruencialMultiplicativo);
      actualX = (this.a * actualX) % this.m;
    }
  }

  ngOnInit(): void {
  }

}
