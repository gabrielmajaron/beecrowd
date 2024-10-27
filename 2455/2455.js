var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2455\\input.txt', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(' ');
var p1 = parseInt(line[0]);
var c1 = parseInt(line[1]);
var p2 = parseInt(line[2]);
var c2 = parseInt(line[3]);

var dif = p1*c1 - p2*c2;

var msg = dif === 0 ? 0 : dif > 0 ? -1 : 1;

console.log(msg);
