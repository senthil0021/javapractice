import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Listclass {

    public static void main(String[] args) {
    List<String> students= new ArrayList<>();
    
    students.add("Senthil");
    students.add("Baby");
    students.add("Kumar");
    students.add("Thangaraj");
    students.add("Abinaya");

    for(String student:students)
    {
        System.out.println(student);
    }

    students.add(1,"Sudha");

    for(String student:students)
    {
        System.out.println(student);
    }
    System.out.println("..............");

    System.out.println(students.set(2,"Kumar"));

    System.out.println(students.get(2));

    System.out.println(students.remove(2));

    System.out.println(students.isEmpty());

    System.out.println(students.contains("Senthil"));


     LinkedList<String> customers = new LinkedList<>();

        customers.add("Ravi");
        customers.add("Sneha");
        customers.add("Arun");

        System.out.println("Current Customers: " + customers);

        customers.addFirst("Aishwarya");
        customers.addLast("Karan");

        System.out.println("After addding  " + customers);

        System.out.println( customers.peek());

        System.out.println( customers.poll());

        System.out.println( customers);

        customers.set(1, "Sonia");

        System.out.println("Update: " + customers);

        customers.remove("Arun");

        System.out.println("remove: " + customers);


}
}
