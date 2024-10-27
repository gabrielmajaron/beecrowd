var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2116\\input.txt', 'utf8');
var lines = input.split('\n');

var values = lines[0].split(' ').map(e => parseInt(e));

var primos = calculaPrimos(values[0] > values[1] ? values[0] : values[1]);
var P1 = 1, P2 = 1;

for(var i=0; i<primos.length && values[0]>=primos[i]; i++)
    P1 = primos[i];

for(var i=0; i<primos.length && values[1]>=primos[i]; i++)
    P2 = primos[i];

console.log(P1 * P2);

function calculaPrimos(max)
{
    var primos = [];
    for(var i=2; i<=max; i++)
    {
        var ehPrimo = true;
        for(var j=2; j<i-1; j++)
        {
            if(i%j === 0)
                ehPrimo = false;
        }

        if(ehPrimo)
            primos.push(i);
    }
    return primos;
}