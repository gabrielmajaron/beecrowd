var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2434\\input.txt', 'utf8');
var lines = input.split('\n');

var saldo = parseInt(lines[0].split(' ')[1]);
var menorSaldo = saldo;

for(var i=1; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    saldo += parseInt(lines[i]);
    if(saldo < menorSaldo)
        menorSaldo = saldo;
}

console.log(menorSaldo);
