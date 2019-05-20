var kim={
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}
var lee={
    name:'lee',
    first:10,
    second:10,
    sum:function(){
        return this.first+this.second;
    }
}
//console.log("kim.sum(kim.first, kim,second)"), kim.sum(kim.first, kim.second);
console.log("kim.sum(kim.first, kim,second)", kim.sum());   
console.log("kim.sum(kim.first, kim,second)", lee.sum());

var d1 =new Date('2019-1-10');
console.log(d1.getMonth()+1);
