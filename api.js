import { readFile } from "fs";

//funcion ruta absoluta
/*const rutaAbsoluta = (mdLinks) => {
    return console.log(rutaAbsoluta)
}*/
// poner aca readFile
export const readMD = () => {
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

readMD()