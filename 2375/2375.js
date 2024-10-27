var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2375\\input.txt', 'utf8');
var lines = input.split('\n');

var tam = parseInt(lines[0]);
var medidas = lines[1].split(' ');

for(var i=0; i<medidas.length;i++)
    if(parseInt(medidas[i]) < tam)
    {
        console.log('N');
        return;
    }

console.log('S');

