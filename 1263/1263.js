var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1263\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    var line = lines[i];

    if(line === undefined || line === '')
        continue;

    var words = line.split(' ');
    var aliteracoes = 0;

    for(var j=0; j<words.length-1; j++)
    {
        if(words[j] === '')
            continue;

        var char1 = words[j][0].toLowerCase();
        var char2 = words[j+1][0].toLowerCase();

        if(char1 == char2)
        {
            aliteracoes++;
            j+=2;
            while(j<words.length && words[j][0].toLowerCase() == char1)
                j++;
            j--;
        }
    }
    console.log(aliteracoes);
}