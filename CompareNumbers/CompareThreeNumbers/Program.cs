// Tyler Creager Janauary 25 2023
// CompareThreeNumbers
using System;
using System.Diagnostics.Metrics;
using static System.Console;
class CompareThreeNumbers
{
    static void Main()
    {
        string numberString;
        int num1, num2, num3;
        Write("Enter an integer");
        numberString = ReadLine();
        num1 = Convert.ToInt32(numberString);
        Write("Enter an integer");
        numberString = ReadLine();
        num2 = Convert.ToInt32(numberString);
        Write("Enter an interger");
        numberString = ReadLine();
        num3 = Convert.ToInt32(numberString);
        if (num1 == num2)
            if (num1 == num3)
                WriteLine("All three numbers are equal");
            else
                WriteLine("First two are equal");
        else
            if (num1 == num3)
            WriteLine("First and Last are equal");
        else
            if (num2 == num3)
            WriteLine("Last two are equal");
        else
            WriteLine("No two Numbers are Equal");


    }
}