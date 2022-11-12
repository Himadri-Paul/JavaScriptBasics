//curring is a process in functional programming in which we transform a function with
//multiple argument into a sequence of nested functions that take one argument at a time
//function f(a,b,c) is transformed to f(a)(b)(c)

function sum(a, b, c){
    return a + b + c;
}
console.log(sum(3,7,12));


const mul =(a) =>{
    return (b) =>{
        return (c)=>{
            return a * b * c
        }
    }

}
console.log(mul(2)(3)(4))