import { Component, OnInit } from '@angular/core';
import { CuadradoMedio } from '../../models/cuadrado_medio';

@Component({
  selector: 'app-cuadrados-medios',
  templateUrl: './cuadrados-medios.component.html',
  styleUrls: ['./cuadrados-medios.component.css']
})
export class CuadradosMediosComponent implements OnInit {

  public xi : number;
  public cantidadIntervalos : number;
  public aceptacion : number;
  public min : number;
  public max : number;
  public xi_cuadrado : number;
  public extension : number;
  public extraction : number;
  public Ri : number[];
  public listCuadradoMedio : Array<CuadradoMedio>;
  public Ni : number[];
  public frecuencys : number[];

  constructor() {
    this.listCuadradoMedio = new Array();
    this.xi = 0;
    this.xi_cuadrado = 0;
    this.extension = 0;
    this.extraction = 0;
    this.Ri = [];
    this.min = 0;
    this.max = 0;
    this.Ni = [];
    this.cantidadIntervalos = 0;
    this.aceptacion = 0;
    this.frecuencys = [];
  }

  enviarFrecuencias(event : any) {
    let vector : any[] = event.split(',');
    vector.forEach(actual => {
      this.frecuencys.push(parseInt(actual));
    });
  }

  ngOnInit(): void {}

  onSubmit() : void {
    for (let i = 0; i < 50; i++) {
      let cuadradoMedio = new CuadradoMedio(i, this.xi, this.min, this.max);
      this.Ni.push(cuadradoMedio.Ni);
      this.Ri.push(cuadradoMedio.Ri);
      this.listCuadradoMedio.push(cuadradoMedio);
      this.xi = cuadradoMedio.extraction;
    }
  }
}
