var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2709 - nv9 - easy\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var m = parseInt(lines[i++]);

    var moedas = [];
    for(var j=0; j<m; j++)
        moedas.push(parseInt(lines[i++]));

    var salto = parseInt(lines[i++]);

    var soma = 0;

    // 1, 2 , 3, 4 e 5, e Glória escolher 2 como valor do salto, então serão somadas as moedas 5, 3 e 1
    // a soma é feita iniciando da ultima moeda da lista, até a primeira
    for(var j=moedas.length-1; j>=0; j-=salto)
        soma+=moedas[j];
    
    var ehPrimo = soma >= 2;
    for(var j=2; j<soma;j++)
    {
        if(soma%j === 0)
        {
            ehPrimo = false;
            break;
        }
    }

    ehPrimo ? console.log("You’re a coastal aircraft, Robbie, a large silver aircraft.") : console.log("Bad boy! I’ll hit you.");

    i--;
}