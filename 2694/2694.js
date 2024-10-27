var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2694\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

for(var i=1; i<n+1; i++)
{
    var line = lines[i];    
    var strNumber = '';
    var sum = 0;
    
    line+='a';

    for(var j=0; j<line.length; j++)
    {
        var l = line[j];

        if(isLetter(l) && strNumber.length > 0)
        {            
            sum += parseInt(strNumber);
            strNumber = '';
            continue;
        }

        if(!isLetter(l))
            strNumber += l;
    }
    console.log(sum);
}




