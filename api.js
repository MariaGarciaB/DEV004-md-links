import { readFile } from 'fs';

export const readMD = (path = "README.md") => {
  return new Promise((resolve, reject) => {   
//5. LEEMOS EL ARCHIVO 
readFile(path, 'utf8',  function(err, data) {
if (err) {
  return reject (err);
}

return resolve(data);
});
  })
}

export const findLinks = () => {

//5. LEEMOS LINKS
let string = `
* [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
* [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
* [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)`

let regex = /\[([^\]!]+)]\((https:\/\/[^\)]+)\)/gi
const myMatch = string.match(regex)
console.log(myMatch)
// const [ {full, text, url} ] = myMatch
// console.log(text)
// console.log(url)
  }

// mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
//readMD().then( (res) => console.log(res)).catch((err) => console.log(err)); //Tengo ue tomar la respuesta de MD
findLinks(readMD())//Tengo ue tomar la respuesta de MD


