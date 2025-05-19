const letras = ['B','I','N','G','O'];
const numeros = {
    B:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    I:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    N:[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
    G:[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    O:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
};
let enTablero = {
    B:[],
    I:[],
    N:[],
    G:[],
    O:[],
};
var num = [], select = [], aux = 0;



function escogiendoTablero() {
    for (let i = 0; i < letras.length; i++) {
        switch (letras[i]) {
            case 'B':
                escogiendoLetra(numeros.B);
                vaciarVariables();
                break;
            case 'I':
                escogiendoLetra(numeros.I);
                vaciarVariables();
                break;
            case 'N':
                escogiendoLetra(numeros.N);
                vaciarVariables();
                break;
            case 'G':
                escogiendoLetra(numeros.G);
                vaciarVariables();
                break;
            case 'O':
                escogiendoLetra(numeros.O);
                vaciarVariables();
                break;
        }
    }
}
escogiendoTablero();


function escogiendoLetra(numLetra) {
    for (let i = 0; i < 5; i++) {
        getRandomNumber();
        while (disponible() === false) {
            getRandomNumber();
        }
        num.push(numLetra[aux]);
        select.push(aux);
    }
    return num;
}

function getRandomNumber() {
    aux = Math.floor(Math.random() * 14 + 0);
}

function disponible() {
    return !select.includes(aux);
}

function vaciarVariables() {
    num = [];
    select = []; 
    aux = 0;
}

console.log(enTablero);