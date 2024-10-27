var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2679\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

(n+1)%2 ===0 ? console.log(n+1) : console.log(n+2);