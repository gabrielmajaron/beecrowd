var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1262\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    var line = lines[i++];

    if(line === undefined || line === '')
        continue;

    var operacoes = line.replace('\r','');
    var processos = parseInt(lines[i]);
    var ciclos = 0;

    for(var j=0; j<operacoes.length; j++)
    {
        while(operacoes[j] === 'W')
        {
            ciclos++;
            j++;
        }
        var rCount = 0;
        while(operacoes[j] === 'R')
        {
            rCount++;
            j++;
        }
        
        if(j-1>=0 && operacoes[j-1] === 'R')
        {
            if(rCount>processos)
                ciclos += Math.ceil(rCount/processos);
            else
                ciclos++;
        }
        
        j--;
    }
    
    console.log(ciclos);
}