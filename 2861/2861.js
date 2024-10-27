var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2861\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);
    for(var j=0;j<n;j++)
    {
        i++;
        console.log("gzuz");
    }
    i--;
}