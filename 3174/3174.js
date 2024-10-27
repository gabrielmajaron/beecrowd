var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3174\\input.txt', 'utf8');
var lines = input.split('\n');

var mapHorasPorPresente = {
    "bonecos":8,
    "arquitetos": 4,
    "musicos": 6,
    "desenhistas": 12
};

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdElfos = parseInt(lines[i++]);

    var horasTotais = {
        "bonecos":0,
        "arquitetos": 0,
        "musicos": 0,
        "desenhistas": 0
    };

    for(var j=0; j<qtdElfos; j++)
    {
        var line = lines[i++].split(' ');
        horasTotais[line[1]] += parseInt(line[2]);
    }

    var totalBonecos = parseInt(horasTotais["bonecos"] / mapHorasPorPresente["bonecos"]);
    var totalArquitetos = parseInt(horasTotais["arquitetos"] / mapHorasPorPresente["arquitetos"]);
    var totalMusicos = parseInt(horasTotais["musicos"] / mapHorasPorPresente["musicos"]);
    var totalDesenhistas = parseInt(horasTotais["desenhistas"] / mapHorasPorPresente["desenhistas"]);

    var totalPresentes = totalBonecos+totalArquitetos+totalMusicos+totalDesenhistas;
    
    console.log(totalPresentes);
    
    i--;
}