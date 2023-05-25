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
  }

//  export const validate = (array) => {
//   console.log(array, '****');
//   // recorrer el array for, foeach, map array
//   // fecth
//     // href me atuda para el estatus
//     //hacer petición por cada propiedad href que encuentre 
//     //No importan los console log
//     //realmente esta funcion lo que hace es darme el estatus y el mensaje 
//     //utiliza axios

//   }

//   var myImage = document.querySelector('img');

// var myRequest = new Request('flowers.jpg');

// fetch(myRequest).then(function(response) {
//   console.log(response.status); // returns 200
//   response.blob().then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });
// });

// fetch("http://www.ejemplo.com/api/datos")
//   .then(function(response) {
//     if (response.ok) {
//       return response.text();
//     }
//     throw new Error("Error de red.");
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
//readMD().then( (res) => console.log(res)).catch((err) => console.log(err)); //Tengo ue tomar la respuesta de MD
// let ejemploLinks = `
// * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
// * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
//`
// console.log(findLinks(ejemploLinks))

