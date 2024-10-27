var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2779\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var espacosAlbum = parseInt(lines[i++]);
    var figCompradas = parseInt(lines[i++]);

    var compradasNaoRepetidas = [];

    for(var j=0;j<figCompradas;j++)
    {
        var figComprada = parseInt(lines[i++]);
        if(compradasNaoRepetidas.indexOf(figComprada) == -1)
            compradasNaoRepetidas.push(figComprada);
    }
    
    console.log(espacosAlbum - compradasNaoRepetidas.length);

    i--;
}