var express = require('express');
var app = express();
var OrientDB = require('orientjs');
var server = OrientDB({
   host: 'localhost',
   port: 2424,
   username: 'root',
   password: '901231'
});
var db = server.use('o2');
app.set('views', './views_orientdb2');
app.set('view engine', 'jade');
app.locals.pretty = true;

app.get('/', function(req, res) {
   var sql = 'SELECT FROM topic';
   db.query(sql).then(function(S_topic) {
      // res.send(S_topic['@rid']);
      res.render('view',{
         S_topic:S_topic
      });
      console.log(S_topic);
      });

   });

app.listen(2800, function() {
   console.log('2800 port에 접속하였습니다.');
});
