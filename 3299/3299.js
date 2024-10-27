var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3299\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = lines[i];
    var splitN = n.split('13');
    splitN.length > 1 ? console.log(`${n} es de Mala Suerte`) : console.log(`${n} NO es de Mala Suerte`);    
}