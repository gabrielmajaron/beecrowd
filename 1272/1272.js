var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1272\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    var line = lines[i];

    if(line === undefined || line === '')
        continue;
    
    var splited = line.split(' ');
    var output = '';
    for(var j=0; j<splited.length; j++)
    {
        if(splited[j][0] !== undefined && splited[j][0] !== ' ')
            output += splited[j][0];
    }
    console.log(output);
}
