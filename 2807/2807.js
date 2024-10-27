var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2807\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    var seq = [1, 1];

    for(var j=1; j<n-1; j++)
    {
        var soma = seq[j] + seq[j-1];
        seq.push(soma);
    }

    var output = "";
    for(var k=n-1; k>=0; k--)
    {
        output+=seq[k];

        if(k>0)
            output += " ";
    }

    console.log(output);

    i--;
}