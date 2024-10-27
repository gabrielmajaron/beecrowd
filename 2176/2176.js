var lines = ['10','000110','0'];

lines.forEach(f);

function f(v, index){
    var str;
    str = v.toString();
    var count = 0;

    for(var i=0; i<str.length; i++)
    {
        if(str[i] == "1")
            count++;
    }
    if(count % 2 === 0)
    {
        var out = str+'0';
        console.log(out);
    }
    else
    {
        var out = str+'1';
        console.log(out);
    }
}
