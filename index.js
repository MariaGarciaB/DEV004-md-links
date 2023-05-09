// funcion llamada file exists, donde probamos si el path existe
import { existsSync } from "fs";
import path, { isAbsolute, resolve as resolvePath } from "path";


export const mdLinks = (path= 'README.md', options) => {
  //sintaxis nueva promesa
  // resolve y reject son callbacks, para usar posteriormente en las promesas
  return new Promise((resolve, rejects) => {
    //identifica si la ruta existe
    if (existsSync(path)) {
      //checar o convertir a un ruta absoluta (si es un archivo o directorio)
      const isPathAbsolute =isAbsolute(path);
console.log(isPathAbsolute, '******');
if(isPathAbsolute === true){
  console.log("ruta absoluta")
}else {
  console.log (resolvePath(path))
  //convertir la ruta
}
//Aqui continuo para volverla absoluta
    } else {
      //Si  no existe la ruta, rechaza la promesa
      rejects("Esta ruta no existe");
    }
  });
};
  

   mdLinks();


/*export default {
  mdLinks,
  path,
};*/




/*import { mdLinks} from '../mdlinks.js'


describe ('mdLinks', () => {


})*/
