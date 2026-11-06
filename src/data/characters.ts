import { Character } from '../types/novel';

export const NOVEL_CHARACTERS: Character[] = [
  {
    id: 'char-linuo',
    originalNamesInText: ['Lin Yao', 'Lino', 'Linu', 'Wus Chan', 'Hiroshima Tomaro'],
    canonicalName: 'Linuo',
    alias: 'Soberano de la Alianza Zatian',
    category: 'aliado',
    age: 25,
    height: '185 cm',
    charmRank: 'SSS',
    status: 'Activo (Soberano del Espacio-Tiempo Nivel 11)',
    offspringCount: 14,
    awakenedAbility: {
      name: 'Soberano Master Core',
      level: 10,
      description: 'Fusión de manipulación de grietas espaciales, saltos de vacío, inmovilización cuántica y motor de energía intrínseca.'
    },
    description: 'Protagonista de la novela web. Tras ser absorbido por un agujero negro, regresa para unificar el submundo global.',
    loreHighlights: ['Desvió un castigo místico destruyendo la flota del Rey Aels.', 'Consolidó el Consejo Oscuro bajo vasallaje.']
  },
  {
    id: 'char-shui-nian',
    originalNamesInText: ['Suinyan', 'Swinyan', 'Sinyan', 'Xiaoyan'],
    canonicalName: 'Shui Nian',
    alias: 'Reina de los Muertos / Sinyan',
    category: 'esposa_zombie',
    charmRank: 'S',
    status: 'Activa (Doncella Dragón Humana Restaurada)',
    offspringCount: 0,
    awakenedAbility: {
      name: 'Columna de Sangre del Cielo Ardiente',
      level: 9,
      description: 'Mutación biológica que le otorga garras moleculares y dominación mística sobre 100 millones de reyes esqueleto.'
    },
    description: 'Líder de las facciones zombie de Linuo, secuestrada por el clan Mitsui en Osaka y devuelta a la vida en Zongan.',
    loreHighlights: ['Recuperó su alma biológica humana.', 'Alcanzó el nivel 9 devorando cristales masivos de energía.']
  }
];
