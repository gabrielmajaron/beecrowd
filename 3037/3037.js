var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3037\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var jogos = parseInt(lines[i++]);

    for(var j=0; j<jogos; j++)
    {
        var somaJoao = 0;
        for(var k=0; k<3; k++)
        {
            var line = lines[i++].split(' ');
            var x = parseInt(line[0]);
            var d = parseInt(line[1]);

            somaJoao += (x*d);
        }

        var somaMaria = 0;

        for(var k=0; k<3; k++)
        {
            var line = lines[i++].split(' ');
            var x = parseInt(line[0]);
            var d = parseInt(line[1]);

            somaMaria += (x*d);
        }

        somaJoao >= somaMaria ? console.log("JOAO") : console.log("MARIA");
    }

    i--;
}