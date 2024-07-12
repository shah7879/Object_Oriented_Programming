#! /usr/bin/env node
import inquirer from "inquirer";

class student {
    name : string
    constructor(n : string){
        this.name=n
    }
}
class person {
 students : student[] = []
 addStudent(obj : student){
    this.students.push(obj)
 }
}
const persons = new person()
const programeStart = async(persons : person) =>{
    do{
    console.log("wellcome!");
    const ans = await inquirer.prompt({
        name : "select",
        type : "list",
        message : "whom would you like to intrect with?",
        choices : ["staff", "student", "exit"]
    })
    if(ans.select == "staff"){
        console.log("you approach the staff room and ask question");
        
    }else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            name : "student",
            type : "input",
            message : "enter the students name you wish to engage with"
        })
        const students= persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new student(ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("current student list");
            console.log(persons.students);
             
        }else {
            console.log(`Hello i am ${student.name}. Nice to see you again!`);
            console.log("existing student list:");
            console.log(persons.students);
            
        }
    }else if(ans.select == "exit"){
        console.log("exiting the programe ....");
        
    }
}while(true)
    
}   
    
    programeStart(persons);
    
