var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1253\\input.txt', 'utf8');
var lines = input.split('\n');

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var n = parseInt(lines[0]);

for(var i=1; i<(n+1)*2; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var word = lines[i++].replace('\r','');
    var pos = parseInt(lines[i]);

    var output = "";
    for(var j=0; j<word.length; j++)
    {
        var aux = letters.indexOf(word[j]) - pos;

        if(aux < 0)
            aux = letters.length + aux;

        output+=letters[aux];
    }

    console.log(output);
}