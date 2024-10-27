var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2374\\input.txt', 'utf8');
var lines = input.split('\n');

var p1 = parseInt(lines[0]);
var p2 = parseInt(lines[1]);

console.log(p1-p2);
