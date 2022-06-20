export class DistribucionNormal {

    public Ri : number = 0;
    public Ni : number = 0;

    constructor(desviacionEstandar : number, promedio : number) {
        this.Ri = Math.random();
        let elevado = ((this.Ri - promedio) / (Math.pow(desviacionEstandar, 2)));
        let numerador = Math.exp((-1/2) * elevado);
        let denominador = Math.sqrt(desviacionEstandar * Math.PI * 2);
        this.Ni = numerador / denominador;
    }
}