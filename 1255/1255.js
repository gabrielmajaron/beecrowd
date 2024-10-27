var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1255\\input.txt', 'utf8');
var lines = input.split('\n');

Array.prototype.indexOfChar = function(char) {
    for (var i = 0; i < this.length; i++)
        if (this[i].char === char)
            return i;
    return -1;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    var line = lines[i];

    if(line === undefined || line === '')
        continue;
    
    line = line.toLowerCase().replace('\r', '');

    var uniqueCharCount = [];    
    
    for(var j=0; j<line.length; j++)
    {
        var l = line[j];

        if(!isLetter(l))
            continue;

        var index = uniqueCharCount.indexOfChar(l);
        if(index >= 0)
            uniqueCharCount[index].count++;
        else
            uniqueCharCount.push({'char': l, 'count': 1});
    }
    
    uniqueCharCount = uniqueCharCount.sort((a, b) => b.count - a.count);
    
    var output = uniqueCharCount[0].char;
    var maxCount = uniqueCharCount[0].count;

    for(var j=1; j<uniqueCharCount.length && uniqueCharCount[j].count == maxCount; j++)
        output+=uniqueCharCount[j].char;

    // ordena letras
    output = output.split("").sort().join("");
    console.log(output);
}