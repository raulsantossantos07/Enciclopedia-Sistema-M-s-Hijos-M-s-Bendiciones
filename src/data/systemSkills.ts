import { SystemSkill, SystemItem } from '../types/novel';

export const LINUO_SYSTEM_SKILLS: SystemSkill[] = [
  {
    id: 'campo-soberano',
    name: 'Dominio Soberano & Control de Zombis',
    currentLevel: 8,
    type: 'activa',
    category: 'dominio',
    levels: [
      { level: 1, description: 'Control sobre 10 zombis comunes a corta distancia.', unlockedAtChapter: 12, keyChanges: 'Primer enlace con Shui Nian.' },
      { level: 3, description: 'Comando de hordas de 5.000 zombis y telepatía con Reinas.', unlockedAtChapter: 50, keyChanges: 'Defensa de Binhu Garden.' },
      { level: 6, description: 'Dominio Carmesí continental sobre 200.000 zombis sin fallas.', unlockedAtChapter: 180, keyChanges: 'Purga nocturna de Yipiantian.' },
      { level: 8, description: 'Comando absoluto sobre 500.000 zombis y supresión de Reyes Zombi Nivel 7.', unlockedAtChapter: 270, keyChanges: 'Hegemonía planetaria.' }
    ]
  },
  {
    id: 'palma-buda',
    name: 'Palma Gigante de Buda / Mano del Caos',
    currentLevel: 7,
    type: 'activa',
    category: 'combate',
    levels: [
      { level: 1, description: 'Onda de choque que derriba muros de ladrillo.', unlockedAtChapter: 20 },
      { level: 4, description: 'Palma de energía dorada de 10 metros que aplasta tanques.', unlockedAtChapter: 80 },
      { level: 6, description: 'Palma Dorada Rulai de 50 metros que deja cráteres sísmicos.', unlockedAtChapter: 165, keyChanges: 'Destrucción de Ning Fanglan.' },
      { level: 7, description: 'Mano del Caos que parte cordilleras como Changbai en dos.', unlockedAtChapter: 390, keyChanges: 'Corte de Changbai.' }
    ]
  },
  {
    id: 'vision-perspicaz',
    name: 'Visión Perspicaz & Rayos Láser Gamma',
    currentLevel: 7,
    type: 'activa',
    category: 'percepcion',
    levels: [
      { level: 1, description: 'Visión térmica a través de humo y niebla.', unlockedAtChapter: 2 },
      { level: 4, description: 'Rayos láser oculares capaces de derretir placas de acero.', unlockedAtChapter: 40 },
      { level: 6, description: 'Láser de plasma gamma que funde acorazados alienígenas a 1.000m.', unlockedAtChapter: 160 },
      { level: 7, description: 'Ojo del Dragón Celestial que detecta naves estelares en la Luna.', unlockedAtChapter: 480, keyChanges: 'Guía de la Lanza del Caos.' }
    ]
  },
  {
    id: 'almacen-espacial',
    name: 'Almacén Dimensional Infinito',
    currentLevel: 8,
    type: 'pasiva',
    category: 'supervivencia',
    levels: [
      { level: 1, description: '10.000 m³ con flujo de tiempo congelado.', unlockedAtChapter: 1, keyChanges: 'Comida fresca eterna.' },
      { level: 4, description: '500.000 m³ capaz de almacenar búnkeres y arsenales.', unlockedAtChapter: 60 },
      { level: 6, description: 'Expansión x50 con Piedra Suprema hasta 62.5M m³.', unlockedAtChapter: 140, keyChanges: 'Balsa de salvamento en cápsula.' },
      { level: 8, description: 'Capacidad infinita para almacenar flotas enteras y planetas menores.', unlockedAtChapter: 500 }
    ]
  },
  {
    id: 'lanza-caos',
    name: 'Lanza Mágica del Caos & Flechas Divinas',
    currentLevel: 8,
    type: 'activa',
    category: 'combate',
    levels: [
      { level: 1, description: 'Flechas de aleación guiadas por telequinesis.', unlockedAtChapter: 30 },
      { level: 5, description: 'Tormenta de flechas divinas al ritmo de música infantil.', unlockedAtChapter: 210, keyChanges: 'Exterminio de 300.000 zombis.' },
      { level: 8, description: 'Lanza Mágica del Caos que atraviesa la atmósfera y destruye naves nodrizas.', unlockedAtChapter: 480, keyChanges: 'Muerte del Rey Aicers en la Luna.' }
    ]
  },
  {
    id: 'espada-ley-cosmica',
    name: 'Espada de la Ley Cósmica Absoluta',
    currentLevel: 9,
    type: 'activa',
    category: 'dominio',
    levels: [
      { level: 1, description: 'Aura de espada que rebana titanio sin filo físico.', unlockedAtChapter: 275 },
      { level: 6, description: 'Ley de Espada compartida con Watanabe Shizuka.', unlockedAtChapter: 310 },
      { level: 9, description: 'Hendidura dimensional que corta las 8 alas del Arcángel Casia.', unlockedAtChapter: 518, keyChanges: 'Barbacoa cósmica de Casia.' }
    ]
  }
];

export const SYSTEM_ITEMS: SystemItem[] = [
  {
    name: 'Balsa de Salvamento en Cápsula (3 Pisos con Piscina)',
    unlockedAtChapter: 140,
    description: 'Cápsula miniaturizada que al lanzarse al suelo se expande en una balsa de lujo de 200m x 100m x 15m con dormitorios para 500 personas y piscina con domo solar.',
    holder: 'Lin Nuo (utilizada para evacuar la tribu de Xingchen en Sichuan)',
    tier: 'Supremo'
  },
  {
    name: 'Piedra Espacial Suprema (Expande x50 veces)',
    unlockedAtChapter: 135,
    description: 'Artefacto que multiplicó el volumen del almacén dimensional de Lin Nuo en 50 veces, alcanzando 62.5 millones de metros cúbicos.',
    holder: 'Lin Nuo',
    tier: 'Supremo'
  },
  {
    name: 'Martillo Mjolnir de Aleación del Trueno',
    unlockedAtChapter: 435,
    description: 'Arma divina forjada por Lin Nuo que desata tormentas de relámpagos continentales.',
    holder: 'General Lei Jintian (Dios del Trueno)',
    tier: 'Divino'
  },
  {
    name: 'Katana Celestial de la Grulla Blanca',
    unlockedAtChapter: 310,
    description: 'Katana de aleación espacial imbuida con la Ley de Espada de Nivel 9.',
    holder: 'Watanabe Shizuka (Doncella Espadachina Francesa)',
    tier: 'Divino'
  },
  {
    name: 'Traje de Nanofibras Arácnidas de Seúl',
    unlockedAtChapter: 355,
    description: 'Traje táctico ultraligero que amortigua caídas de gran altura y proyecta seda de telaraña.',
    holder: "Yin Xiao'an (Spider-Girl)",
    tier: 'Épico'
  },
  {
    name: 'Corona de Hielo Milenario de Changbai',
    unlockedAtChapter: 405,
    description: 'Reliquia ancestral que purifica miasmas zombi y potencia las llamas de hielo.',
    holder: 'Gu Xiaolian (Matriarca del Clan Gu)',
    tier: 'Épico'
  }
];
