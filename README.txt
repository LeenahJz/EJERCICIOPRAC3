[EJERCICIO PRACTICO 3, MODULO 4]

Este ejercicio se llevó a cabo utilizando todo lo aprendido en los ejercicios prácticos 1 y 2, utilizando el DOM Virtual, uso de fragmentos, referencias, callbacks, fetcg para simular API rest y propTypes.

[GITHUB: https://github.com/LeenahJz/EJERCICIOPRAC3.git]

-CÓMO ABRIR EL CÓDIGO-
-VS--file--Open folder--ejercicioPrac3
en terminal: 
-cd ejercicioPrac3
-npm install
-npm i react-icons --sabe
-npm i react-scroll
-npm run dev

Estructura

ejercicioPractico1
├── node_Modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Homepage.jsx
│   │   ├── Navbar.jsx
│   │   └── ServiceList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

Es código cumple con los requisitos solicitados siguientes:

1. Implementación de Vistas Complejas con ReactJS
- Crea y estructura tres vistas principales del sistema del hospital usando componentes
avanzados:
- Vista Principal (Home): Incluye una lista de servicios destacados y una sección
con información del hospital.
- Vista del Equipo Médico: Muestra los perfiles de doctores utilizando
componentes DoctorCard para cada miembro del equipo, permitiendo filtrar
por especialidad.
- Vista de Citas: Implementa un formulario para agendar citas con validaciones y
uso de Hooks (useState, useEffect).

2. Optimización del DOM Virtual y Uso de Fragmentos
- Usa el DOM Virtual para gestionar eficientemente la actualización de datos en las
diferentes vistas, asegurando que solo los elementos necesarios se actualicen.
- Implementa Fragmentos (<React.Fragment>) para evitar añadir nodos innecesarios
en el DOM y mejorar la estructura del código en las diferentes secciones del sistema.

3. Uso de Referencias y Callbacks 
- Implementa referencias para interactuar con los elementos del DOM en una de las
vistas, como:
- Enfocar automáticamente en un campo de entrada cuando el usuario ingresa a
la vista de Citas.
- Usar referencias de callback para gestionar el desplazamiento a diferentes
secciones de la vista Home.

4. Manejo de Datos con API REST Simulada 
- Simula la obtención de datos del equipo médico y servicios a través de una API REST
utilizando fetch y maneja las respuestas de manera asíncrona con async/await.
- Carga los datos en la vista correspondiente (Equipo Médico, Servicios) al montar
el componente, utilizando Hooks como useEffect.

5. Optimización de Rendimiento y Uso de Profiler
- Usa Profiler para identificar posibles problemas de rendimiento y optimiza la
renderización de componentes que manejan grandes volúmenes de datos, como la lista
de doctores o servicios.
6. Comprobación de Tipos con PropTypes (0.5 puntos)
- Implementa PropTypes en todos los componentes para verificar los tipos de datos y
asegurar que los valores pasados como props son válidos, evitando errores en la
aplicación.
-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


