package myproject;
import java.util.Scanner;
public class IfElseDmo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int num1;
		int num2;
		char operator;
		Scanner sc = new Scanner(System.in);
		
		while (true) {
		System.out.println("enter num");
		num1=sc.nextInt();
		
		System.out.println("enter another number");
		num2=sc.nextInt();
		
		System.out.println("enter operator");
		operator=sc.next().charAt(0);
		
		
		if (operator == '+'){
		int c = num1 + num2;
		System.out.println(num1+ "+" +num2 +"="  +c);
		}
		
		else if (operator == '-'){
			int d = num1 - num2;
			System.out.println(num1+ "-" +num2 +"=" +d);
			}
		
		else if (operator == '*'){
			int e = num1 * num2;
			System.out.println(num1+ "*" +num2 +"=" +e);
			}
		
		else if (operator == '/'){
			float f = num1 / num2;
			System.out.println(num1+ "/" +num2 +"=" +f);
			}
		
			
}
}
}
