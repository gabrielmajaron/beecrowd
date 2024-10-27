var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1943\\input.txt', 'utf8');
var lines = input.split('\n');

var k = parseInt(lines[0]);

var vet = [1, 3, 5, 10, 25, 50, 100];

var i;

for(i=0; i<vet.length; i++)
    if(k<=vet[i])
        break;

console.log("Top "+ vet[i]);

