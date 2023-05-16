import { readFile } from 'fs';

export const readMD = (path = "README.md") => {
  return new Promise((resolve, reject) => {   
//5. LEEMOS EL ARCHIVO 
readFile(path, 'utf8',  function(err, data) {
if (err) {
  return reject (err);
}

return resolve(data);
});


  })
}

readMD().then( (res) => console.log(res)).catch((err) => console.log(err)); //Tengo ue tomar la respuesta de MD

/*export const readMD = () => readFile('README.md', 'utf8', (err, data) => {
  
  if (err) throw err
    console.log(" este es el error", err);
  {
  console.log(data)
  }
}); */

//fs.readlink( 'README.md'[, options], readMD )

/*export const linkFileMd = () => fs.readlink(".md", (err, linkString) => {
  if (err)
    console.log("AAAAAAAA", err);
  else
    console.log("Path of the symlink:", linkString);
});*/

