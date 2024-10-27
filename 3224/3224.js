var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3224\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var jonLimit = lines[i++].length;
    var doctorRequest = lines[i++].length;

    jonLimit >= doctorRequest ? console.log("go") : console.log("no");

    i--;
}