
function Person(name, first, second){
    this.name=name,
    this.first=first,
    this.second=second
}
Person.prototype.sum=function(){
    return this.first+this.second; 
}
Person.prototype.minus=function(){
    return this.first-this.second;
}

var kim= new Person('kim',10,20);
var lee= new Person('lee', 20, 20);

//console.log("kim.sum(kim.first, kim,second)"), kim.sum(kim.first, kim.second);
console.log("kim.sum()", kim.s/um());   
console.log("lee.sum()", lee.sum());
console.log("kim.minus()",kim.minus());
console.log("lee.minus()",lee.minus());
