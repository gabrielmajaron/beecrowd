var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2879\\input.txt', 'utf8');
var lines = input.split('\n');

var vezesGanhou = 0;

for(var i=1; i<lines.length; i++)
{        
    var portas = [1,2,3];
    var escolha = 1;

    if(lines[i] === undefined || lines[i] === '')
        continue;

    var portaCarro = parseInt(lines[i]);
    
    var aux = [];
    for(var j=0; j<portas.length; j++)
    {
        if(portas[j] != escolha && portas[j] != portaCarro)
            continue;

        aux.push(portas[j]);
    }

    portas = aux;
    escolha = portas[0] === escolha ? portas[1] : portas[0];

    if(portaCarro === escolha)
        vezesGanhou++;
}

console.log(vezesGanhou);