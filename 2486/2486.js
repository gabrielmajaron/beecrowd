
var lines = ["2", "2 suco de laranja", "3 mamao", "1", "3 brocolis", "2", "1 manga", "1 laranja", "1", "1 suco de laranja", "0"];

var soma;

var minC = 110 , maxC = 130;
var alimentos = {
"suco de laranja" :	120,
"morango fresco" :	85,
"mamao" : 85,
"goiaba vermelha" : 70,
"manga" : 56,
"laranja" : 50,
"brocolis" : 34
};

function obtemQtdeEAlimento(str){
    var qtde;
    var alimento;
    var aux = "";
    var auxI;
    for(var i=0; i<str.length; i++)
    {
        if(str[i] == ' ')
        {
            qtde = parseInt(aux);
            auxI = i+1;            
            break;
        }
        else
            aux += str[i];
    }
    alimento = str.substring(auxI);
    return [qtde, alimento];
}

for(var i = 0; true; )
{
    var n = parseInt(lines[i]);

    if(n === 0)
        break;

    i++;
    var j;
    soma = 0;
    for(j=0; j<n; j++)
    {
        var [qtde, alimentoConsumido] = obtemQtdeEAlimento(lines[j+i]);

        soma  = soma + (qtde * alimentos[alimentoConsumido]);
    }
    i += j;
    
    if(soma >= minC && soma <= maxC)
        console.log(soma + " mg");
    else
    if(soma < minC)
        console.log("Mais "+(minC-soma) +" mg");
    else
    if(soma > maxC)
        console.log("Menos "+(soma-maxC) +" mg");
}



