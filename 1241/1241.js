var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1241\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i].replace('\r','').replace('\n','').split(' ');
    var string = line[0];
    var validation = line[1];

    if(string.length<validation.length)
    {
        console.log('nao encaixa');
        continue;
    }

    var encaixa = true;
    for(var j=string.length-validation.length, k=0; j<string.length;j++, k++)
    {
        if(string[j] != validation[k])
        {            
            encaixa = false;
            break;
        }
    }
    encaixa ? console.log('encaixa') : console.log('nao encaixa');
}