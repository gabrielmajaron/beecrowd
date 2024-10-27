using System;
using System.Globalization;

var cultureInfo = new CultureInfo("pt-BR");

var line = Console.ReadLine();

while (!string.IsNullOrEmpty(line))
{
    var line2 = Console.ReadLine();

    var sensorValues = line2.Split(' ');

    double soma = 0;
    foreach(var strSensorValue in sensorValues)
    {
        soma += Convert.ToDouble(strSensorValue.Replace(".",","), cultureInfo);
    }

    double media = soma / sensorValues.Length;

    double precisao = 0;
    foreach (var strSensorValue in sensorValues)
    {
        var sensorValue = Convert.ToDouble(strSensorValue.Replace(".", ","), cultureInfo);

        precisao += Math.Pow(sensorValue - media, 2);
    }

    precisao = precisao / (sensorValues.Length - 1);
    precisao = Math.Sqrt(precisao);

    Console.WriteLine(precisao.ToString("N5", cultureInfo).Replace(",","."));

    line = Console.ReadLine();
}


