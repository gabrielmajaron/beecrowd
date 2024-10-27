var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2845\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);
    var line = lines[i++].split(' ');

    var max = 0;
    for(var j=0; j<n; j++)
    {
        var value = parseInt(line[j]);
        if(value > max)
            max = value;
    }

    console.log(max+1);

    i--;
}