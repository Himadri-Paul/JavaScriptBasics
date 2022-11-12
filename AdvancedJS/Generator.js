
//Its a funtion which can be paused or resume
//we can use to create unique ids

function * numberGen(){
    while(true){
        let i=0;
        i++;
    }
}
const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
