
//Function k ander function daal dena h bus 

const students = [
    { name: "Himadri", subject: "salesforce" },
    { name: "Him", subject: "javascript" }
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        callback();
    }, 3000);
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
enrollStudent(newStudent, getStudents);
//getStudents();