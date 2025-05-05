class Employee
{
    protected String name;
    protected  int id;
    protected int  salary;
    public  Employee(String ename,int eid,int esalary)
    {
        name=ename;
        id=eid;
        salary=esalary;
    }

    public void displayinfo()
    {
        System.out.println("Name   :" + name);
        System.out.println("ID     :" + id);
        System.out.println("Salary :" + salary);
    }
}

class Experienced extends Employee
{
    int bonus;
    int salary;
   public Experienced(String ename,int eid,int esalary,int ebonus)
   {
       super(ename,eid,esalary);
       salary=esalary;
       bonus=ebonus;
   }
   @Override
   public void displayinfo()
   {
    super.displayinfo();
    System.out.println("Bonus :" + salary*bonus/100);
   }
}

class Fresher extends Employee
{
    int bonus;
    int salary;
   public Fresher(String ename,int eid,int esalary,int ebonus)
   {
       super(ename,eid,esalary);
       salary=esalary;
       bonus=ebonus;
   }
   @Override
   public void displayinfo()
   {
    super.displayinfo();
    System.out.println("Bonus :" + salary*bonus/100);
   }
}


public class Inheritance {
    
    public static void main(String[] args)
    {
        Fresher femp=new Fresher("Senthil",101,26000,5);
        Experienced eemp=new Experienced("Senthil",101,26000,10);
        femp.displayinfo();
        eemp.displayinfo();
        Employee emp=new Employee("Kumar",105,4500);
        emp.displayinfo();
    }
}
