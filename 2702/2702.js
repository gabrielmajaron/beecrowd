var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2702\\input.txt', 'utf8');
var lines = input.split('\n');

var disponiveis = lines[0].split(' ');
var escolhidos = lines[1].split(' ');

var naoAtendidos = 0;
for(var i=0; i<disponiveis.length; i++)
{
    var dif = parseInt(disponiveis[i]) - parseInt(escolhidos[i]);

    if(dif < 0)
        naoAtendidos+= (dif*-1);
}

console.log(naoAtendidos);