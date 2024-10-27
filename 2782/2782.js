var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2782\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);
    var numbers = lines[i++].split(' ');

    var dif = 0;
    var escadinhas = 0;
    for(var j=0; j<n-1; j++)
    {
        var n1 = parseInt(numbers[j]);
        var n2 = parseInt(numbers[j+1]);
        
        if(j===0)
        {
            dif = n2 - n1;
            escadinhas++;
            continue;
        }

        for(;j<n-1 && n2-n1 == dif;j++)
        {
            n1 = parseInt(numbers[j]);
            n2 = parseInt(numbers[j+1]);
        }
        j--;

        if(n2-n1 != dif)
        {
            dif = n2-n1;
            escadinhas++;
        }
    }

    console.log(n == 1 ? 1 : escadinhas);

    i--;
}