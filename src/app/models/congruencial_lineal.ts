export class CongruencialLineal {

    public i : number = 0;
    public xi : number = 0;
    public RiLess : number = 0;
    public NiLess : number = 0;
    public Ri : number = 0;
    public Ni : number = 0;

    constructor(i : number, xiLessOne : number, a : number, c : number, m : number,
        min : number, max : number) {
        this.i = i;
        this.xi = ((a * xiLessOne) + c) % m;
        this.RiLess = this.xi / (m - 1);
        this.NiLess = min + ((max - min) * this.RiLess);
        this.Ri = this.xi / m;
        this.Ni = min + ((max - min) * this.Ri);
    }
}