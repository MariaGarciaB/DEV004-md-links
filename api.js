import axios from "axios";
import { readFile } from "fs";

export const readMD = (path) => {
  return new Promise((resolve, reject) => {
    //TODO: 5. LEEMOS EL ARCHIVO
    readFile(path, "utf8", function (err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

export const findLinks = (contenido, ruta) => {
  // console.log(contenido);
  //TODO: 5. LEEMOS LINKS
  let regex = /\[([^\]!]+)]\((https:\/\/[^\)]+)\)/gi;
  const myMatch = [...contenido.matchAll(regex)].map((m) => ({
    fyle: ruta,
    text: m[1],
    href: m[2],
  }));
  return myMatch;
};

export const validate = (arr) => {
  const arrPromesas = arr.map((item) => {
    return fetch(item.href);
  });
  return new Promise((resolve, reject) => {
    const resultados = [];
    Promise.allSettled(arrPromesas)
      .then((responses) => {
        responses.forEach((response, index) => {
          const element = arr[index];
          if (response.status === "fulfilled") {
            const res = response.value;
            element.status = res.status;
            element.message = res.statusText;
            resultados.push(element);
          } else {
            // console.log('<<<<<<&&&&&&&&&&>>>>>>', response.reason);
            reject(new Error("La petición Http Falló"));
          }
        });
        console.log(("URL válida", resultados));
        resolve(resultados);
        
      })
      .catch((err) => {
        // console.log('&&&&&&&&&&', err);
        reject(new Error("La petición Http Falló ***"));
      });
  });
};

// const linksPrueba = [
//   {
//     fyle: "C:\\Users\\HP-1\\Desktop\\MariaGracia\\Proyectos MariaGracia\\MD-links\\DEV004-md-links\\README.md",
//     text: "Array.prototype.forEach() - MDN",
//     href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
//   },
// ];

// validate(linksPrueba)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
