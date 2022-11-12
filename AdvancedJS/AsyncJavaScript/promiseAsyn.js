
async function getData(){

    let a = 10;
    let c = 90;
    let handlepromise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("ALL DONE");
        }, 1000);

    })
    let x = await handlepromise;
    console.log(a);
    console.log(x);
    console.log(c);
}
getData()