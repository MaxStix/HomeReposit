/* 3.Есть ссылка api где лежат валюты ПБ в виду json. Задание: попробовать с помощью Node, отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера. Подсказка: нужно посмотреть сторонние модули.
   4. Как отобразить эти данные используя только обычный html и javascript, без сервера?*/

//Вариант с отображением файла валюты json хранящегося на ПК. 
var fs = require('fs');
var file = "pubinfo.json"

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);
  	console.dir(data);
});


//Вариант с отображением валюты в консоле по ссылке с помощью модуля needle.
var needle = require("needle");
url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

 needle.get(url,function(err, res, body){
    if(err) throw(err);
      console.log(body);   
 });

