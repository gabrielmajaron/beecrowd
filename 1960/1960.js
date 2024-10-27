
var lines = [83];

var num = lines[0];

var letras = ["I", "V", "X", "L", "C", "D", "M"];
var valorLetras = [1, 5, 10, 50, 100, 500, 1000];

var i;
var romano = "";

while(num>0)
{
    for(i = 0; num/valorLetras[valorLetras.length-1-i] < 1; i++);

    i = valorLetras.length-1-i;
    
   // console.log(i);
    
    romano += letras[i];
    
    num-=valorLetras[i];
}

var letra = romano[0];
var qtde = 1;

var startsIn = 1;
var strLog;
var newRomano = "";
var arrToReplace = [];

while(startsIn < romano.length)
{
    var i;
    strLog = letra +": ";
    var prevLetra = letra;
    for(i = startsIn; i<romano.length; i++)
    {
        if(letra == romano[i])
            qtde++;
        else
        {
            letra = romano[i];
            break;
        }
    }

    if(qtde >= 4)
        arrToReplace.push(prevLetra);

    qtde = 0;    
    startsIn = i;
}

//console.log(arrToReplace);

for(var i=0; i<arrToReplace.length; i++)
{
    var oldPart = arrToReplace[i]+arrToReplace[i]+arrToReplace[i]+arrToReplace[i];
    var newPart = letras[letras.indexOf(arrToReplace[i])+1];
    romano = romano.replace(oldPart, arrToReplace[i]+newPart);
}

romano = romano.replace("DCD", "CM").replace("LXL", "XC").replace("VIV", "IX").
replace("XVX","XV").replace("CLC", "CL").replace("MDM","MD");

console.log(romano);
