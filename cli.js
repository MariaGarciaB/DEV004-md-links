import { argv } from "node:process";
import { mdLinks } from "./index.js";

console.log(argv);



export const optionsCli = (ruta) => {
const isValidate = argv.includes("--validate");
const isStats = argv.includes("--stats");
const options = { validate:isValidate, stats:isStats };
console.log({ isValidate });
console.log({ isStats });
mdLinks(ruta, options)

}
// input links output numeros 

//links repetidos por href... como elimitar los repetidos ... busca:new Set
//..  reduce...suma los links .... legth no tienes que sumarlo..... nomrbro unique y le paso el valor del length de links 
// options = {validate:true, stats:true}...........
// funcion que recibe un arreglo de links y que su output => un nuevo arreglo pero solamente con links no repetidos ... recomendacion hacer en API pir cuestion de orden 
optionsCli('README.md') // ahora dejalo... porque aún no tomo el valor .md hasta que lo captures ya no es necesario por ahora no lo estoy haciendo 

// const [, , ruta] = argv;
// console.log({ ruta });
// const path = 'README.md'
// const optionsCli = ( path, options) => {
// console.log('***********', path)
// console.log('>>>>>>>>',  options)
// }
// optionsCli(console.log)
