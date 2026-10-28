// Los 4 temperamentos y los 16 perfiles de personalidad.
// Los colores siguen la paleta de grupos de 16 Personalities.

window.TEMPERAMENTOS = {
  artesano: {
    nombre: 'Artesano',
    letras: 'SP',
    lema: 'Espontáneo, práctico y lleno de energía. Vive el momento y aprende haciendo.',
    tipos: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
    color: '#e4ae3a',
    oscuro: '#a87a14',
    claro: '#f0c866',
    palido: '#fbf3df',
    textoBoton: '#3d2e08',
  },
  racional: {
    nombre: 'Racional',
    letras: 'NT',
    lema: 'Analítico, curioso y estratégico. Busca entender cómo funcionan las cosas.',
    tipos: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
    color: '#88619a',
    oscuro: '#664777',
    claro: '#a988ba',
    palido: '#f1ebf4',
    textoBoton: '#ffffff',
  },
  guardian: {
    nombre: 'Guardián',
    letras: 'SJ',
    lema: 'Responsable, leal y organizado. Cuida a los demás y valora el orden.',
    tipos: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
    color: '#4298b4',
    oscuro: '#2c7690',
    claro: '#6eb4cb',
    palido: '#e3f1f6',
    textoBoton: '#ffffff',
  },
  idealista: {
    nombre: 'Idealista',
    letras: 'NF',
    lema: 'Cálido, inspirador y guiado por sus valores. Busca significado y propósito.',
    tipos: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
    color: '#33a474',
    oscuro: '#21815a',
    claro: '#5ec094',
    palido: '#e3f4ec',
    textoBoton: '#ffffff',
  },
};

window.PERFILES = {
  INTJ: {
    nombre: 'Arquitecto',
    descripcion: 'Pensador estratégico e imaginativo, con un plan para todo. Ve el panorama completo y trabaja con independencia para hacerlo realidad.',
  },
  INTP: {
    nombre: 'Lógico',
    descripcion: 'Inventor curioso con una sed insaciable de conocimiento. Le encanta analizar ideas, encontrar patrones y entender cómo funcionan las cosas.',
  },
  ENTJ: {
    nombre: 'Comandante',
    descripcion: 'Líder audaz, decidido y con visión. Organiza personas y recursos para alcanzar metas ambiciosas; siempre encuentra un camino.',
  },
  ENTP: {
    nombre: 'Innovador',
    descripcion: 'Pensador ingenioso y curioso que disfruta un buen reto intelectual. Cuestiona lo establecido y genera ideas nuevas con facilidad.',
  },
  INFJ: {
    nombre: 'Abogado',
    descripcion: 'Callado y profundo, pero muy inspirador. Idealista incansable que busca significado y desea ayudar a otros a crecer.',
  },
  INFP: {
    nombre: 'Mediador',
    descripcion: 'Poético, amable y altruista. Guiado por sus valores, siempre listo para apoyar una buena causa y ver lo mejor en los demás.',
  },
  ENFJ: {
    nombre: 'Protagonista',
    descripcion: 'Líder carismático e inspirador que cautiva a quien lo escucha. Le apasiona el potencial de las personas y las anima a alcanzarlo.',
  },
  ENFP: {
    nombre: 'Activista',
    descripcion: 'Espíritu libre, entusiasta, creativo y sociable. Siempre encuentra una razón para sonreír y conecta con la gente con calidez.',
  },
  ISTJ: {
    nombre: 'Logista',
    descripcion: 'Práctico y enfocado en los hechos. Responsable y constante; su confiabilidad está fuera de toda duda.',
  },
  ISFJ: {
    nombre: 'Defensor',
    descripcion: 'Protector dedicado y cálido, siempre listo para cuidar a sus seres queridos. Sirve con fidelidad y atención al detalle.',
  },
  ESTJ: {
    nombre: 'Ejecutivo',
    descripcion: 'Excelente administrador, insuperable organizando cosas y personas. Valora el orden, la tradición y el trabajo bien hecho.',
  },
  ESFJ: {
    nombre: 'Cónsul',
    descripcion: 'Extraordinariamente atento, sociable y servicial. Siempre dispuesto a ayudar y a crear un ambiente donde todos se sientan incluidos.',
  },
  ISTP: {
    nombre: 'Virtuoso',
    descripcion: 'Experimentador audaz y práctico, hábil con todo tipo de herramientas. Aprende haciendo y resuelve problemas con calma.',
  },
  ISFP: {
    nombre: 'Aventurero',
    descripcion: 'Artista flexible y encantador, siempre listo para explorar algo nuevo. Expresa lo que siente a través de lo que crea.',
  },
  ESTP: {
    nombre: 'Emprendedor',
    descripcion: 'Inteligente, enérgico y muy perceptivo. Disfruta la acción, decide rápido y resuelve lo que tiene enfrente.',
  },
  ESFP: {
    nombre: 'Animador',
    descripcion: 'Espontáneo, enérgico y entusiasta. A su lado la vida nunca es aburrida; disfruta compartir su alegría con los demás.',
  },
};
