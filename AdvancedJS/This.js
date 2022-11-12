/* Tha javaScript this keyword is used in function ,refers to the objec it belongs to
It makes the functions reusable by letting you decide th object value
this value is determined entirely by how a function is called */

//HOW TO DETERMINE THIS

//IMPLICIT BINDING
const person = {
    name : 'Himadri',
    sayMyName : function(){
        console.log(`My Name is ${this.name}`)
    }
}
person.sayMyName()

//Explicit Binding
function sayMyName(person){
    console.log(`My Name is ${this.name}`)
}
sayMyName.call(person);

//NEW BINDING
function Student(name){
    this.name = name;
    //this = {} empty object
}
const p1 = new Student('Himadri');
const p2 = new Student('Him');

console.log(p1.name,p2.name)

/* order of precedence
   new Binding
   explicit
   implicit*/