import { existsSync, statSync } from "fs";
//fs módilo que permite interactuar con archivos del sistema
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { findLinks, readMD } from "./api.js";

//'babel.config.json'
//'README.md'
//'test'
//'mari/README.md'
//'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/jest.config.js'

export const mdLinks = (ruta) => {
  //investiga process.argv (detecta lo que vas a escribir en consola) en el CLI tenlo presente
  return new Promise((resolve, rejects) => {
    const isPath = existsSync(ruta);
    let stats = statSync(ruta);
    const file = stats.isFile();
    const typeFile = extname(ruta);
    //investigar extname....este path es del parametro que uso en mi funcion(ruta)... el primero es parte de una función
    //TODO: 1. IDENTIFICA SI EXISTE UNA RUTA
    if (isPath === true) {
      console.log("RUTA EXISTENTE");
      //2. LA RUTA ES ABSOLUTA ¿? Extra (si es un archivo o directorio)
      if (!isAbsolute(ruta)) {
        ruta = resolvePath(ruta);
      }
      //3. ES UNA ARCHIVO ¿?
      if (file === true) {
        console.log("ARCHIVO: ", typeFile);
        //4. ES UN ARCHIVO MD ¿?
        if (typeFile === ".md") {
          readMD(ruta).then(contenido => resolve(findLinks(contenido)));
          // console.log(readMD(ruta).then( (res) => console.log(res)).catch((err) => console.log(err)));
        } else {
          console.log("Por el momento sólo acepta archivos .md");
        }
      } else {
        console.log("Por el momento sólo leemos archivos");
      }
    } else {
      console.log("RUTA NO EXISTENTE");
      //return reject("Esta ruta no existe");
    }
  });
};
mdLinks('README.md').then(console.log);
