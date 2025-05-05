import java.util.*;

public class hello {

    public static void main(String[] args) {
       Scanner scan=new Scanner(System.in);
       System.out.println("Enter the Name");
       String name=scan.nextLine();
       System.out.println("Enter the age");
       int age=scan.nextInt();
       scan.close();
       System.out.println(name+" "+age);
    }
}