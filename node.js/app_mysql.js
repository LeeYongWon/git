//express를 사용하기위해 변수에 담는다
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var mysql = require('mysql');
var conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '901231',
   database: 'o2'
});
conn.connect();
app.set('views', './views_mysql');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
   extended: false
}));
app.locals.pretty = true;
app.get('/topic/add', function(req, res) {
   var sql = 'SELECT id,TITLE FROM topic';
   conn.query(sql, function(err, topics, fields) {
      res.render('add', {
         topics: topics
      });
   });
});
app.post('/topic/:id/edit', function(req, res) {
   var id = req.params.id;
   var title = req.body.TITLE;
   var description = req.body.description;
   var author = req.body.author;
   var sql = 'UPDATE topic SET TITLE=?, description=?, author=? WHERE id=?';
   conn.query(sql, [title, description, author, id], function(err, results, fields) {
      if (err) {
         console.log(err);
         res.status(500).send('인터넷 오류');
      } else {
         res.redirect('topic/' + id);
      }
   });
});

app.post('/topic/add', function(req, res) {
   var title = req.body.TITLE;
   var description = req.body.description;
   var author = req.body.author;
   var sql = 'INSERT INTO topic (TITLE,description, author) VALUES (?,?,?)';
   conn.query(sql, [TITLE, description, author], function(err, result, field) {
      if (err) {
         res.status(500).send('Internet Server Error');
      } else {
         res.redirect('/topic/' + result.insertId);
      }
   });
});
app.get(['/topic/:id/edit'], function(req, res) {
   var sql = 'SELECT id,TITLE FROM topic';
   conn.query(sql, function(err, topics, fiedls) {
      var id = req.params.id;
      if (id) {
         var sql = 'SELECT * FROM topic WHERE id=?';
         conn.query(sql, [id], function(err, topic, fields) {
            if (err) {
               console.log(err);
               res.status(500).send('Internet Server Error');
            } else {
               res.render('edit', {
                  topics: topics,
                  topic: topic[0]
               });
            }
         });
      } else {
         console.log('There is no id');
         res.status(500).send('Intenal Server Error');
      }
   });
});
app.get(['/topic', '/topic/:id'], function(req, res) {
   var sql = 'SELECT id,TITLE FROM topic';
   conn.query(sql, function(err, topics, fiedls) {
      var id = req.params.id;
      if (id) {
         var sql = 'SELECT * FROM topic WHERE id=?';
         conn.query(sql, [id], function(err, topic, fields) {
            if (err) {
               console.log(err);
               res.status(500).send('Internet Server Error');
            } else {
               res.render('view', {
                  topics: topics,
                  topic: topic[0]
               });
            }
         });
      } else {
         res.render('view', {
            topics: topics
         });
      }
   });
});

app.post('/topic', function(req, res) {
   var title = req.body.title;
   var description = req.body.description;
   fs.writeFile('data/' + title, description, function(err) {
      if (err) {
         console.log(err);
         res.status(500).send('Internal server Error');
      }
      res.redirect('/topic/' + title);
   });
});
app.listen(3000, function() {
   console.log('Connected, 3000 port.');
});
