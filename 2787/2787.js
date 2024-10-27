var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2787\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var x = parseInt(lines[i++]);
    var y = parseInt(lines[i++]);

    var xPar = x%2 === 0;
    var yPar = y%2 === 0;    

    var preto = yPar ? !xPar : xPar;

    console.log(preto ? "0" : "1");
    i--;
}