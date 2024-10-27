var lines =["78954", "7895478954789547895447895478954", "464133", "1331646546874694", "12", "1231321455123214565423112"];

var n1, n2;
var n1_ok = false;
var caso = 1;
var lastPos;

lines.forEach(f);

function obtemUltimaPos(){
    if(n2.indexOf(n1) < 0 )
    {
        lastPos = -1;
        return;
    }
    var pos = -1;
    var j = n1.length-1;
    for(var i=n2.length-1; i>=0; i--)
    {        
        if(n1[j] != n2[i])
            j = 0;
        else
            j--;

        if(j<0)
        {
            pos = i;
            break;
        }
    }
    lastPos = pos+1;
}

function f(item, index){

    if(!n1_ok)
    {
        n1 = item + "";
        n1_ok = true;
        return;
    }
    n1_ok = false;

    n2 = item + "";    

    obtemUltimaPos();
    
    var line = "Caso #"+caso+":\n";
    var pos = n2.indexOf(n1);    

    if(lastPos == -1)
        line += "Nao existe subsequencia";
    else
    {
        line += "Qtd.Subsequencias: ";
        var qtde = 0;
        while(n2.indexOf(n1) >= 0)
        {
            qtde++;
            n2 = n2.substring(n2.indexOf(n1)+n1.length, n2.length);
            pos+=n2.indexOf(n1)+n1.length;
        }
        line+=qtde+"\n";
        line+="Pos: "+lastPos;
    } 

    index+1 == lines.length ? console.log(line) : console.log(line+"\n");    
    caso++;
}