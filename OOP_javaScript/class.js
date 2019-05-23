class Person{
    //객체를 초기화 하는법
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}
Person.prototype.minus=function(){
    return this.first+this.second;
}

var kim= new PersonPlus('kim', 10, 20);
var lee= new Person('lee', 40, 20);
console.log('kim', kim);

//console.log("kim.sum(kim.first, kim,second)"), kim.sum(kim.first, kim.second);
console.log("kim.sum()", kim.sum());   
console.log("kim.avg()", kim.avg());
console.log("lee.sum()", lee.sum());
console.log("lee.minus()",lee.minus());
