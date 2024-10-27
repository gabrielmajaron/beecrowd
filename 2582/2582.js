var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2582\\input.txt', 'utf8');
var lines = input.split('\n');

var musicas = 
[
    'PROXYCITY',
    'P.Y.N.G.',
    'DNSUEY!',
    'SERVERS',
    'HOST!',
    'CRIPTONIZE',
    'OFFLINE DAY',
    'SALT',
    'ANSWER!',
    'RAR?',
    'WIFI ANTENNAS'
];

for(var i=1; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n1 = parseInt(lines[i].split(' ')[0]);
    var n2 = parseInt(lines[i].split(' ')[1]);

    console.log(musicas[n1+n2]);
}


