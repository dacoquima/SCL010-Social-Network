![logo 2](img-readme/logo2.png)

#**1-Red Social**
En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [empanadas](https://es.wikipedia.org/wiki/Empanada) o de
los [tacos de canasta](https://es.wikipedia.org/wiki/Taco), etc.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

• Para acceder a demo de app [haz click aquí](https://carolgmonteiro.github.io/SCL010-hackathon-peliculas/src/index.html)

***

## **Índice**

* [1-Red social](#ViewNOW!)
  * [1.1- Preámbulo](#preámbulo)
  * [1.2-Usuario](#usuario)
  * [1.3-Problemática del Usuario](#problemática-del-Usuario)
  * [1.4-Objetivos de la Aplicación](#objetivos-de-la-aplicacion)
* [2-Metodología UX](#Metodología-UX)
  * [2.1-Encuesta online](#Encuesta-online)
    * [2.1.1-Alcance de la encuesta](#alcance-de-la-encuesta:)
    * [2.1.2-Conclusiones de la encuesta](#conclusiones-de-la-encuesta:)
  * [2.2-Historias de Usuario](#historias-de-usuario)
  * [2.3- Diagrama de Flujo](#diagrama-de-flujo)
  * [2.4-Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
    * [2.4.1-Sketch](#sketch)
    * [2.4.2- Wireframe](#wireframe)
  * [2.5-Colores y Tipografía](#colores-y-tipografía)
  * [2.6- Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
  * [2.7 Evaluación heuristica ](#evaluación-heuristica)
*  [3-Herramientas](#herramientas)
*  [4-Futuras Mejoras](#futurasmejoras)
*  [5-Desarrolladoras](#desarrolladoras)

***

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y much@s no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

### **1.2-Usuario**

La app “Nombre de la app”, es una aplicación web destinada a usuarios mayores de edad, que sean o no inmigrantes, ya que la misma se basa en la ayuda que se le puede dar a esa minoría desde cualquier ámbito. Se recomienda su uso para personas mayores de edad, que sepan utilizar una aplicación web y tengan facilidades para leer y escribir. 
El enfoque hacia inmigrantes, es poder buscar información de interés sobre trámites en el país al que llegan, datos de alojamiento, arriendo, trabajo, cultural, etc. También otorgar datos a sus compatriotas que les puedan ser de utilidad mediante las publicaciones. 
El enfoque hacia las personas no migrantes, es el de proveer datos de interés, contactos, alojamiento, trabajo, arriendo, datos culturales, etc, a inmigrantes dentro de su país mediante las publicaciones. 
La visión general de la aplicación es poder recopilar en un sólo lugar todos los datos que hoy en día se comparten mediante grupos de whatsapp, facebook o cuentas de instagram. Así como también el crear comunidad y lazos entre los integrantes de todas las culturas. 


### **1.3-Problemática del Usuario**

No hay canales de información entre las personas inmigrantes y no inmigrantes, que ordene la información, que hoy está difusa por diversas redes sociales por temáticas.

### **1.4-Objetivos de la Aplicación**

- Permite ver las películas más valoradas y premiadas por la crítica cineasta.
- Recomienda que película ver contestando unas simples preguntas según tu estado de ánimo y tiempo disponible.
- Filtra por género y director.
- Buscar películas reconocidas.
- Apuntar a un Diseño inclusivo.

## **2-Metodología UX** 📌

###**2.1-Encuesta online:**
Se redacta y ejecuta una encuesta con el Formulario de Google Forms, para definir los parámetros generales de la aplicación: a qué usuario nos vamos a dirigir, cuáles son sus necesidades e intereses relacionados con la búsqueda de películas, como también para obtener claridad sobre cuál es la información más relevante a la que dichos usuarios necesitarán acceso.
Con esta información se plantea la jerarquización de la data y de sus funcionalidades para poder acomodarla dentro del flujo de la aplicación junto con parámetros de usabilidad como también de diseño de interface (UI).

#### **2.1.1-Alcance de la encuesta:**

La encuesta alcanzó un total de respuestas en un día y se puede encontrar haciendo click [encuesta](https://forms.gle/pfLn6GnjBkykP8ba9)


#### **2.1.2-Conclusiones tras analizar encuesta:**

A partir de los resultados pudimos obtener y definir:



#### **2.2-Historias de Usuario**
Se definen acciones y funciones que nuestro usuario necesita y quiere realizar dentro de la app para lograr sus objetivos. La planificación se realizó mediante un trabajo colaborativo en [Trello](https://trello.com/b/CZnczp1y/laboratoria-social-network) y utilizando ceremonias ágiles para verificar las tareas que va realizando cada miembro del equipo –así detectamos a tiempo bloqueos-, dailys y retrospectivas diarias.

<a href="https://ibb.co/BZBFmpR"><img src="https://i.ibb.co/MV7QbvL/trello.png" alt="trello" border="0"></a>


- **Historia de usuario 1: Creación de cuenta con correo electrónico** “YO como usuari@ QUIERO poder crear mi cuenta de acceso a la app con mi correo y la contraseña que yo elija, PARA poder acceder a los beneficios de la app. "
➡**Criterios de aceptación:**
- El usuario puede crear una cuenta con su correo electrónico y contraseña a elegir. 
- Se visualizan los campos necesarios para crear una cuenta. (Inputs necesarios) - Formulário
- El usuario puede colocar la contraseña que desee mientras cumpla los criterios establecidos para las contraseñas de la app. 
- En caso de que el usuario introduzca una contraseña que no es válida, el sistema arroja un mensaje de error. 
- Al usuario le llega un correo de confirmación de email para verificar su cuenta. 
- El usuario debe verificar su cuenta creada, antes de poder realizar cualquier acción dentro de la página. 
- Los datos del usuario quedan registrados en la base de datos. (Firebase)

- **Historia de usuario 2: Ingreso al perfil con correo electrónico** “YO como usuari@ QUIERO poder entrar a mi cuenta con mi correo y la contraseña que ya elegí, PARA poder acceder a las publicaciones de mi interés, perfil, y funcionalidades de la aplicación. ”
➡ **Criterios de aceptación:**
- La persona tuvo que verificar previamente su cuenta a través de su correo electrónico para poder acceder.
- La persona puede acceder a su cuenta de correo electrónico y contraseña elegidos. 
- Se visualizan los campos necesarios para hacer login en una cuenta. (Inputs necesarios)
- En caso de que el usuario introduzca una contraseña o correo inválidos. el sistema arroja un mensaje de error. 
- Al hacer click en entrar, el usuario queda posicionado en el feed de las publicaciones. 

- **Historia de usuario 3: Creación de cuenta con Google** “Yo como espectador de películas, quiero buscar una película por nombre para obtener su información.”

➡ **Criterios de aceptación:** Creamos en la App Web un campo de búsqueda en la pantalla con su botón buscar que muestra la película.

- **Historia de usuario 4:** “Yo como espectador de películas, quiero filtrar por género y director para poder ver distintas películas"

➡ **Criterios de aceptación:** Creamos en la App Web un campo de filtros para que pueda realizar la búsqueda mejor.

 - **Historia de Usuario 5:** “yo como aficionada a las películas quiero ver la ficha de las películas que seleccioné y conocer más sobre ellas.”

➡ **Criterios de aceptación:** Se creará un modal que se desplegará al momento de seleccionar por el usuario una opción de película, luego se mostrara una ficha con las características de ella.

###  **2.3- Diagrama de Flujo**

A partir de las historias de usuario se define el flujo básico de la aplicación:

<a href="https://ibb.co/CbYjhts"><img src="https://i.ibb.co/F5yQgWq/mapa-de-flujo.png" alt="mapa-de-flujo" border="0"></a>


### **2.4-Prototipo de Baja Fidelidad**

#### **2.4.1-Sketch**
Nuestro primer objetivo fue distribuir cada elemento de la App Web, de acuerdo a lo visto en las historias de usuario.

El sketch fue presentado a conocidos y a nuestras coaches para obtener feed-back, los cuales comentaron en su mayoría que es un prototipo de fácil uso y amigable.

<a href="https://ibb.co/6P8SR94"><img src="https://i.ibb.co/FwX1bZB/sketch.jpg" alt="sketch" border="0"></a>

#### **2.4.2- Wireframe**
Desarrollo formal de página web, en términos de estructura, contenidos y diagramación a partir de la información y datos recopilados en la encuesta preliminar y test de usabilidad durante el desarrollo de la aplicación.
Se desarrolla Wireframe en todas sus vistas .

<a href="https://ibb.co/0Dbnm9T"><img src="https://i.ibb.co/znvmQ2p/w1.png" alt="w1" border="0"></a>
<a href="https://ibb.co/d2Nc0Mk"><img src="https://i.ibb.co/C7jt58V/w2.png" alt="w2" border="0"></a>
<a href="https://ibb.co/k8J48Qy"><img src="https://i.ibb.co/7WQnW2z/w3.png" alt="w3" border="0"></a>
<a href="https://ibb.co/qnCGFmV"><img src="https://i.ibb.co/ZJSs1c7/w4.png" alt="w4" border="0"></a>
<a href="https://ibb.co/G9dCr2y"><img src="https://i.ibb.co/ZSfcb85/w5.png" alt="w5" border="0"></a>

#### **2.5- Colores y Tipografía**
La gama de colores fue seleccionada primero basada en las páginas que existen hoy en día en el mercado: observamos que se repiten las tonalidades blancas, grises y negras. El color dorado lo agregamos para darle un toque de glamour siguiendo los patrones del premio más reconocido en la historia del cine, los Oscar.

<a href="https://ibb.co/9rnCjbJ"><img src="https://i.ibb.co/XCXvT79/estudio.png" alt="estudio" border="0"></a>
<a href="https://ibb.co/yh2Pc4j"><img src="https://i.ibb.co/dbZMwmY/colores.png" alt="colores" border="0"></a>

Nuestros colores también fueron enfocados a una persona con daltonismo(El daltonismo es un defecto genético que ocasiona dificultad para distinguir los colores). 
Ocupamos Color Oracle para simular diferentes tipos de daltonismo en nuestra página.

- Deuteranopia (Ausencia color verde)
- Protanopia (Ausencia de color rojo)
- Tritanopia (Ausencia color azul)
- GrayScale (Ausencia de color, solo blanco y negro)

<a href="https://ibb.co/hWcs94y"><img src="https://i.ibb.co/PhMxjPN/01-DEUTERANOTOPIA.jpg" alt="01-DEUTERANOTOPIA" border="0"></a>

<a href="https://ibb.co/23ykcqF"><img src="https://i.ibb.co/TMkgPcw/03-PRATANOPIA.jpg" alt="03-PRATANOPIA" border="0"></a>

<a href="https://ibb.co/5c1dz3J"><img src="https://i.ibb.co/JkcNbTS/04-TRINATOPIA.jpg" alt="04-TRINATOPIA" border="0"></a>

<a href="https://ibb.co/wWc4Fj7"><img src="https://i.ibb.co/hWYVJwc/02-GRAYSCALE.jpg" alt="02-GRAYSCALE" border="0"></a>

#### **2.6- Prototipo de Alta Fidelidad**
Después de la definición de usuario, de sus características, intereses y gustos, se define el diseño visual de nuestra aplicación en términos de color, fuente, logo y contenido de imágenes entre otros.

<a href="https://ibb.co/BsBy4sk"><img src="https://i.ibb.co/5cLrYcZ/prototipo-Alta-FIdelidad.png" alt="prototipo-Alta-FIdelidad" border="0"></a>
<a href="https://ibb.co/q5cyJrP"><img src="https://i.ibb.co/fvy1DxP/PA1.png" alt="PA1" border="0"></a>
<a href="https://ibb.co/tCsJ42n"><img src="https://i.ibb.co/XJsCb56/PA2.png" alt="PA2" border="0"></a>
<a href="https://ibb.co/hyppcHv"><img src="https://i.ibb.co/drnnt6y/PA3.png" alt="PA3" border="0"></a>

### **2.7 Evaluación heurística **
Realizamos la evaluación para nuestra página web en el siguiente sitio: [haz click aquí](https://docs.google.com/spreadsheets/d/1WqaUHThau9wam46izLvE3mhmPdidPLpY_1RKa1ULrUM/edit?usp=sharing)


## **3-Herramientas**  🛠️

- Visual Studio (HTML5, CSS, JAVASCRIPT)
-  [Trello](https://trello.com)
-  [Balsamiq](https://balsamiq.com/)
- [Color Oracle](https://colororacle.org/)
-  [Figma](https://www.figma.com/)
- Illustrator
-  [Loom](https://www.loom.com)
-  [Git](https://git-scm.com/)
-  [GitHub](https://github.com/)
-  [GitHub Pages](https://pages.github.com/)
-  [Node.js](https://nodejs.org/)

## **4-Futuras Mejoras**

- Versión en español.
- Manejo de mayor cantidad de datos y actualizarlos constantemente.
- Responsive en diferentes equipos.
- Testeo con personas con discapacidad visual para obtener feedback.
- Obtener información con un modal, sugiriéndo la plataforma donde verla.
- Otros criterios para sugerencias de películas.  
- Ordenado de la Data. 
- Incluir otras discapacidades. 


## **5-Desarrolladoras**
- [Carolina Guido](https://github.com/carolgmonteiro)
- [Daniela Salermi](https://github.com/AlejandraMoralesB)
- [Daniela Quintana](https://github.com/ClaudiaQuezadaRiquelme)

División de tareas:

| Carolina       | Alejandra        | Claudia  |
| :------------- |:-------------| :-----
| Planning      | Planning      |  Planning |
| HTML          | HTML          | HTML |
| UX Design  Prototipos Balsamiq  Figma  |   Readme  |CSS3
| Mapa de flujo |  CSS3   | Sketches
| JavaScript  | JavaScript  |   JavaScript


#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y con cuenta de Google.
* Validaciones:
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido.


#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en
  el _input_.
* Comportamiento:
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### Hacker edition

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

### Consideraciones técnicas Front-end

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones técnicas UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### Habilidades Blandas/Socioemocionales

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de Problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |


### Habilidades Técnicas, Front-end

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| SEO |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### Habilidades Técnicas, UX

| Habilidad |
|-----------|
| User Centricity |
| Visual Desing |

***


