var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1546\\input.txt', 'utf8');
var lines = input.split('\n');

var responsaveis = 
[
    'Rolien',
    'Naej',
    'Elehcim',
    'Odranoel'
];

for(var i=1; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var feedbacks = parseInt(lines[i++]);

    for(var j=0; j<feedbacks; j++)
    {
        var feedback = lines[i+j];
        console.log(responsaveis[feedback-1]);
    }

    i+=feedbacks-1;
}