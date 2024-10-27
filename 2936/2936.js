var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2936\\input.txt', 'utf8');
var lines = input.split('\n');

var gramasConsumidas = [300, 1500, 600, 1000, 150];
var totalGramas = 0;

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    totalGramas += gramasConsumidas[i] * parseInt(lines[i]);
}

console.log(totalGramas+225);
