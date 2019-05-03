//정보를 읽는것 정보를 만드는것 그게 가장 중요하다.
var memberArray =['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2] : " + memberArray[2]);

var memberObject={
   manager:'egoing',
   developer:'grahittie',
   designer:'leezhce'
};
//오브젝트의 값을 가져오는데 두가지 방법이 있다.
console.log('첫번째 방법 : '+memberObject.manager);
console.log('두번째 방법 : '+memberObject['manager']);
