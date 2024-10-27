var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2729\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=1; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var words = lines[i].split(' ');
    
    var index = existeDuplicado(words);

    while(index != -1)
    {
        words.splice(index, 1);
        index = existeDuplicado(words);
    }

    words.sort();

    var output = '';
    for(var j=0; j < words.length;j++)
    {
        output += words[j];

        if(j == words.length-1)
            continue;

        output += ' ';
    }
    console.log(output);
}

function existeDuplicado(words)
{
    for(var i=0;i<words.length;i++)
        for(var j=i;j<words.length-1;j++)
        {
            if(j == words.length-2)
            {
                var word1 = words[i].replace('\r','');
                var word2 = words[j+1].replace('\r','');

                words[i] = word1;
                words[j+1] = word2;
                
                if(word1 === word2)
                    return j+1;
            }
            
            if(words[i] === words[j+1])
                return j+1;
        }

    return -1;
}



