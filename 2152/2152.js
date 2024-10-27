var lines = ['3','15 30 1','23 50 0','0 5 1'];

var qtd = parseInt(lines[0]);

for(var i=0;i<qtd;i++)
{
    var d = lines[i+1].split(' ');
    var o='';
    for(var j=0;j<d.length-1;j++)
    {   
        if(d[j]===0)
            o+='00:';
        else
        {
            parseInt(d[j])<10?o+='0'+d[j]:o+=d[j];

            if(j+1<d.length-1)
                o+=':';
        }
        
    }
    parseInt(d[d.length-1]) === 0 ? o+=' - A porta fechou!' : o+=' - A porta abriu!';

    console.log(o);
}