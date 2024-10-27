var lines = ["3","Renan","10 20 12","1 10 9","Jonas","8 7 1","2 7 0","Edson","3 3 3","1 2 3"];

var jogadores = parseInt(lines[0]);

var soma_total_S = 0, soma_total_B = 0, soma_total_A = 0, soma_sucesso_S = 0, soma_sucesso_B = 0, soma_sucesso_A = 0;

for(var i=1;i<jogadores*3;i+=3)
{
    var nome = lines[i];
    var total_SBA = lines[i+1].split(' ');
    
    soma_total_S += parseFloat(total_SBA[0]);
    soma_total_B += parseFloat(total_SBA[1]);
    soma_total_A += parseFloat(total_SBA[2]);

    var sucesso_SBA = lines[i+2].split(' ');
    soma_sucesso_S += parseFloat(sucesso_SBA[0]);
    soma_sucesso_B += parseFloat(sucesso_SBA[1]);
    soma_sucesso_A += parseFloat(sucesso_SBA[2]);
}


console.log("Pontos de Saque: " + (soma_sucesso_S*100/soma_total_S).toFixed(2) + " %.");
console.log("Pontos de Bloqueio: " + (soma_sucesso_B*100/soma_total_B).toFixed(2) + " %.");
console.log("Pontos de Ataque: " + (soma_sucesso_A*100/soma_total_A).toFixed(2) + " %.");







