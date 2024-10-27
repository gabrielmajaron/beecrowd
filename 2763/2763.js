var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2763\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var cpf = lines[i++].replace('-','.').split('.');
    for(var j=0; j<cpf.length;j++)
        console.log(cpf[j]);

    i--;
}