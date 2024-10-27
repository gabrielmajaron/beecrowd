var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2544 - exemplo\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i].replace('\r','').replace('\n','');

    var clones = parseInt(line);

    var execucoes = 0;

    while(parseInt(clones)>1)    
    {
        clones/=2;
        execucoes++;
    }

    console.log(execucoes);
}
