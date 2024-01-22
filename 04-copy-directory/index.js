const fs = require('fs');
const path = require('path');

const pathToFolderFiles = path.join(__dirname, 'files');
const pathToFolderFilesCopy = path.join(__dirname, 'files-copy');

const contentsOfTheFilesFolder = () => {
  return fs.readdirSync(pathToFolderFiles);
}

const copyDir = (file) => {
  fs.copyFile(`${pathToFolderFiles}/${file}`, `${pathToFolderFilesCopy}/${file}`, (err) => {
    if (err) throw err;
  });
}

const createFolder = () => {
  fs.mkdir(`${pathToFolderFilesCopy}`, () => {
    const listFiles = contentsOfTheFilesFolder();
    listFiles.forEach((file) => copyDir(file));
  });
}

createFolder();