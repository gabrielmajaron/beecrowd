
var lines = ["2","pedra","pedra","ataque","papel"];

var casos = parseInt(lines[0]);
var p = 1;

for(var i = 0; i<casos; i++)
{
    var j1 = lines[p++];
    var j2 = lines[p++];

    console.log(game(j1,j2));
}

function game(j1, j2){
    
    if(j1 == "ataque" && j2 == "pedra")
        return "Jogador 1 venceu";
    
    if(j2 == "ataque" && j1 == "pedra")
        return "Jogador 2 venceu";
    
    if(j1 == "pedra" && j2 == "papel")
        return "Jogador 1 venceu";
    
    if(j2 == "pedra" && j1 == "papel")
        return "Jogador 2 venceu";
    
    if(j1 == "papel" && j2 == "ataque")
        return "Jogador 2 venceu";
    
    if(j2 == "papel" && j1 == "ataque")
        return "Jogador 1 venceu";
    
    if(j2 == "papel" && j1 == "papel")
        return "Ambos venceram";
    
    if(j2 == "pedra" && j1 == "pedra")
        return "Sem ganhador";
    
    if(j2 == "ataque" && j1 == "ataque")
        return "Aniquilacao mutua";         

    return "Sem ganhador";
}

/*
-Ataque Aéreo vs. Pedra: com o Ataque Aéreo derrota o com a Pedra
-Pedra vs. Papel: com a Pedra derrota o com Papel
-Papel vs. Ataque Aéreo: o Ataque Aéreo ganha
-Papel vs. Papel: ambos os jogadores ganham
-Pedra vs. Pedra:não há ganhador
Ataque Aéreo vs. Ataque Aéreo: todos os jogadores perdem
*/
//ataque
//pedra
//papel