class LeaveBalance{

    constructor(employeeName,daysAvailable=0)
    {
        this.employeeName = employeeName;
        this.daysAvailable = daysAvailable;
    }
    accrueLeave(days){
         this.daysAvailable = this.daysAvailable + days;
         console.log(`Accrued ${days} days. New balance: ${this.daysAvailable}`);
       
    }

    requestLeave(days){
        //let currentBalance = this.daysAvailable;
       
         if (days > this.daysAvailable) {
            console.log("Cannot request "+ days + " days. Insufficient leave balance!");
            return;
         }
           this.daysAvailable=this.daysAvailable-days
           console.log(`Used ${days} days. New balance: ${this.daysAvailable}`);
         }

        checkBalance(){
            console.log(`${this.employeeName} leave balance: ${this.daysAvailable} days`);
        }
    }


let leaveBal= new LeaveBalance("Aisha Khan", 20);

leaveBal.checkBalance();
leaveBal.accrueLeave(5);
leaveBal.requestLeave(10);
leaveBal.requestLeave(1000);