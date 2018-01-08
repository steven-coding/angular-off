var fs = require('fs');

for(var i = 0; i < 1000; i++) {
  fs.writeFile('./dist/files/test-'+(i+1)+'.txt', 'This is file #'+(i+1), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
