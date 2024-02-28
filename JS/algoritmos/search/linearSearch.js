import { defaultEquals } from "../../../util.js";

const DOES_NOT_EXIST = -1;

// Função de busca sequencial
function sequencialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Comparando ${value} com ${array[i]}`);
        if (equalsFn(value, array[i])) {
            console.log(`Elemento encontrado! ${value} está na posição ${i}`);
            return i;
        }
    }
    console.log(`Elemento não encontrado.`);
    return DOES_NOT_EXIST;
}

const searchArray = [5,4,3,2,1];


const result = sequencialSearch(searchArray, 3);

console.log(result);