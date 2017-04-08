interface Employee{
    firstName: string,
    age: number
}
function firstTsCode(name:string, employee: string){
    console.log(name);
}
function EmployeeDetails(manager :Employee)
{
    console.log(manager);
    
}
var seniorManager = {firstName:"Nancy",age:25};
class myFirstClass(){
    name:any;
}
EmployeeDetails(seniorManager);
firstTsCode("Training","Angular");
var objFirstClass = new myFirstClass();
objFirstClass.name = "Angular";
objFirstClass.name = 2;