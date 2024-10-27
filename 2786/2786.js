var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2786\\input.txt', 'utf8');
var lines = input.split('\n');

var L = parseInt(lines[0]);
var C = parseInt(lines[1]);

var T1 = L*C + ((C-1)*(L-1));
var T2 = ((C-1)*2)+((L-1)*2);

console.log(T1);
console.log(T2);