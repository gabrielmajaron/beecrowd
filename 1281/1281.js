var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1281\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=1; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;
        
    var prodsLoja = [];
    var compras = [];
        
    var qtdeLoja = parseInt(lines[i++]);

    for(var j=0; j<qtdeLoja; j++)
    {
        var line = lines[i+j].split(' ');
        prodsLoja[line[0]] = parseFloat(line[1]);
    }
    i+=qtdeLoja;

    var qtdeCompras = parseInt(lines[i++]);

    for(var j=0; j<qtdeCompras; j++)
    {
        var itemLoja = [];
        var line = lines[i+j].split(' ');

        itemLoja.push(line[0]);
        itemLoja.push(parseInt(line[1]));

        compras.push(itemLoja);
    }
    i+=qtdeCompras;

    var totalCompras = 0;
    for(var j=0; j<compras.length; j++)
    {
        var valorItemComprado = parseFloat(prodsLoja[compras[j][0]]);
        var qtdeItemComprado = parseInt(compras[j][1]);

        totalCompras+=valorItemComprado*qtdeItemComprado;
    }
    console.log("R$ "+totalCompras.toFixed(2));

    i--;
}
