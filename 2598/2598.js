var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2598\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    var line = lines[i];

    if(line === undefined || line === '')
        continue;

    var values = line.split(' ').map(e => parseInt(e));

    var result = parseInt(values[0] / values[1]) + (values[0] % values[1] > 0 ? 1 : 0);
    console.log(result);
}