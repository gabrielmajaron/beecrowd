var lines = ['3', 'galopeira','galopeeeeeeeeeeeeeeeeeira','galopeeira'];

var qtd = parseInt(lines[0]);

for(var i = 0; i<qtd; i++)
{
    var p = lines[i+1];
    var n = p.length*0.01;
    console.log(n.toFixed(2));
}