import { readFile } from 'node:fs';

/*export const readMD = () => {
  return new Promise((resolve, reject) => {   
//5. LEEMOS EL ARCHIVO 
fs.readFile(path, function(err, data) {
if (err) {
  return reject (err);
}

return resolve(data);
});


  })
}

readMD()*/

/*fs.readFile('contenido.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});*/


export const readMD = () => readFile('README.md', 'utf8', (err, data) => {
  if (err) throw err
    console.log(" este es el error", err);
  {
  console.log(data)
  }
}); 

readMD()