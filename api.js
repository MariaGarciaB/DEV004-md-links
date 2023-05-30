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
  const myMatch = [];
  const extraerLinks = [...contenido.matchAll(regex)].map((m) => ({
    fyle: ruta,
    text: m[1],
    href: m[2],
  }));
  myMatch.push(extraerLinks);

  return myMatch;
};

export const validate = (arr) => {
  const arrPromesas = arr.map((item) => {
    console.log(item)
    return fetch(item.href)
   
  })
  //[p1,p2,p3]
  //return Promise.allSettled(arrpROMESAS)
  return new Promise((resolve, reject) => {
     console.log(arr);
     const resultados = [];
     console.log('>>>>>>>>', resultados);
    arr.forEach((element) => {
      const urlMd = element.href;
      return fetch(urlMd)
        .then((res) => {
          console.log(`respuesta: ${res.status} ${res.statusText}`)
          element.status = res.status;
          element.message = res.statusText;
          resultados.push(element) 
          return
          if (!res.ok) {
         
            throw new Error(
              `La petición HTTP falló: ${res.status} ${res.statusText}`
            );
          }
        })
        // .then((data) => {
        //   resolve(data);
          
        // })
        .catch((err) => {
          console.log('&&&&&&&&&&', err);
          reject(new Error("La petición Http Falló ***"));
          })  
          
        });
    });
  // });
};
//TODO: recorrer el array for, foeach, map array
//const newArray = myMatch.map((links) => ({
//   fyle: links.fyle,
//   text: links.text,
//   href: links.href,
//  }))
//  console.log(newArray);

// };

const linksPrueba = [
  {
    fyle: "C:\\Users\\HP-1\\Desktop\\MariaGracia\\Proyectos MariaGracia\\MD-links\\DEV004-md-links\\README.md",
    text: "Array.prototype.forEach() - MDN",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
  },
];

validate(linksPrueba).then((res) => (console.log(res))).catch((err) => (console.log(err)))
//https://neoattack.com/proyectos/
//https://chat.openai.com/c/8983f61a-7478-4d99-8a95-a7e3874340ec
//   var myImage = document.querySelector('img');

// axios.get(urlMd)
// .then(res => {
//   resolve('URL válida')
// })
// .catch(err => {
//   reject('URL rota')

// })

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

// return axios({
//   method: metodo,
//   url: url
// })
//   .then(function(response) {
//     return response.data;
//   })
//   .catch(function(error) {
//     throw new Error(error);
//   });

// mdLinks('C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md'); absoluta
//readMD().then( (res) => console.log(res)).catch((err) => console.log(err)); //Tengo ue tomar la respuesta de MD
// let ejemploLinks = `
// * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
// * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
//`
// console.log(findLinks(ejemploLinks))



// >>>>>>>>>>>>>>>
//revisa la estructura de respuesta, código de status.... en lugar de los console.log de error es donde llamas al status y el mensaje que quieres mostrar

          // .then((res) => {
          //   console.log('status: ', res.status); // returns 200
          // res.blob().then((myBlob) => {
          //   var objectURL = URL.createObjectURL(myBlob);
          // httpRequest.src = objectURL;
          // });

          //   response.status– código HTTP de la respuesta,
          // response.ok– truesi el estado es 200-299.
