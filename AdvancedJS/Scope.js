// cope basically determines the visibility of variables
// block scope
//function scope
//global scope

//BLOCK SCOPE WHERE ONLY LET AND CONST CAN BE USED WITHIN THE BLOCK

let num = 100;

if (true){
    const name = 'HIMADRI PAUL';
    console.log(name);
    console.log(num); //global scope
}

//Function scope where we can access the variable outside the function

function nam(){
    const nam = 'Him';
    console.log(nam);
    console.log(num); //global scope
}
nam()

//Global scope -- can be access outside block and function scope 
 
