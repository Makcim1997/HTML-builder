const fs = require('fs');
const path = require('path');

const pathToProjectFolder = path.join(__dirname, 'project-dist');
const pathToStylesFolder = path.join(__dirname, 'styles');


const getListStylesFiles = () => {
  const listFiles = fs.readdirSync(pathToStylesFolder);
  const listStylesFiles = listFiles.filter((file) => {
    if (file.includes('.css')) {
      return file;
    }
  });
  
  return listStylesFiles;
}

const writeStyleToFile = (data) => {
  fs.appendFile(`${pathToProjectFolder}/bundle.css`, `${data}`, (err) => {
    if (err) throw err;
  })
}

const readFiles = () => {
  const listFiles = getListStylesFiles();
  listFiles.forEach((file) => {
    fs.readFile(`${pathToStylesFolder}/${file}`, 'utf-8', (err, data) => {
      if (err) throw err;
      writeStyleToFile(data)
    })
  })
}

const createBundleFile = () => {
  fs.open(`${pathToProjectFolder}/bundle.css`, 'w', (err) => {
    if (err) throw err;
  })
}

createBundleFile();
readFiles();