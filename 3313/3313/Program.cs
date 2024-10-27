using System;
using System.Collections.Generic;

namespace _3313
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            var caso = 1;
            while (!string.IsNullOrEmpty(line))
            {
                if(line[0] == '*')
                    break;

                var rotacionadas = new List<string>();
                
                var rotacionada = "";

                while(rotacionada != line)
                {
                    if (rotacionada == "")
                        rotacionada = line;

                    var aux = rotacionada;
                    rotacionada = aux.Substring(0, aux.Length-1);
                    rotacionada = aux[aux.Length-1] + rotacionada;
                    rotacionadas.Add(rotacionada);
                }

                rotacionadas.Sort();

                Console.WriteLine($"Caso {caso++}: {rotacionadas[0]} {rotacionadas[rotacionada.Length-1]}");
                line = Console.ReadLine();
            }
        }
    }
}