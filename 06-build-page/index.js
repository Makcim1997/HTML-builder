const fs = require('fs');
const path = require('path');

const pathToDir = path.join(__dirname);
const pathToProjectDist = path.join(pathToDir, 'project-dist');

const copyDir = () => {
  fs.copyFile(`${pathToDir}/assets`, `${pathToProjectDist}/assets`, (err) => {
    if (err) throw err;
  })
}

const createFile = (fileName) => {
  fs.open(`${pathToProjectDist}/${fileName}`, 'w', (err) => {
    if (err) throw err;
  })
}

const createFolder = () => {
  fs.mkdir(pathToProjectDist, (err) => {
    if (err) throw err;
  })
}

createFolder()
createFile('index.html');
createFile('style.css');
copyDir();