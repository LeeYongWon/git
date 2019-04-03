//express를 사용하기위해 변수에 담는다
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.set('views', './views_file');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
   extended: false
}));
app.locals.pretty = true;
app.get('/topic/new', function(req, res) {
   fs.readdir('data', function(err, files) {
      if (err) {
         console.log(err);
         res.status(500).send('Internal server Error');
      }
   res.render('new', {topics:files});
});
});
//템플릿을 사용할때는 res.render
app.get(['/topic', '/topic/:id'], function(req, res) {
   //파일들을 읽어올떄 fs.readir을 사용한다.
   fs.readdir('data', function(err, files) {
      if (err) {
         console.log(err);
         res.status(500).send('Internal server Error');
      }

      var id = req.params.id;
      if (id) {
         //id값이 있을때
         fs.readFile('data/' + id, 'utf8', function(err, data) {
            if (err) {
               console.log(err);
               res.status(500).send('Internal server Error');
            }
            res.render('view', {
               topics: files,
               title: id,
               description: data
            });
         });
      } else {
         //아이디값이 없을떄
         res.render('view', {
            topics: files,
            title:'Welcome',
            description:'Hello, JavaScript for server.'
         });
      }
   });
});
// app.get('/topic/:id', function(req, res) {
//    var id = req.params.id;
//    fs.readdir('data', function(err, files) {
//       if (err) {
//          console.log(err);
//          res.status(500).send('Internal server Error');
//       }
//       fs.readFile('data/' + id, 'utf8', function(err, data) {
//          if (err) {
//             console.log(err);
//             res.status(500).send('Internal server Error');
//          }
//          res.render('view', {
//             topics: files,
//             title: id,
//             description: data
//          });
//       });
//    });
//
// });
app.post('/topic', function(req, res) {
   var title = req.body.title;
   var description = req.body.description;
   fs.writeFile('data/' + title, description, function(err) {
      if (err) {
         console.log(err);
         res.status(500).send('Internal server Error');
      }
      res.redirect('/topic/'+title);
   });
});
app.listen(3000, function() {
   console.log('Connected, 3000 port.');
});
