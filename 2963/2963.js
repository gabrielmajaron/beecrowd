var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2963\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdCandidatos = parseInt(lines[i++]);

    var posMaior = -1, pontMaior = -1;
    for(var j=0; j<qtdCandidatos; j++)
    {
        var pontuacao = parseInt(lines[i++]);

        if(pontuacao > pontMaior)
        {
            pontMaior = pontuacao;
            posMaior = j;
        }
    }
    
    posMaior === 0 ? console.log("S") : console.log("N");
    i--;
}
