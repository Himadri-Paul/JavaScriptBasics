class Vechicle{
    constructor(bname,type){
        this.brandName = bname ;
        this.Type = type;
    }
     car(params) {
        return this.brandName+' '+this.Type;
    }
}
const p1 = new Vechicle('Audi','SportsCar');
console.log(p1.car());

class Bus extends Vechicle{
    constructor(bname,type){
        super(bname,type);
    }
}
const p2 = new Bus('BMW','dart');
console.log(p2.car())