var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1141\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    if(n == 0)
        return;

    var words = [];
    for(var j=0; j<n; j++)
    {
        var word = lines[i++].replace('\r','').replace('\n','');
        words.push(word);
    }
    // ordena
    for(var j=0; j<n; j++)
    {
        for(var k=0; k<n-j-1; k++)            
            if(words[k].length > words[k+1].length)
            {
                var aux = words[k+1];
                words[k+1] = words[k];
                words[k] = aux;
            }            
    }
    var initialWord = '';
    var growedWord = '';
    
    // aqui nao compara outras 'initialWords', por isso responde errado em alguns casos...
    for(var j=0; j<n; j++)
    {
        for(var k=0; k<n; k++)
        {
            if(j == k)
                continue;
            
            if(words[j].indexOf(words[k]) != -1 && (initialWord == '' || words[k].indexOf(initialWord) != -1))
            {
                if(initialWord == '')
                    initialWord = words[k];

                words[k] = words[j];
                growedWord = words[k];
            }
        }
    }
    const counts = {};
    words.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts[growedWord] === undefined ? 1 : counts[growedWord]);

    i--;
}