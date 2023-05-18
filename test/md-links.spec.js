//const { mdLinks } = require('../index.js').default;

import { readMD } from '../api.js';
import { mdLinks } from "../index.js"



describe('mdLinks', () => {
  /*it('should...', () => {
    console.log('FIX ME!');
  });*/
  //es una promesa mdLinks ¿?
  it('Es una Promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });
  //Existe un path¿? (probamos cuando no existe un path)
  it('No existe esta ruta', () => {
    return mdLinks('/mariaGracia/noExistente.md').catch((error) => {
    expect(error).toBe('Esta ruta no existe')  
    })
  });
});

/*it('Es una Promesa', () => {
  expect(readMD()).toBe(typeof Promise);
});*/


/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
