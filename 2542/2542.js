var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2542\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    i++;

    if(lines[i] === undefined)
        continue;

    var qtdeCartasM = parseInt(lines[i].split(' ')[0]);
    var qtdeCartasL = parseInt(lines[i++].split(' ')[1]);    

    var cartasM = new Array(qtdeCartasM);

    for(var j=0; j<qtdeCartasM; j++)
    {
        cartasM[j] = lines[i++].split(' ');
    }
    var cartasL = new Array(qtdeCartasL);

    for(var j=0; j<qtdeCartasL; j++)
    {
        cartasL[j] = lines[i++].split(' ');
    }

    var posCartaEscolhidaM = parseInt(lines[i].split(' ')[0]);
    var posCartaEscolhidaL = parseInt(lines[i++].split(' ')[1]);
    var atributo = parseInt(lines[i]);
    
    var cartaM = cartasM[posCartaEscolhidaM-1];
    var cartaL = cartasL[posCartaEscolhidaL-1];

    var atributoCartaM = parseInt(cartaM[atributo-1]);
    var atributoCartaL = parseInt(cartaL[atributo-1]);

    atributoCartaM === atributoCartaL ? console.log("Empate") : 
        atributoCartaM > atributoCartaL ? console.log("Marcos") : console.log("Leonardo");
}
