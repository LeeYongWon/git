
function Person(name, first, second){
    this.name=name,
    this.first=first,
    this.second=second,
    this.sum=function(){
       return this.first+this.second;
    }
}
var kim= new Person('kim',10,20);
var lee= new Person('lee', 20, 20);

//console.log("kim.sum(kim.first, kim,second)"), kim.sum(kim.first, kim.second);
console.log("kim.sum()", kim.sum());   
console.log("lee.sum()", lee.sum());
console.log('kim111111111111',kim);
console.log('lee111111111111',lee);
//constructor
console.log(new Person());