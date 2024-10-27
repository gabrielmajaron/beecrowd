//var lines = ["1", "1 2 3 2 1"];
var lines = ["3", "4 1 1 2 1"];

var tipo = parseInt(lines[0]);
var respostas = lines[1].split(' ');
var corretos = 0;
respostas.forEach(f);
console.log(corretos);

function f(item, index){
    var resp = parseInt(item);

    if(resp == tipo)
        corretos++;
}