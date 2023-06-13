import { argv } from "node:process";
import { mdLinks } from "./index.js";

// console.log(argv);
export const optionsCli = () => {
const isValidate = argv.includes("--validate");
const isStats = argv.includes("--stats");
const ruta =  argv[2];
const options = { validate:isValidate, stats:isStats };
// console.log('estas viendo este console.log', { isValidate });
// console.log({ isStats });
mdLinks(ruta, options).then((res)=>{
    const totalLiks = res.length;
    const uniqueLinks = [...new Set(res)].length;
    const breakLinks = res.filter((res) => res.status >= 400).length;
    // console.log('>>>>>>>>>>>>>', breakLinks);
if (options.validate) {
    console.log(res)
  } 
  else if (process.argv[3] === '--stats') {
    console.log('Total:', totalLiks)
    console.log('Unique:',uniqueLinks);
  }
  else if (process.argv[3] === '--validate' && process.argv[4] === '--stats') {
    console.log('Total:', totalLiks)
    console.log('Unique:',uniqueLinks);
    console.log('Broken:', breakLinks);
  }
})
}
optionsCli()

//implementar las opciones, que va a pasar con la primera opcion ejemplo --validate... o que pasaria si
//no habría una option 
//que pasa si no estuviera escrito alidate 
//links repetidos por href... como elimitar los repetidos ... busca:new Set
//..  reduce...suma los links .... legth no tienes que sumarlo..... nomrbro unique y le paso el valor del length de links 
// options = {validate:true, stats:true}...........
// funcion que recibe un arreglo de links y que su output => un nuevo arreglo pero solamente con links no repetidos ... recomendacion hacer en API pir cuestion de orden 
 // ahora dejalo... porque aún no tomo el valor .md hasta que lo captures ya no es necesario por ahora no lo estoy haciendo 
