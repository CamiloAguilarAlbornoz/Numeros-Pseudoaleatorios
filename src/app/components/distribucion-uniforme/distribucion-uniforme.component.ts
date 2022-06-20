import { DistribucionUniforme } from './../../models/distribucion_uniforme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribucion-uniforme',
  templateUrl: './distribucion-uniforme.component.html',
  styleUrls: ['./distribucion-uniforme.component.css']
})
export class DistribucionUniformeComponent implements OnInit {

  public cantidadIntervalos : number;
  public min : number;
  public max : number;
  public distribucionUniformeList : Array<DistribucionUniforme>;
  public Ni : number[];
  public Ri : number[];
  public aceptacion : number = 0;
  public frecuencys : number[] = [];

  constructor() {
    this.cantidadIntervalos = 0;
    this.min = 0;
    this.max = 0;
    this.distribucionUniformeList = new Array();
    this.Ni = [];
    this.Ri = [];
  }

  enviarFrecuencias(event : any) {
    let vector : any[] = event.split(',');
    vector.forEach(actual => {
      this.frecuencys.push(parseInt(actual));
    });
  }

  onSubmit() : void {
    for (let i = 0; i < 50; i++) {
      let distribucionUniforme = new DistribucionUniforme(this.min, this.max);
      this.distribucionUniformeList.push(distribucionUniforme);
      this.Ni.push(distribucionUniforme.Ni);
      this.Ri.push(distribucionUniforme.Ri);
    }
  }

  ngOnInit(): void {
  }

}
