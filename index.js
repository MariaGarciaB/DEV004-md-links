import { existsSync, statSync } from "fs";
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { readMD, findLinks, validate } from "./api.js";

export const mdLinks = (ruta, options) => {
  return new Promise((resolve, reject) => {
    // 1. IDENTIFICA SI EXISTE UNA RUTA
    if (existsSync(ruta) === true) {
      // 2. LA RUTA ES ABSOLUTA 
      if (!isAbsolute(ruta)) {
        ruta = resolvePath(ruta);
      }
      // 3. ES UNA ARCHIVO ¿?
      let stats = statSync(ruta);
      if (stats.isFile() === true) {
        //4. ES UN ARCHIVO MD ¿?
        if (extname(ruta) === ".md") {
          readMD(ruta).then((contenido) => {
              resolve(validate(findLinks(contenido, ruta)));
          });
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