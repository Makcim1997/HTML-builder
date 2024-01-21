const fs = require('fs');
const path = require('path');
const pathToDir = path.join(__dirname, 'secret-folder');

const getFileSize = (fileName) => {
  const pathToFile = path.join(pathToDir, fileName);
  const fileSize = fs.statSync(pathToFile);
  return fileSize.size;
}

const getFileNameAndExtension = (fileName) => {
  const pathToFile = path.join(pathToDir, fileName);
  return path.parse(pathToFile);
}

const getInformationAboutFiles = () => {
  const folderData = fs.readdirSync(pathToDir, { withFileTypes: true });
  const folderFiles = folderData.filter((elem) => {
    if (elem.isFile()) return elem;
  });

  const filesName = folderFiles.map((elem) => elem.name);
  const dataString = [];

  filesName.forEach((file) => {
    const { name, ext } = getFileNameAndExtension(file);
    const size = getFileSize(file);
    dataString.push(`${name} - ${ext} - ${size}`);
  })
  console.log(dataString.join(',\n'));
}

getInformationAboutFiles();
