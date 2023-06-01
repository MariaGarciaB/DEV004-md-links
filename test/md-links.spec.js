//const { mdLinks } = require('../index.js').default;

import { readMD }  from '../api.js';
import { mdLinks } from "../index.js"



describe('readMD', () => {
  it('Es una Promesa', () => {
    //siempre tienes que pasarle un parametro para testearlas
    expect(readMD('README.md')).toBeInstanceOf(Promise);
  });
  it('Lee un Archivo', () =>{
  readMD('README.md').then ((res) => {
    expect(res).toBe('Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que')   
    //investiga toMatch investiga metodos para buscar algo dntro de un archivo
  })
})
});

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
//el reject lo evaluas con el catch expect re catch... intenta try catch
//un texto y te bote el arreglo de objeto 
// pon un ejemplo con esto backtick esto para extraer links 
// `[
//   fyle: 'C:\\Users\\HP-1\\Desktop\\MariaGracia\\Proyectos MariaGracia\\MD-links\\DEV004-md-links\\README.md',
// text: 'Array.prototype.map() - MDN',
// href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
// ]`

  //Existe un path¿? (probamos cuando no existe un path)
//   it('No existe esta ruta', () => {
//     return readFile('/mariaGracia/noExistente.md').catch((error) => {
//     expect(error).toBe('Esta ruta no existe')  
//     })
//   });


/*it('Es una Promesa', () => {
  expect(readMD()).toBe(typeof Promise);
});*/


/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
