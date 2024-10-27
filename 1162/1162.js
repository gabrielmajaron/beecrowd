var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1162\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=1; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var size = parseInt(lines[i++]);
    var vagoes = lines[i].split(' ');

    var cont = 0;

    while(size > 0)
    {
        for(var k = 0; k < size - 1; k++)
        {
            var elem = parseInt(vagoes[k]);
            var nextElem = parseInt(vagoes[k+1]);

            if(elem > nextElem)
            {
                cont++;
                var aux = vagoes[k];
                vagoes[k] = vagoes[k+1];
                vagoes[k+1] = aux;
            }
        }
        size--;
    }

    console.log("Optimal train swapping takes "+ cont +" swaps.");
}