import { readFile } from "fs";

export const readMD = (path) => {
  return new Promise((resolve, reject) => {
    // 5. LEEMOS EL ARCHIVO
    readFile(path, "utf8", function (err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

export const findLinks = (contenido, ruta) => {
  // 6. LEEMOS LINKS
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
          }
        });
        resolve(resultados);
        
      })
      });
};

