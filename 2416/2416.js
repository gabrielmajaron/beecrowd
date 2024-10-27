var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2416\\input.txt', 'utf8');
var lines = input.split('\n');

var d = parseInt(lines[0].split(' ')[0]);
var pista = parseInt(lines[0].split(' ')[1]);

console.log(d%pista);

