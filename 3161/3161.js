var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3161\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');

    var qtdFrutas = parseInt(line[0]);
    var qtdNomes = parseInt(line[1]);

    var frutas = [];
    var frutasInvertidas = [];
    for(var j=0; j<qtdFrutas; j++)
    {
        var fruta = lines[i++].replace('\r','').replace('\n','').toLowerCase();

        var frutaInvertida = "";
        for(var k=fruta.length-1; k>=0; k--)
            frutaInvertida += fruta[k];

        frutasInvertidas.push(frutaInvertida);
        frutas.push(fruta);
    }

    var nomes = [];

    for(var j=0; j<qtdNomes; j++)
        nomes.push(lines[i++].replace('\r','').replace('\n','').toLowerCase());

    for(var j=0; j<qtdFrutas; j++)
    {
        var exists = false;
        for(var k=0; k<qtdNomes; k++)
        {
            if(nomes[k].indexOf(frutas[j]) >= 0 || nomes[k].indexOf(frutasInvertidas[j]) >= 0)
            {
                exists = true;
                break;
            }
        }
        exists ? console.log(`Sheldon come a fruta ${frutas[j]}`) : console.log(`Sheldon detesta a fruta ${frutas[j]}`);

    }
    i--;
}