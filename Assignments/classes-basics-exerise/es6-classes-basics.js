class Employee{
    constructor(name,department)
    {
        this.name=name;
        this.department=department;
    }

     displayInfo(){
        console.log("Name :" +this.name + " Department:" + this.department);
        
    }
}

let Emp1 = new Employee("Aisha Khan","Engineering");
Emp1.displayInfo();
let Emp2 = new Employee("Raj Verma","Sales");
Emp2.displayInfo();