// projeto de construção da casa 8x10

// area = lado * lado
// area = 8 * 10 = 80

// casa perfeitamente quadrada:
// metrosCasa = sqrt(80) = 8.944 = 8 (truncado)
// metrosCasa * metrosCasa = 64m²
// minimo de 64m² necessarios para construção do projeto
// lado necessario do terreno: sqrt(64) = 8

// legislacao: 50% de utilizacao do terreno

// z = 10
// y = 100
// x = z/y

// z = area --> entrada: (lado * lado)
// x = saida --> saida (calculo abaixo)
// y = porcent --> entrada: (porcentagem)

// 400 * (0.2) = 80
// x * y = z
// x = z/y
// x = sqrt(x) --> truncar


// terreno = area/porcent

//ENTRADA (MEDIDAS DO PROJETO E PORCENTAGEM)
// LARGURA COMPRIMENTO PORCENTAGEM

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var lines = ["8 10 20","1 10 100","10 3 100","0"];

lines.forEach(arrayIterator);

function arrayIterator(item, index) {

    if(item.length < 3)
        return;

    var values = item.split(" ");

    var lado1 = parseInt(values.shift());
    var lado2 = parseInt(values.shift());
    var porcentLegislacao = parseInt(values.shift());
    
    var area = lado1 * lado2;
    // x = z/y
    var ladoTerreno = area/(porcentLegislacao/100);
    ladoTerreno = parseInt(Math.sqrt(ladoTerreno))
    
    console.log(ladoTerreno); //8.944
}



