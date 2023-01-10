//lexical soping
// see the variable in inner first then in outer an last if any variable is 
//global or not
//koi bhi outer value function k inside access ho sakti h but wohi value inside access 
//nhi ho sakti

let a = 10;
 function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a ,b ,c);
    }
    inner()
}
outer()