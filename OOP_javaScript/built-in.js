console.log(Math.random());
console.log(Math.floor(3.9));

var MyMath ={
   PI:Math.PI,
   random:function(){
      return Math.random();
   },
   floor:function(val){
         return Math.floor(val);
   }

};
console.log("MyMath.PI "+MyMath.PI);
console.log("MyMath.random "+MyMath.random());
console.log("MyMath.floor "+MyMath.floor(3.6));
