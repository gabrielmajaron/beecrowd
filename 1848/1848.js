
var lines = ["--*",
"caw caw",
"*--",
"caw caw",
"caw caw"]

/*
var lines = [
"--*",
"--*",
"--*",
"caw caw",
"*--",
"*--",
"caw caw",
"--*",
"*--",
"caw caw"
]*/

var gritos = 0;
var numero = 0;

lines.forEach(f);

function f(item, index){    
    
    if(item == "caw caw")
    {
        console.log(numero); 
        numero = 0;
        gritos++;

        if(gritos >= 3)
            return;  

        return;
    }

    for(var i=0, j = 2; i< item.length; i++, j--)
    {        
        if(item[i] == '*')
        {            
            numero += Math.pow(2, j);
        }
    }     
}