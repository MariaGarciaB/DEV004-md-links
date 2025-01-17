import { readMD, findLinks, validate } from "../api.js";
import { mdLinks } from "../index.js";

describe('mdLinks', () => {
  it('Existe un archivo .md', () => {
    return mdLinks("README.md").then(res => {
      expect(res).toEqual(expect.anything())
  })
  });
});
describe('mdLinks', () => {
  it('No existe un archivo .md', () => {
    return mdLinks("babel.config.json").catch(res => {
      expect(res).toEqual("Por el momento sólo acepta archivos .md")
  })
  });
});
describe("readMD", () => {
  it("Lee archivos .md", () => {
    readMD("README.md").then((res) => {
      expect(res).toMatch(
        "Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que"
      );
    })
    .catch((err) => {
      expect(err.message).toBe('No esta leyendo archivo .md');
    });
  });
});

describe("findLinks", () => {
  const content = `[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
  construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
  Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
  ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
  interactuar con el sistema en sí, archivos, redes, ...`;
  const route = 'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md';
  const links = 
  [
    {
    fyle: 'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md',
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
},
{
  fyle: 'C:/Users/HP-1/Desktop/MariaGracia/Proyectos MariaGracia/MD-links/DEV004-md-links/README.md',
  text: 'motor de JavaScript V8 de Chrome',
  href: 'https://developers.google.com/v8/',
}];
  it("Encuentra Links en un Documento", () => {
    expect(findLinks(content, route)).toEqual(links);
  });
  it("No encuentra enlaces en un documento", () => {
    expect(findLinks('', route)).toEqual([]);// o expect(findLinks('', route)).toHaveLength(0)
  });
});

describe("validate", () => {
  const arr = [
    {
      href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays/",
    },
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/",
    },
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort/sort",
    },
  ];
  it("Valida el status de enlaces", (done) => {
    validate(arr).then((res) => {
      expect(res.length).toBe(arr.length);
      expect(res[0].status).toStrictEqual(200);
      expect(res[1].status).toStrictEqual(200);
      expect(res[2].status).toStrictEqual(404);
      done();
    })
    .catch((err) => {
      expect(err.message).toBe('Links no válidos');
      done(); 
    })
  });
});

