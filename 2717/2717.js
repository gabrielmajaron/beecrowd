var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2717\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var minutosRestantes = parseInt(lines[i++]);
    var minutosPresentes = lines[i++].split(' ');
    
    for(var j=0; j<minutosPresentes.length;j++)
        minutosRestantes-=parseInt(minutosPresentes[j]);

    minutosRestantes >= 0 ? console.log("Farei hoje!") : console.log("Deixa para amanha!");
    
    i--;
}