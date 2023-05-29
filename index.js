import { existsSync, readFile, statSync } from "fs";
//fs módilo que permite interactuar con archivos del sistema
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { findLinks, readMD } from "./api.js";

export const mdLinks = (ruta) => {
  //investiga process.argv (detecta lo que vas a escribir en consola) en el CLI tenlo presente
  return new Promise((resolve, reject) => {
    //TODO: 1. IDENTIFICA SI EXISTE UNA RUTA
    if (existsSync(ruta) === true) {
      console.log("RUTA EXISTENTE");
      //TODO: 2. LA RUTA ES ABSOLUTA ¿? Extra (si es un archivo o directorio)
      if (!isAbsolute(ruta)) {
        ruta = resolvePath(ruta);
      }
      //TODO: 3. ES UNA ARCHIVO ¿?
      let stats = statSync(ruta);
      if (stats.isFile() === true) {
        console.log("ARCHIVO: ", extname(ruta));
        //TODO: 4. ES UN ARCHIVO MD ¿?
        if (extname(ruta) === ".md") {
          // readMD((findLinks(contenido)))
          readMD(ruta).then((contenido) => resolve(findLinks(contenido, ruta)));
          // readMD(ruta).then(contenido => {
          //   const array3props = findLinks(contenido,ruta)
          //   validate(array3props)
          //   // resolve(array3props)
          // });
          // console.log(readMD(ruta).then( (res) => console.log(res)).catch((err) => console.log(err)));
        } else {
          reject("Por el momento sólo acepta archivos .md");
        }
      } else {
        reject("Por el momento sólo leemos archivos");
      }
    } else {
      reject("babel.config.json");
      //return reject("Esta ruta no existe");
    }
  });
};

mdLinks('README.md').then(console.log).catch(console.log);
// mdLinks('README.md').then(console.log).catch(console.log)
//'babel.config.json'
//'README.md'
//'test'
//'mari/README.md'
//'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/jest.config.js'
