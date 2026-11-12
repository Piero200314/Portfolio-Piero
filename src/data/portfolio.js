// Personaliza tu información aquí. No hacen falta cambios en los componentes.
export const profile = {
  name: "Piero Huamani",
  github: "https://github.com/Piero200314",
  linkedin: "https://www.linkedin.com/in/pieror-huamanib-82b825336/",
  role: "Desarrollo de Software · Diseño UX/UI",
  // Si añades una foto, colócala en public y escribe su ruta, por ejemplo /perfil.jpg.
  photo: "/perfil.png",
};

export const technologies = {
  html: {
    name: "HTML5",
    icon: "devicon-html5-plain",
    area: "Web",
    level: "En aprendizaje",
  },
  css: {
    name: "CSS3",
    icon: "devicon-css3-plain",
    area: "Web",
    level: "En aprendizaje",
  },
  javascript: {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    area: "Web",
    level: "En aprendizaje",
  },
  react: {
    name: "React",
    icon: "devicon-react-original",
    area: "Web",
    level: "En aprendizaje",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    area: "Web",
    level: "En aprendizaje",
  },
  figma: {
    name: "Figma",
    icon: "devicon-figma-plain",
    area: "Diseño",
    level: "Diseño UX/UI",
  },
  python: {
    name: "Python",
    icon: "devicon-python-plain",
    area: "Software",
    level: "Proyectos académicos",
  },
  java: {
    name: "Java",
    icon: "devicon-java-plain",
    area: "Software",
    level: "Básico",
  },
  android: {
    name: "Android Studio",
    icon: "devicon-androidstudio-plain",
    area: "Software",
    level: "Básico",
  },
  git: {
    name: "Git",
    icon: "devicon-git-plain",
    area: "Herramientas",
    level: "Control de versiones",
  },
  github: {
    name: "GitHub",
    icon: "devicon-github-original",
    area: "Herramientas",
    level: "Repositorios",
  },
  vscode: {
    name: "VS Code",
    icon: "devicon-vscode-plain",
    area: "Herramientas",
    level: "Editor de código",
  },
};

