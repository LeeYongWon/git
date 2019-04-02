var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('폴더경로'));

app.get('/', function(req, res) {
   res.send('Hello home page');

});
app.get('/dynamic', function(req, res) {
   var output = `
   <!DOCTYPE html>
   <html>
      <head>
         <meta charset="utf-8">
         <title></title>
      </head>
      <body>
         Hello Dynamic
      </body>
   </html>`;
   res.send(output);
})
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
