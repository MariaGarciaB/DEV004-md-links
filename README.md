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



### Estructura de proyecto



### Test



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

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)


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

