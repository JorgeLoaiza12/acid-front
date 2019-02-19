Proyecto creado con: [Create React App](https://github.com/facebook/create-react-app).

## Comandos disponibles

Para iniciar el proyecto se debe ejecutar el siguiente comando en el directorio raíz:

### `npm start`

Este se abrirá en modo de desarrollo.<br> [http://localhost:80](http://localhost:80)

### Despliegue a produccion con Docker

En la raíz del proyecto se debe generar la imagen Docker que va a contener el proyecto con el siguiente comando:

### `docker build -t <Nombre del contenedor Docker> .`

Este ejecutará el archivo Dockerfile el cual generara la carpeta "build" dentro del contenedor para luego ser expuesta con nginx. Para inicializar el contenedor debemos ejecutar el siguiente comando:

### `docker run -p <Puerto Externo>:80 <Nombre del contenedor Docker> `

Ya puesto en marcha se podrá visualizar en [http://localhost:<Puerto Externo>](http://localhost:<Puerto Externo>)
