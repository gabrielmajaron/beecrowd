var lines = ["3","5","12 23 15","42 12 20","2","52 1 11","1 52 1","3","95 12 22","5 51 21"];

var n = parseInt(lines[0]);

for(var i=1; i<(n*3)+1; i++)
{
    var g1, g2;
    var b = parseInt(lines[i]);
    i++;
    var a1, d1, l1;
    a1 = parseInt(lines[i].split(' ')[0]);
    d1 = parseInt(lines[i].split(' ')[1]);
    l1 = parseInt(lines[i].split(' ')[2]);
    i++;
    var a2, d2, l2;
    a2 = parseInt(lines[i].split(' ')[0]);
    d2 = parseInt(lines[i].split(' ')[1]);
    l2 = parseInt(lines[i].split(' ')[2]);
    
    g1 = (a1+d1)/2;

    if(l1%2===0)
        g1 = g1+b;

    g2 = (a2+d2)/2;

    if(l2%2===0)
        g2 = g2+b; 

    if(g1 > g2)
        console.log("Dabriel");
    else
    if(g2 > g1)
        console.log("Guarte");
    else
        console.log("Empate");
}