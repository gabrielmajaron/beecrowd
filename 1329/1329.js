var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1329\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    var line = lines[i++];

    if(line === undefined || line === '')
        continue;

    var n = parseInt(line);

    if(n === 0)
        break;

    var results = lines[i].split(' ').map(e => parseInt(e));
    var mary = 0, john = 0;
    for(var j=0; j<n; j++)
        results[j] === 0 ? mary++ : john++;
    
    console.log(`Mary won ${mary} times and John won ${john} times`);
}
