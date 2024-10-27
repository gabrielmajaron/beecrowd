var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2540\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    var qtdJogadores = lines[i++];

    if(qtdJogadores <=0 || lines[i] == undefined) // <-- ZOADO EM TEM QUE VALIDAR ISSO :d
        continue;

    var jogadores = lines[i].split(' ');
    var qtdeSim = 0, qtdeNao = 0;
    var minimoImpeachment = (qtdJogadores/3) * 2;

    for(var j=0; j<qtdJogadores; j++)
    {
        parseInt(jogadores[j]) === 0 ? qtdeNao++ : qtdeSim++;
    }

    qtdeSim >= minimoImpeachment ? console.log("impeachment") : console.log("acusacao arquivada");
}