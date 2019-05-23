class Person {
    //객체를 초기화 하는법
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}
class PersonPlus extends Person {
    //여기에서 부모클래스를 변경하지않고 객체를 추가하는 방법은
    constructor(name, first, second, third){
        super(name, first, second);
        this.third=third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg() {
        return (this.first + this.second) / 2;
    }

}


// class YongWon {
//     constructor(age, height, hobby) {
//         this.age = age;
//         this.height = height;
//         this.hobby = hobby;
//     }
//     explain() {
//         return "이 사람의 나이는 " + this.age + "이 사람의 키는 " + this.height + "이 사람의 취미는" + this.hobby;
//     }
// }
// class Yongwon2 extends YongWon{
//     explain2(){
//         return  "이 사람의 나이는 : " + this.age + "이 사람의 키는 : " + this.height + "이 사람의 취미는 :" + this.hobby;
//     }
// }
// var yong = new YongWon(10, 170, "soccer");
// var yong2= new Yongwon2(10, 109,"soccer");
var kim = new PersonPlus('kim', 10, 20, 40);
var lee = new Person('lee', 40, 20);
console.log('kim', kim);

//console.log("kim.sum(kim.first, kim,second)"), kim.sum(kim.first, kim.second);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("lee.sum()", lee.sum());
// console.log(yong);
// console.log(yong.explain());
// console.log(yong2.explain2());