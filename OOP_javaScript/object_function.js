var kim = { name: 'kim', first: 10, second: 20 }
var lee = { name: 'lee', first: 20, second: 30 }

function sum(prefix) {
    return prefix+(this.first + this.second);
}
//sum();가 똑같은것이다 모든 메소드는 call이라는 함수 사용가능하다.
console.log("sum.call(kim)   ", sum.call(kim, '30 '));
console.log("sum.call(lee)   ", sum.call(lee,'===> '));
//this를 쓸 새로운 함수를 만든다고 보면 된다.
var kimSum=sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());