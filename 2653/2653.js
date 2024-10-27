var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2653\\input.txt', 'utf8');
var lines = input.split('\n');

var joias = [];
for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var joia = lines[i].replace('\r','').replace('\n','');

    var pos = joias.indexOf(joia);
    if(pos == -1)
    {
        joias.push(joia);
        continue;
    }
}

console.log(joias.length);
