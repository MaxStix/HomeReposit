/* 1. Создать сервер,чтоб по запросу localhost:3000 сервер выдавал Hello World!, чтоб по запросу localhost:3000/about сервер выдавал нам данные о запросе в консоль,
      а по запросу localhost:3000/file чтоб выдал любой файл .mp3 и по запросу localhost:3000/stop - остановить сервер! */

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	if(req.url === "/") {
	   res.write ('Hello World!');
  	   res.end();
	}

	else if(req.url === "/about") {
		 console.log ('Some text to my console');
  	   	 res.end();
	}

	else if(req.url === "/file") {
		fs.readFile("scooter.mp3", function (err, data) {
	   	   res.write(data);
		   res.end();
	    });
	}
	else if (req.url === "/stop") {
		server.close();
	};
	
}).listen(3000, function () {
  console.log('localhost:3000');
});

/* 2. Каждый раз при изменении кода нам приходится перезапускать сервер. Как сделать так чтоб сервер перезапускался сам? */
Для перезапуска сервера установил nodemon  www.npmjs.com/package/nodemon