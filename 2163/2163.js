
//var lines = ["4 7","11 12 7 7 7 13 14","15 6 7 42 7 7 42","98 -5 7 7 7 42 7","-1 42 3 9 7 7 7"];

//var lines = ["4 7","11 12 7 7 7 13 14","15 6 7 12 7 7 42","98 -5 7 7 7 42 7","-1 42 3 9 7 7 7"];

var lines =["3 3","7 7 7","7 42 7","7 7 7"];

var x = parseInt(lines[0].split(' ')[0]);
var y = parseInt(lines[0].split(' ')[1]);

var matriz = [];

for(var i=0; i<x; i++)
    matriz.push(lines[i+1].split(' '));


function validaSabreLuz(i,j){

    var validador = 7;

    if(matriz[i+1][j] != validador)
        return false;

    if(matriz[i+1][j-1] != validador)
        return false;

    if(matriz[i+1][j+1] != validador)
        return false;

    if(matriz[i-1][j] != validador)
        return false;

    if(matriz[i-1][j-1] != validador)
        return false;

    if(matriz[i-1][j+1] != validador)
        return false;        
    
    if(matriz[i][j+1] != validador)
        return false;

    if(matriz[i][j-1] != validador)
        return false;

    return true;
}

var success = false;

for(var i = 1; i<y-1; i++)
{
    for(var j = 1; j<x-1; j++)
    {
        if(parseInt(matriz[j][i]) == 42)
        {            
            if(validaSabreLuz(j,i))
            {
                console.log((j+1)+' '+(i+1));
                success = true;
            }
        }
    }
}

if(!success)
    console.log("0 0");

