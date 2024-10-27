
var lines = ["3","papel pedra","lagarto tesoura","Spock Spock"];

var regraTesoura = 
{
    vence: ["papel", "lagarto"],
    perde: ["pedra", "Spock"]
}

var regraPapel = 
{
    vence: ["pedra", "Spock"],
    perde: ["tesoura", "lagarto "]
}

var regraPedra = 
{
    vence: ["tesoura", "lagarto"],
    perde: ["Spock", "papel"]
}

var regraLagarto = 
{    
    vence: ["Spock", "papel"],
    perde: ["pedra", "tesoura"]
}

var regraSpock = 
{    
    vence: ["pedra", "tesoura"],
    perde: ["lagarto", "papel"]
}

var i = 1;
lines.forEach(arrayIterator);

function arrayIterator(item, index) {

    var jogadas = item.split(" ");

    if(jogadas.length < 2)
        return;
    
    var jogador1 = jogadas[0];
    var jogador2 = jogadas[1];     
 

    var line = "Caso #"+i+": "
    i++;

    if(jogador1 == jogador2)
        line+="De novo!";
    else
    {
        var regra;
        if(jogador1 == "tesoura")
            regra = Object.assign({}, regraTesoura);
        else
        if(jogador1 == "papel")
            regra = Object.assign({}, regraPapel);
        else
        if(jogador1 == "pedra")
            regra = Object.assign({}, regraPedra);
        else
        if(jogador1 == "lagarto")
            regra = Object.assign({}, regraLagarto);
        else
        if(jogador1 == "Spock")
            regra = Object.assign({}, regraSpock);
        
        if(regra['vence'].includes(jogador2))
            line+="Bazinga!";
        else
            line+="Raj trapaceou!";
    }
    
    console.log(line);
}

