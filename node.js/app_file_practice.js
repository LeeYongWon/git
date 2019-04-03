var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.set('views', './views_file_practice');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
   extended: false
}));
app.locals.pretty = true;
app.get('/topic/new', function(req, res) {
   res.render('new');
});
app.get('/topic', function(req, res) {
   fs.readdir('data_practice', function(err, files) {
      console.log(files);
      console.log('0000000');
      if (err) {
         console.log(err);
         res.status(500).send('Internal Server Error');
      }
      res.render('view', {
         topics: files
      });

   });
});
app.get('/topic/:id', function(req, res) {
   var id = req.params.id;
   /*readdir를 통해서 file array를 가져오고
     readFile을 통해서 그 파일의 데이터를 가져오고
     글의 본문도 출력한다.
     해석하자면 view.jade  파일의 이름을 readir을 files array에 담아 가져오고
     readFile을 통해 그 파일의 내용을 data에 담아서 가져온다.
     그리고 {}객체를 이용하여 그 내용을 title,topics,description에 저장하여 사용
     res.render('view', {
        title: id,
        topics:files,
        description:data
     });
   */
   fs.readdir('data_practice', function(err, files) {
      console.log(files);
      console.log('0000000');
      if (err) {
         console.log(err);
         res.status(500).send('Internal Server Error');
      }
      fs.readFile('data_practice/' + id, 'utf8', function(err, data) {
         if (err) {
            res.status(500).send('Internet Server Error');
         }
         res.render('view', {
            title: id,
            topics:files,
            description:data
         });
      });
   });
   console.log('------------------');
   console.log('id값은' + id);
});
app.post('/topic', function(req, res) {
   var title = req.body.title;
   var description = req.body.description;
   fs.writeFile('data_practice/' + title, description, function(err) {
      if (err) {
         res.status(500).send('Internal Server Error');
      }
      res.send('Success');
   });


});
app.listen(2800, function() {
   console.log('Connected 2800 port');
});
