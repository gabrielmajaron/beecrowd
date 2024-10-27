var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2423\\input.txt', 'utf8');
var lines = input.split('\n');

var values = lines[0].split(' ').map(e => parseInt(e));

var a = parseInt(values[0]/2);
var b = parseInt(values[1]/3);
var c = parseInt(values[2]/5);

var min = a <= b && a <= c ? a : b <= a && b <= c ? b : c;

console.log(min);