/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n') + '';
*/


var lines = ["20 10 12",
"10 20 18",
"4 16 20",
"4 10 20",
"20 10 6",
"20 16 4",
"10 10 14",
"10 10 2"]

//var lines = ["20 10 6"];

lines.forEach(f);

function f(item, index){

    var values = item.split(' ');

    var t1 = parseInt(values.shift());
    var t2 = parseInt(values.shift());
    var t3 = parseInt(values.shift());    
    
    if(t1 > t2 && t2 <= t3) //1
        console.log(":)");
    else
    if(t1 < t2 && t2 >= t3) //2
        console.log(":(");
    else
    if(t1 < t2 && t2 < t3 && ((t3-t2) < (t2-t1))) //3 
        console.log(":(");
    else
    if(t1 < t2 && t2 < t3 && ((t3-t2) >= (t2-t1))) //4
        console.log(":)");
    else
    if(t1 > t2 && t2 > t3 && ((t3-t2) > (t2-t1))) //5
        console.log(":)");
    else
    if(t1 > t2 && t2 > t3 && ((t3-t2) <= (t2-t1)))
        console.log(":(");
    else
    if(t1 == t2 && t2 < t3)
        console.log(":)");
    else
        console.log(":(");
}
