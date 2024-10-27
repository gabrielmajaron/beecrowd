var lines = ["7 3", "7 -3", "-7 3"];


for(var i=0; i<lines.length; i++)
{    
    var values = lines[i].split(" ");
    var a = values[0];
    var b = values[1];

    var output = parseInt(a/b);
    
    output += " " + a%b;

    console.log(output);
}



