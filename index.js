// funcion llamada file exists, donde probamos si el path existe
import { existsSync } from "fs";
import { isAbsolute, resolve } from "path";


const mdLinks = (path,  options) => {
  //sintaxis nueva promesa
  // resolve y reject son callbacks, para usar posteriormente en las promesas
  return new Promise((resolve, rejects) => {
    //identifica si la ruta existe
    if (existsSync(path)) {
      //checar o convertir a un ruta absoluta (si es un archivo o directorio)
    } else {
      //Si  no existe la ruta, rechaza la promesa
      rejects("Esta ruta no existe");
    }
  });
};
  
const isPathAbsolute =isAbsolute("README.md");
console.log(isPathAbsolute, '******');
if(isPathAbsolute === true){
  console.log("ruta absoluta")
}else {
  console.log (resolve('README.md'), 'README.md')
  //convertir la ruta
}
   mdLinks();


/*export default {
  mdLinks,
  path,
};*/




/*import { mdLinks} from '../mdlinks.js'


describe ('mdLinks', () => {


})*/
