const account = {
    
    accountName: "Nikita Taware",  
    balance: 5000,            
    
    getBalance: function() {
      console.log(`The total balance is $${this.balance}`);
    },
  
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} deposited successfully. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be greater than zero.");
      }
    },
  
    withdrawal: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`$${amount} withdrawn successfully. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds for this withdrawal.");
      } else {
        console.log("Withdrawal amount must be greater than zero.");
      }
    },
  
    
    getAccountName: function() {
      console.log(`The account holder's name is ${this.accountName}`);
    }
  };
  
  account.getAccountName();     
  account.getBalance();         
  account.deposit(1000);        
  account.withdrawal(500);      
  account.getBalance();         
  