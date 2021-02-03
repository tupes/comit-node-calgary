using System;
					
public class Program
{
	static void processInput(string text) {
		string result;
		if (text.Length > 5) {
			result = text.ToUpper();
		} else {
			result = text.ToLower();
		}
		Console.WriteLine(result);
	}
	
	public static void Main()
	{
		processInput("Hey");
		processInput("hello there");
	}
}