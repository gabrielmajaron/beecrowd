var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3358\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

function ehVogal(c)
{
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

for(var i=1; i<n+1; i++)
{    
    var name = lines[i].replace('\r', '');
    
    var sequenciaConsoante = 0;
    for(var j=0; j<name.length; j++)
    {
        if(!ehVogal(name[j].toLowerCase()))
        {
            sequenciaConsoante++;
            if(sequenciaConsoante == 3)
                break;
        }
        else
            sequenciaConsoante = 0;
    }

    if(sequenciaConsoante == 3)
        console.log(`${name} nao eh facil`);
    else
        console.log(`${name} eh facil`);
}