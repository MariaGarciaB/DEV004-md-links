import { clear } from "console";
import { readFile } from "fs";
import path, { resolve } from "path";

export const readMD = (path) => {
  //mi parametro neesita un argumento....prgress sera el argumento investiga... por lo general si necesita el argumento solo hay casos especificos que no lo necesita
  // 1node 2 archivo 3 readme. 4 --validate
  return new Promise((resolve, reject) => {
    //5. LEEMOS EL ARCHIVO
    readFile(path, "utf8", function (err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

export const findLinks = (contenido) => {
console.log(contenido);
    // const arrayLinks = [];
    //5. LEEMOS LINKS
    let regex = /\[([^\]!]+)]\((https:\/\/[^\)]+)\)/gi;

    // const myMatch = string.match(regex)
    // const [ text, url ] = myMatch
    // console.log(text)
    // console.log(url)

    const myMatch = [...contenido.matchAll(regex)].map((m) => ({
      text: m[1],
      url: m[2],
    }));
    return myMatch;
  }

// mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
//readMD().then( (res) => console.log(res)).catch((err) => console.log(err)); //Tengo ue tomar la respuesta de MD
// let ejemploLinks = `
// * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
// * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
// * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
// * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)`

// console.log(findLinks(ejemploLinks))
// logOut().then((resp) => onNavigate("/"));
