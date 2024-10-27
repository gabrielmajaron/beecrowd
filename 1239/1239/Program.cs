namespace _1239
{
    using System;

    class Program
    {
        static void Main()
        {
            bool iOpen = false, bOpen = false;

            string line = Console.ReadLine();

            while (!string.IsNullOrEmpty(line))
            {
                string output = "";

                for (int j = 0; j < line.Length; j++)
                {
                    if (line[j] == '*')
                    {
                        output += bOpen ? "</b>" : "<b>";
                        bOpen = !bOpen;
                        continue;
                    }

                    if (line[j] == '_')
                    {
                        output += iOpen ? "</i>" : "<i>";
                        iOpen = !iOpen;
                        continue;
                    }

                    output += line[j];
                }

                Console.WriteLine(output);

                line = Console.ReadLine();
            }
        }
    }

}