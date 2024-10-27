var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1581\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=1; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    var language = lines[i].replace('\r','');
    var equal = true;

    for(var j=i; j<n+i; j++)
    {
        
        if(language != lines[j].replace('\r',''))
        {
            equal = false;
            break;
        }
    }
    
    equal ? console.log(language) : console.log("ingles");

    i+=n-1;
}