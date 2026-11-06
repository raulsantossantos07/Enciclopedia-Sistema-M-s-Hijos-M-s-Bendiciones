import React from 'react';
import { 
  BookOpen, 
  Users, 
  Zap, 
  Layers, 
  ShieldAlert, 
  SpellCheck, 
  Sparkles,
  Search,
  Flame,
  Award
} from 'lucide-react';

export type NavTab = 
  | 'overview' 
  | 'characters' 
  | 'system-skills' 
  | 'chapters' 
  | 'factions-lore' 
  | 'corrections' 
  | 'simulator';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalWives: number;
  totalChapters: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  totalWives,
  totalChapters
}) => {
  const tabs: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'Sinopsis & Trama', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'characters', label: 'Harem & Personajes', icon: <Users className="w-4 h-4" />, badge: `${totalWives}` },
    { id: 'system-skills', label: 'Sistema & Habilidades', icon: <Zap className="w-4 h-4" />, badge: 'Lv. 8' },
    { id: 'chapters', label: 'Crónica de Capítulos', icon: <Layers className="w-4 h-4" />, badge: `${totalChapters}` },
    { id: 'factions-lore', label: 'Facciones & Alienígenas', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'corrections', label: 'Corrección de Nombres', icon: <SpellCheck className="w-4 h-4" />, badge: 'Fix' },
    { id: 'simulator', label: 'Simulador de Ruleta', icon: <Sparkles className="w-4 h-4 text-amber-400" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-2xl">
      {/* Top Banner with Story Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-2 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-black text-xl">
            多
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                Sistema de Más Hijos, Más Bendiciones
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Compendio Maestro Oficial
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span>De día salvo humanos, de noche lidero zombies</span>
              <span className="text-slate-600">•</span>
              <span className="text-rose-400 font-medium">Guía Corregida & Enciclopedia Total</span>
            </p>
          </div>
        </div>

        {/* Global Search and Highlights */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar personaje, habilidad, base..."
              className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>N°1 Mundial</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1 text-rose-400 font-medium">
              <Flame className="w-3.5 h-3.5" />
              <span>{totalWives} Esposas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 overflow-x-auto scrollbar-none py-1.5 flex gap-1 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? 'bg-slate-950/20 text-slate-950'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
