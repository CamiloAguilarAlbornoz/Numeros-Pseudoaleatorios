export class Poker {

    private charListRi : string;
    private arrayRepetidos : any[][];
    public nombrePoker : string;

    constructor(actualRi : number) {
        this.charListRi = actualRi.toString();
        this.arrayRepetidos = [];
        this.nombrePoker = '';
        this.contarRepetidos();
        this.asignarNombreYProbabilidad();
    }

    asignarNombreYProbabilidad() {
        if (this.arrayRepetidos.length == 0) {
            this.nombrePoker = 'D';
        } else {
            if (this.arrayRepetidos.length == 2) {
                if (this.arrayRepetidos[0][1] + this.arrayRepetidos[1][1] == 3) {
                    this.nombrePoker = 'F';
                } else {
                    this.nombrePoker = 'T';
                }
            } else {
                switch(this.arrayRepetidos[0][1]) {
                    case 1 : 
                        this.nombrePoker = 'O';
                        break;
                    case 2 :
                        this.nombrePoker = 'K';
                        break;
                    case 3 :
                        this.nombrePoker = 'P';
                        break;
                    case 4 :
                        this.nombrePoker = 'Q';
                        break;
                }
            }
        }
    }

    contarRepetidos() {
        let repetidos : string = '';
        let cantidadRepetidos = 0;
        for (let i = 2; i < this.charListRi.length; i++) {
            let actual = this.charListRi.charAt(i);
            if (repetidos.indexOf(actual) == -1) {
                for (let j = 2; j < this.charListRi.length; j++) {
                    if (i != j) {
                        let letter = this.charListRi.charAt(j);
                        if (actual == letter) {
                            cantidadRepetidos++;
                        }
                    }
                }
                if (cantidadRepetidos != 0) {
                    this.arrayRepetidos.push([actual, cantidadRepetidos]);
                    repetidos += actual;
                    cantidadRepetidos = 0;
                }
            }
        }
    }
}