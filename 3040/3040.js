var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3040\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var casos = parseInt(lines[i++]);
    for(var j=0; j<casos; j++)
    {
        var line = lines[i++].split(' ');
        var h = parseInt(line[0]);
        var d = parseInt(line[1]);
        var g = parseInt(line[2]);

        if(h >= 200 && h <= 300 && d >= 50 && g >= 150)
            console.log("Sim");
        else
            console.log("Nao");
    }
    i--;
}