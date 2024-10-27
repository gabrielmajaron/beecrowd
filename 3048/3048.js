var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3048\\input.txt', 'utf8');
var lines = input.split('\n');

var vet = [];
for(var i=1; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    vet.push(parseInt(lines[i]));
}

var maxSeq = 0;
for(var i=0; i<vet.length; i++)
{
    var seq = 0;

    for(var j=i; j<vet.length-1; j++)
        if(vet[j] != vet[j+1])
            seq++;

    if(seq > maxSeq)
        maxSeq = seq;    
}

console.log(maxSeq+1);
