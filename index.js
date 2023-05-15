// funcion llamada file exists, donde probamos si el path existe
import { existsSync, statSync } from "fs";
import { isAbsolute, resolve as resolvePath, extname } from "path";
import { runInThisContext } from 'vm';

//'babel.config.json'
//'README.md'
//'test'
//'mari/README.md'
//'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/jest.config.js'
export const mdLinks = (path = 'README.md', options) => {
  return new Promise((resolve, reject) => {
//1. EXISTE UNA RUTA ¿?
    const isPath = (existsSync(path));
    if (!isPath){
      console.log('No existe ruta')
    }else
    console.log('Existe una ruta')
//2. ES RELATIVA
const isPathAbsolute =isAbsolute(path);
let stats = statSync(path);
const file=  stats.isFile();
if(!isPathAbsolute){
//2.2. CONVERTIRLA A ABSOLUTA
console.log ('CONVERSIÓN A RUTA ABSOLUTA:  ', resolvePath(path))
//3. ES UN ARCHIVO ¿?
if (!file){
  console.log('Sólo puedo leer archivos');
}else{
  console.log("ARCHIVO: ",  extname( path ));
}

}else{
  //console.log("RUTA ABSOLUTA: ", isPathAbsolute); 
  //console.log("RUTA: ", path)
//3. ES UN ARCHIVO ¿?
if (!file){
  console.log('Sólo puedo leer archivos');
}else{
  console.log("ARCHIVO: ",  extname( path ));
}
}

  });
};
  

  // mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
  mdLinks();



//'babel.config.json'
//'README.md'
//'test'
//'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/jest.config.js'
/*export const mdLinks = (path = 'README.md', options) => {
  // resolve y reject son callbacks, para usar posteriormente en las promesas
  return new Promise((resolve, rejects) => {   //sintaxis nueva promesa
//1. IDENTIFICA SI EXISTE UNA RUTA 
const rutaExiste = (existsSync(path));
    if (rutaExiste === true) {
    console.log("RUTA EXISTENTE") 
//2. LA RUTA ES ABSOLUTA ¿?
      //Extra (si es un archivo o directorio)
      const isPathAbsolute =isAbsolute(path);
console.log("RUTA ABSOLUTA: ", isPathAbsolute); 
if(isPathAbsolute === true){
  console.log("RUTA: ", path)
}else {
  //console.log ("Esta ruta NO es absoluta")
 //return reject("No es absoluta")
console.log ("CONVERSIÓN A RUTA ABSOLUTA:  ", resolvePath(path))
//3. ES UNA ARCHIVO ¿?
// Use el método statSync () para almacenar lo que devuelve
// instancia en la variable con nombre stats
let stats = statSync(path);
// Usar el método isFile() para registrar el resultado en la pantalla
//console.log('¿es el archivo? ' + stats.isFile());
if(stats.isFile() ===  true){
  console.log("ARCHIVO: ",  extname( path ));
  //exname solo la etension del archivo 
  //4. ES UN ARCHIVO MD ¿?
  if(extname( path ) === ".md"){
    //console.log("Es un archivo MD");

  }else{
    console.log("Por el momento sólo acepta archivos .md");
  }
}else{
   //else de no es un archivo
  console.log("Por el momento sólo leemos archivos")
}
}
//Aqui continuo para volverla absoluta
    } else {
      console.log("RUTA NO EXISTENTE");
      //Si  no existe la ruta, rechaza la promesa
      reject("Esta ruta no existe");
    }
  });
};
  

  // mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
  mdLinks();*/

