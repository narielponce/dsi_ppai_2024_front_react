# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm install`

**Primero debemos instalar las dependencias necesarias para el proyecto.**

### `npm run start`

**Para inciar el proyecto**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## Estructura de Carpetas y Archivos

src: Esta carpeta contendrá todo el código fuente de tu aplicación.

- components: Aquí colocarás todos los componentes React reutilizables. Puedes organizarlos por funcionalidad o tipo de componente.
- containers: Carpeta para contenedores o componentes de más alto nivel que manejen la lógica de negocio y gestionen la comunicación entre componentes.
- pages: Contendrá las páginas principales de tu aplicación, cada una representando una vista diferente.
- assets: Para almacenar imágenes, archivos CSS, fuentes u otros recursos estáticos.
- services: Archivos que manejan la lógica de negocio relacionada con el backend, como la comunicación con la API.
- utils: Funciones y utilidades reutilizables en toda la aplicación.
- contexts: Si utilizas Context API para el manejo del estado global, aquí colocarías los contextos de la aplicación.
- routes: Aquí definirías las rutas de tu aplicación utilizando React Router, especificando qué componentes se renderizarán en cada ruta.
- config: Archivos de configuración, como variables de entorno, configuraciones de Firebase, etc.

public: Esta carpeta contiene los archivos estáticos que se sirven tal cual al navegador (por ejemplo, index.html, favicon.ico).

---
