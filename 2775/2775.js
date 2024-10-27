var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2775\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdPacotes = parseInt(lines[i++]);
    var pacotes = lines[i++].split(' ');
    var temposTransicao = lines[i++].split(' ');
    var somaTempo = 0;

    for(var j=1; j<=qtdPacotes; j++)
    {
        var k=j-1;
        
        for(; k<qtdPacotes && j != parseInt(pacotes[k]); k++);

        if(j == parseInt(pacotes[k]))
            for(var l=k; l>j-1; l--)
            {
                var aux = pacotes[l];
                pacotes[l] = pacotes[l-1];
                pacotes[l-1] = aux;

                aux = temposTransicao[l];
                temposTransicao[l] = temposTransicao[l-1];
                temposTransicao[l-1] = aux;

                somaTempo+=parseInt(temposTransicao[l])+parseInt(temposTransicao[l-1]);
            }
    }

    console.log(somaTempo);

    i--;
}