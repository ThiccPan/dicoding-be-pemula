const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
}

const txtFilePath = path.resolve(__dirname,"todo.txt")

fs.readFile(txtFilePath,"utf-8",fileReadCallback);