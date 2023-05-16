// funcion llamada file exists, donde probamos si el path existe
import { existsSync, statSync } from "fs";
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { runInThisContext } from "vm";

//'babel.config.json'
//'README.md'
//'test'
//'mari/README.md'
//'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/jest.config.js'
export const mdLinks = (path = "README.md", options) => {
  return new Promise((resolve, rejects) => {
    const isPath = existsSync(path);
    const isPathAbsolute = isAbsolute(path);
    let stats = statSync(path);
    const file = stats.isFile();
    const typeFile = extname(path);
    //1. IDENTIFICA SI EXISTE UNA RUTA
    if (isPath === true) {
      console.log("RUTA EXISTENTE");
      //2. LA RUTA ES ABSOLUTA ¿? Extra (si es un archivo o directorio)
      if (isPathAbsolute === true) {
        console.log("RUTA ABSOLUTA: ", path);
        //3. ES UNA ARCHIVO ¿?
        if (file === true) {
          console.log("ARCHIVO: ", extname(path));
          //4. ES UN ARCHIVO MD ¿?
          if (typeFile !== ".md") {
            console.log("Por el momento sólo acepta archivos .md");
          }
        } else {
          console.log("Por el momento sólo leemos archivos");
        }
      } else {
        console.log("CONVERSIÓN A RUTA ABSOLUTA:  ", resolvePath(path));
        if (file === true) {
          console.log("ARCHIVO: ", extname(path));
          if (typeFile !== ".md") {
            console.log("Sólo puede leer archivos .md");
          }
        } else {
          console.log("Sólo pueden leerse archivos");
        }
      }
    } else {
      console.log("RUTA NO EXISTENTE");
      //return reject("Esta ruta no existe");
    }
  });
};
mdLinks();

/*export const mdLinks = (
  path = 'README.md', options) => {
  return new Promise((resolve, reject) => {
    const isPath = existsSync(path);
    const isPathAbsolute = isAbsolute(path);
    let stats = statSync(path);
    const file = stats.isFile();
    const typeFile = extname( path );
    //1. EXISTE UNA RUTA ¿?
    if (!isPath) {
      console.log("No existe ruta");
    }else{
      console.log('RUTA EXISTENTE')
      //2. ES RELATIVA
    }if (!isPathAbsolute) {
      //2.2. CONVERTIRLA A ABSOLUTA
      console.log("CONVERSIÓN A RUTA ABSOLUTA:  ", resolvePath(path));
      //3. ES UN ARCHIVO ¿?
      if (!file) {
        console.log("Sólo puedo leer archivos");
      } else {
        console.log("ARCHIVO: ", extname(path));
        if(typeFile !== '.md'){
          console.log("Por el momento sólo acepta archivos .md");
        }
      }
    } else {
      console.log("RUTA ABSOLUTA: ", path);
      //console.log("RUTA: ", path)
      //3. ES UN ARCHIVO ¿?
      if (!file) {
        console.log("Sólo puedo leer archivos");
      } else {
        console.log("ARCHIVO: ", extname(path));
        if(typeFile !== '.md'){
          console.log("Por el momento sólo acepta archivos .md");
        }
      }
    }
  });
};

// mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
mdLinks();*/
