var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2418\\input.txt', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(' ').map(e => parseFloat(e));

line.sort((a,b)=>a-b);

console.log((line[1]+line[2]+line[3]).toFixed(1));