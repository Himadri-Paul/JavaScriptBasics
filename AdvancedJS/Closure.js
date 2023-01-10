// 1.A function with lexical scope is closure
//2.inner ne 'a' ki value yaad rakh li

function test(){
    let a = 30;
    return function inner(){
        return a;
    }
}
let inner = test()
console.log(inner());

//1.gives you access to an outer function's scope from an inner function,even if outer function
// finish execution
//2.It makes it possible for a function to have "private" variables.

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter)
    }
    return inner;
}
const fn = outer();
fn()
fn()