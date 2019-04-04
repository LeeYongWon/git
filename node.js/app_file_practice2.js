//1.express module을 사용하기 위해서 변수에 담아준다.
var express = require('express');
//2.application객체를 이용하기위해 express를 app에 담아준다.
var app = express();
//12.11번의 data를 얻기위해 filesystem module을 가지고온다.
var fs = require('fs');
//5.templete engine을 이용하기위해 설정을 진행한다.
app.set('view engine', 'jade');
//6.jade파일의 경로를 설정한다.첫번째 인자는 views를 쓰겠다고 설정을 하고  두번째 인자는 파일의 경로를 나타내준다.
app.set('views', './views_file_practice2');
//8. jade file이 열린걸 확인하고 pretty module설정
app.locals.pretty = true;
//10.post방식으로 전송된 값을 이용할 수 있게 bodyparser 객체를 사용
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: false
}));
//3.Server에 접속 할 수 있도록 listen함수를 통해 지정된 port를 바라보게 한다
app.listen(2500, function() {
   console.log('Connected 2500 Port');
});
//4.지정된 port에 연결이 되었으면 get방식을 통해 지정된 경로에서 실행이 되는지 확인해본다. res.send()로 문자열을 보낸다.
app.get('/', function(req, res) {
   res.send('hi');
});
//7.6번의 순서를 마치고 jade를 이용할 수 있으니 res.rendor를 통해 jade파일을 읽어올수 있다.
/*12.이제 저 파일들의 이름을 이용하기위해 fs.readdir을 이용해서 파일들을 읽어온다.
fs.readir 메소드는 첫번째 인자로 파일의 경로를 가지고 두번째 인자로 경로에 있는 파일들의 이름을 files array에 담게 된다.이 데이터를 사용하기 위해서는 res.render('view(파일명)', {(객체를 이용해서 키 : 밸류 로 저장한다.)})
*/
//9.form을 쓰기위해 새로운 경로의 get방식으로 routing해준다.
app.get('/topic/new', function(req, res) {
   fs.readdir('data_practice2',function(err, files){
      if (err) {
         res.status(500).send('오류가 발생했습니다');
      }
      res.render('new',{topics:files});
   });
});

app.get(['/topic', '/topic/:id'], function(req, res) {
   var id = req.params.id;
   var description = req.params.description;
   fs.readdir('data_practice2', function(err, files) {
      if (err) {
         res.status(500).send('오류가 발생했습니다');
      }
      if (id) {
         //id값이 잇을떄
         fs.readFile('data_practice2/' + id, 'utf8', function(err, data) {
            if (err) {
               console.log(err);
               res.status(500).send('오류가 나왔습니다.');
            }
            res.render('view', {
               title: id,
               topics: files,
               description: data
            });
         });
      } else {
         //id값이 없을때
         res.render('view', {
            topics: files,
            title:'Welcome',
            description:'Hello Javascript'
         });
      }

   });

});
/*13.view.jade에 list가 나왔고 파일이름으로 링크가 걸려있기때문에 그 링크를 클릭 했을때
실행될 경로 라우팅을 해줘야한다.그 링크를 클릭 했을때 그 글의 내용이 보이도록 하기 위해서
*/



//11. 9번의 순서를 마쳤으면 post방식으로 경로를 잡아준다.이 라우팅을 통해 fs.writeFile을 메소드를 이용하여 첫번째 인자로는 그 파일이 저장될 경로와 title을 이용하여 파일의 제목을 설정하고 description을 저장한다.
app.post('/topic', function(req, res) {
   var title = req.body.title;
   var description = req.body.description;
   fs.writeFile('data_practice2/' + title, description, function(err) {
      if (err) {
         console.log(err);
         res.status(500).send('Internet Server Error');
      }
      //post방식으로 데이터가 전송 됐을때 파일을 저장한 후 /topic으로 redirect 해준다.
      res.redirect('/topic');

   });

});
