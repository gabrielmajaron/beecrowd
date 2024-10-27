var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2663\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdCompetidores = parseInt(lines[i++]);
    var qtdVagas = parseInt(lines[i++]);
    
    var pontos = [];

    for(var j=0; j<qtdCompetidores;j++)
        pontos.push(parseInt(lines[i++]));

    pontos = pontos.sort((a, b) => parseInt(a) - parseInt(b));

    var empatesUltimoLugar = 0;
    var posUltimoLugar = pontos.length-qtdVagas;
    var pontuacaoUltimoLugar = pontos[posUltimoLugar];

    for(var k=posUltimoLugar-1; k>=0; k--)
    {
        if(pontos[k] != pontuacaoUltimoLugar)
            break;

        empatesUltimoLugar++;
    }
    
    console.log(qtdVagas+empatesUltimoLugar);
    i--;
}
