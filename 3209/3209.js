var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3209\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    for(var j=0; j<n; j++)
    {
        var num = lines[i++].split(' ');
        var qtdFiltrosLinha = parseInt(num[0]);

        // remove primeiro elem (qtdFiltrosLinha)
        num = num.slice(1);

        var tomadas = 0;
        
        for (var k = 0; k < qtdFiltrosLinha; k++)
            tomadas += parseInt(num[k]);    
        
        tomadas -= qtdFiltrosLinha - 1;
        console.log(tomadas);
    }
    i--;
}

