//const { mdLinks } = require('../index.js').default;

import { readMD, validate }  from '../api.js';
import { mdLinks } from "../index.js"



describe('readMD', () => {
  // it('readMD es una Promesa', () => {
  //   //siempre tienes que pasarle un parametro para testearlas
  //   expect(readMD('README.md')).toBeInstanceOf(Promise);
  // });
  it('Lee un Archivo', () =>{
  readMD('README.md').then ((res) => {
    expect(res).toMatch('Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que')   
  })
})
});

describe('validate', () => {
    it('Valida links', (done) =>{
      const arr = [
        {
          href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays/',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort/sort',
          status: 404,
          message: 'Not Found'
        },
      ];
    validate(arr).then ((res) => {
      expect(res.length).toBe(arr.length);
      expect(res[0].status).toStrictEqual(200);
        expect(res[1].status).toStrictEqual(200);
        expect(res[2].status).toStrictEqual(404); 
        done()
    })
    .catch((err) => {
      done(err); 
    });
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
