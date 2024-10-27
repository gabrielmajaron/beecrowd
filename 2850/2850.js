var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2850\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].replace('\r','').replace('\n','');
    
    if(line === 'esquerda')
        console.log("ingles");
    else
    if(line === 'direita')
        console.log("frances");
    else
    if(line === 'nenhuma')
        console.log("portugues");
    else
    if(line === 'as duas')
        console.log("caiu");

    i--;
}