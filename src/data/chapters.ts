import { StoryArc, ChapterSummary } from '../types/novel';

export const STORY_ARCS: StoryArc[] = [
  {
    id: 'arc-1',
    number: 1,
    title: 'El Centro Comercial de Zongan & Despertar del Sistema',
    chapterRange: 'Cap. 1 - 54',
    summary: 'Lin Nuo despierta el Sistema con Wu Suyan en la boutique de trajes, rescata a Yu Xin y Yu Qian, doma a la Reina Zombi Shui Nian y extermina 6.000 zombis en la plaza.',
    keyEvents: ['Activación en el probador', 'Domesticación de Shui Nian con carne wagyu', 'Holocausto Ígneo de 6.000 zombis'],
    majorBattles: ['Asedio a la Boutique', 'Batalla del Piso 6 con Liu Yan'],
    newAlliesOrWives: ['Wu Suyan', 'Yu Xin', 'Yu Qian', 'Shui Nian', 'Liu Yan', 'Chu Benben'],
    significance: 'Fundación del modus operandi de Lin Nuo: salvador humano de día, emperador zombi de noche.'
  },
  {
    id: 'arc-2',
    number: 2,
    title: 'Asentamiento en Binhu Garden & Nacimiento de Diao Zatian',
    chapterRange: 'Cap. 55 - 85',
    summary: 'Ocupación de la villa de lujo de Zou Chuchu, sometimiento de la Base Zorro Rojo y fundación oficial de la Base Diao Zatian. Embarazos de Wu Suyan y Fang Jin.',
    keyEvents: ['Fundación de Diao Zatian', 'Sometimiento de Chen Honghu', 'Embarazos confirmados'],
    majorBattles: ['Toma de Binhu Garden', 'Purga de los mutantes lamedores'],
    newAlliesOrWives: ['Zou Chuchu', 'Fang Jin', 'Chen Honghu', 'Li Xiaoxin'],
    significance: 'Creación de la fortaleza inexpugnable y primera tirada de Ruleta Diamante.'
  },
  {
    id: 'arc-3',
    number: 3,
    title: 'La Purga de los Tiranos Distritales',
    chapterRange: 'Cap. 86 - 135',
    summary: 'Huang Xiao es ejecutado arrojando sus 100 cadáveres desde el cielo. Lei Tian es destripado por Shui Nian tras acosar a Chu Benben. Asimilación de la Base Ba Wang.',
    keyEvents: ['Ejecución aérea de Huang Xiao', 'Maldición de Benben a Lei Tian', 'Rescate de Qian Youran'],
    majorBattles: ['Guerra de los Tres Tiranos', 'Asalto a los búnkeres de Naga'],
    newAlliesOrWives: ['Qian Youran', 'Wen Yijing'],
    significance: 'Consolidación de Lin Nuo como señor indiscutible de toda la metrópoli.'
  },
  {
    id: 'arc-4',
    number: 4,
    title: 'Choque de Titanes & La Palma Dorada Rulai',
    chapterRange: 'Cap. 136 - 185',
    summary: 'Lin Nuo compra a Yu Qianqian en la subasta oficial, vence a la feminista Ning Fanglan con la Palma Dorada Rulai (cráter de 50 metros) y aniquila al Rey de Sangre Tie Yunfan.',
    keyEvents: ['Subasta de usuarios despiertos', 'Palma Dorada Rulai en Yipiantian', 'Muerte de Tie Yunfan'],
    majorBattles: ['Asalto al Complejo Yipiantian', 'Batalla del Río de Sangre'],
    newAlliesOrWives: ['Wei Yuxuan', 'Wang Jialin'],
    significance: 'Revelación de que Ning Fanglan era títere de espías extraterrestres.'
  },
  {
    id: 'arc-5',
    number: 5,
    title: 'La Horda de 300,000 Zombies & El Agujero Negro',
    chapterRange: 'Cap. 186 - 217',
    summary: 'Lin Nuo extermina 300.000 zombis al ritmo de canciones infantiles con flechas mentales. Asalta la sede de los alienígenas Gusila y pelea contra el Cardenal Bufan, cayendo en un agujero negro hacia Sichuan.',
    keyEvents: ['Masacre con flechas divinas', 'Decapitación de Bufan', 'Caída por la grieta espacial'],
    majorBattles: ['Defensa de los 300.000 zombis', 'Duelo contra el Cardenal Bufan'],
    newAlliesOrWives: ['Su Jiajia'],
    significance: 'Destrucción de la base central alienígena en Rongcheng y salto espacial a Sichuan.'
  },
  {
    id: 'arc-6',
    number: 6,
    title: 'Éxodo en Sichuan, Clan Bufeng & Rebelión en Chengdu',
    chapterRange: 'Cap. 218 - 270',
    summary: 'Lin Nuo es sanado por Su Jiajia, resucita el alma de Ah Guayi, evacua a la tribu en la Balsa Cápsula y desmantela la sede provincial alienígena en Chengdu haciendo suicidarse a 10.000 mayordomos en vivo.',
    keyEvents: ['Rito de Retorno de Alma con Ah Guayi', 'Despliegue de la Balsa Cápsula', 'Suicidio televisado de los parásitos alienígenas'],
    majorBattles: ['Guerra del Templo Bufeng', 'Purga del Coliseo de Chengdu'],
    newAlliesOrWives: ['Ah Guayi', 'Su Jiajia'],
    significance: 'Liberación de todo el centro de China y proclamación de la rebelión global humana.'
  },
  {
    id: 'arc-7',
    number: 7,
    title: 'Expedición a Osaka & Campaña de Corea del Sur',
    chapterRange: 'Cap. 271 - 385',
    summary: 'Lin Nuo rescata a Suiyan en Japón devolviéndole su cuerpo humano y adopta a Watanabe Shizuka (Kendo Grulla). En Seúl aniquila el sádico Clan Lee y rescata a Yin Xiao\'an (Spider-Girl).',
    keyEvents: ['Rescate y bautismo cósmico de Suiyan', 'Shizuka se convierte en doncella francesa Nivel 9', 'Destrucción del Juego del Calamar Zombi'],
    majorBattles: ['Asalto a la Torre Mitsui en Osaka', 'Purga del Coliseo del Calamar en Gangnam'],
    newAlliesOrWives: ['Watanabe Shizuka', 'Yin Xiao\'an'],
    significance: 'Sometimiento de Japón y Corea del Sur bajo la bandera de Diao Zatian.'
  },
  {
    id: 'arc-8',
    number: 8,
    title: 'Guerra Cósmica, Caída de Casia & Epílogo de 16 Años',
    chapterRange: 'Cap. 386 - 528',
    summary: 'Lin Nuo pulveriza al Rey Gusila Aicers en la Luna, decapita al Ángel Casia del Comité Interestelar asando sus 8 alas, asciende a Nivel 14 Ley Absoluta, crea el Cultivo Excavador y corona su dinastía con 1.032 hijos.',
    keyEvents: ['Lanza del Caos sobre la Luna', 'Barbacoa de las 8 alas de Casia', 'Método de Cultivo Excavador en Cap. 526', 'Epílogo de 16 años y escena del taburete'],
    majorBattles: ['Guerra Espacial de la Luna', 'Juicio Cósmico contra el Comité Interestelar'],
    newAlliesOrWives: ['Gu Xiaolian', 'Lin Ziwei', 'Yin Miaoyi', 'Lin Chenxi (Heredero)'],
    significance: 'Clímax definitivo, abolición universal de la esclavitud y paz eterna en la Tierra.'
  }
];

