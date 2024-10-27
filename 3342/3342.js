var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3342\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i]);

    var comecandoCor = Math.ceil(n/2);
    var naoComecandoCor = Math.floor(n/2);

    var brancas = comecandoCor*comecandoCor+naoComecandoCor*naoComecandoCor;
    var pretas = (n*n)-brancas;

    console.log(`${brancas} casas brancas e ${pretas} casas pretas`);
}