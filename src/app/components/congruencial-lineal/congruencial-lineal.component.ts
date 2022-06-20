import { CongruencialLineal } from './../../models/congruencial_lineal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congruencial-lineal',
  templateUrl: './congruencial-lineal.component.html',
  styleUrls: ['./congruencial-lineal.component.css']
})
export class CongruencialLinealComponent implements OnInit {

  public xi : number = 0;
  public k : number = 0;
  public c : number = 0;
  public g : number = 0;
  public a : number = 0;
  public m : number = 0;
  public min : number = 0;
  public max : number = 0;
  public Ni : number[];
  public Ri : number[];
  public cantidadIntervalos : number = 0;
  public aceptacion : number = 0;
  public frecuencys : number[] = [];

  public congruencialLinealList : Array<CongruencialLineal>;

  constructor() {
    this.congruencialLinealList = new Array();
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
    this.a = 1 + 2 * this.k;
    this.m = Math.pow(2, this.g);
    let actualX = this.xi;
    for (let i = 1; i <= 50; i++) {
      let congruencialLineal = new CongruencialLineal(i, actualX, this.a, this.c, this.m, 
        this.min, this.max);
      this.Ni.push(congruencialLineal.NiLess);
      this.Ri.push(congruencialLineal.RiLess);
      this.congruencialLinealList.push(congruencialLineal);
      actualX = congruencialLineal.xi;
    }
  }

  ngOnInit(): void {
  }

}
