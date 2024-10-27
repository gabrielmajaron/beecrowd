var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2808\\input.txt', 'utf8');
var lines = input.split('\n');

var mapLetras = { 
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4,
    "e" : 5,
    "f" : 6,
    "g" : 7,
    "h" : 8
};

function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;
        }
    }
    return false;
}

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var posSplit = lines[i++].split(' ');

    var letraOrigem = posSplit[0][0];
    var xOrigem = mapLetras[letraOrigem];
    var yOrigem = parseInt(posSplit[0][1]);

    var letraDestino = posSplit[1][0];
    var xDestino = mapLetras[letraDestino];
    var yDestino = parseInt(posSplit[1][1]);    

    var possibilidades = [];
    possibilidades.push([xOrigem-2, yOrigem+1]);
    possibilidades.push([xOrigem-1, yOrigem+2]);
    possibilidades.push([xOrigem+1, yOrigem+2]);
    possibilidades.push([xOrigem+2, yOrigem+1]);
    possibilidades.push([xOrigem+2, yOrigem-1]);
    possibilidades.push([xOrigem+1, yOrigem-2]);
    possibilidades.push([xOrigem-1, yOrigem-2]);
    possibilidades.push([xOrigem-2, yOrigem-1]);    

    var destino = [xDestino, yDestino];
    var movimentoValido = isItemInArray(possibilidades, destino);

    var dentroTabuleiro = 
    xOrigem>=1 && xOrigem<=8 && yOrigem>=1 && yOrigem<=8
    && xDestino>=1 && xDestino<=8 && yDestino>=1 && yDestino<=8;

    console.log(movimentoValido && dentroTabuleiro ? "VALIDO" : "INVALIDO");

    i--;
}


