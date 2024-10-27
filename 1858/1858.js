
//var lines = [3,"8 0 7"]
var lines = [2,"1 1"]

var n = lines[0];
var t = lines[1].split(" ");

var menor = t[0];
var posMenor = 1;
for(var i=1; i<t.length; i++)
{
    if(t[i] < menor)
    {
        menor = t[i];
        posMenor = i+1;
    }
}
console.log(posMenor);