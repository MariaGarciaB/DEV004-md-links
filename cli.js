import { argv } from "node:process";
import { mdLinks } from "./index.js";

export const optionsCli = () => {
const isValidate = argv.includes("--validate");
const isStats = argv.includes("--stats");
const isFirstOption = process.argv[3] === '--stats' && process.argv[4] === '--validate';
const isSecondOption = process.argv[3] === '--validate' && process.argv[4] === '--stats';
const isBreakLinks = isFirstOption || isSecondOption
const ruta =  argv[2];
const options = { validate:isValidate, stats:isStats, combo:isBreakLinks };
mdLinks(ruta, options).then((res)=>{
    const totalLiks = res.length;
    const uniqueLinks = [...new Set(res.map((link) => link.href))].length;
    const breakLinks = res.filter((res) => res.status >= 400).length;
if (isValidate && !isStats) {
    console.log(res)
  } 
  else if (isStats && !isValidate) {
    console.log('Total:', totalLiks)
    console.log('Unique:',uniqueLinks);
  }
  else if (options.combo) {
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
//versión de chalk chalk 4.1.2 npm install react@16.14.0