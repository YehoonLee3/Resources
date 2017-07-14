var express = require('express');
var app = express();
app.use(express.static('public')); // 정적인 파일이 위치할 디렉토리를 지정하는 기능
app.get('/', function(req, res){
	// 사용자가 web server에 접속할 때 get과 host 방식으로 접속할 수 있다.
	// get 함수의 인자인 function()함수는 req, res 인자를 갖는다.
	// 사용자가 root 로 들어왔을 때, get 함수가 function을 실행시킨다.
	// 매개변수 값으로 사용자의 요청 관련 req 객체, 응답에 대한 res 객체를 전달
	res.send('Hello home page<br>\
		<a href="/login">Login</a><br>\
		<a href="/Route">Route</a><br>\
		<a href="/dynamic">Dynamic</a><br>\
		<a href="/static.html">Static</a>');
	// res.send('<html>\'); 로 여러줄의 html 코드를 입력 할 수 있다.
	console.log('Welcome home.');
});
app.get('/route', function(req, res){
	res.send('Hello router<br><img src="/flower.jpg" style="max-width: 100%; height: auto;">');
});
app.get('/login', function(req, res){
	res.send('<h1>Login please</h1>');
});
app.get('/dynamic', function(req, res){
	var lis = '';
	for(var i=0; i<6; i++){
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
		hello, dynamic
		<ul>
		${lis}
		</ul>
		<br>
		${time}
	</body>
	</html>
	`; // ``를 사용하여 여러 줄의 코드를 변수로 저장한다.
	// ${var} 는 변수를 의미한다.
	res.send(output);
});
app.listen(3000, function(){
	console.log('Connected to 3000 port!');
});
