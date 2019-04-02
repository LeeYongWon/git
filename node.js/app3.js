var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('폴더경로'));
app.listen(1500, function() {
   console.log('1500 포트에 연결됐습니다');
});
app.get('/', function(req, res) {
   res.send('home화면 입니다');
});
app.get('/express', function(req, res) {
   res.send('이건 같은 말입니다');
});
app.get('/temp', function(req, res) {
   res.send('안녕하세요');
});
app.get('/public', function(req, res) {
   res.send("<img src='route.png'>");
});
app.get('/home', function(req, res) {
   res.send('<a href="ex10.html">누르면 홈으로 갑니다</a>');
});


app.get('/index', function(req, res) {
   var lis = '';
   var time = Date();
   for (var i = 0; i < 5; i++) {
      lis += '<li>hi</li>';
   }
   var output = `
   <!DOCTYPE html>
   <html>

   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>
      Hello
      <ul>
         ${lis}
         ${time}
      </ul>

   </body>

   </html>
   `
   res.send(output);
});
app.get('/topic/:id',function(req,res){
   var topic=[
      'Javascript is....',
      'Nodejs is....',
      'Html is....',
      'Css is....'
   ];
   var output=`
      <a href='topic?id=0'>Javscript</a></br>
      <a href='topic?id=1'>Nodejs</a></br>
      <a href='topic?id=2'>Html</a></br>
      <a href='topic?id=3'>Css</a></br>
      ${topic[req.params.id]}
   `

   res.send(output);
});
