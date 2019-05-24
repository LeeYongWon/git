var superObj = { superVal: 'super' };
// var subObj={subVal:'sub'};
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log(subObj.subVal, subObj.superVal);
subObj.superVal = 'sub';
console.log(subObj.superVal);
console.log(subObj);

var kim ={
    name:"kim",
    first:10, second:20,
    sum:function(){return this.first+this.second}
};
//Object.creat()를 이용하여 kim을 상속받음
lee=Object.create(kim);
lee.name='lee';
lee.first=20;
lee.second=30;
lee.avg=function(){
    return (this.first+this.second)/2
}
//이건 __proto__를 이용한 상속
// var lee={
//     name:'lee',
//     first:20, second:30,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__=kim;
kim2= new lee.avg();
console.log("---------------------------------");
console.log("kim2 : ", kim2);
console.log("kim.sum() : ", kim.sum());
// console.log("lee.sum() : ", lee.sum());
// console.log("lee.sum() : ", lee.avg());