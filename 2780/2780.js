var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2780\\input.txt', 'utf8');
var lines = input.split('\n');

var dist = parseInt(lines[0]);

var pontuacao = dist <= 800 ? 1 : dist > 800 && dist <= 1400 ? 2 : dist > 1400 && dist <= 2000 ? 3 : 0;

console.log(pontuacao);