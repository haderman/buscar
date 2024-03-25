## Correr el proyecto

1. Clonar el repositorio
2. Instalar dependencias - `npm install`
3. Correr el proyecto - `npm run dev`

## Carpeta `pages`

- Todo lo que esta dentro de la carpeta `pages` se convierte en una ruta de la aplicacion.
- Cada vez que se agregue un archivo dentro de la carpeta `pages` se debe de actualizar al archivo `routes.js`
- Cada archivo dentro de la carpeta `pages` puede exportar opcionalmente dos functiones `getServerSideProps` y `mapPropsToSEO`
getServerSideProps: Se ejecuta en el servidor y se puede utilizar para obtener datos de una API o base de datos.
mapPropsToSEO: Se ejecuta en el servidor despues de getServerSideProps y se puede utilizar para mapear los datos obtenidos en getServerSideProps a las propiedades de SEO.

De esta manera se puede tener un control total de las rutas de la aplicacion y de los datos que se envian a cada una de las rutas.

## Carpeta `api`

- En esta carpeta estan todos los wrappers de las API's que se utilizan en la aplicacion.
- Inicialmente todas las functiones esta en `api/index.js` pero se pueden separar en archivos individuales si se desea.

## Style

- Por razones de tiempo no usé SASS y no pude limpiar el CSS. Mi enfoque es crear primero los estilos y despues crear
las custom properties y abstracciones necesarias para hacer el CSS más limpio y reutilizable.

debido a que CSS ya tiene variables nativas y nested selectors, no vi necesario usar SASS en este proyecto

## Conclusiones

- Me divertí mucho haciendo este proyecto y aprendí mucho. En mis proyectos personales siempre uso un framework como Next.js o Astro, pero este proyecto me ayudo a entender mucho mejor que es lo que pasa por debajo del capó de estos frameworks.

- Por cuestiones de tiempo no pude hacer todo lo que tenía pensado, crear el entorno para pruebas unitarias y pruebas e2e, mejorar la accesibilidad y performance, mejorar la estructura de los estilos, crear mejores abstracciones, etc.}

- Me gustaría mucho tener feedback sobre el proyecto y saber si hay algo que se pueda mejorar o si hay algo que no se entienda.

- Por cuestiones de tiempo solo creé el servidor de desarrollo
