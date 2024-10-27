


//var lines = ["3", "1000 5", "1001 10" ,"1002 6"];
var lines = ["4", "900775 5.7", "201553 7.9", "5032 6.2", "2088 2.1"];

var matMaior;
var notaMaior = -1;

lines.forEach(f);

function f(item, index){
    if(index == 0)
        return;
    
    var matricula = parseFloat(item.split(' ')[0]);
    var nota = parseFloat(item.split(' ')[1]);

    if(nota > notaMaior)
    {
        matMaior = matricula;
        notaMaior = nota;
    }    
}

notaMaior >= 8 ? console.log(matMaior) : console.log("Minimum note not reached");

