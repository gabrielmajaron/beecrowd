var lines = ["6 5", "30", "30", "40", "250", "100", "15", "1", "5", "3", "2", "4","6 5", "30", "30", "40", "250", "100", "15", "1", "5", "3", "2", "4"];

for(var i=0; i<lines.length; )
{
    var participantes = parseInt(lines[i].split(' ')[0]);
    var rank = parseInt(lines[i].split(' ')[1]);
    var listP = [];

    i++;
    for(var j=0; j<participantes; j++)
    {
        listP.push(parseInt(lines[i]));
        i++;
    }
    listP.sort(function(a, b) {return b - a;});

    for(var j=0; j<rank; j++)
    {
        var pos = lines[i]-1;
        i++;
        console.log(listP[pos]);
    }
}




















