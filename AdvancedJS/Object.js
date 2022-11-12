
/* An object is a collection of properties, and a property is an 
association between a name (or key) and a value.
A property's value can be a function, in which case the 
property is known as a method.
In addition to objects that are predefined in the browser, 
you can define your own objects   */


let person = {
    name:"Himadri",
    subject:'salesforce',
    age:30
}
console.log(person.subject);
console.log(person.age);


//Type conversion
console.log(parseInt('5')); //convert string to number
console.log(parseFloat('3.14')); //convert string to float
console.log(String(500));
console.log((500).toString());//doesn't work for null or undefined

