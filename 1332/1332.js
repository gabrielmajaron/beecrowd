var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1332\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i].replace('\r','');

    if(line.length == 5)
    {
        console.log(3);
        continue;
    }
    if(line.indexOf("on") >=0 || line.indexOf("ne") >= 0 || (line[0] == 'o' && line[2] == 'e'))
    {
        console.log(1);
        continue;
    }
    console.log(2);
}