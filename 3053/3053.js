var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3053\\input.txt', 'utf8');
var lines = input.split('\n');

var copos = {
    'A':0,
    'B':0,
    'C':0
}

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var trocas = parseInt(lines[i++]);
    
    var posMoeda = lines[i++].replace('\r','');

    copos[posMoeda] = 1;

    for(var j=0; j < trocas; j++)
    {
        var troca = parseInt(lines[i++]);
        
        if(troca == 1 && (posMoeda == 'A' || posMoeda == 'B'))
        {
            var switchMoeda = posMoeda == 'A' ? 'B' : 'A';
            copos[posMoeda] = 0;
            copos[switchMoeda] = 1;
            posMoeda = switchMoeda;
        }
        else
        if(troca == 2 && (posMoeda == 'B' || posMoeda == 'C'))
        {
            var switchMoeda = posMoeda == 'B' ? 'C' : 'B';
            copos[posMoeda] = 0;
            copos[switchMoeda] = 1;
            posMoeda = switchMoeda;
        }
        else
        if(troca == 3 && (posMoeda == 'A' || posMoeda == 'C'))
        {
            var switchMoeda = posMoeda == 'A' ? 'C' : 'A';
            copos[posMoeda] = 0;
            copos[switchMoeda] = 1;
            posMoeda = switchMoeda;
        }
    }

    console.log(posMoeda);

    i--;
}