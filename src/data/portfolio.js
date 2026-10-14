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

export const projects = [
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
  },
  {
    id: "fitcoach",
    name: "FitCoach",
    type: "DISEÑO DE PRODUCTO",
    status: "En desarrollo",
    description:
      "Diseño UX/UI de una plataforma que conecta coaches y clientes para el seguimiento del entrenamiento y la nutrición.",
    tech: ["figma"],
    demo: "",
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
    code: "",
  },
  // Para añadir un próximo proyecto, agrega un objeto con status: 'Por hacer'.
];

// Certificados personales; archivos en public/certificados.
export const certificates = [
  {
    "id": "python",
    "title": "Fundamentos de Python 1",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "23/11/2024",
    "file": "/certificados/python.pdf",
    "image": "/certificados/python.png",
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
    "image": "/certificados/datos.png",
    "tech": []
  },
  {
    "id": "hardware",
    "title": "Conceptos Básicos de Hardware de Computadora",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "26/10/2024",
    "file": "/certificados/hardware.pdf",
    "image": "/certificados/hardware.png",
    "tech": []
  },
  {
    "id": "redes",
    "title": "Conceptos básicos de redes",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "17/10/2024",
    "file": "/certificados/redes.pdf",
    "image": "/certificados/redes.png",
    "tech": []
  },
  {
    "id": "iot-cisco",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "Cisco Networking Academy",
    "date": "13/10/2024",
    "file": "/certificados/iot-cisco.pdf",
    "image": "/certificados/iot-cisco.png",
    "tech": []
  },
  {
    "id": "iot-senati",
    "title": "Introducción al Internet de las Cosas y Transformación Digital",
    "issuer": "SENATI · Cisco Networking Academy",
    "date": "21/09/2024",
    "file": "/certificados/iot-senati.pdf",
    "image": "/certificados/iot-senati.png",
    "tech": []
  }
];
