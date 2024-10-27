var lines = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","4","8 5 12 16","QWERTYUIOPASDFGHJKLZXCVBNM","10","16 3 19 19 9 2 9 4 19 13"];

for(var i=0; i<lines.length; i++){

    var conjunto = lines[i];
    i++;
    var qtdeL = parseInt(lines[i]);
    i++
    var pos = lines[i];

    var msg = "";
    var list = pos.split(' ');
    for(var j=0; j < qtdeL; j++)
    {
        msg += conjunto[parseInt(list[j])-1];
    }
    console.log(msg);
}