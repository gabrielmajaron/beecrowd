var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2670\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var funcionariosAndar1 = parseInt(lines[i++]);
    var funcionariosAndar2 = parseInt(lines[i++]);
    var funcionariosAndar3 = parseInt(lines[i++]);

    var minutosMaqAndar1 = funcionariosAndar2*2 + funcionariosAndar3*4;
    var minutosMaqAndar2 = funcionariosAndar1*2 + funcionariosAndar3*2;
    var minutosMaqAndar3 = funcionariosAndar1*4 + funcionariosAndar2*2;

    var menorMin = minutosMaqAndar1;
    
    if(minutosMaqAndar2 < menorMin)
        menorMin = minutosMaqAndar2;

    if(minutosMaqAndar3 < menorMin)
        menorMin = minutosMaqAndar3;

    console.log(menorMin);
    i--;
}