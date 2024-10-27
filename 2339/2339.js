var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2339\\input.txt', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0].split(' ')[0]);
var b = parseInt(lines[0].split(' ')[1]);
var c = parseInt(lines[0].split(' ')[2]);

console.log((a*c)>b ? 'N' : 'S');
