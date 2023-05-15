import { mdLinks } from "../index.js"
import { readFile } from "fs";

//funcion ruta absoluta
/*const rutaAbsoluta = (mdLinks) => {
    return console.log(rutaAbsoluta)
}*/

// poner aca readFile
export const leerArchivo = (path) => {
    // resolve y reject son callbacks, para usar posteriormente en las promesas
    return new Promise((resolve, reject) => {   //sintaxis nueva promesa
//5. LEEMOS EL ARCHIVO 
fs.readFile(path, function(err, data) {
  if (err) {
    return reject (err);
  }

  return resolve (data);
});

  
    })
}

leerArchivo()*/