var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1872\\input.txt', 'utf8');
var lines = input.split('\n');

for(var index = 0; index<lines.length; index++)
{
    var tam = lines[index];

    if(tam === undefined || tam === 0  || tam === '')
        continue;

    var m = [];

    for(var i = 0; i< tam; i++)
    {
        m[i] = [];
        for(var j = 0; j<tam; j++)
        {
           m[i][j] = 0;
        }
    }

    // diagonal principal
    for(var i = 0; i<tam; i++)
    {
        m[i][i] = 2;
    }

    // diagonal secundaria
    for(var i = 0; i<tam; i++)
    {
        m[i][tam-1-i] = 3;
    }

    var limit = parseInt(tam/3);
    // interna
    for(var i = limit; i>0 && i<(tam-limit); i++)
    {        
        for(var j = limit; j<(tam-limit); j++)
        {
            m[i][j] = 1;
        }
    }

    if (!m[parseInt((tam-1)/2)])
        m[parseInt((tam-1)/2)] = [];

    m[parseInt((tam-1)/2)][parseInt((tam-1)/2)] = 4;

    var line = "";

    for(var i = 0; i<tam; i++)
    {
        for(var j = 0; j<tam; j++)
            line += m[i][j];
            
        if(i+1 == tam && index == lines.length-1)
            continue;
            
        line +="\n";
    }

    console.log(line);
}