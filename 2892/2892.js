var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2892\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdLinhas = parseInt(lines[i++]);

    var result = 0;
    for(var j=0; j<qtdLinhas; j++)
    {
        var line = lines[i++].split(' ');

        var mult = line[0][0] === 'G' ? -1 : 1;

        result += parseInt(line[1]) * mult;
    }
    result >= 0 ? console.log("A greve vai parar.") : console.log("NAO VAI TER CORTE, VAI TER LUTA!");
    i--;
}