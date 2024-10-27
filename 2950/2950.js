var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2950\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var line = lines[i++].split(' ');
    var dist = parseInt(line[0]);
    var diametro1 = parseInt(line[1]);
    var diametro2 = parseInt(line[2]);

    console.log(parseFloat(dist/(diametro1+diametro2)).toFixed(2));

    i--;
}