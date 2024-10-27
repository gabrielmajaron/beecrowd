var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2388\\input.txt', 'utf8');
var lines = input.split('\n');

var dist = 0;
for(var i=1; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var t = parseInt(lines[i].split(' ')[0]);
    var d = parseInt(lines[i].split(' ')[1]);

    dist += t*d;
}

console.log(dist);
