var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2547\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var visitantes = parseInt(lines[i].split(' ')[0]);
    var alturaMin = parseInt(lines[i].split(' ')[1]);
    var alturaMax = parseInt(lines[i].split(' ')[2]);

    var permitidos = 0;

    for(var j=0; j<visitantes; j++)
    {
        var altura = parseInt(lines[++i]);
        if(altura <= alturaMax && altura >= alturaMin)
            permitidos++;
    }
    
    console.log(permitidos);
}
