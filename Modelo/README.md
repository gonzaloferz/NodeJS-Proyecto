NodeJS-Proyecto

Previa a toda configuracion dentro del proyecto asegurece de tener instalado algun editor de texto, en este ejemplo de configuracion trabajao con Visual Studio Code. Ademas de tener instalado Nodejs y Mongo DB. Se puede descargar desde sus paginas oficiales. Si quiere tambien puede utilizar MongoDB Compass, que es una herramienta para visualizar mejor los datos de la base de datos y manipularlos tambien si se necesita.  

Bueno luego de tener todo instalado, descargar el proyecto de Github y cargar la carpeta dentro de VSC.

Luego para inicializar el proyecto ejecute una nueva terminal dentro VSC e ingrese:
npm init

Eso se encarga de levantar el package.json e instalar todas las dependencias necesarias para el el codigo funcione sin problemas.

Una vez instaladas todas las dependencias, ejecutar:
npm run dev
Para inicializar el servidor.

En una terminal externa, ingresar el comando:
sudo mongod
Para inicializar las base de datos.

Luego de todo esto, la base de datos ya esta funcionando y se puede visualizar en pantalla.

En un navegador ingresar:
http://localhost:3000/



