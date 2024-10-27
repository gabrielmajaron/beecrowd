var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2712\\input.txt', 'utf8');
var lines = input.split('\n');

var diasRestricao = ["FRIDAY", "MONDAY", "MONDAY", "TUESDAY", "TUESDAY", "WEDNESDAY", "WEDNESDAY", "THURSDAY", "THURSDAY", "FRIDAY"];

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].replace('\r','').replace('\n','');

    var carros = parseInt(line);

    for(var j=0;j<carros;j++)
    {
        var placa = lines[i++];

        if(placa.split("-").length!=2)
        {
            console.log("FAILURE");
            continue;
        }

        var letras = placa.split("-")[0];

        var strNumero = placa.split("-")[1].replace('\r','').replace('\n','');

        if(strNumero.length != 4 || !/^[0-9]+$/.test(strNumero))
        {            
            console.log("FAILURE");
            continue;
        }

        var numero = parseInt(strNumero[strNumero.length-1]);
        

        if(letras.length != 3)
        {            
            console.log("FAILURE");
            continue;
        }

        if(!/^[A-Z]+$/.test(letras))
        {
            console.log("FAILURE");
            continue;
        }
        
        console.log(diasRestricao[numero]);
    }

    i--;
}