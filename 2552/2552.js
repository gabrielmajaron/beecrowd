var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2552\\input.txt', 'utf8');
var lines = input.split('\n');

for(var linesIndex=0; linesIndex<lines.length; linesIndex++)
{
    if(lines[linesIndex] === undefined || lines[linesIndex] === '')
        continue;
    
    var dimensaoMatriz = lines[linesIndex++].split(' ');
    var n = parseInt(dimensaoMatriz[0]);

    var matriz = [];

    for(var i=0; i<n; i++)
    {
        var line = lines[linesIndex++].split(' ');
        matriz.push(line);
    }
    
    for(var i=0; i<matriz.length; i++)
    {
        for(var j=0; j<matriz[i].length; j++)
        {
            if(parseInt(matriz[i][j]) == 1)
                matriz[i][j] = '9';
        }
    }

    var output = '';
    for(var i=0; i<matriz.length; i++)
    {
        for(var j=0; j<matriz[i].length; j++)
        {
            if(parseInt(matriz[i][j]) === 9)
            {
                output+=parseInt(matriz[i][j]);
                continue;
            }

            var qtdeQueijos = 0;
            var elemCima = matriz[i-1] === undefined ? 0 : matriz[i-1][j];
            var elemEsq = matriz[i][j-1];
            var elemBaixo = matriz[i+1] === undefined ? 0 : matriz[i+1][j];
            var elemDir = matriz[i][j+1];
            
            if(elemCima !== undefined && parseInt(elemCima) === 9)
            qtdeQueijos++;
            
            if(elemEsq !== undefined && parseInt(elemEsq) === 9)
                qtdeQueijos++;
        
            if(elemBaixo !== undefined && parseInt(elemBaixo) === 9)
                qtdeQueijos++;
            
            if(elemDir !== undefined && parseInt(elemDir) === 9)
                qtdeQueijos++;

            output+=qtdeQueijos;
        }
        if(i+1<matriz.length)
            output+='\n';
    }

    console.log(output);
    if(n > 0)
        linesIndex--;
}


