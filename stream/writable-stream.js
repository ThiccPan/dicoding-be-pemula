const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

for (let i = 0; i < 3; i++) {
  writableStream.write("test write stream: " + i + "\n");
}