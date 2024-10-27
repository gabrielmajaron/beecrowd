var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3055\\input.txt', 'utf8');
var lines = input.split('\n');

//x = (M - (A/2))*2

var a = parseInt(lines[0]);
var m = parseInt(lines[1]);

var b = ((m - (a/2)) * 2);

console.log(b);