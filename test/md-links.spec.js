//const { mdLinks } = require('../index.js').default;

import { mdLinks } from "../index.js"



describe('mdLinks', () => {
  /*it('should...', () => {
    console.log('FIX ME!');
  });*/
  //es una promesa mdLinks ¿?
  it('Debería devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });
  //Existe un path¿? (probamos cuando no existe un path)
  it('No existe esta ruta', () => {
    return mdLinks('/mariaGracia/noExistente.md').catch((error) => {
    expect(error).toBe('Esta ruta no existe')  
    })
  });
});


/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
