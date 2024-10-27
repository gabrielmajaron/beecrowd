var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2764\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var data = lines[i++].split('/');
    console.log(`${data[1]}/${data[0]}/${data[2]}`);
    console.log(`${data[2]}/${data[1]}/${data[0]}`);
    console.log(`${data[0]}-${data[1]}-${data[2]}`);
    i--;   
}
