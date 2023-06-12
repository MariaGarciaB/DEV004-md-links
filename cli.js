import { resolve } from 'node:path';
import { argv } from "node:process";
import { mdLinks } from "./index.js";

console.log(argv);



export const optionsCli = () => {
const isValidate = argv.includes("--validate");
const isStats = argv.includes("--stats");
const ruta =  argv[2];
const options = { validate:isValidate, stats:isStats };
console.log('estas viendo este console.log', { isValidate });
console.log({ isStats });
mdLinks(ruta, options).then((res)=>{
    const totalLiks = res.length;
    const uniqueLinks = [...new Set(res)].length;
    const breakLinks = res.filter((res) => res.status !== 200).length;
    console.log('>>>>>>>>>>>>>', breakLinks);
if (options.validate) {
    console.log(res)
    //aca solo uso un console log para mosrar loq ue quiero , ponerlo bonito con chalk 
  } 
  else if (options.stats) {
    console.log('Total:', totalLiks)
    console.log('Unique:',uniqueLinks);
  }
  else if (options.validate, options.stats) {
    console.log(breakLinks);
  }
})
}
optionsCli()

//implementar las opciones, que va a pasar con la primera opcion ejemplo --validate... o que pasaria si
//no habría una option 
//que pasa si no estuviera escrito alidate 
//aquí hago las condicionales que quiero usar ... los que nno necesitan llamar una funcion 
//por ejejemplo 
// input links output numeros 

//links repetidos por href... como elimitar los repetidos ... busca:new Set
//..  reduce...suma los links .... legth no tienes que sumarlo..... nomrbro unique y le paso el valor del length de links 
// options = {validate:true, stats:true}...........
// funcion que recibe un arreglo de links y que su output => un nuevo arreglo pero solamente con links no repetidos ... recomendacion hacer en API pir cuestion de orden 
 // ahora dejalo... porque aún no tomo el valor .md hasta que lo captures ya no es necesario por ahora no lo estoy haciendo 
