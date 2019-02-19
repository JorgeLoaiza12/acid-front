Proyecto creado con: [Create React App](https://github.com/facebook/create-react-app).

## Comandos disponibles

Para iniciar el proyecto ejecutar el siguiente comando en la raiz del proyecto:

### `npm start`

Este se abrira en modo de desarrollo.<br> [http://localhost:80](http://localhost:80)

### Despliegue a produccion con Docker

En la raiz del proyecto se debe generar la image que va a contener el proyecto con el siguiente comando:

### `docker build -t <Nombre del contenedor Docker> .`

Este ejecutara el archivo Dockerfile el cual generara la carpeta "build" dentro del contenedor para luego ser expuesta con nginx. Para inicializar el contenedor debemos ejecutar el siguiente comando:

### `docker build -t <Nombre del contenedor Docker> .`

### `docker run -p <Puerto Externo>:80 <Nombre del contenedor Docker> `

Ya puesto en marcha se podra visualizar en [http://localhost:<Puerto Externo>](http://localhost:<Puerto Externo>)
