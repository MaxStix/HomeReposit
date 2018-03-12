// Задание 1
var fs = require('fs');
fs.writeFile('myWriteFile.txt', 'New Text', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 


// Задание 2
var fs = require('fs');
fs.appendFile('myWriteFile.txt', "\r\n" + 'Update text', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
