// funcion llamada file exists, donde probamos si el path existe
import { existsSync, statSync } from "fs";
import { isAbsolute, resolve as resolvePath, extname } from "path";

//'babel.config.json'
//'README.md'
//'test'
export const mdLinks = (path = 'babel.config.json', options) => {
  //sintaxis nueva promesa
  // resolve y reject son callbacks, para usar posteriormente en las promesas
  return new Promise((resolve, rejects) => {
    //identifica si la ruta existe
    if (existsSync(path)) {
      console.log("EXISTE UNA RUTA")
      //checar o convertir a un ruta absoluta (si es un archivo o directorio)
      const isPathAbsolute =isAbsolute(path);
//console.log(isPathAbsolute, '******');
if(isPathAbsolute === true){
  console.log("RUTA ABSOLUTA: ",isPathAbsolute, path)
}else {
  console.log ("Esta ruta no es absoluta: conversión a ruta absoluta:  ", resolvePath(path))
  //convertir la ruta

// Use statSync() method to store the returned
// instance into variable named stats
let stats = statSync(path);
if(stats.isFile() ===  true){
  console.log("Es un archivo",  extname( path ));
  //exname solo la etension del archivo 
  if(extname( path ) === ".md"){
    console.log("Es un archivo MD");
  }else{
    console.log("Este archivo no contiene MD");
  }
 
}else{
  console.log("Por el momento sólo leemos archivos")
}
 
// Use isFile() method to log the result to screen
//console.log('is file ? ' + stats.isFile());
}
//Aqui continuo para volverla absoluta
    } else {
      console.log("NO EXISTE UNA RUTA");
      //Si  no existe la ruta, rechaza la promesa
      rejects("Esta ruta no existe");
    }
  });
};
  

  // mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
  mdLinks();


/*export default {
  mdLinks,
  path,
};*/




/*import { mdLinks} from '../mdlinks.js'


describe ('mdLinks', () => {


})*/
