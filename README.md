# Markdown Links

## Índice

* [1. Sobre el proyecto](#1-sobre-el-proyecto)
* [2. Péambulo](#2-preámbulo)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Instalaciones](#4-instalaciones)

***

## 1. Sobre el proyecto

Este proyecto Markdown ofrece a los usuarios una forma eficiente de trabajar con enlaces en sus archivos .md. Mediante el uso de la consola y Node.js, los usuarios pueden acceder a funciones como la validación de enlaces con el comando --validate, obtener estadísticas generales con el comando --stats y identificar enlaces rotos con el comando --broken. Estas características proporcionan a los usuarios la capacidad de garantizar la calidad y funcionalidad de los enlaces en sus archivos Markdown, mejorando así su experiencia y productividad.


### Desarrollo de Proyecto

El primer paso en el desarrollo de mi proyecto fue la organización y planificación. Siguiendo los principios de la metodología Scrum, utilizando como herramienta trello y mileston (GitHub), realicé mi planning por sprint(en este caso es una semana).

Realicé un diagrama de flujo para visualizar el proceso general del proyecto, además de ser mi base para comprender las interacciones entre los diferentes componentes. Este diagrama fue elemental para seguir un flujo de trabajo realizando pequeñas tareas que finalmente consolidaron el proyecto.

mdLinks realiza una serie de comprobaciones para asegurarse de que la ruta especificada sea válida y el archivo sea Markdown. Primero, verifica si la ruta proporcionada existe. En caso de que la ruta no exista, se muestra un mensaje de error indicando que no existe una ruta.

Si la ruta existe, analiza si la ruta es relativa o absoluta. En caso de ser sea relativa, se convierte a una ruta absoluta antes de proceder. Esto se debe a que solo puede continuar el proceso con rutas absolutas.

Después de verificar y convertir la ruta, Se hace un filtro del archivo en función de su extensión. Solo se considerarán los archivos con extensión ".md" para extraer los enlaces. Si el archivo no tiene esta extensión, se mostrará un mensaje de error informando al usuario que solo se pueden leer archivos con la extensión ".md".

Una vez realizadas estas verificaciones, se leera el archivo y se extraeran los links con la siguiente estructura: 
fyle: 'C:\\Users\\HP-1\\Desktop\\MariaGracia\\Proyectos MariaGracia\\MD-links\\DEV004-md-links\\README.md',
text: 'md-links',
href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
status: 200,
message: 'OK'

Finalmente implementado una interfaz de línea de comandos (CLI). Los usuarios pueden ejecutar el programa en la consola, pasando como argumento la ruta del archivo Markdown que desean analizar. A través de esta interfaz, pueden acceder a varias opciones y comandos que les permiten obtener información específica sobre los enlaces presentes en el archivo.
--validate          Da a conocer enlaces de un archivo .md
--stats             Da a conocer el total de enlaces y enlaces únicos
--stats --validate  Da a conocer el total de enlaces, los enlaces únicos y enlaces rotos
--validate --stats  Da a conocer el total de enlaces, los enlaces únicos y enlaces rotos
-- cualquie error   Da a conocer al usuario que comandos utilizar para obtener lo que desea


### Resultado de comandos
--validate

![Validate](validate.JPEG)

--stats

![stats](stats.JPEG)

--validate --stats

![validate-stats](validate-stats.JPEG)

--stats --validate

![stats-validate](stats-validate.JPEG)


### Estructura de proyecto

##### index.js 

En el archivo index.js se encuentra la función mdLinks, la cual contiene el proceso para verificar si una ruta existe y, en caso de no ser absoluta, convertirla a una ruta absoluta. Además, esta función verifica si la ruta corresponde a un archivo con extensión .md. Dentro de mdLinks se encuentran las funciones que posteriormente serán explicadas en el archivo api.js.

##### api.js

El archivo api.js, se encuentran las funciones que se encargan de leer el archivo, extraer los enlaces y realizar las peticiones HTTP para verificar el estado de cada enlace. Contiene las siguientes funciones:

leerArchivo: Esta función se encarga de leer el contenido de un archivo específico y devuelve el contenido como una cadena de texto.

extraerLinks: Esta función se utiliza para extraer todos los enlaces encontrados dentro del archivo de formato Markdown (.md). Analiza el contenido del archivo y retorna un arreglo de objetos, donde cada objeto representa un enlace y contiene información relevante, como la URL y el texto asociado.

hacerPeticionHTTP: Esta función se encarga de realizar una petición HTTP para verificar el estado de los enlaces. Utiliza la URL de cada enlace extraído y realiza una solicitud para obtener información sobre el estado de la URL, como el código de respuesta.

##### cli.js

El archivo cli.js es responsable de proporcionar una  línea de comandos (CLI) para la función mdLinks. A través de process.argv, se pueden agregar opciones adicionales al comando, lo que permite obtener información adicional sobre los enlaces.

Existen tres opciones disponibles:

--validate

--stats

--validate --stats o --stats --validate


### Test

![test-jest](testJest.JPEG)

##### Evaluación de la función mdLinks:
Verifica si existe un archivo .md:
Prueba exitosa: Se espera que la función resuelva correctamente al pasar un archivo .md y devuelva cualquier resultado.
Prueba fallida: Se espera que la función rechace la promesa y devuelva un mensaje de error al pasar un archivo que no sea .md.

##### Evaluación de la función readMD:
Lee archivos .md:
Prueba exitosa: Se espera que la función lea correctamente el contenido del archivo .md especificado y lo devuelva como una cadena de texto.
Prueba fallida: Se espera que la función lance un error con el mensaje "No está leyendo archivo .md" si ocurre algún problema al leer el archivo.

##### Evaluación de la función findLinks:
Encuentra enlaces en un documento:
Prueba exitosa: Se espera que la función findLinks encuentre los enlaces presentes en el contenido del documento especificado y los devuelva como un arreglo de objetos, donde cada objeto representa un enlace con sus propiedades (ruta del archivo, texto y URL).
Prueba fallida: Se espera que la función devuelva un arreglo vacío si no se encuentran enlaces en el contenido del documento.

##### Evaluación de la función validate:
Valida el estado de los enlaces:
Prueba exitosa: Se espera que la función validate realice una solicitud HTTP para cada enlace especificado y devuelva un arreglo con el estado de cada enlace, representado por su código de respuesta (200 para enlaces válidos, 404 para enlaces rotos, etc.).
Prueba fallida: Se espera que la función lance un error con el mensaje "Links no válidos" si ocurre algún problema al realizar las solicitudes HTTP.
Espero que esta lista te sea útil para comprender y seguir las evaluaciones realizadas en el código. Si tienes alguna otra pregunta, no dudes en hacerla.


## 2. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir. 

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas. Por ejemplo en Laboratoria podrían usar esta 
herramienta para detectar los links rotos en los readmes de los proyectos
o en un área de facturación verificar los links rotos de una factura dígital.

Preámbulo: Laboratoria.


## 3. Objetivos de aprendizaje

Los objetivos de aprendizaje trabajados en este proyecto

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Funciones (params, args, return)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

- [ ] **Promesas**
 
- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**


### Node.js

- [ ] **Instalar y usar módulos con npm**

- [ ] **Configuración de package.json**

- [ ] **Configuración de npm-scripts**

- [ ] **process (env, argv, stdin-stdout-stderr, exit-code)**

  <details><summary>Links</summary><p>

- [ ] **File system (fs, path)**


### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

- [ ] **Códigos de status de HTTP**

