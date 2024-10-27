var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2759\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var a = lines[i++].replace('\n', '').replace('\r','');
    var b = lines[i++].replace('\n', '').replace('\r','');
    var c = lines[i++].replace('\n', '').replace('\r','');

    console.log(`A = ${a}, B = ${b}, C = ${c}`);
    console.log(`A = ${b}, B = ${c}, C = ${a}`);
    console.log(`A = ${c}, B = ${a}, C = ${b}`);

    i--;
}