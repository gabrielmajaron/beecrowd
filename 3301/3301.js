var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3301\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var idades = lines[i].split(' ').map(function (x) { 
                    return parseInt(x); 
                });
    
    var mapIdades = {
        "H" : idades[0],
        "Z" : idades[1],
        "L" : idades[2]
    }

    for(var j=0; j<idades.length; j++)
        for(var k=0; k<idades.length-j-1; k++)
        {
            if(idades[k] > idades[k+1])
            {
                var aux = idades[k+1];
                idades[k+1] = idades[k];
                idades[k] = aux;
            }
        }
    
    switch(idades[1])
    {
        case mapIdades.H:
            console.log("huguinho");
            break;
        case mapIdades.Z:
            console.log("zezinho");
            break;
        case mapIdades.L:
            console.log("luisinho");
            break;
    }    
}