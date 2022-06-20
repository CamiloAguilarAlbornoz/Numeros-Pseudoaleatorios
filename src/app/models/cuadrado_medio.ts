export class CuadradoMedio {
    
    public i : number;
    public xi : number;
    public xi_cuadrado : number;
    public extension : number;
    public extraction : number;
    public Ri : number;
    public Ni : number;
    public min : number;
    public max : number;

    constructor(i : number, xi : number, min : number, max : number) {
        this.i = i;
        this.min = min;
        this.max = max;
        this.xi = xi;
        this.xi_cuadrado = this.xi * this.xi;
        let stringXi_cuadrado : string = this.xi_cuadrado.toString();
        this.extension = stringXi_cuadrado.length;
        this.extraction = this.getExtraction(stringXi_cuadrado);
        this.Ri = this.extraction / 10000;
        this.Ni = this.max + ((this.min - this.max) * this.Ri);
    }

    public getExtraction(stringXi_cuadrado : string): number {
        let extraction : number = 0;
        switch (stringXi_cuadrado.length) {
            case 8 :
                extraction = this.extract(2, 4, stringXi_cuadrado);
                break;
            case 7 :
                extraction = this.extract(1, 4, stringXi_cuadrado);              
                break;
            case 6 :
                extraction = this.extract(0, 4, stringXi_cuadrado);
                break;
            case 5 :
                extraction = this.extract(0, 3, stringXi_cuadrado);
                break;
            case 4 :
                extraction = this.extract(0, 2, stringXi_cuadrado);
                break;
            case 3 :
                extraction = this.extract(0, 1, stringXi_cuadrado);
                break;
        }
        return extraction;
    }

    public extract(start: number, quantity: number, 
        stringXi_cuadrado : string) : number {
        let newWord = '';
        for (let i = 0; i < quantity; i++) {
            newWord += stringXi_cuadrado.charAt(start);
            start++;
        }
        return parseInt(newWord);
    }
}