var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2812\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var testes = parseInt(lines[i++]);

    for(var j=0; j<testes; j++)
    {
        var n = parseInt(lines[i++]);
        var numeros = lines[i++].split(' ');

        var impares = [];

        for(var k=0; k<n; k++)
        {
            var num = parseInt(numeros[k]);

            if(num%2 !== 0)
                impares.push(num);
        }
        
        impares = impares.sort((a,b) => a-b);

        var tl = impares.length-1;

        var output = "";
        for(var k=0; k<=tl;k++, tl--)
        {
            if(k == tl)
            {
                if(impares.length > 1)
                    output += " ";

                output += impares[k];
                break;
            }

            output += impares[tl] + " " + impares[k];

            if(k+2<tl)
                output += " ";
        }

        console.log(output);
    }

    i--;
}