var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3047\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var idadeMae =  parseInt(lines[i++]);
    var idadeFilho1 = parseInt(lines[i++]);
    var idadeFilho2 = parseInt(lines[i++]);

    var idadeFilho3 = idadeMae - idadeFilho1 - idadeFilho2;

    var maior = idadeFilho1;

    if(idadeFilho2 > maior)
        maior = idadeFilho2;

    if(idadeFilho3 > maior)
        maior = idadeFilho3;

    console.log(maior);

    i--;

}