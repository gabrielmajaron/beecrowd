var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3146\\input.txt', 'utf8');
var lines = input.split('\n');

var pi = 3.14;

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var r = parseFloat(lines[i++]);

    var c = 2*pi*r;

    console.log(c.toFixed(2));

    i--;
}