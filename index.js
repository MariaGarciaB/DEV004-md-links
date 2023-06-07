import { existsSync, statSync } from "fs";
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { readMD, findLinks, validate } from "./api.js";

export const mdLinks = (ruta) => {
  return new Promise((resolve, reject) => {
    // 1. IDENTIFICA SI EXISTE UNA RUTA
    if (existsSync(ruta) === true) {
      console.log("RUTA EXISTENTE");
      // 2. LA RUTA ES ABSOLUTA ¿? Extra (si es un archivo o directorio)
      if (!isAbsolute(ruta)) {
        ruta = resolvePath(ruta);
      }
      // 3. ES UNA ARCHIVO ¿?
      let stats = statSync(ruta);
      if (stats.isFile() === true) {
        console.log("ARCHIVO: ", extname(ruta));
        //TODO: 4. ES UN ARCHIVO MD ¿?
        if (extname(ruta) === ".md") {
          readMD(ruta)
            .then((contenido) => {
              resolve(validate(findLinks(contenido, ruta)));
            })
        } else {
          reject("Por el momento sólo acepta archivos .md");
        }
      } else {
        reject("Por el momento sólo leemos archivos");
      }
    } else {
      reject("Esta ruta no existe");
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
