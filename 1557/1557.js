//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var lines = ["1","2","3","4","5","0"];

lines.forEach(arrayIterator);

function arrayIterator(item, index) {

    let line = "";
    let i, j, k = 0, l;
    let bigger, biggerLength;    

    if(item == "0")
        return;        

    item = parseInt(item)

    bigger = Math.pow(2, (item*2)-2) 
    biggerLength = bigger.toString().length 

    for(i = 0; i<item; i++)
    {
        l = k;
        for(j = 0; j<item; j++, k++)
        {
            let value = Math.pow(2, k)
            let lengthValue = value.toString().length;

            for(let m = 0; m<biggerLength-lengthValue; m++)
                line+=" ";

            line +=  value;
            if(j+1<item)
                line+=" ";
        }            
            
        k = l+1;
        
        if(lines[index+1] == "0" && i+1==item)
            continue;

        line+="\n";
    }
    
    console.log(line)
}



