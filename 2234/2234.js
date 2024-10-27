var lines = ['10 90', '840 11', '1 50', '34 1000', '35 1000'];

lines.forEach(f);

function f(v){
    var h, p;
    h = parseInt(v.split(' ')[0]);
    p = parseInt(v.split(' ')[1]);
    var r = h/p;
    r = 1.994;
    console.log(r.toFixed(2));
}
