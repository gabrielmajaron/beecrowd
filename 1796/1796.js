var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1796\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);
var votes = lines[1].split(' ').map(e => parseInt(e));

var satisfeitos = 0;
for(var i=0; i<n; i++)
{
    if(votes[i] === 0)
        satisfeitos++;
}

satisfeitos > n/2 ? console.log("Y") : console.log("N");