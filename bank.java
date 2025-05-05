class account
{
    private String name;
    private double amount;

    public account(String n,double initialAmount)
    {
        name=n;
        if(initialAmount>0)
        amount=initialAmount;
    }

    public void deposit(double damount)
    {
        amount+=damount;
    }
    public void withDrawal(double Wamount)
    {
           if(Wamount<amount)
           amount-=Wamount;
    }
    
    public double balance()
    {
        return amount;
    }

}


public class bank {
    public static void main(String[] args) {
        account person=new account("Senhil",5000);

      person.deposit(5000);
      person.withDrawal(1000);
      double balance=person.balance();
      System.out.println(balance);
}
}
