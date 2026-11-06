export type CharacterCategory = 'esposa_humana' | 'esposa_zombie' | 'aliado' | 'enemigo' | 'alienigena' | 'ninia_protegida';

export interface Character {
  id: string;
  originalNamesInText: string[];
  canonicalName: string;
  alias?: string;
  category: CharacterCategory;
  age?: number;
  height?: string;
  measurements?: string;
  charmRank?: 'A' | 'AD' | 'S' | 'SS' | 'SSS';
  loyaltyPercentage?: number;
  status: string;
  offspringCount: number;
  awakenedAbility: {
    name: string;
    level: number;
    description: string;
  };
  description: string;
  loreHighlights: string[];
}

export interface ChapterSummary {
  chapter: number;
  title: string;
  arcId: string;
  summary: string;
  keyEvents: string[];
  linuoGrowth: string;
  charactersIntroduced: string[];
}
