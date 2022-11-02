const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);
console.log("ini akan berjalan terakhir");