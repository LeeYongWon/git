var OrientDB = require('orientjs');
//var OrientDB=require('orientjs');


var server = OrientDB({
   host: 'localhost',
   port: 2424,
   username: 'root',
   password: '901231'
});
// var server=OrientDB({
//    host:'localhost',
//    port:2424,
//    username:'root',
//    password:'901231'
//
// });

var db = server.use('o2');
//var db=server.use('o2');

// db.record.get('#34:0').then(function(record){
//    console.log('Loaded record:', record);
// });
/*
 -CREATE
 -READ
 -UPDATE
 -DELETE

 -CRUD
*/
//CREATE
//var sql=select from topic;
//db.query(sql).then(function(results){
//       console.log(results);})

// var sql='select from topic';
// db.query(sql).then(function(results){
//    console.log(results);
// });

//var sql ='SELECT FROM topic WHERE @rid=:rid';
/*
   var param={
      params:{
      rid:'#33:0'
   }
};

db.query(sql, param).then(function(results){
   console.log(results)
})
*/
// var sql = 'SELECT FROM topic WHERE @rid =:rid ';
// var param = {
//    params: {
//       rid: '#34:0'
//    }
// };
// db.query(sql, param).then(function(results) {
//    console.log(results);
// });

// var sql = 'INSERT INTO topic(title, description) VALUES(:title, :desc);';
//
// db.query(sql, {
//    params: {
//       title: 'Express',
//       desc: 'Express is framework for web'
//    }
// }).then(function(results) {
//    console.log(results);
// });

// var sql='DELETE FROM topic WHERE @rid=:rid ';
// var param={
//    params:{
//       rid:'#33:1'
//    }
// };
// db.query(sql, param).then(function(results){
//    console.log(results);
// });
var sql = 'UPDATE topic SET title=:title WHERE @rid=:rid';
db.query(sql, {
   params: {
      title: 'Expressjs',
      rid: '#34:1'
   }
}).then(function(results){
   console.log(results);
});
