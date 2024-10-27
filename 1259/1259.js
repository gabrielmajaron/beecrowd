var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1259\\input.txt', 'utf8');
var lines = input.split('\n');

var pares = [];
var impares = [];

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);
    for(var j=0; j<n; j++)
    {
        var num = parseInt(lines[i++]);

        num % 2 == 0 ? pares.push(num) : impares.push(num);
    }
    
    i--;
}
pares = pares.sort((a,b) => {return a-b});
impares = impares.sort((a,b) => {return b-a});

for(var i=0; i<pares.length; i++)
    console.log(pares[i]);

for(var i=0; i<impares.length; i++)
    console.log(impares[i]);