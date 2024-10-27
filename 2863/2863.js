var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2863\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var tentativas = parseInt(lines[i++]);

    var menor = parseFloat(lines[i++]);
    for(var j=1; j<tentativas; j++)
    {
        var tempo = parseFloat(lines[i++]);

        if(tempo < menor)
            menor = tempo;
    }
    
    console.log(menor.toFixed(2));
    i--;
}