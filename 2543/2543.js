var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2543\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i+1] === undefined)
        continue;

    var data = lines[i++].split(' ');
    var qtdeGameplays = parseInt(data[0]);
    var meuIdUniversidade = parseInt(data[1]);
    var total = 0;

    for(var j=0; j<qtdeGameplays; j++)
    {
        var jogo = lines[i++].split(' ');
        var idUniversidade = parseInt(jogo[0]);        
        var tipoJogo = parseInt(jogo[1]);

        if(idUniversidade === meuIdUniversidade && tipoJogo === 0) 
            total++;
    }
    i--;        
    console.log(total);
}
