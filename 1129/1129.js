var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1129\\input.txt', 'utf8');
var lines = input.split('\n');

var letras = ['A','B','C','D','E'];

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var questoes = parseInt(lines[i++]);

    if(questoes === 0)
        break;

    for(var j=0; j<questoes;j++)
    {
        var linhaResposta = lines[i+j].split(' ');
        var resposta, qtdeRespondida = 0;

        for(var k=0; k<linhaResposta.length; k++)
        {
            if(parseInt(linhaResposta[k]) <= 127)
            {
                resposta = letras[k];
                qtdeRespondida++;
            }
        }

        qtdeRespondida === 1 ? console.log(resposta) : console.log('*');
    }
    i+=j-1;
}
