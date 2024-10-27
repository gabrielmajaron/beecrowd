var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2420\\input.txt', 'utf8');
var lines = input.split('\n');

function metadeDireitaValida(sum, pos, line)
{
    var sumDir = 0;
    for(var k=pos; k<line.length; k++)
    {
        sumDir+=line[k];
        if(sumDir>sum)
            return false;
    }
    return true;
}

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var n = parseInt(lines[i++]);
    var line = lines[i].replace('\r','').split(' ').map(elemento => parseInt(elemento, 10));

    var sum = 0 ;
    for(var j=0; j<n; j++)
    {
        sum+=line[j];
        if(metadeDireitaValida(sum, j, line))
        {
            console.log(j);
            break;
        }
    }
}