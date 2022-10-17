# AO Docs Manager

## Equipo 1, TC2007B

## Integrantes

- Juan Muniain Otero |A01781341
- Miguel Angel Bustamante Perez | A01781583
- Do Hyun Nam | A01025276
- Andrew Dunkerley | A01025076
- Emiliano Cabrera | A01025453
- Diego Corrales | A01781631
- Andrés Briseño | A01352283

## Descripción

AO Docs Manager es una pequeña aplicación que ayuda a los colaboradores de la alcaldía Álvaro Obregón para digitalizar y administrar sus documentos que tienen de manera física. La aplicación permite a los usuarios subir documentos, crear expedientes, editar documentos, y descargar documentos. La aplicación también permite a los usuarios crear cuentas y loguearse para poder acceder a sus documentos que están trabajando de manera sincronizada.

## Instalación

1. Clonar el repositorio o descargar el archivo comprimido.
2. Utilizar el comando `npm install` para instalar las dependencias.
3. Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables de entorno:

```
MONGODB_URI= "[URI DE LA BASE DE DATOS DE MONGO]"
```
4. Crear una carpeta cert en la raíz del proyecto y utilizar el comando `openssl req -x509 -out localhost.crt -keyout localhost.key -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost'` dentro de ella, lo cual generará dos archivos: la llave, `.key`, y el certificado, `.crt`.
5. Descargar el archivo `.crt` e instalar en los equipos que se usarán para acceder al sistema.
4. Utilizar el comando `npm run build` para generar la carpeta de produccion.
5. Utilizar el comando `npm start` para iniciar el servidor.
6. Ingresar a la url `localhost:3000` en el navegador.
