var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2708\\input.txt', 'utf8');
var lines = input.split('\n');

var turistasRestantes = 0;
var jipesRestantes = 0;

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++];

    if(line === "ABEND")
        break;

    var sentido = line.split(' ')[0];
    var turistas = parseInt(line.split(' ')[1]);

    if(sentido === "SALIDA")
    {
        jipesRestantes++;
        turistasRestantes+=turistas;
    }
    else
    if(sentido === "VUELTA")
    {
        jipesRestantes--;
        turistasRestantes-=turistas;
    }
    i--;
}

console.log(turistasRestantes);
console.log(jipesRestantes);