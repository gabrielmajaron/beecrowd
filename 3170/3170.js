var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3170\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var bolinhas = parseInt(lines[i++]);
    var galhos = parseInt(lines[i++]);

    var bolinhasNecessarias = parseInt(galhos/2);

    if(bolinhas >= bolinhasNecessarias)
        console.log("Amelia tem todas bolinhas!");
    else
        console.log(`Faltam ${bolinhasNecessarias-bolinhas} bolinha(s)`)

    i--;
}