export const KEY_CHAPTER_SUMMARIES: ChapterSummary[] = [
  {
    chapter: 1,
    title: 'El Despertar en la Boutique & Wu Suyan',
    arcId: 'arc-1',
    summary: 'Lin Nuo mata a Xiao Juan en el piso 5 del centro comercial de Zongan y se refugia en la boutique de ropa masculina con Wu Suyan. Tras un momento de pasión en el probador, despierta el místico Sistema de Más Hijos.',
    keyEvents: ['Muerte de Xiao Juan', 'Primera consumación con Wu Suyan', 'Activación del Sistema Duozi Duofu'],
    charactersIntroduced: ['Lin Nuo', 'Wu Suyan'],
    linuoGrowth: 'Obtiene Almacén Espacial de 10.000 m³, Fuerza x10 y Poción de Regeneración Celular.'
  },
  {
    chapter: 12,
    title: 'Doma de Shui Nian: La Primera Reina Zombi',
    arcId: 'arc-1',
    summary: 'Lin Nuo descubre a Shui Nian en el sótano del centro comercial. En vez de ejecutarla, la alimenta con cortes finos de carne wagyu y energía limpia, ganándose su lealtad absoluta como Emperador Zombi.',
    keyEvents: ['Encuentro con Shui Nian de ojos cian', 'Alimentación con cortes wagyu', 'Primer pacto de sangre'],
    charactersIntroduced: ['Shui Nian'],
    linuoGrowth: 'Desbloquea la habilidad de Transformación Zombi y control telepático de hordas.'
  },
  {
    chapter: 25,
    title: 'El Embarazo de Wu Suyan & Chu Benben',
    arcId: 'arc-1',
    summary: 'Se confirma el primer embarazo de Wu Suyan, desatando la primera tirada de Ruleta Diamante del Sistema. En el piso 6 rescatan a la niña Chu Benben, cuyo amuleto bendice la suerte de Lin Nuo.',
    keyEvents: ['Confirmación de embarazo', 'Tirada Diamante', 'Adopción de Chu Benben'],
    charactersIntroduced: ['Chu Benben', 'Liu Yan'],
    linuoGrowth: 'Multiplicador x10 en todos los atributos físicos y Puntos de Habilidad masivos.'
  },
  {
    chapter: 55,
    title: 'Fundación de la Base Diao Zatian en Binhu Garden',
    arcId: 'arc-2',
    summary: 'Lin Nuo ocupa la villa presidencial de Zou Chuchu en Binhu Garden. Somete a Chen Honghu (Zorra Roja) y establece la Base Diao Zatian con murallas, paneles solares y huertos hidropónicos.',
    keyEvents: ['Toma de la villa de Zou Chuchu', 'Rendición de Chen Honghu', 'Bautizo de la Base Diao Zatian'],
    charactersIntroduced: ['Zou Chuchu', 'Chen Honghu', 'Li Xiaoxin'],
    linuoGrowth: 'Fuerza supera los 400 puntos, adquiere Escudo de Plasma Táctico y dominio territorial.'
  },
  {
    chapter: 115,
    title: 'Purga de Huang Xiao & Muerte de Lei Tian',
    arcId: 'arc-3',
    summary: 'Huang Xiao intenta extorsionar a Diao Zatian y Lin Nuo arroja sus 100 cadáveres desde el cielo. Lei Tian acosa a Chu Benben y sufre una maldición que permite a Shui Nian destriparlo.',
    keyEvents: ['Ejecución de Huang Xiao', 'Maldición de Chu Benben', 'Shui Nian sube a Nivel 5 Naranja'],
    charactersIntroduced: ['Huang Xiao', 'Lei Tian', 'Qian Youran'],
    linuoGrowth: 'Gana la técnica de Lectura de Intenciones Asesinas y almacén ampliado a 500.000 m³.'
  },
  {
    chapter: 165,
    title: 'La Palma Dorada Rulai & Caída de Ning Fanglan',
    arcId: 'arc-4',
    summary: 'Lin Nuo aplasta la fortaleza de la fanática Ning Fanglan desplegando la Palma Dorada Rulai, dejando un cráter de 50 metros. Rescata a Wen Yijing y a la arquera Wei Yuxuan.',
    keyEvents: ['Impacto de la Palma Dorada Rulai', 'Muerte de Ning Fanglan', 'Rescate de Wen Yijing'],
    charactersIntroduced: ['Ning Fanglan', 'Wen Yijing', 'Wei Yuxuan'],
    linuoGrowth: 'Ascenso a Nivel 7. Dominio de proyectiles de plasma y Visión Perspicaz.'
  },
  {
    chapter: 210,
    title: 'Batalla de los 300,000 Zombies & Agujero Negro',
    arcId: 'arc-5',
    summary: 'Lin Nuo aniquila en solitario a 300.000 zombis lanzando flechas divinas al compás de música infantil. Asalta la nave pirámide alienígena de Bufan, quien se autodestruye en un agujero negro enviándolo a Sichuan.',
    keyEvents: ['Exterminio de la horda de 300.000', 'Decapitación del Cardenal Bufan', 'Succión por el vórtice espacial'],
    charactersIntroduced: ['Cardenal Bufan', 'Su Jiajia'],
    linuoGrowth: 'Alcanza Nivel 8 Real. Consigue la Balsa de Salvamento en Cápsula y sobrevive al vacío cósmico.'
  },
  {
    chapter: 265,
    title: 'El Suicidio de los 10,000 Alienígenas en Chengdu',
    arcId: 'arc-6',
    summary: 'Lin Nuo se infiltra en la sede provincial como el Obispo Fu Yi, resucita a Ah Guayi con el Rito del Alma y obliga a 10.000 mayordomos alienígenas a suicidarse en vivo ante 100.000 personas.',
    keyEvents: ['Rito de Retorno de Alma', 'Infiltración como Fu Yi', 'Suicidio en masa de los invasores'],
    charactersIntroduced: ['Ah Guayi', 'Jiang Bin'],
    linuoGrowth: 'Domina el control de almas y funda la base "Bomba al Cielo" en el búnker de Jiang Bin.'
  },
  {
    chapter: 310,
    title: 'Osaka: Rescate de Suiyan & Shizuka Watanabe',
    arcId: 'arc-7',
    summary: 'Lin Nuo destruye el Clan Mitsui en Japón para rescatar a Suiyan, devolviéndole su cuerpo humano terso y memoria previa. Watanabe Shizuka jura lealtad al 100% como su doncella francesa espadachina.',
    keyEvents: ['Rescate y des-zombificación de Suiyan', 'Última voluntad de Kumajiro Watanabe', 'Shizuka asciende a Nivel 9'],
    charactersIntroduced: ['Watanabe Shizuka', 'Kumajiro Watanabe'],
    linuoGrowth: 'Shizuka alcanza Nivel 9 de Ley de Espada con 100% de lealtad, otorgando bendición de acero cósmico.'
  },
  {
    chapter: 360,
    title: 'Seúl: El Fin del Clan Lee & Yin Xiao\'an',
    arcId: 'arc-7',
    summary: 'Lin Nuo y Jiang Bin ("primo Livin") destruyen el sádico Juego del Calamar Zombi del Clan Lee. Lin Nuo rescata a Yin Xiao\'an vestida de Spider-Girl y adopta a todos los huérfanos en Diao Zatian.',
    keyEvents: ['Demolición del coliseo subterráneo', 'Rescate de Yin Xiao\'an', 'Liberación de esclavos de Seúl'],
    charactersIntroduced: ['Yin Xiao\'an', 'Lee Chenglu'],
    linuoGrowth: 'Atributos multiplicados x50, asimila la red industrial de Corea del Sur.'
  },
  {
    chapter: 480,
    title: 'Guerra Espacial de la Luna & Muerte del Rey Aicers',
    arcId: 'arc-8',
    summary: 'En la órbita de la Luna, Lin Nuo arroja la Lanza Mágica del Caos y activa el Ojo del Dragón Celestial, destruyendo la nave nodriza del Rey Gusila Aicers en una supernova estelar.',
    keyEvents: ['Batalla orbital sobre la Luna', 'Lanza Mágica del Caos', 'Muerte del falso Dios del Sol Jackman'],
    charactersIntroduced: ['Rey Aicers', 'Jackman', 'Lei Jintian'],
    linuoGrowth: 'Ascenso a Nivel 11 Cósmico. Entrega del Martillo Mjolnir al General Lei Jintian.'
  },
  {
    chapter: 526,
    title: 'Creación del "Método de Cultivo Excavador"',
    arcId: 'arc-8',
    summary: 'Lin Nuo crea el Método de Cultivo Excavador del Potencial Humano y se lo entrega a Lei Jintian para que la humanidad prospere sin depender del virus zombi ni de cazar monstruos.',
    keyEvents: ['Formulación del Método Excavador', 'Entrega del manual a Lei Jintian', 'Inauguración de academias estelares'],
    charactersIntroduced: ['Lei Jintian'],
    linuoGrowth: 'Emancipa a toda la raza humana de la infección biológica.'
  },
  {
    chapter: 528,
    title: 'Epílogo de 16 Años: 1.032 Hijos & El Taburete de la Boutique',
    arcId: 'arc-8',
    summary: '16 años después, Lin Nuo reina con más de 500 esposas y 1.032 hijos guiados por Lin Chenxi (16 años). Lin Nuo regresa con Wu Suyan a la boutique original con el taburete del Capítulo 1: "Señora tendera... ¿sabes lo que tienes que hacer ahora, verdad?".',
    keyEvents: ['Dinastía de 1.032 descendientes Lin', 'Lin Chenxi comanda a sus hermanos', 'Escena romántica final con Wu Suyan'],
    charactersIntroduced: ['Lin Chenxi', 'Lin Rui', 'Chu Benben'],
    linuoGrowth: 'Nivel 14 (Reino de la Ley Absoluta). Paz eterna y amor conyugal infinito.'
  }
];
