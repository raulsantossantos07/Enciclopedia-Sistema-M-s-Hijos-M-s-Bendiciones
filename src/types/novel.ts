export type CharacterCategory = 
  | 'protagonista'
  | 'esposa_humana' 
  | 'esposa_zombie' 
  | 'ninia_protegida' 
  | 'aliado' 
  | 'consejo_oscuro'
  | 'lider_enemigo'
  | 'lider_base'
  | 'alienigena';

export type NavTab = 
  | 'overview' 
  | 'characters' 
  | 'system-skills' 
  | 'chapters' 
  | 'factions-lore' 
  | 'corrections' 
  | 'simulator';

export interface AbilityBranchNode {
  level: number;
  name: string;
  description: string;
  unlockedAtChapter?: number;
  cooldownOrCost?: string;
  specialEffect?: string;
}

export interface AwakenedAbility {
  name: string;
  level: number | string;
  description: string;
  element?: string;
  skillTree?: AbilityBranchNode[];
  synergyWithLinuo?: string;
}

export interface Character {
  id: string;
  canonicalName: string;
  originalNamesInText: string[];
  category: CharacterCategory;
  age?: number;
  height?: string;
  measurements?: string;
  charmRank?: 'S' | 'A' | 'SS' | 'SSS' | string;
  status: string;
  loyaltyPercentage?: number;
  awakenedAbility: AwakenedAbility;
  systemItemGiven?: string;
  description: string;
  firstAppearanceChapter: number;
  becameWifeChapter?: number;
  loreHighlights?: string[];
  combatRole?: string;
  factionAffiliation?: string;
}

export interface StoryArc {
  id: string;
  number: number;
  title: string;
  chapterRange: string;
  summary?: string;
  keyEvents?: string[];
  majorBattles?: string[];
  newAlliesOrWives?: string[];
  significance?: string;
}

export interface ChapterSummary {
  chapter: number;
  title: string;
  arcId: string;
  summary: string;
  keyEvents: string[];
  charactersIntroduced: string[];
  linuoGrowth: string;
}

export interface NameCorrection {
  rawTranscriptTerm: string;
  correctedCanonicalName: string;
  role: string;
  explanation: string;
  frequencyNote?: string;
}

export interface Faction {
  id: string;
  name: string;
  leader: string;
  status: string;
  location: string;
  powerLevel: string;
  description: string;
  destiny: string;
}

export interface SecretLore {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  fullExplanation: string[];
  keyChapters: (number | string)[];
}

export interface SkillLevelEvolution {
  level: number;
  description: string;
  unlockedAtChapter?: number;
  keyChanges?: string;
}

export interface SystemSkill {
  id: string;
  name: string;
  currentLevel: number;
  type: 'activa' | 'pasiva' | string;
  category: 'combate' | 'dominio' | 'percepcion' | 'supervivencia' | 'movilidad' | string;
  levels: SkillLevelEvolution[];
}

export interface StatSnapshot {
  chapter: number;
  milestoneTitle: string;
  fuerza: number;
  defensa: number;
  agilidad: number;
  poderEspiritual: number;
  carisma: number;
  puntosHabilidad: number;
  contextNote: string;
}

export interface SystemItem {
  name: string;
  unlockedAtChapter: number;
  description: string;
  holder: string;
  tier: string;
}
