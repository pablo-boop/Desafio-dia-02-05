//Valor inserido no prompt
let valor = prompt("Digite uma frase").trim(); 

//Método que divide as palavras
let palavras = valor.split(/\s+/);

//Condições de frase
for(let i = 0; i < valor.length; i++) {
    while(i < 1) {
        //Console da frase dividida, e imprimida em um array
        console.log(palavras);
        i++;
        //Console da quantidade de palavras da frase
        console.log("Número de palavras: " + palavras.length);
    }
}
