
const students = [
    { name: "Himadri", subject: "salesforce" },
    { name: "Him", subject: "javascript" }
];

function enrollStudent(student) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log('student has been enrolled');
            const error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
        }, 3000);

    })
   
}
function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = { name: "Paul", subject: "Finanace" };
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("Some error occured");
})
//getStudents();

/*Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple 
asynchronous operations where callbacks can create callback hell leading to unmanageable code.*/

/* why promise and use
What do promises exactly solve in JavaScript?
The Promise.resolve() method "resolves" a given value to a Promise . If the value is a promise, that promise is returned;
 if the value is a thenable, Promise.resolve() will call the then() method
 with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value*/