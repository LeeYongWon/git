var memberArray =['egoing', 'graphittie', 'leezche'];
console.group('array loop');
//배열에서의 while 반복문
var i =0;
while(i<memberArray.length){
   console.log(memberArray[i]);
   i++;
}
console.groupEnd('array loop');

var memberObject={
   manager:'egoing',
   developer:'grahittie',
   designer:'leezche'
};
/*객체에서는 for in문을 사용한다.  .뒤에는 객체의 속성이 와야하는데 객체의 변수가 오면 안된다
   그래서 memberObject.name을 하면 undefined가 나온다.
   변수 name에는 오브젝트의 키값이 들어가있다.
*/
console.group('object loop');
for (var name in memberObject) {
   console.log(name +' : ' +  memberObject[name]);
}
console.groupEnd('object loop');
