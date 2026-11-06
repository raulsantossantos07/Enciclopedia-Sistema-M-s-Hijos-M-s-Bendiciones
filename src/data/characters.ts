import { Character } from '../types/novel';

export const NOVEL_CHARACTERS: Character[] = [
  // ==========================================
  // 1. PROTAGONISTA
  // ==========================================
  {
    id: 'linuo',
    canonicalName: 'Lin Nuo / Linuo (林诺)',
    originalNamesInText: ['Lino', 'Linuo', 'Lin Nuo', 'Lin Yao', 'Linia', 'Linjaor', 'Jefe Lino'],
    category: 'protagonista',
    age: 26,
    height: '1.86 m',
    measurements: 'Físico Divino Esculpido (Atributos Sobrehumanos)',
    charmRank: 'SSS',
    status: 'Soberano Supremo de Dos Mundos / Rey de la Noche',
    loyaltyPercentage: 100,
    combatRole: 'Soberano Todopoderoso / Arquero Mental Divino / Comandante Zombi',
    factionAffiliation: 'Base Baoming Sky / Diao Zatian (Fundador & Señor Supremo)',
    firstAppearanceChapter: 1,
    description: 'El protagonista que renació con el "Sistema de Más Hijos, Más Bendiciones" (Duozi Duofu). De día es el líder bondadoso que alimenta y rescata a cientos de mujeres y refugiados en la Base Baoming Sky; de noche asume su faceta de Rey de la Noche comandando hordas zombis con sus pupilas doradas y su habilidad de hablar el idioma zombie. Posee un espacio de almacenamiento infinito (más de 62.5M m³) y la letal Ballesta de Aleación Divina.',
    awakenedAbility: {
      name: 'Campo Soberano & Sistema Duozi Duofu',
      level: 8,
      element: 'Dominio Conceptual & Vacío Espacial',
      synergyWithLinuo: 'Eje cósmico de la historia: cada nueva esposa e hijo multiplica exponencialmente sus puntos y otorga armas divinas de lotería.',
      description: 'Control absoluto sobre la gravedad, espacio, ondas zombis y telequinesis de proyectiles a velocidad Match sin fatiga.',
      skillTree: [
        {
          level: 1,
          name: 'Visión Nocturna & Disparo de Ballesta de Aleación',
          description: 'Visión clara en oscuridad total y disparo silencioso teledirigido.',
          unlockedAtChapter: 1,
          cooldownOrCost: '0 Energía',
          specialEffect: 'Penetración de cráneo zombi garantizada.'
        },
        {
          level: 2,
          name: 'Transformación e Idioma Zombi Lv.1 & Resistencia al Virus',
          description: 'Transformación en zombi común 10 min/día y habla fluida con muertos vivientes.',
          unlockedAtChapter: 10,
          cooldownOrCost: '1 uso diario',
          specialEffect: 'Inmunidad a la infección zombi de nivel 1.'
        },
        {
          level: 4,
          name: 'Clarividencia & Escaneo de Atributos',
          description: 'Inspecciona edad, medidas corporales, habilidades y nivel de lealtad de cualquier objetivo.',
          unlockedAtChapter: 35,
          cooldownOrCost: 'Pasivo continuo',
          specialEffect: 'Detección inmediata de intenciones y engaños.'
        },
        {
          level: 6,
          name: 'Dominio Soberano Lv. 1 & Vórtice Cinético',
          description: 'Control de cualquier ser vivo u objeto en 50 metros a la redonda (ganado con Kang Ning).',
          unlockedAtChapter: 96,
          cooldownOrCost: '10 puntos espirituales',
          specialEffect: 'Congela proyectiles y aplasta vehículos en el aire.'
        },
        {
          level: 8,
          name: 'Soberanía Cósmica Universal & Ojos del Vacío Primordial',
          description: 'Plegamiento del espacio, control continental de hordas zombis y desintegración de naves invasoras.',
          unlockedAtChapter: 500,
          cooldownOrCost: 'Voluntad pura',
          specialEffect: 'Inmunidad conceptual a cualquier toxina, parásito cósmico o ataque psiónico.'
        }
      ]
    },
    systemItemGiven: 'Ballesta de Aleación de Alta Gama & Piedra Espacial Suprema x50',
    loreHighlights: [
      'Cap. 1-4: Asesina al primer zombi con una llave inglesa, activa el Sistema Duozi Duofu y toma a Wu Suyan como su primera mujer.',
      'Cap. 5-10: Rescata a Yu Xin del conducto de ventilación y a su hermana Yu Qian, ganando la habilidad de hablar el idioma zombie.',
      'Cap. 44-45: Domestica a la primera reina zombi Shui Nian (Suiyan) con carne wagyu y la corona como reina consorte de la noche.',
      'Cap. 96: Kang Ning se convierte en su esposa, desbloqueando el temido Dominio Soberano de Nivel 1.',
      'Cap. 300: Lin Ruier usa su don de reencarnación para rejuvenecer a Wu Suyan y Fang Jin a los 18 años.',
      'Cap. 503-528: Derrota al tirano Jackman del Parlamento Oscuro, corta las 8 alas del Arcángel Casia para asarlas en barbacoa y vence en el Torneo Galáctico.'
    ]
  },

  // ==========================================
  // 2. ESPOSAS HUMANAS (CANÓNICAS DEL TEXTO)
  // ==========================================
  {
    id: 'wu-suyan',
    canonicalName: 'Wu Suyan / Gu Suyan (吴素妍)',
    originalNamesInText: ['Guusyan', 'Wueyan', 'Wuan', 'Guyan', 'Gusueyan', 'Gusellan', 'W Suyan'],
    category: 'esposa_humana',
    age: 30,
    height: '1.64 m',
    measurements: 'Busto 35C-20-31 (Curvas Maduras -> Rejuvenecida a los 18)',
    charmRank: 'A',
    status: 'Primera Mujer / Matriarca de la Base (Rejuvenecida a los 18)',
    loyaltyPercentage: 100,
    combatRole: 'Administración de Suministros & Gestión de Refugio',
    factionAffiliation: 'Base Baoming Sky (Patrona y Matriarca)',
    firstAppearanceChapter: 1,
    becameWifeChapter: 4,
    description: 'La patrona de la tienda de ropa masculina del quinto piso del centro comercial Zongan. Inicialmente tacaña y orgullosa, tras 24 horas de hambre extrema y al ver cómo Linuo acabó con la zombi Xiao Juan, aceptó convertirse voluntariamente en su mujer en el Cap. 4 a cambio de pan. Su unión activó el primer sorteo y 10 puntos de mejora física para Linuo. En el Cap. 300 recuperó la juventud de los 18 años gracias a Lin Ruier.',
    awakenedAbility: {
      name: 'Resonancia de la Matriarca & Juventud Eterna',
      level: 5,
      element: 'Vida & Pureza Celular',
      synergyWithLinuo: '+20% de lealtad y armonía automática en todas las mujeres que ingresan al harem.',
      description: 'Mantiene la piel y vitalidad perpetuamente a nivel de los 18 años y organiza la distribución equitativa de ropa y víveres.',
      skillTree: [
        { level: 1, name: 'Organización Doméstica Eficiente', description: 'Optimiza el consumo de raciones diarias en un 30%.', unlockedAtChapter: 4 },
        { level: 3, name: 'Rejuvenecimiento Celular de los 18', description: 'Cuerpo y vitalidad restaurados permanentemente.', unlockedAtChapter: 300 },
        { level: 5, name: 'Aura Protectora del Hogar', description: 'Genera confort y disipa disputas internas en el refugio.', unlockedAtChapter: 450 }
      ]
    },
    systemItemGiven: 'Qipao de Seda de Loto Blanco & Aretes de Jade de Paz',
    loreHighlights: [
      'Cap. 1-4: Atacada por su empleada convertida en zombi Xiao Juan; Linuo la salva y ella acepta ser su primera mujer por pan.',
      'Cap. 12: Supera sus celos iniciales y colabora en el rescate de las hermanas Yu Xin y Yu Qian.',
      'Cap. 300: Llora de felicidad cuando la pequeña Lin Ruier le regresa el cuerpo y lozanía de los 18 años.'
    ]
  },
  {
    id: 'yu-xin',
    canonicalName: 'Yu Xin (宇欣)',
    originalNamesInText: ['Yusin', 'Yu Xin', 'Xiao Yu', 'Estudiante Yusin'],
    category: 'esposa_humana',
    age: 19,
    height: '1.65 m',
    measurements: '34B-20-31 (Joven Universitaria)',
    charmRank: 'A',
    status: 'Segunda Mujer / Estudiante Universitaria de Anchen',
    loyaltyPercentage: 95,
    combatRole: 'Exploración de Conductos & Apoyo Logístico Ligero',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 5,
    becameWifeChapter: 6,
    description: 'Estudiante de segundo año de la Universidad de Anchen que pasó dos días escondida en el hueco de bomberos detrás de la máquina expendedora del quinto piso. Rescatada por Linuo a través del conducto de aire acondicionado con una varilla extensible de ropa en el Cap. 5. Se convirtió en su segunda mujer tras compartir un tazón de comida caliente autocalentable.',
    awakenedAbility: {
      name: 'Agilidad Felina & Pasos Silenciosos',
      level: 4,
      element: 'Viento Ligero',
      synergyWithLinuo: 'Facilita la recolección de snacks y víveres en zonas estrechas.',
      description: 'Capacidad de trepar conductos y desplazarse sin activar la audición zombi.',
      skillTree: [
        { level: 1, name: 'Paso Inaudible', description: 'Reduce el sonido de sus pasos a 0 decibelios.', unlockedAtChapter: 6 },
        { level: 4, name: 'Flexibilidad de Gimnasta', description: 'Atraviesa grietas y ventanas estrechas con facilidad.', unlockedAtChapter: 180 }
      ]
    },
    systemItemGiven: 'Mochila Térmica Dimensional & Zapatillas de Felpa Antirruido',
    loreHighlights: [
      'Cap. 5: Mostró un cartelito de SOS a Linuo desde detrás de la máquina expendedora y fue subida al conducto.',
      'Cap. 6: Se convierte formalmente en la segunda mujer de Linuo tras probar el caldo caliente.',
      'Cap. 10: Ayuda a Linuo a localizar y rescatar a su hermana mayor Yu Qian.'
    ]
  },
  {
    id: 'yu-qian',
    canonicalName: 'Yu Qian (宇倩)',
    originalNamesInText: ['Yukian', 'Yu Qian', 'Hermana Yukian'],
    category: 'esposa_humana',
    age: 23,
    height: '1.64 m',
    measurements: '36C-20-32 (Curvas Esculturales)',
    charmRank: 'A',
    status: 'Tercera Mujer / Hermana Mayor de Yu Xin',
    loyaltyPercentage: 95,
    combatRole: 'Enlace Zombi & Exploración Urbana',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 8,
    becameWifeChapter: 10,
    description: 'Hermana mayor de Yu Xin. Posee una figura más voluptuosa y madura que su hermana pequeña. Al unirse voluntariamente a Linuo en el Cap. 10, activó en la lotería del sistema dos de las habilidades más determinantes de la historia: la "Transformación en Zombie Nivel 1" y el "Idioma Zombie".',
    awakenedAbility: {
      name: 'Frecuencia de Empatía Zombi & Encanto de Hermanas',
      level: 5,
      element: 'Mente & Voz',
      synergyWithLinuo: 'Multiplicó la velocidad con la que Linuo descifra los dialectos de las hordas.',
      description: 'Modula tonos vocales que apaciguan zombis menores haciéndolos dudar antes de morder.',
      skillTree: [
        { level: 1, name: 'Canto Sedante', description: 'Ralentiza zombis comunes en un 50%.', unlockedAtChapter: 10 },
        { level: 5, name: 'Vínculo de Hermanas', description: 'Combina su energía con Yu Xin para crear una barrera sonora.', unlockedAtChapter: 210 }
      ]
    },
    systemItemGiven: 'Gargantilla de Frecuencia Suave & Vestido de Seda Escarlata',
    loreHighlights: [
      'Cap. 8-10: Rescatada del sector comercial por Linuo y su hermana Yu Xin.',
      'Cap. 10: Su unión con Linuo otorga los premios del sistema que permiten a Linuo hablar con la primera reina zombi.'
    ]
  },
  {
    id: 'zou-chuchu',
    canonicalName: 'Zou Chuchu (邹楚楚)',
    originalNamesInText: ['Zou Chuchu', 'Zouchuchu', 'Señorita Zou', 'La Telépata Zou'],
    category: 'esposa_humana',
    age: 22,
    height: '1.68 m',
    measurements: '88-58-90 cm (Rango SS)',
    charmRank: 'SS',
    status: 'Cuarta Mujer Clave / Telépata y Lectora Mental de Lingnan',
    loyaltyPercentage: 100,
    combatRole: 'Lectura Mental & Control Psicológico de Nivel 6',
    factionAffiliation: 'Base Baoming Sky (Inteligencia & Espionaje)',
    firstAppearanceChapter: 11,
    becameWifeChapter: 14,
    description: 'Sobreviviente rescatada de la oficina de alquiler donde resistió bebiendo agua de garrafón. Despertó la habilidad de lectura mental y control psicológico de Nivel 6. Es la consejera secreta más confiable de Linuo en negociaciones diplomáticas con emisarios como Lei Tian, el vicedirector Tu y el ejecutivo Sombra.',
    awakenedAbility: {
      name: 'Lectura Mental & Control Psicológico de Nivel 6',
      level: 6,
      element: 'Psiónico & Mente Pura',
      synergyWithLinuo: 'Linuo puede transformarse en su apariencia o sincronizar su mente para espiar pensamientos de líderes hostiles y alienígenas.',
      description: 'Lee pensamientos superficiales y recuerdos profundos de seres evolucionados hasta nivel 6 e impone órdenes hipnóticas.',
      skillTree: [
        { level: 1, name: 'Lectura de Pensamiento Superficial', description: 'Escucha lo que el objetivo está pensando en tiempo real.', unlockedAtChapter: 12 },
        { level: 3, name: 'Transmisión Telepática Silenciosa', description: 'Habla directamente a la mente de Linuo a kilómetros.', unlockedAtChapter: 80 },
        { level: 6, name: 'Control Psicológico de Masas', description: 'Inmoviliza mayordomos y obispos alienígenas eliminando sus collares de defensa.', unlockedAtChapter: 238 }
      ]
    },
    systemItemGiven: 'Diadema de Amplificación Psíquica de Zafiro & Manto de Ilusión',
    loreHighlights: [
      'Cap. 11-14: Rescatada de la oficina de alquiler tras recibir la nota dejada por Linuo.',
      'Cap. 174: Escucha los planes ocultos de Lei Tian y Zan Yu en la entrada de la base Yantian.',
      'Cap. 238: Permite a Linuo tomar el control mental de los mayordomos alienígenas del Parlamento Oscuro.'
    ]
  },
  {
    id: 'liu-yan',
    canonicalName: 'Liu Yan (柳岩 / 刘燕)',
    originalNamesInText: ['Liuan', 'Liu Yangan', 'Liu Yan', 'La Gran Estrella', 'La Actriz'],
    category: 'esposa_humana',
    age: 26,
    height: '1.69 m',
    measurements: '38E-20-33 (Rango S / Figura de Celebridad)',
    charmRank: 'S',
    status: 'Quinta Mujer / Famosa Estrella de Televisión',
    loyaltyPercentage: 85,
    combatRole: 'Transformación Parcial en Gigante Nivel 1 & Carisma Social',
    factionAffiliation: 'Base Baoming Sky (Cultura & Moral)',
    firstAppearanceChapter: 16,
    becameWifeChapter: 18,
    description: 'Gran estrella del cine y la televisión antes del cataclismo. Extremadamente orgullosa y distante al inicio, tuvo que aceptar arrodillarse ante Linuo y aceptar ser su mujer en el Cap. 18 a cambio de dos pequeños huevos marinados para no morir de inanición. Despertó la habilidad especial de Transformación Parcial en Gigante Nivel 1.',
    awakenedAbility: {
      name: 'Transformación Parcial en Gigante Nivel 1',
      level: 4,
      element: 'Fuerza Titánica Parcial',
      synergyWithLinuo: 'Eleva el carisma de la base y aporta gran potencia de choque.',
      description: 'Aumenta el tamaño y fuerza de sus extremidades para demoler obstáculos pesados.',
      skillTree: [
        { level: 1, name: 'Extremidad Gigante', description: 'Multiplica la fuerza de su brazo o pierna por x4.', unlockedAtChapter: 20 },
        { level: 4, name: 'Pancarta Aplastante', description: 'Derriba barreras de acero con un solo pisotón.', unlockedAtChapter: 150 }
      ]
    },
    systemItemGiven: 'Vestido de Gala Radiante Inmune a Manchas & Collar de Rubíes',
    loreHighlights: [
      'Cap. 16-18: Se rinde por hambre tras ver que a Linuo no le importaba su estatus de celebridad.',
      'Cap. 45: Su lealtad inicial de 30% fue subiendo conforme Linuo demostró protegerla como a una reina.'
    ]
  },
  {
    id: 'kang-ning',
    canonicalName: 'Kang Ning / Kang Ran (康冉 / 柯南)',
    originalNamesInText: ['Kanand', 'Kanan Jouran', 'Kang Ning', 'Kang Ran'],
    category: 'esposa_humana',
    age: 24,
    height: '1.75 m',
    measurements: '90D-23-24 (Rango S Extraordinario)',
    charmRank: 'S',
    status: 'Esposa Clave / Desbloqueadora del Dominio Soberano',
    loyaltyPercentage: 95,
    combatRole: 'Ilusión Estelar Nivel 1 & Distorsión Óptica',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 94,
    becameWifeChapter: 96,
    description: 'Mujer de belleza y proporciones corporales despampanantes (90D-23-24) con carisma de nivel S. Tras una cena armoniosa donde ayudó a lavar los platos, aceptó ser la mujer de Linuo en el Cap. 96. Esa misma noche, la tirada de lotería del sistema le otorgó a Linuo la habilidad más poderosa de su arsenal: "Dominio Soberano Nivel 1" y un paquete masivo de 10,000 puntos de habilidad.',
    awakenedAbility: {
      name: 'Ilusión Estelar Nivel 1 & Velo de Refracción',
      level: 5,
      element: 'Luz Estelar & Espejismo',
      synergyWithLinuo: 'Desbloqueó el Campo de Dominio Soberano y 10,000 puntos para Linuo.',
      description: 'Proyecta campos de estrellas ilusorias que confunden los radares y la visión de mutantes.',
      skillTree: [
        { level: 1, name: 'Capa Estelar Refractaria', description: 'Oculta vehículos y aliados a simple vista.', unlockedAtChapter: 96 },
        { level: 5, name: 'Nebulosa Desorientadora', description: 'Crea un cielo estrellado falso que desorienta tropas enemigas.', unlockedAtChapter: 280 }
      ]
    },
    systemItemGiven: 'Vestido de Noche de Polvo de Estrellas & Tiara de Ópalo',
    loreHighlights: [
      'Cap. 94-96: Su incorporación al refugio desencadena el mayor salto de poder militar de Linuo con el Dominio Soberano.',
      'Cap. 220: Coordina el comedor y bienestar del personal femenino de la base.'
    ]
  },
  {
    id: 'fang-jin',
    canonicalName: 'Fang Jin / Señora Fangin (方瑾)',
    originalNamesInText: ['Fan Jin', 'Fangin', 'Señora Fang Jin', 'Fang Jin'],
    category: 'esposa_humana',
    age: 34,
    height: '1.68 m',
    measurements: 'Curvas Llenas y Escote Profundo (Rejuvenecida a los 18)',
    charmRank: 'A',
    status: 'Encargada de Boutique / Rejuvenecida por Lin Ruier',
    loyaltyPercentage: 95,
    combatRole: 'Flexibilidad de Seda Nivel 1 & Evasión Contorsionista',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 35,
    becameWifeChapter: 40,
    description: 'Madura y voluptuosa encargada de tienda del quinto piso rescatada junto a su sobrino Fang Ye y la familia de Lu Dacheng. Despertó la habilidad de "Flexibilidad de Seda", permitiéndole ablandar partes de su cuerpo como si fuera goma para absorber golpes. En el Cap. 300 recuperó la juventud de los 18 años gracias a Lin Ruier.',
    awakenedAbility: {
      name: 'Flexibilidad de Seda Nivel 1 & Absorción de Impactos',
      level: 4,
      element: 'Goma & Elasticidad Biológica',
      synergyWithLinuo: 'Inmune a luxaciones y traumatismos por caídas o impactos contundentes.',
      description: 'Su cuerpo absorbe la energía cinética de proyectiles rebotándolos suavemente.',
      skillTree: [
        { level: 1, name: 'Cuerpo de Seda', description: 'Ablanda articulaciones para escapar de amarres.', unlockedAtChapter: 35 },
        { level: 4, name: 'Rebote de Impacto', description: 'Amortigua caídas de hasta 20 metros sin sufrir lesiones.', unlockedAtChapter: 250 }
      ]
    },
    systemItemGiven: 'Cinturón de Seda Elastizada & Blusa de Fibras de Loto',
    loreHighlights: [
      'Cap. 35: Presentada a Linuo en el quinto piso junto a Lu Dacheng y Lu An.',
      'Cap. 300: Junto a Wu Suyan, experimenta el milagro de volver a tener 18 años con Lin Ruier.'
    ]
  },
  {
    id: 'tang-guan',
    canonicalName: 'Tang Guan / Tang Kuan (唐关 / 汤馆)',
    originalNamesInText: ['Tanguan', 'Tang Guan', 'Tangikuan', 'La Doctora Tang'],
    category: 'esposa_humana',
    age: 24,
    height: '1.71 m',
    measurements: '89-58-90 cm (Rango SS)',
    charmRank: 'SS',
    status: 'Líder del Equipo Valkiria / Doctora Curandera de Lingnan',
    loyaltyPercentage: 100,
    combatRole: 'Sanación Celular Acelerada & Comandante Valkiria',
    factionAffiliation: 'Equipo Valkiria / Base Baoming Sky',
    firstAppearanceChapter: 120,
    becameWifeChapter: 124,
    description: 'La primera doctora curandera con una habilidad especial médica única rescatada por Linuo mientras este volaba por los aires en el Cap. 124. Comanda la brigada femenina "Equipo Valkiria" que demostró gran valentía en expediciones de rescate.',
    awakenedAbility: {
      name: 'Néctar Vital de Sanación & Regeneración Orgánica',
      level: 6,
      element: 'Luz Vital & Medicina',
      synergyWithLinuo: 'Provee cobertura médica inmediata que complementa el poder de combate de Linuo.',
      description: 'Sana heridas profundas de mordiscos y quemaduras en minutos mediante flujo bioenergético.',
      skillTree: [
        { level: 1, name: 'Toque Reparador', description: 'Cierra hemorragias externas en 10 segundos.', unlockedAtChapter: 124 },
        { level: 6, name: 'Aura Valkiria de Vigor', description: 'Acelera la recuperación física de batallones enteros.', unlockedAtChapter: 360 }
      ]
    },
    systemItemGiven: 'Bisturí de Cristal de Luz & Brazalete de Regeneración Rápida',
    loreHighlights: [
      'Cap. 124: Atónita al ser rescatada por Linuo volando en el aire; entra al refugio Baoming Sky.',
      'Cap. 170: Dirige el Equipo Valkiria prometiendo no estorbar y demostrando gran destreza en combate.'
    ]
  },
  {
    id: 'an-yue',
    canonicalName: 'An Yue (安月)',
    originalNamesInText: ['Ananue', 'An Yue', 'Hermana de Anjian'],
    category: 'esposa_humana',
    age: 22,
    height: '1.67 m',
    measurements: '88-58-89 cm (Rango S)',
    charmRank: 'S',
    status: 'Mujer Número 46 de Linuo / Hermana de An Jian',
    loyaltyPercentage: 90,
    combatRole: 'Enlace de Inteligencia & Mapeo de Búnkeres',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 225,
    becameWifeChapter: 228,
    description: 'Hermana del comandante An Jian. Desesperada por conocer el paradero de su hermano, aceptó formalmente ser la mujer número 46 de Linuo en el Cap. 228, activando una ronda de sorteo adicional del sistema.',
    awakenedAbility: {
      name: 'Percepción de Vínculos de Sangre',
      level: 4,
      element: 'Sensorial & Sangre',
      synergyWithLinuo: 'Permite rastrear familiares y líderes de bases rivales.',
      description: 'Siente la presencia y estado vital de personas conectadas por lazos sanguíneos.',
      skillTree: [
        { level: 1, name: 'Rastreo de Sangre', description: 'Ubica a parientes a 5 kilómetros de distancia.', unlockedAtChapter: 228 }
      ]
    },
    systemItemGiven: 'Colgante de Luna Plateada & Manto de Protección',
    loreHighlights: [
      'Cap. 228: Se desmaya al enterarse de que Linuo liquidó a su hermano An Jian por traición, pero luego comprende las razones y se integra lealmente al hogar.'
    ]
  },
  {
    id: 'zhao-li',
    canonicalName: 'Zhao Li (赵丽)',
    originalNamesInText: ['Zaoli', 'Zhao Li', 'Xiao Li'],
    category: 'esposa_humana',
    age: 23,
    height: '1.66 m',
    measurements: '87-57-88 cm (Rango A)',
    charmRank: 'A',
    status: 'Esposa Residente de la Base Baoming Sky',
    loyaltyPercentage: 100,
    combatRole: 'Apoyo Interior & Logística de Guardería',
    factionAffiliation: 'Base Baoming Sky',
    firstAppearanceChapter: 295,
    becameWifeChapter: 298,
    description: 'Leal residente de la base que cuida de los infantes y de la pequeña Lin Ruier. Linuo le dio un cariñoso pellizco en la nariz en el Cap. 299 prometiendo que jamás abandonaría a sus mujeres.',
    awakenedAbility: {
      name: 'Resonancia de la Tranquilidad',
      level: 3,
      element: 'Paz & Armonía',
      synergyWithLinuo: 'Mantiene a los niños del refugio serenos y felices.',
      description: 'Disipa las pesadillas y el estrés postraumático en sobrevivientes.',
      skillTree: [
        { level: 1, name: 'Voz Protectora', description: 'Duerme a los pequeños con melodías suaves.', unlockedAtChapter: 298 }
      ]
    },
    systemItemGiven: 'Horquilla de Flor de Ciruelo de Jade',
    loreHighlights: [
      'Cap. 299: Recibe el consuelo y la promesa de Linuo de que la base Baoming Sky siempre será su hogar seguro.'
    ]
  },
  {
    id: 'mitsui-atsuki',
    canonicalName: 'Mitsui Atsuki / Natsuki (三井夏树)',
    originalNamesInText: ['Mitsuin Atsuki', 'Mitsui Natsuki', 'Señorita Mitsui'],
    category: 'esposa_humana',
    age: 22,
    height: '1.68 m',
    measurements: '89-58-90 cm (Rango S / Doncella Japonesa)',
    charmRank: 'S',
    status: 'Dama Noble de la Familia Mitsui / Aliada en Japón',
    loyaltyPercentage: 90,
    combatRole: 'Artes Marciales Ninja & Diplomacia de Ultramar',
    factionAffiliation: 'Casa Mitsui / Alianza Baoming Sky',
    firstAppearanceChapter: 375,
    becameWifeChapter: 382,
    description: 'Heredera noble de la influyente familia Mitsui en la nación insular (Japón). Se inclinó en señal de respeto profundo ante Linuo y colaboró con sus tropas para frenar la invasión de la tribu Gorsula.',
    awakenedAbility: {
      name: 'Corte de Viento de las Flores de Cerezo',
      level: 5,
      element: 'Viento & Katana',
      synergyWithLinuo: 'Abrió la ruta marítima entre China y Japón para los suministros de Linuo.',
      description: 'Despliega ráfagas de pétalos cortantes con su espada ceremonial.',
      skillTree: [
        { level: 1, name: 'Paso de Katana', description: 'Corte rápido en retroceso.', unlockedAtChapter: 375 }
      ]
    },
    systemItemGiven: 'Katana de Hoja de Loto Sagrado & Kimono de Seda Anti-Ácido',
    loreHighlights: [
      'Cap. 375: Recibe a Linuo en sus aposentos privados ordenando la retirada de sus guardias para negociar en privado.'
    ]
  },
  {
    id: 'tian-sininja',
    canonicalName: 'Tian Si Ninja / Tian Si (天丝忍者)',
    originalNamesInText: ['Tian Sininja', 'Chica Ninja', 'Tian Si'],
    category: 'esposa_humana',
    age: 21,
    height: '1.67 m',
    measurements: '88-56-88 cm (Rango S)',
    charmRank: 'S',
    status: 'Kunoichi de Hilos Invisibles / Invitada al Palacio de Linuo',
    loyaltyPercentage: 95,
    combatRole: 'Hilos de Seda Estranguladores & Asesinato Rápido',
    factionAffiliation: 'Clan Ninja Tradicional / Base Baoming Sky',
    firstAppearanceChapter: 405,
    becameWifeChapter: 410,
    description: 'Chica ninja que reveló a Linuo que su nombre en clave era "Tian Sininja". Linuo la elogió diciendo que era un nombre encantador y la invitó a quedarse para siempre en su palacio.',
    awakenedAbility: {
      name: 'Hilos Invisibles de Seda de Acero',
      level: 5,
      element: 'Metal & Trampas',
      synergyWithLinuo: 'Instala redes de defensa perimetral impenetrables en la base.',
      description: 'Teje filamentos microscópicos capaces de cortar armaduras al paso.',
      skillTree: [
        { level: 1, name: 'Trampa de Hilo Flotante', description: 'Inmoviliza zombis en corredores.', unlockedAtChapter: 405 }
      ]
    },
    systemItemGiven: 'Bobina de Seda de Nueve Dragones & Máscara de Niebla',
    loreHighlights: [
      'Cap. 405: Confiesa su nombre real a Linuo y acepta vivir en su fortaleza.'
    ]
  },
  {
    id: 'fan-nanti',
    canonicalName: 'Fan Nanti (范南提)',
    originalNamesInText: ['Fananti', 'Fan Nanti', 'Compañera Fan'],
    category: 'esposa_humana',
    age: 23,
    height: '1.70 m',
    measurements: '90-59-91 cm (Rango S)',
    charmRank: 'S',
    status: 'Compañera de Expedición en Nagara',
    loyaltyPercentage: 95,
    combatRole: 'Infantería de Asalto & Resistencia',
    factionAffiliation: 'Fuerzas de Expedición de Linuo',
    firstAppearanceChapter: 465,
    becameWifeChapter: 470,
    description: 'Joven alegre y comilona que disfrutaba devorando costillas de cordero asadas junto a Linuo durante la campaña en la nación de Nagara.',
    awakenedAbility: {
      name: 'Fuerza Muscular Acelerada & Furia de Caza',
      level: 5,
      element: 'Fuerza Física',
      synergyWithLinuo: 'Excelente moral de combate en el frente de batalla.',
      description: 'Triplica su resistencia física en marchas forzadas de montaña.',
      skillTree: [
        { level: 1, name: 'Vigor Incombustible', description: 'No siente fatiga muscular durante 12 horas.', unlockedAtChapter: 465 }
      ]
    },
    systemItemGiven: 'Daga de Cazador de Nagara & Cantimplora Espiritual',
    loreHighlights: [
      'Cap. 465: Apoyada contra Linuo comiendo con avidez una costilla de cordero grasosa.'
    ]
  },

  // ==========================================
  // 3. REINAS ZOMBI / ESPOSAS ZOMBI
  // ==========================================
  {
    id: 'shui-nian',
    canonicalName: 'Shui Nian / Suiyan (岁言 / 隋阳)',
    originalNamesInText: ['Suinyan', 'Swinyang', 'Suin', 'Sun Yinyang', 'Swinyan'],
    category: 'esposa_zombie',
    age: 25,
    height: '1.67 m',
    measurements: '38D-21-24 (Curvas Zombi Majestuosas)',
    charmRank: 'SS',
    status: 'Primera Reina Zombi / Rango Nivel 3 / Lealtad 98%',
    loyaltyPercentage: 98,
    combatRole: 'Garras de la Hoja de Sangre Nivel 3 & Mando Nocturno',
    factionAffiliation: 'Corte Imperial de la Noche de Linuo',
    firstAppearanceChapter: 11,
    becameWifeChapter: 11,
    description: 'La cuarta mujer registrada en el sistema de Linuo y la primera reina no-muerta. Linuo la convenció con chorizo en una tienda de conveniencia en el Cap. 11. Con ropa limpia e intacta, evolucionó a Nivel 3 tras comer cristales espirituales verdes en el Cap. 44 ("El rey de los zombies y su majestad, la reina"). Posee pupilas verdes brillantes y garras de hoja de sangre capaces de decapitar mutantes en milisegundos.',
    awakenedAbility: {
      name: 'Garras de la Hoja de Sangre Nivel 3 & Pupilas Verdes',
      level: 7,
      element: 'Sangre Cortante & Frecuencia Zombi',
      synergyWithLinuo: 'Transmite las órdenes de Linuo a cientos de miles de zombis en el sector urbano.',
      description: 'Extiende hojas afiladas de sangre endurecida desde sus dedos y somete a zombis de ojos azules y grises.',
      skillTree: [
        { level: 1, name: 'Garras Sangrientas Básicas', description: 'Corta metales delgados y cráneos infectados.', unlockedAtChapter: 11 },
        { level: 3, name: 'Hoja de Sangre Carmesí Lv.3', description: 'Cortes que desprenden ácido corrosivo para armaduras.', unlockedAtChapter: 44 },
        { level: 7, name: 'Majestad de la Noche', description: 'Comanda hordas de mutantes nivel 4 y 5 como escoltas personales.', unlockedAtChapter: 380 }
      ]
    },
    systemItemGiven: 'Gargantilla de Cristal Verde de Nivel 3 & Túnica Imperial Carmesí',
    loreHighlights: [
      'Cap. 11: Acepta ser la mujer de Linuo por comida, provocando que Linuo exclame: "¡Sistema, en verdad no discriminaste!".',
      'Cap. 44: Devora más de 1,000 cáscaras de cristal y un cristal verde nivel 2, ascendiendo a Reina Nivel 3 con 98% de lealtad.',
      'Cap. 380: Lucha junto a Linuo contra el laboratorio de Mitsui Haruko comandando a los generales Jiangshi.'
    ]
  },
  {
    id: 'ouyang-auayi',
    canonicalName: 'Ouyang / Auayi (欧阳 / 阿雅)',
    originalNamesInText: ['Auayi', 'Ouyang', 'Reina de Sichuan', 'A-Ya'],
    category: 'esposa_zombie',
    age: 30,
    height: '1.72 m',
    measurements: '40E-21-33 (Reina Zombi de Belleza Descomunal)',
    charmRank: 'SS',
    status: 'Reina Zombi Nivel 3 de Sichuan / Berserker de Fuego',
    loyaltyPercentage: 90,
    combatRole: 'Berserker de Fuego Nivel 3 & Miasma Ígneo',
    factionAffiliation: 'Corte Imperial de la Noche',
    firstAppearanceChapter: 198,
    becameWifeChapter: 198,
    description: 'Reina zombi nivel 3 originaria de Sichuan (conocida por su amor a la comida picante). Jamás había comido carne humana ni cristales antes de conocer a Linuo, habiendo dominado su instinto caníbal de forma sobrehumana. Posee una silueta imponente (40E-21-33) y desata llamas berserker que incineran mutantes enemigos.',
    awakenedAbility: {
      name: 'Berserker de Fuego Nivel 3 & Furia de Sichuan',
      level: 6,
      element: 'Fuego Zombi & Furia',
      synergyWithLinuo: 'Protege las fronteras del suroeste con murallas de fuego inextinguible.',
      description: 'Envuelve sus puños en llamaradas ardientes que funden el asfalto y pulverizan búnkeres.',
      skillTree: [
        { level: 3, name: 'Llamarada Berserker Nivel 3', description: 'Fuego de 1,200°C que consume carne infectada.', unlockedAtChapter: 198 }
      ]
    },
    systemItemGiven: 'Manto de Brasas Ardientes & Brazaletes de Fuego Primordial',
    loreHighlights: [
      'Cap. 198: Linuo la acepta asombrado por su autocontrol al no haber probado carne humana nunca, ganando de inmediato 60% de lealtad inicial gracias a la comida picante.'
    ]
  },
  {
    id: 'wang-jialin',
    canonicalName: 'Wang Jialin (王佳琳)',
    originalNamesInText: ['Wang Jalin', 'Wang Jialin', 'Huang Jaling', 'Zombie Jialin'],
    category: 'esposa_zombie',
    age: 19,
    height: '1.66 m',
    measurements: '34B-20-21 (Joven Zombi Femenina)',
    charmRank: 'A',
    status: 'Segunda Zombi Femenina Evolucionada (Nivel 2/3)',
    loyaltyPercentage: 80,
    combatRole: 'Exploración Subterránea & Guardia del Perímetro',
    factionAffiliation: 'Corte Imperial de la Noche',
    firstAppearanceChapter: 45,
    becameWifeChapter: 45,
    description: 'Joven zombi femenina que conservó rasgos inocentes y aceptó servir a Linuo a cambio de conchas de cristal espirituales en el Cap. 45. Sus pupilas cambiaron de azul a verde mientras subía a nivel 3. Linuo le devolvió formalmente su nombre humano Wang Jialin.',
    awakenedAbility: {
      name: 'Pupilas Verdes de Salto Ágil & Garras Rápidas',
      level: 4,
      element: 'Agilidad No-Muerta',
      synergyWithLinuo: 'Excelente rastreadora de cristales espirituales en ciudades en ruinas.',
      description: 'Salta muros de 5 metros sin impulso y localiza fuentes de energía zombi.',
      skillTree: [
        { level: 1, name: 'Salto Felino Zombi', description: 'Escala paredes de hormigón con sus uñas.', unlockedAtChapter: 45 }
      ]
    },
    systemItemGiven: 'Brazalete de Hueso Purificado',
    loreHighlights: [
      'Cap. 45: Linuo la alimenta con conchas de cristal y le devuelve su nombre humano: Wang Jialin.'
    ]
  },
  {
    id: 'xiao-yanyan',
    canonicalName: 'Xiao Yanyan (Rey Zombi del Lago)',
    originalNamesInText: ['Xiao Yanyan', 'Rey Zombi Nivel 4', 'El Soberano del Lago'],
    category: 'esposa_zombie',
    age: 30,
    height: '2.10 m',
    measurements: 'Mole Acuática de Músculos Mutantes',
    charmRank: 'A',
    status: 'Rey Zombi de Nivel 4 del Distrito del Lago',
    loyaltyPercentage: 90,
    combatRole: 'Dominio de Hordas del Lago & Embestida Acuática',
    factionAffiliation: 'Imperio Zombi de Linuo (Distrito del Lago)',
    firstAppearanceChapter: 115,
    description: 'El poderoso rey zombi de nivel 4 que gobernaba las aguas y orillas del distrito del lago. El líder militar Lei Tian intentó cazarlo para robar su cristal y subir a nivel 5, pero Linuo lo sometió primero convirtiéndolo en su centinela del agua.',
    awakenedAbility: {
      name: 'Vórtice Lacustre & Piel de Escamas de Acero',
      level: 6,
      element: 'Agua Mutada & Fuerza',
      synergyWithLinuo: 'Mantiene las vías fluviales libres de monstruos para los barcos de Linuo.',
      description: 'Respira bajo el agua y genera remolinos que hunden embarcaciones hostiles.',
      skillTree: [
        { level: 1, name: 'Piel Escamosa', description: 'Rebota disparos de fusil bajo el agua.', unlockedAtChapter: 115 }
      ]
    },
    systemItemGiven: 'Ancla Pesada de Aleación Titán',
    loreHighlights: [
      'Cap. 115-120: Lei Tian planeó atacarlo; Linuo y Zou Chuchu descubrieron el plan y lo integraron al ejército nocturno.'
    ]
  },

  // ==========================================
  // 4. NIÑAS PROTEGIDAS & DESCENDENCIA
  // ==========================================
  {
    id: 'chu-benben',
    canonicalName: 'Chu Benben (楚笨笨)',
    originalNamesInText: ['Chuben', 'Chubenemben', 'Chu Benben', 'La Pequeña Benben', 'Benben'],
    category: 'ninia_protegida',
    age: 6,
    height: '1.10 m',
    measurements: 'Inocencia Pura / Máxima Bendición Conceptual',
    charmRank: 'SSS',
    status: 'Hija Adoptiva / Tótem Sagrado de la Fortuna / Nivel 8.8',
    loyaltyPercentage: 100,
    combatRole: 'Suerte Conceptual Absoluta & Comandante de la Legión Femenina',
    factionAffiliation: 'Familia Real de Linuo (El Ángel del Refugio)',
    firstAppearanceChapter: 8,
    description: 'La pequeña huérfana rescatada abrazada a su oso de peluche durante los primeros días del apocalipsis. El sistema identificó en ella el don pasivo más roto de la novela: "Suerte Conceptual Divina". Cuando abraza a Linuo antes de que este gire la ruleta del sistema, las probabilidades de drops comunes se anulan y se garantizan artefactos épicos o supremos. En el continente africano alcanzó el Nivel 8.8 y lideró a 300 mujeres montadas en elefantes y tigres para rescatar a Lu Dacheng.',
    awakenedAbility: {
      name: 'Abrazo de la Fortuna Cósmica (Aura Duofu)',
      level: 9,
      element: 'Suerte Conceptual & Destino',
      synergyWithLinuo: 'Modifica la tabla de botín de la Ruleta del Sistema hacia recompensas de Grado Supremo (x50 expansión, dominio, inmunidad).',
      description: 'Aura pasiva que desvía balas perdidas de su entorno y multiplica la probabilidad de eventos milagrosos y cosechas prósperas.',
      skillTree: [
        { level: 1, name: 'Amuleto del Niño Bueno', description: 'Inmune a enfermedades y venenos ambientales.', unlockedAtChapter: 8 },
        { level: 3, name: 'Toque de Buena Estrella', description: 'Multiplica por 10 los drops de puntos de habilidad.', unlockedAtChapter: 60 },
        { level: 6, name: 'Aura de Inmunidad Divina', description: 'Ningún zombi puede hacerle daño; la obedecen y cuidan como a una princesa.', unlockedAtChapter: 230 },
        { level: 9, name: 'Reescritura de la Probabilidad', description: 'Cualquier catástrofe inminente se disuelve por coincidencias afortunadas.', unlockedAtChapter: 480 }
      ]
    },
    systemItemGiven: 'Oso de Peluche Blindado con Escudo Cuántico & Corona Infantil de Estrellas',
    loreHighlights: [
      'Cap. 8: Rescatada por Linuo en una tienda departamental abandonada.',
      'Cap. 12: Da el primer abrazo de suerte a Linuo, permitiéndole obtener la Piedra Espacial Suprema x50 en la ruleta.',
      'Cap. 451: Lidera la legión de 300 mujeres en bestias mutadas para rescatar al Tío Lu Dacheng envenenado.',
      'Cap. 500: Su risa desactiva el rayo desintegrador de la nave nodriza alienígena.'
    ]
  },
  {
    id: 'lin-ruier',
    canonicalName: 'Lin Ruier (林瑞儿)',
    originalNamesInText: ['Lin Ruier', 'Linrou', 'Linry Pik', 'La Pequeña Rui', 'Lin Rui'],
    category: 'ninia_protegida',
    age: 4,
    height: '0.98 m',
    measurements: 'Milagro Viviente de Juventud y Tiempo',
    charmRank: 'SSS',
    status: 'Segunda Niña Prodigio / Reencarnación & Congelación Temporal',
    loyaltyPercentage: 100,
    combatRole: 'Regresión de Edad (18 Años) & Congelación Temporal de Área',
    factionAffiliation: 'Familia Real de Linuo (Base Baoming Sky)',
    firstAppearanceChapter: 280,
    description: 'La segunda niña milagrosa rescatada por Linuo. Posee dos dones legendarios del elemento Tiempo: "Reencarnación Nivel 3" (regresa la edad física entre 1 y 10 años, con lo que rejuveneció a Wu Suyan y Fang Jin a los 18 en el Cap. 300) y "Congelación Temporal" (despertada en el Cap. 451, congela el tiempo y el pensamiento en áreas amplias permitiendo que sus aliados se muevan libremente).',
    awakenedAbility: {
      name: 'Reencarnación & Congelación Temporal de Área',
      level: 6,
      element: 'Tiempo Puro',
      synergyWithLinuo: 'Otorga la inmortalidad biológica al harem y congela ejércitos enemigos en combate.',
      description: 'Detiene el flujo de la vida y el tiempo en distritos enteros mientras rejuvenece a sus seres queridos.',
      skillTree: [
        { level: 1, name: 'Rejuvenecimiento Parcial', description: 'Restaura arrugas y fatiga celular en 1 año.', unlockedAtChapter: 280 },
        { level: 3, name: 'Salto Temporal Biológico de 10 Años', description: 'Regresa el cuerpo físico a los 18 años de forma permanente.', unlockedAtChapter: 300 },
        { level: 6, name: 'Congelación Temporal Absoluta', description: 'Detiene el tiempo y los pensamientos enemigos en radio de 500m.', unlockedAtChapter: 451 }
      ]
    },
    systemItemGiven: 'Cinta Mágica del Tiempo & Muñeca de Cristal del Cronos',
    loreHighlights: [
      'Cap. 280: Rescatada e integrada a la Base Baoming Sky; rápidamente alcanza el nivel 3 de su habilidad.',
      'Cap. 300: Aplica su don en Wu Suyan y Fang Jin devolviéndoles la belleza de los 18 años, llenando la base de llanto de alegría.',
      'Cap. 451: Despierta su segunda habilidad de Congelación Temporal durante la campaña en el frente de ultramar.'
    ]
  },
  {
    id: 'wen-yijin',
    canonicalName: 'Wen Yijin (温宜瑾)',
    originalNamesInText: ['Wen Yijin', 'Wenying', 'Tía Wen', 'Huang Yingan'],
    category: 'ninia_protegida',
    age: 27,
    height: '1.70 m',
    measurements: '89-58-90 cm (Rango S)',
    charmRank: 'S',
    status: 'Tía y Tutora Biológica de Chu Benben',
    loyaltyPercentage: 100,
    combatRole: 'Transmisión de Sonido & Protección Familiar',
    factionAffiliation: 'Familia Real de Linuo',
    firstAppearanceChapter: 130,
    description: 'Tía amorosa de Chu Benben. Inicialmente tuvo malentendidos sobre las intenciones de Linuo, pero al comprobar cómo trataba a Benben como a una verdadera princesa, juró gratitud y lealtad eterna.',
    awakenedAbility: {
      name: 'Transmisión Sonora Privada & Velo de Resguardo',
      level: 4,
      element: 'Sonido & Vínculo',
      synergyWithLinuo: 'Facilita la comunicación cifrada con Zou Chuchu y Linuo.',
      description: 'Envía mensajes acústicos invisibles directamente al oído de sus aliados.',
      skillTree: [
        { level: 1, name: 'Susurro Mental', description: 'Transmite voz a 1 kilómetro sin eco.', unlockedAtChapter: 130 }
      ]
    },
    systemItemGiven: 'Medallón de Jade de la Familia Protectora',
    loreHighlights: [
      'Cap. 130-135: Zou Chuchu aclara los malentendidos en la mente de Wen Yijin, uniendo a toda la familia bajo el techo de Linuo.'
    ]
  },

  // ==========================================
  // 5. ALIADOS CLAVE DE LA NOVELA
  // ==========================================
  {
    id: 'lu-dacheng',
    canonicalName: 'Lu Dacheng (陆大成)',
    originalNamesInText: ['Ludacheng', 'Luda Chen', 'El Oso Lu', 'Tío Lu'],
    category: 'aliado',
    age: 46,
    height: '1.85 m',
    measurements: 'Guerrero Maduro Musculoso',
    charmRank: 'A',
    status: 'Aliado Rescatado del Quinto Piso / Padre de Lu An',
    loyaltyPercentage: 100,
    combatRole: 'Transformación Bestia Nivel 1 (3 min/día)',
    factionAffiliation: 'Base Baoming Sky (Defensa Pesada)',
    firstAppearanceChapter: 35,
    description: 'Sobreviviente de mediana edad que lideraba a un pequeño grupo de familiares en el quinto piso del centro comercial. Puede transformar su cuerpo en una feroz bestia con músculos de acero durante 3 minutos al día. Envenenado y capturado en el Cap. 450, desató la expedición de rescate de Chu Benben.',
    awakenedAbility: {
      name: 'Transformación Bestia Nivel 1',
      level: 3,
      element: 'Fuerza Animal',
      synergyWithLinuo: 'Vanguardia confiable para despejar pasillos estrechos.',
      description: 'Aumenta su masa muscular y garras durante 3 minutos para aplastar zombis.',
      skillTree: [
        { level: 1, name: 'Forma Bestia de 3 Minutos', description: 'Fuerza x5 y piel dura contra mordiscos.', unlockedAtChapter: 35 }
      ]
    },
    systemItemGiven: 'Hacha de Asedio de Tungsteno & Hombreras de Cuero Blindado',
    loreHighlights: [
      'Cap. 35: Da un paso al frente para presentarse con respeto a Linuo junto a su hijo Lu An y Fang Jin.',
      'Cap. 451: Rescatado por la legión de Chu Benben tras haber sido envenenado por fuerzas enemigas.'
    ]
  },
  {
    id: 'lu-an',
    canonicalName: 'Lu An (陆安)',
    originalNamesInText: ['Luan', 'Lu An', 'Joven Lu'],
    category: 'aliado',
    age: 22,
    height: '1.78 m',
    measurements: 'Joven Ágil',
    charmRank: 'A',
    status: 'Hijo de Lu Dacheng / Guardia de Patrulla',
    loyaltyPercentage: 100,
    combatRole: 'Tempestad Furiosa Nivel 1 & Ráfagas de Viento',
    factionAffiliation: 'Base Baoming Sky (Patrulla Exterior)',
    firstAppearanceChapter: 35,
    description: 'Joven de 22 años con la habilidad de generar ráfagas repentinas de viento fuerte para dispersar o derribar a grupos de zombis en corredores cerrados.',
    awakenedAbility: {
      name: 'Tempestad Furiosa Nivel 1',
      level: 3,
      element: 'Viento',
      synergyWithLinuo: 'Despeja nieblas venenosas y humo de incendios.',
      description: 'Genera corrientes de aire de 80 km/h con sus brazos.',
      skillTree: [
        { level: 1, name: 'Ráfaga de Viento Repentina', description: 'Derriba zombis comunes a 10 metros.', unlockedAtChapter: 35 }
      ]
    },
    systemItemGiven: 'Ballesta Ligera de Repetición & Botas de Viento',
    loreHighlights: [
      'Cap. 35: Integrado formalmente al equipo de exploración de Linuo.'
    ]
  },
  {
    id: 'fang-ye',
    canonicalName: 'Fang Ye (方野)',
    originalNamesInText: ['Fan Y', 'Fang Ye', 'Veloz Fang'],
    category: 'aliado',
    age: 21,
    height: '1.75 m',
    measurements: 'Corredor Veloz',
    charmRank: 'A',
    status: 'Sobrino de Fang Jin / Mensajero Ultrarrápido',
    loyaltyPercentage: 100,
    combatRole: 'Veloz como el Viento Nivel 1 (Agilidad 20)',
    factionAffiliation: 'Base Baoming Sky (Mensajería Rápida)',
    firstAppearanceChapter: 35,
    description: 'Sobrino de 21 años de la señora Fang Jin. Despertó una velocidad de movimiento extraordinaria equivalente a Agilidad 20 de Linuo, lo que le permite entregar mensajes y suministros entre puestos en segundos.',
    awakenedAbility: {
      name: 'Veloz como el Viento Nivel 1',
      level: 4,
      element: 'Agilidad Pura',
      synergyWithLinuo: 'Evacua heridos a velocidad de vértigo.',
      description: 'Corre a más de 60 km/h en sprint sin perder el equilibrio.',
      skillTree: [
        { level: 1, name: 'Paso Veloz', description: 'Sprint supersónico de corta distancia.', unlockedAtChapter: 35 }
      ]
    },
    systemItemGiven: 'Zapatillas de Aleación de Titanio & Cantimplora de Qi',
    loreHighlights: [
      'Cap. 35: Escaneado con Clarividencia por Linuo en el quinto piso del centro comercial.'
    ]
  },
  {
    id: 'lei-jintian',
    canonicalName: 'Lei Jin Tian / Capitán Trueno (雷金天)',
    originalNamesInText: ['Lei Jin Tian', 'Leijing Tian', 'Capitán Trueno', 'Dios del Trueno'],
    category: 'aliado',
    age: 35,
    height: '1.88 m',
    measurements: 'Fuerza de Trueno Descomunal',
    charmRank: 'A',
    status: 'Líder del Thunder God Squad / Protector de Chubenben',
    loyaltyPercentage: 100,
    combatRole: 'Técnica Killin de Relámpagos & Guardia del Cuartel General',
    factionAffiliation: 'Thunder God Squad / Base Baoming Sky',
    firstAppearanceChapter: 380,
    description: 'Comandante supremo del escuadrón "Dios del Trueno". Posee un poder eléctrico devastador con el que invoca la técnica Killin de relámpagos. Linuo le confió la protección del cuartel general para cuidar de Chu Benben.',
    awakenedAbility: {
      name: 'Técnica Sagrada del Trueno Killin',
      level: 7,
      element: 'Relámpago Puro',
      synergyWithLinuo: 'Guardián inamovible de Chu Benben cuando Linuo marcha a campañas exteriores.',
      description: 'Desciende rayos masivos desde las nubes que carbonizan divisiones acorazadas.',
      skillTree: [
        { level: 1, name: 'Lanza Eléctrica', description: 'Dispara arcos de 50,000 voltios.', unlockedAtChapter: 380 },
        { level: 7, name: 'Killin del Trueno Celestial', description: 'Relámpago en forma de dragón que calcina 1 km².', unlockedAtChapter: 450 }
      ]
    },
    systemItemGiven: 'Guanteletes de Relámpago Cósmico & Armadura de Trueno',
    loreHighlights: [
      'Cap. 380: Lucha junto al Mono Flaco y Fat Pig defendiendo los convoyes de alimentos hacia las fuerzas aliadas.',
      'Cap. 450: Asume la defensa de Chu Benben en el cuartel general con honor inquebrantable.'
    ]
  },
  {
    id: 'mono-flaco',
    canonicalName: 'Mono Flaco / Skinny Monkey (瘦猴)',
    originalNamesInText: ['Mono Flaco', 'Skinny Monkey', 'Mono Delgado'],
    category: 'aliado',
    age: 28,
    height: '1.74 m',
    measurements: 'Guerrero Fibrado Ágil',
    charmRank: 'A',
    status: 'Miembro del Thunder God Squad / Asesino Letal',
    loyaltyPercentage: 100,
    combatRole: 'Garras de Perforación Cardíaca & Velocidad Extrema',
    factionAffiliation: 'Thunder God Squad / Base Baoming Sky',
    firstAppearanceChapter: 380,
    description: 'Guerrero ágil del Thunder God Squad que no tolera insultos hacia su capitán ni hacia la pequeña Chu Benben. En combate singular atravesó el pecho de Ols de un solo zarpazo arrancándole el corazón.',
    awakenedAbility: {
      name: 'Garra de Perforación Letal',
      level: 5,
      element: 'Cinética Cortante',
      synergyWithLinuo: 'Elimina líderes de pelotón en fracciones de segundo.',
      description: 'Atraviesa blindajes corporales con la punta de sus dedos endurecidos.',
      skillTree: [
        { level: 1, name: 'Zarpazo Relámpago', description: 'Ataque fulminante al corazón.', unlockedAtChapter: 380 }
      ]
    },
    systemItemGiven: 'Garras de Acero de Meteorito',
    loreHighlights: [
      'Cap. 380: Responde a los ánimos de Chu Benben aniquilando a su rival Ols de un solo golpe.'
    ]
  },
  {
    id: 'cerdo-gordo',
    canonicalName: 'Fat Pig / Gordo (肥猪)',
    originalNamesInText: ['Fat Pig', 'Gordo', 'Guerrero Gordo'],
    category: 'aliado',
    age: 32,
    height: '1.82 m',
    measurements: 'Tanque Humano Voluminoso',
    charmRank: 'A',
    status: 'Miembro del Thunder God Squad / Tanque Pesado',
    loyaltyPercentage: 100,
    combatRole: 'Absorción de Daño & Muralla Humana',
    factionAffiliation: 'Thunder God Squad / Base Baoming Sky',
    firstAppearanceChapter: 380,
    description: 'Combatiente de gran masa corporal y sentido del humor bonachón del Thunder God Squad. Hace bromas con el Mono Flaco sobre las técnicas de su capitán mientras absorbe el fuego de ametralladoras.',
    awakenedAbility: {
      name: 'Capa Adiposa de Absorción Cinética',
      level: 5,
      element: 'Tierra & Resistencia',
      synergyWithLinuo: 'Protege las líneas traseras de arqueras y sanadoras.',
      description: 'Absorbe explosiones de granadas y morteros sin sufrir daño interno.',
      skillTree: [
        { level: 1, name: 'Escudo de Grasa Endurecida', description: 'Rebota proyectiles de 12.7mm.', unlockedAtChapter: 380 }
      ]
    },
    systemItemGiven: 'Escudo Torre de Tungsteno',
    loreHighlights: [
      'Cap. 380: Bromea junto al Mono Flaco sobre el nombre Killin mientras protegen a la tropa.'
    ]
  },
  {
    id: 'pepper',
    canonicalName: 'Pepper (佩珀)',
    originalNamesInText: ['Pepper', 'Chica de Armadura', 'Piloto Pepper'],
    category: 'aliado',
    age: 24,
    height: '1.72 m',
    measurements: '88-58-90 cm (Piloto de Élite)',
    charmRank: 'S',
    status: 'Piloto de Exoarmadura de Combate / Aliada Internacional',
    loyaltyPercentage: 85,
    combatRole: 'Vuelo Propulsado por Plasma & Misiles Guiados',
    factionAffiliation: 'Fuerzas Tecnológicas Aliadas / Baoming Sky',
    firstAppearanceChapter: 395,
    description: 'Chica piloto extranjera con armadura mecanizada de combate avanzada que habla chino mediante el traductor de su traje. Fue salvada por Chu Benben y Lin Ruier, a quienes llamó "pequeñas hadas milagrosas".',
    awakenedAbility: {
      name: 'Sincronización Neural con Exoarmadura',
      level: 5,
      element: 'Tecnología & Plasma',
      synergyWithLinuo: 'Aporta superioridad aérea y bombardeo de precisión.',
      description: 'Dispara haces de plasma térmico y despliega micro-misiles inteligentes.',
      skillTree: [
        { level: 1, name: 'Propulsión de Vuelo', description: 'Vuelo a 400 km/h con estabilizadores.', unlockedAtChapter: 395 }
      ]
    },
    systemItemGiven: 'Núcleo de Fusión Fría en Miniatura',
    loreHighlights: [
      'Cap. 395: Asombrada al ver a Chu Benben y Lin Ruier derrotar monstruos gigantes como si fueran juguetes.'
    ]
  },

  // ==========================================
  // 6. LÍDERES DE BASES Y RIVALES DEL TEXTO
  // ==========================================
  {
    id: 'lei-tian',
    canonicalName: 'Lei Tian (雷天)',
    originalNamesInText: ['Leitian', 'Lei Tian', 'Comandante Lei Tian'],
    category: 'lider_base',
    age: 38,
    height: '1.84 m',
    measurements: 'Militar Ambicioso',
    charmRank: 'A',
    status: 'Líder de la Base Yantian / Rival Ingenuo de Linuo',
    loyaltyPercentage: 60,
    combatRole: 'Combate Militar & Armas Pesadas',
    factionAffiliation: 'Base Yantian',
    firstAppearanceChapter: 110,
    description: 'Líder de la vecina base Yantian. Creía erróneamente que Linuo era solo un ser evolucionado de nivel cinco y planeó atacar al rey zombi del lago Xiao Yanyan para subir a nivel cinco y dejar de temerle, desatando las risas de Linuo y Zou Chuchu.',
    awakenedAbility: {
      name: 'Fuerza de Trueno & Blindaje Táctico',
      level: 4,
      element: 'Rayo & Táctica',
      synergyWithLinuo: 'Aceptó subordinarse tras comprobar la superioridad de Linuo.',
      description: 'Carga balas con chispas de alto voltaje y lidera tropas blindadas.',
      skillTree: [
        { level: 1, name: 'Disparo de Trueno', description: 'Balas electrificadas.', unlockedAtChapter: 112 }
      ]
    },
    systemItemGiven: 'Ninguno',
    loreHighlights: [
      'Cap. 110-115: Planeó cazar al rey zombi del lago; Zou Chuchu leyó su mente y Linuo se burló de su ingenuidad.'
    ]
  },
  {
    id: 'leon-dorado',
    canonicalName: 'El León Dorado (金狮)',
    originalNamesInText: ['El León Dorado', 'Jishi', 'Rey León'],
    category: 'lider_enemigo',
    age: 42,
    height: '1.95 m',
    measurements: 'Oro Macizo Impenetrable',
    charmRank: 'A',
    status: 'Líder Tirano de la Base del León Dorado (Sometido)',
    loyaltyPercentage: 40,
    combatRole: 'Transmutación en Oro Macizo & Puñetazo Pesado',
    factionAffiliation: 'Base del León Dorado',
    firstAppearanceChapter: 80,
    description: 'Tirano despiadado cuya habilidad especial le permitía convertir todo su cuerpo en oro macizo, rebotando balas, proyectiles de agua de Yuang y bolas de fuego de Wobao con sonidos metálicos.',
    awakenedAbility: {
      name: 'Transmutación en Oro Macizo & Golpe Áureo',
      level: 5,
      element: 'Metal Oro',
      synergyWithLinuo: 'Sometido tras quebrarse su oro ante el Dominio de Linuo.',
      description: 'Piel metálica invulnerable a proyectiles convencionales y calor.',
      skillTree: [
        { level: 1, name: 'Piel de Oro', description: 'Rebota agua y fuego sin inmutarse.', unlockedAtChapter: 80 }
      ]
    },
    systemItemGiven: 'Ninguno',
    loreHighlights: [
      'Cap. 80-85: Resistió el asedio de Yuang y Wobao antes de ser derrotado por Linuo.'
    ]
  },

  // ==========================================
  // 7. CONSEJO OSCURO Y ALIENÍGENAS
  // ==========================================
  {
    id: 'jackman',
    canonicalName: 'Jackman / Yakeman (贾克曼)',
    originalNamesInText: ['Jackman', 'Yakeman', 'Jackson', 'El Falso Dios'],
    category: 'consejo_oscuro',
    age: 50,
    height: '1.90 m',
    measurements: 'Aura de Tirano Occidental',
    charmRank: 'A',
    status: 'Líder del Parlamento Oscuro (Decapitado en el Cap. 503)',
    loyaltyPercentage: 0,
    combatRole: 'Manipulación de Agujeros Negros & Rayo Destructor',
    factionAffiliation: 'El Parlamento Oscuro / Consejo Oscuro',
    firstAppearanceChapter: 450,
    description: 'El líder del Parlamento Oscuro que pactó con los extraterrestres y se proclamó como un dios todopoderoso. En el Cap. 503 ("Linou contra Jackman"), fue decapitado e incinerado por Linuo en combate singular.',
    awakenedAbility: {
      name: 'Agujero Negro Aterrador & Fuerza Gravitacional',
      level: 8,
      element: 'Oscuridad & Gravedad Extrema',
      synergyWithLinuo: 'Enemigo final terrestre de Linuo.',
      description: 'Absorbe ataques luminosos y desata vórtices destructivos.',
      skillTree: [
        { level: 1, name: 'Vórtice Oscuro', description: 'Succiona materia.', unlockedAtChapter: 450 }
      ]
    },
    systemItemGiven: 'Ninguno',
    loreHighlights: [
      'Cap. 503: Enfrenta a Linuo en el duelo de líderes y es aniquilado sin piedad.'
    ]
  },
  {
    id: 'arcangel-casia',
    canonicalName: 'Arcángel Casia / Jaluo (卡西亚 / 伽罗)',
    originalNamesInText: ['Casia', 'Jasa', 'Jaluo', 'El Ángel de 8 Alas'],
    category: 'alienigena',
    age: 1200,
    height: '2.40 m',
    measurements: 'Raza Angélica de 8 Alas Radiantes',
    charmRank: 'A',
    status: 'Comisionado del Comité Interestelar (Alas Asadas en Barbacoa)',
    loyaltyPercentage: 0,
    combatRole: 'Luz Sagrada Purificadora & Espada Estelar',
    factionAffiliation: 'Comité de Supervisión Interestelar / Raza Angélica',
    firstAppearanceChapter: 495,
    description: 'Guerrero de la raza angélica interestelar con alas de plumas luminosas que llegó a la Tierra despreciando a la raza humana como "primitiva y atrasada". En el Cap. 519 ("Habla de alas asadas"), Linuo le arrancó las 8 alas con el Dominio Soberano y las asó a la parrilla para alimentar a su harem.',
    awakenedAbility: {
      name: 'Luz Sagrada Imperial & Vuelo de 8 Alas',
      level: 8,
      element: 'Luz Cósmica',
      synergyWithLinuo: 'Sus alas cocinadas otorgaron 20 puntos de regeneración permanente a la familia.',
      description: 'Desata rayos de luz divina y cortes de espada sagrada que atraviesan atmósferas.',
      skillTree: [
        { level: 1, name: 'Corte de Luz Sagrada', description: 'Tajo celestial de fotones.', unlockedAtChapter: 495 }
      ]
    },
    systemItemGiven: 'Ninguno (Botín: 8 Alas Asadas en Barbacoa en el Cap. 519)',
    loreHighlights: [
      'Cap. 519: Es derrotado por Linuo y sus 8 alas son cocinadas en una gran barbacoa familiar celebrada en la base Baoming Sky.',
      'Cap. 523: El Torneo de Jóvenes Galáctico confirma a Lin Nuo (Linjaor) como el campeón supremo de la raza humana.'
    ]
  },
  {
    id: 'gorsula-raza',
    canonicalName: 'Heraldo Gorsula / Tribu Gusura (高斯星族)',
    originalNamesInText: ['Gorsula', 'Gusura', 'Gouzula', 'Tribu Gurzla'],
    category: 'alienigena',
    age: 3000,
    height: '2.50 m',
    measurements: 'Bio-Mecánica Verde Escamosa',
    charmRank: 'A',
    status: 'Invasores Planetarios (Erradicados en el Frente de Ultramar)',
    loyaltyPercentage: 0,
    combatRole: 'Siembra de Virus Zombi & Cañones de Plasma',
    factionAffiliation: 'Flota Estelar Invasora Gorsula',
    firstAppearanceChapter: 350,
    description: 'Raza extraterrestre de piel verde escamosa que esparció el meteorito con el virus zombi en la Tierra para cosechar mutantes de alto rango como combustible biológico para sus motores de curvatura.',
    awakenedAbility: {
      name: 'Siembra Viral & Escudo de Plasma Cósmico',
      level: 8,
      element: 'Virus Cósmico & Plasma',
      synergyWithLinuo: 'Enemigo intergaláctico de toda la humanidad.',
      description: 'Esparce esporas que alteran el ADN celular de planetas enteros.',
      skillTree: [
        { level: 1, name: 'Nube de Esporas', description: 'Infección masiva aérea.', unlockedAtChapter: 350 }
      ]
    },
    systemItemGiven: 'Ninguno',
    loreHighlights: [
      'Cap. 350-520: Su flota principal es barrida por Linuo y las fuerzas aliadas humanas.'
    ]
  }
];
