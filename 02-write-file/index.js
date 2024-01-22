const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const pathToFile = path.join(__dirname, 'text.txt');

const exit = () => {
  stdout.write('Работа завершена!\n');
  process.exit();
}

const fileHandler = () => {
  fs.open(pathToFile, 'w', (err) => {
    if (err) throw err;
  })
  stdout.write('Введите текст\n');
  stdin.on('data', (data) => {
    const stringDate = data.toString();

    if (stringDate.includes('.exit')) {
      exit();
    }

    fs.appendFile(pathToFile, data, (err) => {
      if (err) throw err;
    })
  })
}

process.on('SIGINT', () => {});
process.on('SIGINT', exit);
fileHandler();