# API De Ministerio con Node.js, Express y sequelizejs

Indicamos lo necesario para poder correr la API
---

Para empezar tenemos que verificar que tenemos instalado Nodejs en
nuestro entorno de desarrollo mediante el comando:
```bash
node -v

npm -v
```
Listo si tenemos instalado lo necesario vamos a proceder a crear la
carpeta para el proyecto le vamos a nombrar crud-express.

Dentro de este directorio vamos a ejecutar el comando:
```bash
npm init
```
El comando crea un archivo **package.json** que nos ayuda a administrar
las dependencias que vamos a necesitar para nuestro proyecto.

Vamos a abrir nuestro editor de código preferido en mi caso uso Visual
Studio Code, para crear un archivo llamado index.js, puedes llamarlo
como gustes.

### Agregar la dependencia Express para crear el servidor

Agregaremos la dependencia mediante el siguiente comando:
```bash
npm install express --save
```
** \--save** guarda express como una dependencia en **package.json**.
Luego con el comando **npm install** se podrán recuperar todas las
dependencias.



**Agregamos nodemon a nuestro proyecto**

Para facilitarnos el desarrollo instalaremos **nodemon** esta
dependencia reinicia automáticamente el servidor cada que existe un
cambio en los archivos del proyecto.

En este caso solo necesitamos **nodemon **en el proceso de desarrollo
por ello lo guardaremos con la bandera --save-dev para que lo guarde
como dependencia de desarrollo.
```bash
npm install nodemon --save-dev
```
Una vez instalado agregaremos una clave de script en nuestro
archivo **package.json** para ejecutar nodemon con un comando npm.

En la sección de scripts agregamos lo siguiente:
```json
"scripts": {

  "dev": "nodemon index.js",

}
```
Ahora en nuestra consola ejecutamos el comando para llamar este script:
```bash
npm run dev
```
### Agregamos Sequelize para guardar los datos

En este caso vamos a usar SQLITE por medio de un ORM que se llama
Sequelize Instalamos la dependencia ejecutando el siguiente comando
```bash
npm install sqlite3 sequelize
```
En nuestro archivo db.js crearemos la constante de conexión de
Sequelize
---

**Made with ❤️ by: conradoDantiochia**