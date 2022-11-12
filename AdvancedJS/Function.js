//A javaScript function is a block of code designed to perform perticular task
//Functions are reusable ,It devide the complex problems into smaller chunks

/* function greet(){
    console.log('Good Morning Himadri');
 }
 greet() */

 function greet(username){
    console.log('Good Morning '+username)
 }
 greet('HIMADRI')
 greet('Eshita')


 function add(a, b ){
     const sum = a + b;
     console.log(sum);
 }
 add(5,6);
 add(10,29);

//ARROW FUNCTION

const arrowMul = (a,b) =>{

    return a * b;
}
const mul = arrowMul(9,8);
console.log(mul)
