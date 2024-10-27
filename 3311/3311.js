var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3311\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

lines = lines.slice(1);

lines = lines.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

for(var i=0; i<n; i++)
    console.log(lines[i]);
