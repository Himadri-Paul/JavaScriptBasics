//use of prototype to share properties and methods across instances
//use for inheritance

function Person(fname ,lname){
    this.firstname = fname;
    this.lastname = lname;
}
const Person1 = new Person('Himadri','paul');

Person.prototype.getfullname = function(){
    
    return this.firstname+' '+this.lastname;
}

//console.log(Person1.getfullname());

function superHero(fname,lname){
    Person.call(this,fname,lname)
    this.superHero = true;
}
superHero.prototype.fightcrime = function(){
    console.log('fighting sene');
}
superHero.prototype = Object.create(Person.prototype);
const captainAmerica = new superHero('Steve','Rogers');
console.log(captainAmerica.getfullname());