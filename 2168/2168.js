var lines = ["1", "1 0", "0 0"];
//var lines = ["3","1 1 0 1","1 0 1 0","1 0 0 1","0 1 1 0"];
//var lines = ["2","1 0 0","1 1 0","0 0 1"];

var n = parseInt(lines[0]);
var matriz = [];

for(var i=1; i<n+2; i++)
    matriz.push(lines[i].split(' '));

function seguro(quadra){
    var count = 0;
    for(var i=0; i<2;i++)
        for(var j=0; j<2; j++)
            if(parseInt(quadra[i][j]) == 1)
                count++;


    return count>=2;
}

var output = "";

for(var i=0; i<n; i++)
{
    for(var j=0; j<n; j++)
    {
        var quadra = [[matriz[i][j],matriz[i][j+1]],[matriz[i+1][j],matriz[i+1][j+1]]]
        
        seguro(quadra) ? output+="S" : output+="U";
    }

    if(i+1<n)
        output+='\n';
}

console.log(output);



