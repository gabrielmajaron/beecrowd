var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2630\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var casos = parseInt(lines[i]);
    
    for(var j=0, caso = 1; j<casos*2; caso++)
    {
        j++;
        var metodo = lines[i+j].replace('\r','');
        j++;

        var pixels = lines[i+j].split(' ');
        var R = parseFloat(pixels[0]);
        var G = parseFloat(pixels[1]);
        var B = parseFloat(pixels[2]);
        
        if(metodo === 'min')
        {
            console.log("Caso #"+caso+": "+metodoMin(R,G,B));
            continue;
        } 
        if(metodo === 'max')
        {
            console.log("Caso #"+caso+": "+metodoMax(R,G,B));
            continue;
        }   
        
        if(metodo === 'mean')
        {
            console.log("Caso #"+caso+": "+metodoMean(R,G,B));
            continue;
        }  
        
        if(metodo === 'eye')
        {
            console.log("Caso #"+caso+": "+metodoEye(R,G,B));
            continue;
        }
    }
    i+=j;
}

function metodoMin(R,G,B) {  return R <= G && R <= B ? R : G <= R && G <= B ? G : B; }

function metodoMax(R,G,B) {  return R >= G && R >= B ? R : G >= R && G >= B ? G : B; }

function metodoMean(R,G,B) {  return parseInt((R+G+B)/3); }

function metodoEye(R,G,B) { return parseInt(0.3*R+0.59*G+0.11*B); }


