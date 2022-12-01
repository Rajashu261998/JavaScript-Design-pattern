function Developer(name){
    this.name=name
    this.type="Developer"
}

function Tester(name){
    this.name=name
    this.type="Tester"
}

function EmployeeFactory(){
    this.create=(name,type)=>{
        switch(type){
            case 1:
                return new Developer(name)
                break
            case 2:
                return new Tester(name)
                break
        }
    }
}
function say(){
    console.log("I am" +" "+ this.name + " " +"And I am"+" "+this
    .type)
}
const employeeFactory= new EmployeeFactory()
const employess =[]


employess.push(employeeFactory.create("Ram",2))
employess.push(employeeFactory.create("Ram",1))
employess.push(employeeFactory.create("Ram",2))
employess.push(employeeFactory.create("Ram",1))


employess.forEach(emp=>{
    say.call(emp)
})

