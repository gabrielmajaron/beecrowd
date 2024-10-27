var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2551\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var dias = parseInt(lines[i++]);
    var maiorVelMedia, posVelMaiorMedia;
    
    for(var j=0; j<dias; j++)
    {
        var corrida = lines[i++].split(' ');
        var duracao = parseFloat(corrida[0]);
        var distancia = parseFloat(corrida[1]);
        var velMedia = distancia/duracao;
        
        if(j === 0)
        {
            maiorVelMedia = velMedia;
            posVelMaiorMedia = j;
            console.log(posVelMaiorMedia+1);
            continue;
        }

        if(velMedia > maiorVelMedia)
        {
            maiorVelMedia = velMedia;
            posVelMaiorMedia = j;
            console.log(posVelMaiorMedia+1);
        }
    }

    if(dias > 0)
        i--;
}