// Tecnologías de proyectos sin modificar el catálogo personal de habilidades.
export const projectTechnologies = {
  node: { name: "Node.js", icon: "devicon-nodejs-plain" },
  express: { name: "Express", icon: "devicon-express-original" },
  postgres: { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  sqlite: { name: "SQLite", icon: "devicon-sqlite-plain" },
  arduino: { name: "Arduino", icon: "devicon-arduino-plain" },
  cpp: { name: "C++", icon: "devicon-cplusplus-plain" },
};

export const projects = [
  {
    id: "nexo", image: "/proyectos/nexo/vista-1.jpg", imageAlt: "Catálogo real de NEXO", name: "NEXO", type: "FULL STACK · INVENTARIO CLOUD", status: "Realizado",
    description: "Gestión de inventario en la nube: productos, proveedores, movimientos y reportes en una sola plataforma.",
    tech: ["react", "node", "express", "postgres"],
    demo: "https://inventario-fullstack-1.onrender.com", demoLabel: "Abrir sistema",
    code: "https://github.com/Piero200314/inventario-fullstack",
    role: "Proyecto académico de desarrollo full stack",
    overview: "Sistema para centralizar la información del almacén y controlar las existencias. React presenta los datos; una API con Express valida las operaciones y Sequelize trabaja con PostgreSQL en Aiven. La interfaz y la API están publicadas juntas en Render.",
    features: ["Acceso: inicio de sesión con JWT y permisos para Administrador y Almacenero.", "Catálogo: fotografías, SKU, categorías, marca, precio, costo y ubicación de productos.", "Proveedores: datos de contacto y recepciones con responsable, referencia y observaciones.", "Movimientos: entradas y salidas transaccionales; validación de stock y rechazo de saldos negativos.", "Reportes: gráficos de existencias y movimientos, alertas y propuestas orientativas de reposición.", "Nube: datos e imágenes persistidos en PostgreSQL; interfaz adaptable con temas claro y oscuro."],
    contribution: "Desarrollo e integración del proyecto de inventario: interfaz, API y persistencia, con mejoras de diseño y publicación en la nube. El código y la documentación permiten consultar el alcance implementado.",
    note: "Requiere una cuenta autorizada. Render puede tardar en iniciar tras un periodo de inactividad. No se presenta como un sistema con FEFO, modo offline ni sincronización bidireccional."
  },
{
  "id": "tuerka",
  "name": "Tuerka",
  "type": "DESARROLLO WEB",
  "status": "En desarrollo",
  "description": "Plataforma web de venta de vehículos con catálogo, filtros y favoritos. Proyecto colaborativo en desarrollo.",
  "tech": [
    "react",
    "javascript",
    "css",
    "figma"
  ],
  "demo": "https://proyecto-tuerka.vercel.app/",
  "demoLabel": "Visitar web",
  "code": "https://github.com/Dgirto/ProyectoTuerka",
  "image": "/proyectos/tuerka-inicio.png",
  "imageAlt": "Página de inicio de Tuerka con buscador de vehículos",
  "role": "Proyecto colaborativo de diseño y desarrollo web",
  "overview": "Un sitio para explorar vehículos por tipo, marca y presupuesto, consultar su ficha y guardar favoritos. La interfaz parte de un diseño en Figma y está construida con React y Vite.",
  "features": [
    "Catálogo con búsqueda, filtros y ordenamiento.",
    "Ficha del vehículo con galería e información.",
    "Favoritos conservados en el navegador con localStorage.",
    "Páginas de contacto y presentación de la marca."
  ],
  "note": "La integración de servicios continúa en desarrollo. El formulario descrito en el repositorio guarda solicitudes localmente; no constituye una venta ni una reserva confirmada."
},
{
  "id": "apptareas",
  "image": "/proyectos/doit/tareas.png", "imageAlt": "Lista real de tareas de DoIt", "imageFit": "contain",
  "name": "doit — AppTareas",
  "type": "APLICACIÓN ANDROID",
  "status": "En desarrollo",
  "description": "Aplicación Android para organizar tareas, fechas y estados, con usuarios y almacenamiento local en SQLite.",
  "tech": [
    "java",
    "android",
    "sqlite"
  ],
  "demo": "",
  "code": "https://github.com/Dgirto/appTareas",
  "role": "Modelos y acceso a datos con SQLite · proyecto en equipo",
  "overview": "Gestor de tareas desarrollado en equipo. Permite organizar pendientes, consultar detalles y trabajar con cuentas de usuario. Mi participación se centra en los modelos y la capa de datos, según el reparto registrado en el repositorio.",
  "features": [
    "Creación, edición y consulta de tareas.",
    "Estados pendiente, en progreso y completada.",
    "Fechas de vencimiento y usuarios asignados.",
    "Modelos, esquema de base de datos y acceso a datos con SQLite."
  ],
  "note": "El inicio de sesión con Google requiere configurar la huella de la compilación. La galería incluye capturas reales del acceso, la lista, la creación y el detalle de tareas."
},
{
  "id": "parksense",
  "name": "ParkSense",
  "type": "SISTEMAS EMBEBIDOS",
  "status": "Realizado",
  "description": "Simulación de un parqueo inteligente de dos plazas con Arduino UNO, sensores ultrasónicos y barreras automáticas.",
  "tech": [
    "arduino",
    "cpp"
  ],
  "demo": "https://www.tinkercad.com/things/dKMEk9EIb7G-parksense-sistema-de-parqueo-inteligente",
  "demoLabel": "Ver simulación",
  "code": "",
  "image": "/proyectos/parksense-circuito.png",
  "imageAlt": "Circuito de ParkSense con Arduino UNO, sensores ultrasónicos, LCD y servomotores",
  "imageFit": "contain",
  "role": "Diseño del circuito · proyecto académico en equipo",
  "overview": "Prototipo simulado en Tinkercad que supervisa entrada, salida y ocupación de dos plazas. Mi rol en el equipo fue el diseño, como se indica en la documentación técnica.",
  "features": [
    "Cuatro sensores ultrasónicos para los accesos y las plazas.",
    "Dos servomotores controlan las barreras de entrada y salida.",
    "LCD 16×2 y LEDs comunican disponibilidad y ocupación.",
    "Buzzer, apertura manual y avisos por fallas de sensores."
  ],
  "note": "Proyecto realizado en simulación. Un montaje físico requiere verificar la alimentación y el consumo de los servomotores. El acceso a Tinkercad depende de la visibilidad del circuito."
},
  {
    id: "appescuela", image: "/proyectos/appescuela/vista-1.png", imageFit: "contain",
    name: "AppEscuela",
    type: "DESARROLLO WEB",
    status: "Realizado",
    description:
      "Directorio de alumnos con componentes reutilizables, contador y cambio de estado utilizando React.",
    tech: ["react", "javascript", "bootstrap"],
    demo: "https://app-escuela-three.vercel.app",
    code: "https://github.com/Piero200314/AppEscuela",
    role: "Práctica de desarrollo de interfaces con React",
    overview: "Directorio de alumnos para practicar componentes reutilizables y actualización del estado en React. La interfaz organiza la información de los estudiantes y permite interactuar con su estado.",
    features: [
      "Presentación de alumnos mediante componentes reutilizables.",
      "Contador y cambios de estado en la interfaz.",
      "Estilos con Bootstrap.",
      "Proyecto disponible en Vercel y código en GitHub."
    ],
    note: "Proyecto académico centrado en la interfaz y el manejo del estado en React.",
  },
  {
    id: "fitcoach", image: "/proyectos/fitcoach/vista-1.png", imageFit: "contain",
    name: "FitCoach",
    type: "DISEÑO DE PRODUCTO",
    status: "En desarrollo",
    description:
      "Diseño UX/UI de una plataforma que conecta coaches y clientes para el seguimiento del entrenamiento y la nutrición.",
    tech: ["figma"],
    demo: "https://www.figma.com/design/U2EYU235ZzKVBzhKo8ZweA/FitCoach?node-id=0-1",
    demoLabel: "Ver en Figma",
    role: "Diseño UX/UI · desarrollo frontend previsto como siguiente etapa",
    overview: "Diseño de una plataforma para facilitar el seguimiento entre coaches y clientes. El trabajo actual se centra en organizar la experiencia de usuario y diseñar las interfaces de entrenamiento, nutrición y acompañamiento.",
    features: [
      "Diseño de la página de presentación para escritorio y móvil.",
      "Pantallas de inicio de sesión, registro y recuperación de acceso.",
      "Propuesta de experiencias diferenciadas para cliente, coach y administración.",
      "Diseño visual e interfaces desarrollados en Figma."
    ],
    note: "Proyecto en fase de diseño. Las funciones descritas corresponden a la propuesta UX/UI; la implementación web es una etapa posterior. El archivo de Figma puede requerir permisos de visualización.",
    code: "",
  },
  {
    id: "placas",
    name: "Reconocimiento de placas",
    type: "VISIÓN ARTIFICIAL",
    status: "En desarrollo",
    description:
      "Proyecto académico con detección de placas, reconocimiento de texto y registro de ingreso y salida de vehículos.",
    tech: ["python"],
    demo: "",
    role: "Proyecto académico de visión artificial con Python",
    overview: "Prototipo para detectar placas vehiculares y reconocer su texto a partir de imágenes de cámara. El objetivo es utilizar la lectura de la placa para registrar entradas y salidas de vehículos.",
    features: [
      "Captura de imágenes desde una cámara con OpenCV.",
      "Detección de placas con un modelo YOLO personalizado.",
      "Reconocimiento de caracteres mediante EasyOCR.",
      "Registro de placa y horarios de entrada y salida como siguiente integración con SQLite."
    ],
    note: "La detección y el OCR se encuentran integrados. El registro completo y la validación del flujo de entrada y salida continúan en desarrollo. La lectura depende de la iluminación, el ángulo y la calidad de la imagen.",
    code: "",
  },
  // Para añadir un próximo proyecto, agrega un objeto con status: 'Por hacer'.
];

// Certificados personales; archivos en public/certificados.
export const certificates = [
{
  "id": "oracle-sql",
  "title": "Database Programming with SQL - Español",
  "issuer": "Oracle Academy",
  "date": "14/10/2026",
  "file": "/certificados/oracle-sql.pdf",
  "image": "/certificados/oracle-sql-hd.png",
    "thumbnail": "/certificados/oracle-sql-thumb.webp",
  "tech": []
},
{
  "id": "oracle-java-fundamentals",
  "title": "Java Fundamentals - Español",
  "issuer": "Oracle Academy",
  "date": "19/10/2026",
  "file": "/certificados/oracle-java-fundamentals.pdf",
  "image": "/certificados/oracle-java-fundamentals-hd.png",
    "thumbnail": "/certificados/oracle-java-fundamentals-thumb.webp",
  "tech": [
    "java"
  ]
},
{
  "id": "oracle-java-foundations",
  "title": "Java Foundations - Español",
  "issuer": "Oracle Academy",
  "date": "14/10/2026",
  "file": "/certificados/oracle-java-foundations.pdf",
  "image": "/certificados/oracle-java-foundations-hd.png",
    "thumbnail": "/certificados/oracle-java-foundations-thumb.webp",
  "tech": [
    "java"
  ]
},
{
  "id": "oracle-database-design",
  "title": "Database Design - Español",
  "issuer": "Oracle Academy",
  "date": "14/10/2026",
  "file": "/certificados/oracle-database-design.pdf",
  "image": "/certificados/oracle-database-design-hd.png",
    "thumbnail": "/certificados/oracle-database-design-thumb.webp",
  "tech": []
},
  {
    "id": "python",
    "title": "Fundamentos de Python 1",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "23/11/2024",
    "file": "/certificados/python.pdf",
    "image": "/certificados/python-hd.png",
    "thumbnail": "/certificados/python-thumb.webp",
    "tech": [
      "python"
    ]
  },
  {
    "id": "datos",
    "title": "Introducción a la Ciencia de Datos",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "02/11/2024",
    "file": "/certificados/datos.pdf",
    "image": "/certificados/datos-hd.png",
    "thumbnail": "/certificados/datos-thumb.webp",
    "tech": []
  },
  {
    "id": "hardware",
    "title": "Conceptos Básicos de Hardware de Computadora",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "26/10/2024",
    "file": "/certificados/hardware.pdf",
    "image": "/certificados/hardware-hd.png",
    "thumbnail": "/certificados/hardware-thumb.webp",
    "tech": []
  },
  {
    "id": "redes",
    "title": "Conceptos básicos de redes",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "17/10/2024",
    "file": "/certificados/redes.pdf",
    "image": "/certificados/redes-hd.png",
    "thumbnail": "/certificados/redes-thumb.webp",
    "tech": []
  },
  {
    "id": "iot-cisco",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "Cisco Networking Academy",
    "date": "13/10/2024",
    "file": "/certificados/iot-cisco.pdf",
    "image": "/certificados/iot-cisco-hd.png",
    "thumbnail": "/certificados/iot-cisco-thumb.webp",
    "tech": []
  },
  {
    "id": "iot-senati",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "21/09/2024",
    "file": "/certificados/iot-senati.pdf",
    "image": "/certificados/iot-senati-hd.png",
    "thumbnail": "/certificados/iot-senati-thumb.webp",
    "tech": []
  }
];

// Galerías: agrega capturas reales como { src, title, caption }.
// Rutas públicas: /proyectos/nexo/resumen.png, etc. No incluyas public en la ruta.
export const projectGalleries = {
  "nexo": [
    {
      "video": "/proyectos/nexo/recorrido.mp4",
      "poster": "/proyectos/nexo/vista-1.jpg",
      "title": "Recorrido del sistema",
      "caption": "Grabación real editada: selección de vistas, sin audio y con transiciones suaves."
    },
    {
      "src": "/proyectos/nexo/vista-1.jpg",
      "title": "Catálogo de productos",
      "caption": "Productos, existencias e imágenes en un mismo catálogo."
    },
    {
      "src": "/proyectos/nexo/vista-2.jpg",
      "title": "Reportes y reposición",
      "caption": "Consulta de indicadores y propuestas de reposición."
    },
    {
      "src": "/proyectos/nexo/vista-3.jpg",
      "title": "Alertas de inventario",
      "caption": "Seguimiento de existencias y productos."
    },
    {
      "src": "/proyectos/nexo/vista-4.jpg",
      "title": "Proveedores en tema claro",
      "caption": "Directorio de proveedores con los datos de demostración del sistema."
    }
  ],
  "tuerka": [
    {
      "video": "/proyectos/tuerka/recorrido.mp4",
      "poster": "/proyectos/tuerka/vista-1.jpg",
      "title": "Recorrido del sistema",
      "caption": "Grabación real editada: selección de vistas, sin audio y con transiciones suaves."
    },
    {
      "src": "/proyectos/tuerka/vista-1.jpg",
      "title": "Página de inicio",
      "caption": "Presentación y acceso a la búsqueda de vehículos."
    },
    {
      "src": "/proyectos/tuerka/vista-2.jpg",
      "title": "Ficha del vehículo",
      "caption": "Galería, precio y características del vehículo seleccionado."
    },
    {
      "src": "/proyectos/tuerka/vista-3.jpg",
      "title": "Comparador de vehículos",
      "caption": "Selección de vehículos para consultar sus diferencias."
    },
    {
      "src": "/proyectos/tuerka/vista-4.jpg",
      "title": "Acerca de Tuerka",
      "caption": "Presentación de la marca y su propuesta."
    }
  ],
  "apptareas": [
    {
      "src": "/proyectos/doit/tareas.png",
      "portrait": true,
      "title": "Gestionar tareas",
      "caption": "Búsqueda y filtros por estado: pendientes, en progreso y completadas."
    },
    {
      "src": "/proyectos/doit/detalle.png",
      "portrait": true,
      "title": "Detalle de una tarea",
      "caption": "Descripción, fechas y acciones para actualizar el estado."
    },
    {
      "src": "/proyectos/doit/crear.png",
      "portrait": true,
      "title": "Crear una tarea",
      "caption": "Título, descripción, estado, vencimiento y usuario asignado."
    },
    {
      "src": "/proyectos/doit/acceso.png",
      "portrait": true,
      "title": "Acceso a DoIt",
      "caption": "Pantalla de acceso de la aplicación Android."
    }
  ],
  "parksense": [
    {
      "src": "/proyectos/parksense-circuito.png",
      "title": "Circuito del prototipo",
      "caption": "Vista real de la simulación en Tinkercad."
    }
  ],
  "appescuela": [
    {
      "src": "/proyectos/appescuela/vista-1.png",
      "title": "Directorio de alumnos",
      "caption": "Vista real de AppEscuela: Directorio de alumnos",
      "portrait": false
    },
    {
      "src": "/proyectos/appescuela/vista-2.png",
      "title": "Selección y confirmación de eliminación",
      "caption": "Vista real de AppEscuela: Selección y confirmación de eliminación",
      "portrait": false
    }
  ],
  "fitcoach": [
    {
      "src": "/proyectos/fitcoach/vista-1.png",
      "title": "Presentación móvil",
      "caption": "Diseño UX/UI de FitCoach: Presentación móvil",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-2.png",
      "title": "Menú de navegación",
      "caption": "Diseño UX/UI de FitCoach: Menú de navegación",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-3.png",
      "title": "Servicios",
      "caption": "Diseño UX/UI de FitCoach: Servicios",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-4.png",
      "title": "Coaches",
      "caption": "Diseño UX/UI de FitCoach: Coaches",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-5.png",
      "title": "Contacto y cierre",
      "caption": "Diseño UX/UI de FitCoach: Contacto y cierre",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-6.png",
      "title": "Panel del cliente",
      "caption": "Diseño UX/UI de FitCoach: Panel del cliente",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-7.png",
      "title": "Entrenamientos",
      "caption": "Diseño UX/UI de FitCoach: Entrenamientos",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-8.png",
      "title": "Detalle de rutina",
      "caption": "Diseño UX/UI de FitCoach: Detalle de rutina",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-9.png",
      "title": "Nutrición",
      "caption": "Diseño UX/UI de FitCoach: Nutrición",
      "portrait": true
    },
    {
      "src": "/proyectos/fitcoach/vista-10.png",
      "title": "Estadísticas",
      "caption": "Diseño UX/UI de FitCoach: Estadísticas",
      "portrait": true
    }
  ]
};

export const projectCaseStudies = {
 nexo: { problem: "La información del almacén necesita un punto central para consultar existencias, responsables y movimientos.", solution: "Una aplicación web con catálogo, proveedores, operaciones de stock validadas y PostgreSQL en la nube.", contribution: "Desarrollo e integración del sistema académico de inventario, mejoras de interfaz, conexión de la API y publicación en Render." },
 tuerka: { problem: "Explorar vehículos requiere comparar modelos, fotografías e información en una experiencia ordenada.", solution: "Catálogo web con filtros, fichas de vehículos y favoritos conservados en el navegador.", contribution: "Participación en el equipo de diseño y desarrollo de la web. Trabajo en las interfaces y la presentación visual del catálogo." },
 apptareas: { problem: "Las tareas y sus fechas necesitan una organización accesible desde el teléfono.", solution: "Aplicación Android con estados de tareas, fechas y almacenamiento local mediante SQLite.", contribution: "Modelos y capa de acceso a datos con SQLite dentro del proyecto grupal DoIt." },
 parksense: { problem: "Un parqueo necesita informar su disponibilidad y coordinar el ingreso y la salida.", solution: "Simulación con sensores, barreras de servomotores y una pantalla LCD de disponibilidad.", contribution: "Diseño del circuito del prototipo académico, realizado en equipo y simulado en Tinkercad." },
 appescuela: { problem: "Practicar una interfaz que reaccione a las acciones del usuario sin recargar la página.", solution: "Directorio de alumnos con componentes reutilizables y estado local de React.", contribution: "Implementación de la práctica, contador y actualización del estado de las tarjetas de alumnos." },
 fitcoach: { problem: "El seguimiento entre coaches y clientes se dispersa cuando depende de mensajes manuales.", solution: "Diseño de una plataforma de entrenamiento, nutrición y acompañamiento con experiencias por rol.", contribution: "Diseño UX/UI en Figma y participación en el frontend de FitCoach para CODAINI: presentación, acceso y propuesta de interfaces para escritorio y móvil." },
 placas: { problem: "Registrar vehículos manualmente dificulta asociar una placa con su ingreso y salida.", solution: "Prototipo de visión artificial con captura de cámara, detección YOLO y reconocimiento EasyOCR.", contribution: "Desarrollo del prototipo académico con Python e integración de detección y lectura de placas." },
};

// Disponibilidad y evidencias: separadas del estado de desarrollo.
export const projectShowcase = {
 nexo: { delivery: "Publicado", access: "Requiere cuenta autorizada", results: ["Catálogo, proveedores y movimientos centralizados con persistencia en PostgreSQL.", "Validaciones de existencias y reportes para consultar el estado del inventario."] },
 tuerka: { delivery: "Publicado", access: "Web pública en desarrollo", results: ["Catálogo con filtros, fichas de vehículos y favoritos en el navegador.", "Vistas de presentación y contacto integradas en una interfaz web adaptable."] },
 apptareas: { delivery: "Prototipo", access: "Aplicación Android · código disponible", results: ["Tareas organizadas por estado, vencimiento y usuario asignado.", "Modelos y acceso a datos locales mediante SQLite dentro de un trabajo en equipo."] },
 parksense: { delivery: "Prototipo", access: "Simulación en Tinkercad", results: ["Circuito simulado con sensores, barreras y LCD para informar disponibilidad.", "Demostración web explicativa de ingreso, salida y ocupación de dos plazas."] },
 appescuela: { delivery: "Publicado", access: "Demo web de práctica", results: ["Directorio de alumnos con componentes reutilizables de React.", "Actualización del estado de las tarjetas sin recargar la página."] },
 fitcoach: { delivery: "Diseño UX/UI", access: "Vistas diseñadas en Figma", results: ["Diseños móviles de entrenamiento, nutrición y seguimiento del progreso.", "Propuesta de navegación y paneles por rol; las capturas representan el diseño, no todas las funciones implementadas."] },
 placas: { delivery: "Prototipo", access: "Desarrollo académico · sin demo pública", results: ["Prototipo con Python para detectar placas y reconocer texto.", "Objetivo de asociar la lectura con registros de entrada y salida; pendiente de incorporar evidencia visual al portfolio."] }
};
