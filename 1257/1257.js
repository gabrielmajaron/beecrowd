var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1257\\input.txt', 'utf8');
var lines = input.split('\n');

var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for(var i=1; i<lines.length; i++)
{
    var line = lines[i++];

    if(line === undefined || line === '')
        continue;

    var n2 = parseInt(line);

    var soma = 0;
    for(var j=0; j<n2;j++)
    {
        line = lines[i++].replace('\r','');
        for(var k=0; k<line.length; k++)
        {
            var posL = alfabeto.indexOf(line[k]);     
            soma+=posL+j+k;
        }           
    }
    i--;
    console.log(soma);
}