var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3039\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var somaF = 0, somaM = 0;
    var qtdCriancas = parseInt(lines[i++]);
    for(var j=0; j<qtdCriancas;j++)
    {
        var line = lines[i++].split(' ');
        var sexo = line[1][0];

        if(sexo == 'F')
            somaF++;
        else
            somaM++;
    }

    console.log(`${somaM} carrinhos`);
    console.log(`${somaF} bonecas`);

    i--;
}