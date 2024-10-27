/**/

var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3046\\input.txt', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

console.log(((N+1)*(N+2))/2);
