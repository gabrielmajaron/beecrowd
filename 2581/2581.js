var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2581\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var perguntas = parseInt(lines[i]);

    for(var j=0; j<perguntas; j++)
        console.log("I am Toorg!");

    i+=perguntas;
}
