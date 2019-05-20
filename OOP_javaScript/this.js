/*this는 그 메소드가 속한 객체를 가리키는 약속된 특수한 예약어이다.
 this는 그 객체를 가리키는 대명사이다.
*/
var kim = {
   name: 'kim',
   first: 10,
   second: 20,
   // sum:function(val, val2){
   //    return val+val2;
   sum: function() {
      //this를 사용
      return this.first + this.second;
   }
};
//this를 사용하지 않은 방식
console.log("kim.sum(kim.first, kim.second) : " + kim.sum(kim.first, kim.second));
//this를 사용한 방식
console.log("kim.sum(this를 사용) : " + kim.sum());
//github에 올라가나 보려고요
console.log('git');
