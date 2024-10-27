#include<stdio.h>

int main()
{
    double diametro, volume, pi = 3.14;
    double r, h, aBases, aBase;    

    while (scanf("%lf", &volume) == 1)
    {
        scanf("%lf", &diametro);

        //r = d/2
        //h = V/π/r^2
        r = diametro/2;
        h = volume/(pi*r*r);

        //a = 2*pi*r^2
        aBases = 2*pi*r*r;    
        aBase = aBases/2;

        printf("ALTURA = %.2lf\n", h);
        printf("AREA = %.2lf\n", aBase);
    }
    return 0;
}