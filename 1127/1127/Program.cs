using System;
using System.Collections.Generic;
using System.IO;

namespace _1127
{
    internal class Program
    {
        private class Nota
        {
            public Nota()
            {
                Next = null;
            }

            public char Name { get; set; }
            public int Value { get; set; }
            public Nota Next { get; set; }
        }

        private static Nota notas = CreateNotas();

        private static Nota CreateNotas()
        {
            var last = new Nota
            {
                Name = 'G',
                Value = 2,
                Next = null
            };

            var root = new Nota
            {
                Name = 'A',
                Value = 2,
                Next = new Nota
                {
                    Name = 'B',
                    Value = 1,
                    Next = new Nota
                    {
                        Name = 'C',
                        Value = 2,
                        Next = new Nota
                        {
                            Name = 'D',
                            Value = 2,
                            Next = new Nota
                            {
                                Name = 'E',
                                Value = 1,
                                Next = new Nota
                                {
                                    Name = 'F',
                                    Value = 2,
                                    Next = last
                                }
                            }
                        }
                    }
                }
            };

            last.Next = root;

            return root;
        }

        private static Nota GetNota(char name)
        {
            var nota = notas;

            while (nota != null && nota.Name != name)
                nota = nota.Next;

            return nota;
        }

        private static List<int> CreateSeq(List<string> song)
        {
            List<int> seq = new List<int>();

            for (var j = 0; j < song.Count - 1; j++)
            {
                var alteracaoCromatica = 0;
                var letraNotaAtual = song[j];

                if (letraNotaAtual.Contains("#"))
                    alteracaoCromatica -= 1;
                else if (letraNotaAtual.Contains("b"))
                    alteracaoCromatica += 1;

                letraNotaAtual = letraNotaAtual.Replace("#", "").Replace("b", "");

                var letraProxNota = song[j + 1];

                if (letraProxNota.Contains("#"))
                    alteracaoCromatica += 1;
                else if (letraProxNota.Contains("b"))
                    alteracaoCromatica -= 1;

                letraProxNota = letraProxNota.Replace("#", "").Replace("b", "");

                var notaAtual = GetNota(letraNotaAtual[0]);
                var notaProx = GetNota(letraProxNota[0]);

                var soma = 0;

                if (notaAtual == notaProx)
                {
                    if (alteracaoCromatica != 0)
                    {
                        soma = notaAtual.Value;
                        notaAtual = notaAtual.Next;
                    }
                    else
                    {
                        seq.Add(0);
                        continue;
                    }
                }

                while (notaAtual != null && notaAtual != notaProx)
                {
                    soma += notaAtual.Value;
                    notaAtual = notaAtual.Next;
                }
                soma += alteracaoCromatica;
                soma = soma >= 12 ? soma - 12 : soma;
                var novoValor = soma < 0 ? 11 : soma;

                seq.Add(novoValor);
            }

            return seq;
        }
        
        /* verificação menos performática
        public static bool ContainsSequence(List<int> original, List<int> copia)
        {
            int j;

            for (var i = 0; i < original.Count; i++)
            {
                int k;
                for (j = 0, k = i; j < copia.Count && k < original.Count && original[k] == copia[j]; j++, k++) ;

                if (j == copia.Count)
                    return true;
            }

            return false;
        }*/

        // verificação mais performática
        public static bool ContainsSequence(List<int> list1, List<int> list2)
        {
            if (list2.Count == 0)
            {
                // A lista 2 vazia está sempre contida na lista 1
                return true;
            }

            int[] pattern = list2.ToArray();
            int[] text = list1.ToArray();
            int[] pi = ComputePrefixFunction(pattern);

            int j = 0;

            for (int i = 0; i < text.Length;)
            {
                if (pattern[j] == text[i])
                {
                    j++;
                    i++;
                }

                if (j == pattern.Length)
                {
                    // Encontrou uma correspondência completa
                    return true;
                }

                if (i < text.Length && pattern[j] != text[i])
                {
                    if (j != 0)
                    {
                        j = pi[j - 1];
                    }
                    else
                    {
                        i++;
                    }
                }
            }

            return false;
        }

        private static int[] ComputePrefixFunction(int[] pattern)
        {
            int[] pi = new int[pattern.Length];
            int j = 0;

            for (int i = 1; i < pattern.Length;)
            {
                if (pattern[i] == pattern[j])
                {
                    j++;
                    pi[i] = j;
                    i++;
                }
                else
                {
                    if (j != 0)
                    {
                        j = pi[j - 1];
                    }
                    else
                    {
                        pi[i] = 0;
                        i++;
                    }
                }
            }

            return pi;
        }

        static void Main(string[] args)
        {
            //File.Delete("./test.txt"); - só para teste
            //var file = File.CreateText("./test.txt");  - só para teste
            int bufferSize = 300000;
            List<string> song1 = new List<string>();
            List<string> song2 = new List<string>();
            byte[] inputBuffer = new byte[bufferSize];
            Stream inputStream = Console.OpenStandardInput(inputBuffer.Length);
            Console.SetIn(new StreamReader(inputStream, Console.InputEncoding, false, inputBuffer.Length));

            string line = Console.ReadLine();
            //var init = DateTime.Now;  - só para teste

            while (!string.IsNullOrEmpty(line))
            {
                var sizes = line.Split(' ');
                var size1 = Convert.ToInt32(sizes[0]);
                var size2 = Convert.ToInt32(sizes[1]);

                if (size1 == 0 && size2 == 0)
                    break;

                line = Console.ReadLine();
                song1.Clear();
                song1.AddRange(line.Split(' '));

                line = Console.ReadLine();
                song2.Clear();
                song2.AddRange(line.Split(' '));

                var seqSong1 = CreateSeq(song1);
                var seqSong2 = CreateSeq(song2);

                if (ContainsSequence(seqSong1, seqSong2))
                {
                    Console.WriteLine("S");
                    // file.WriteLine("S");  - só para teste
                }
                else
                {
                    Console.WriteLine("N");
                    //file.WriteLine("N");  - só para teste

                }
                // Console.WriteLine("Test " + (DateTime.Now - init).Seconds);  - só para teste

                line = Console.ReadLine();
            }
            //file.Close();  - só para teste
        }
    }
}
