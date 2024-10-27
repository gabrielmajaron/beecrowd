var lines = ['5','ABCD','AB','C','ABEDCS','','','EDSMB','MSD','A','','','','IWANTSODER','SOW','RAT'];

var casos = parseInt(lines[0]);

function comer(dieta, str1, str2){
    
    for(var i=0;i<str1.length;i++)
        {
            if(dieta.indexOf(str1[i])<0)
                return '1';

            dieta = dieta.replace(str1[i],'');
        }

    for(var i=0;i<str2.length;i++)
    {
        if(dieta.indexOf(str2[i])<0)
                return '1';
        dieta = dieta.replace(str2[i],'');
    }   

    return dieta;
}

for(var i=0, j = 0; i<casos;i++,j+=3)
{
    var dieta = lines[j+1];
    var cafeDaManha = lines[j+2];
    var almoco = lines[j+3];

    dieta = comer(dieta, cafeDaManha, almoco);
    if(dieta == '1')
        console.log("CHEATER");
    else
    {
        dieta = dieta.split('').sort().join('');
        console.log(dieta);
    }
   //console.log(cafeDaManha);
    //console.log(almoco);
}
    