//express모듈이용
var express = require('express');
//express객체를 사용하기위해서 app 넣음
var app = express();
//url주소 id값을 가지고 오기 위해 body-parser 모듈사용
var bodyParser = require('body-parser');
//mysql을 javascript에서 핸들링 하기 위해서
var mysql = require('mysql');
//jade를 쓰기 위해
app.set('views', './views_mysql2');
app.set('view engine', 'jade');
//url주소의 id값을 가지고 오기 위해서
app.use(bodyParser.urlencoded({
   extended: false
}));
app.locals.pretty = true;
var conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '901231',
   database: 'o2'
});
conn.connect();

app.get('/topic/add', function(req, res) {
   var sql = 'SELECT id,title FROM topic2';
   conn.query(sql, function(err, S_topic, fields) {
      if (err) {
         res.status(500).send('글 추가 에러');
         console.log(err);
      } else {
         res.render('add', {
            S_topic: S_topic
         });
      }
   });
});
app.post('/topic/add', function(req, res) {
   var title = req.body.title;
   var description = req.body.description;
   var author = req.body.author;
   var sql = 'INSERT INTO topic2 (title, description, author) VALUES (?,?,?)';
   conn.query(sql, [title, description, author], function(err, results, fields) {
      if (err) {
         res.status(500).send('데이터를 넣는데 오류가 있어요');
      } else {
         res.redirect('/topic/' + results.insertId);
      }
   });
});
//sql문을 읽어와서 list작성과 id값이 있을때 페이지읻동
app.get(['/topic', '/topic/:id'], function(req, res) {
   var sql = 'SELECT * FROM topic2';
   conn.query(sql, function(err, S_topic, field) {
      console.log('S_topic 의 ' + S_topic);
      var id = req.params.id;
      if (id) {
         var sql = 'SELECT * FROM topic2 WHERE id=?';
         conn.query(sql, [id], function(err, I_topic, fields) {
            console.log('I_topic 의 ' + I_topic[0]);
            if (err) {
               res.status(500).send('에러났다');
            } else {
               res.render('view', {
                  S_topic: S_topic,
                  I_topic: I_topic[0]
               });
            }
         });
      } else {
         res.render('view', {
            S_topic: S_topic
         });
      }
   });
});
app.listen(3000, function() {
   console.log('3000번 포트에 연결됨');
});
