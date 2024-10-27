var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2783\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');
    var qtdFigAlbum = parseInt(line[0]);
    var qtdCarimbadas = parseInt(line[1]);
    var qtdCompradas = parseInt(line[2]);

    var figCarimbadas = lines[i++].split(' ');
    var figCompradas = lines[i++].split(' ');
    
    var compradasCarimbadas = [];
    for(var j=0; j<qtdCompradas; j++)
    {
        var figComprada = parseInt(figCompradas[j]);
        
        var k;
        for(k=0; k<qtdCarimbadas && parseInt(figCarimbadas[k]) != figComprada; k++);
        
        if(k<qtdCarimbadas)
        {
            if(compradasCarimbadas.indexOf(figComprada) == -1)
                compradasCarimbadas.push(figComprada);
        }
    }
    
    var result = qtdCarimbadas-compradasCarimbadas.length;
    console.log(result < 0 ? 0 : result);

    i--;
}


