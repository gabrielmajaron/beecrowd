var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2951\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');
    var runasExistentes = parseInt(line[0]);
    var amizadeToWin = parseInt(line[1]);

    var runas = [];

    for(var j=0; j<runasExistentes;j++)
    {
        line = lines[i++].split(' ');
        runas.push({
            "name":line[0],
            "points": parseInt(line[1])
        });
    }

    var qtdRunasObtidas = parseInt(lines[i++]);
    var runasObtidas = lines[i++].split(' ');
    var totalAmizade = 0;
    for(var j=0; j<qtdRunasObtidas;j++)
    {
        var nameRunaObtida = runasObtidas[j];

        var runaObtida = runas.find(element => { return element.name === nameRunaObtida; });

        totalAmizade+=runaObtida !== undefined ? runaObtida.points : 0;
    }

    console.log(totalAmizade);
    totalAmizade >= amizadeToWin ? console.log("You shall pass!") : console.log("My precioooous");
}