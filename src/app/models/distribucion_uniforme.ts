export class DistribucionUniforme {

    public Ri : number;
    public Ni : number;

    constructor(min : number, max : number) {
        this.Ri = Math.random();
        this.Ni = min + ((max - min)/10) * this.Ri;
    }
}