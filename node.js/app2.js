var express =require('express');
var app=express();
app.use(express.static('public'));

app.get('/',function(req, res){
   res.send('환영합니다');
});

app.get('/home',function(req,res){
   res.send('안녕하세요 홈입니다');
});

app.listen(2800,function(req, res){
   console.log('2800포트에 접속했습니다');
});
