var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
//이건 생략 가능 그냥 views 폴더를 찾아줌
app.set('views', './views');
app.use(express.static('public'));



app.get('/topic', function(req, res) {
   var topics = [
      'javascript is ...',
      'Nodejs is...',
      'Express is...'
   ];
   var output = `
      <a href ='topic?id=0'>Javascript</a><br>
      <a href ='topic?id=1'>Nodejs</a><br>
      <a href ='topic?id=2'>Express</a><br>
      ${topics[req.query.id]}
   `
   res.send(output);

});
app.get('/templet', function(req, res) {
   /*첫번째 인자로 템플릿의 이름전달 데이터를
    전달하고 싶으면 객체로 전달
   */
   res.render('temp', {
      time: Date(),
      _title: 'Jade'
   });
});

app.get('/', function(req, res) {
   res.send('Hello home page');

});
app.get('/dynamic', function(req, res) {
   var lis = '';
   for (var i = 0; i < 5; i++) {
      lis = lis + '<li>coding</li>';
   }
   var time = Date();
   var output = `
   <!DOCTYPE html>
   <html>
      <head>
         <meta charset="utf-8">
         <title></title>
      </head>
      <body>
         Hello Dynamic
         <ul>
         ${lis}
         ${time}
         </ul>
      </body>
   </html>`;

   res.send(output);

});
app.get('/route', function(req, res) {
   res.send('Hello Router, <img src="/route.png">');
});
app.get('/ex10', function(req, res) {
   res.send('<a href="/ex10.html">');
});
app.get('/login', function(req, res) {
   res.send('login please');
});

app.get('/home', function(req, res) {
   res.send("src=ex10.html");
});

app.get('/home2', function(req, res) {
   res.send('여기는 home2야');
});
app.listen(3000, function() {
   console.log('Conneted 3000 port');
});
