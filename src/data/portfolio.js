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
  sqlite: { name: "SQLite", icon: "devicon-sqlite-plain" },
  arduino: { name: "Arduino", icon: "devicon-arduino-plain" },
  cpp: { name: "C++", icon: "devicon-cplusplus-plain" },
};

export const projects = [
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
  "note": "El inicio de sesión con Google requiere configurar la huella de la compilación. La vista de esta tarjeta es una presentación gráfica; las capturas de AppTareas se incorporarán cuando estén disponibles."
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
    id: "appescuela",
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
    id: "fitcoach",
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
  "tech": []
},
{
  "id": "oracle-java-fundamentals",
  "title": "Java Fundamentals - Español",
  "issuer": "Oracle Academy",
  "date": "19/10/2026",
  "file": "/certificados/oracle-java-fundamentals.pdf",
  "image": "/certificados/oracle-java-fundamentals-hd.png",
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
  "tech": []
},
  {
    "id": "python",
    "title": "Fundamentos de Python 1",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "23/11/2024",
    "file": "/certificados/python.pdf",
    "image": "/certificados/python-hd.png",
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
    "tech": []
  },
  {
    "id": "hardware",
    "title": "Conceptos Básicos de Hardware de Computadora",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "26/10/2024",
    "file": "/certificados/hardware.pdf",
    "image": "/certificados/hardware-hd.png",
    "tech": []
  },
  {
    "id": "redes",
    "title": "Conceptos básicos de redes",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "17/10/2024",
    "file": "/certificados/redes.pdf",
    "image": "/certificados/redes-hd.png",
    "tech": []
  },
  {
    "id": "iot-cisco",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "Cisco Networking Academy",
    "date": "13/10/2024",
    "file": "/certificados/iot-cisco.pdf",
    "image": "/certificados/iot-cisco-hd.png",
    "tech": []
  },
  {
    "id": "iot-senati",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "21/09/2024",
    "file": "/certificados/iot-senati.pdf",
    "image": "/certificados/iot-senati-hd.png",
    "tech": []
  }
];
