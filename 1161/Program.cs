using System;

/*
input:
1 2
5 0
20 20*/

string line = Console.ReadLine();

while (!string.IsNullOrEmpty(line))
{
    var values = line.Split(' ');
    long n = Convert.ToInt64(values[0]);
    long m = Convert.ToInt64(values[1]);

    long r = 1;
    while(n > 0)
    {
        r*=n--;
    }
    var f1 = r;

    r = 1;
    while(m > 0)
    {
        r*=m--;
    }
    var f2 = r;
    

    Console.WriteLine(f1+f2);

    line = Console.ReadLine();
}   