var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3084\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');
    var angHora = parseInt(line[0]);
    var angMin = parseInt(line[1]);

    //360 - 60
    //angHora - x
    // x = angHora*60/360
    var hora = angHora*12/360;
    var min = angMin*60/360;

    var strHora = hora.toString().padStart(2, '0');
    var strMin = min.toString().padStart(2, '0');

    console.log(`${strHora}:${strMin}`);

    i--;
}