

var lines = ["3 5","fechou","fechou","clicou","clicou","clicou"];

var abas = parseInt(lines[0].split(' ')[0]);

lines.forEach(f);

function f(item, index){
    if(index === 0)
        return;

    if(item == "fechou")
        abas++;
    
    if(item == "clicou")
        abas--;       
}

console.log(abas);