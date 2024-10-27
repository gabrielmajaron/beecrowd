var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3145\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var line = lines[i++].split(' ');

    var anoes = parseInt(line[0]);
    var distVila = parseInt(line[1]);

    var result = distVila/(anoes+2);

    console.log(result.toFixed(2));
    i--;
}