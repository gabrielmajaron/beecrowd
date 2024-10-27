var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2721\\input.txt', 'utf8');
var lines = input.split('\n');

var renas = ['Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen', 'Rudolph'];

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].replace('\r','').replace('\n','');

    var bolas = line.split(' ');

    var soma = 0;

    for(var j=0; j<bolas.length;j++)
        soma+=parseInt(bolas[j]);

    var resto = soma%renas.length;

    if(resto === 0)
        console.log(renas[renas.length-1]);
    else
        console.log(renas[resto-1]);

    i--;
}