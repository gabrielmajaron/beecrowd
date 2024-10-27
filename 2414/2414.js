var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2414\\input.txt', 'utf8');
var lines = input.split('\n');

var numeros = lines[0].split(' ');

var maior = parseInt(numeros[0]);
for(var i=1; i<numeros.length; i++)
{
    if(parseInt(numeros[i]) > maior)
        maior = parseInt(numeros[i]);
}

console.log(maior);