
//var lines = ["5 10", "1 3 6 9 7 2 4 5 8 3"];
//var lines = ["1 2", "2 2"];
var lines = ["1 2", "3 1"];

var pulo = lines[0].split(" ")[0];

var alturaCanos = lines[1].split(" ");

var win = true;

for(var i=0; i<alturaCanos.length-1; i++)
{
    var c1 = parseInt(alturaCanos[i]);
    var c2 = parseInt(alturaCanos[i+1]);
    
    if(((c2-c1) > pulo) || (c2-c1)*-1 > pulo)
    {
        win = false;
        break;
    }
}
win ? console.log("YOU WIN") : console.log("GAME OVER");

