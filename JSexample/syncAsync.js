var fs = require('fs');
console.log("2 Sync");
var data = fs.readFileSync('data.txt',{encoding:'utf-8'}); // sync function
console.log(data);

var fs = require('fs');
console.log("7 Async");
var data = fs.readFile('data.txt',{encoding:'utf-8'}, function(err, data){ // async function
  console.log("9");
  console.log(data);
});
console.log("12");
