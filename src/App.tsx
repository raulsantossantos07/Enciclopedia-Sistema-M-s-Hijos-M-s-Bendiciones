import React, { useState } from 'react';
import { Header, NavTab } from './components/Header';
import { OverviewTab } from './components/OverviewTab';
import { CharactersTab } from './components/CharactersTab';
import { SystemSkillsTab } from './components/SystemSkillsTab';
import { ChaptersTab } from './components/ChaptersTab';
import { FactionsLoreTab } from './components/FactionsLoreTab';
import { CorrectionsTab } from './components/CorrectionsTab';
import { LotterySimulator } from './components/LotterySimulator';
import { NOVEL_CHARACTERS } from './data/characters';
import { KEY_CHAPTER_SUMMARIES } from './data/chapters';
import { 
  Flame, 
  Heart, 
  Crown, 
  ShieldAlert, 
  Layers, 
  BookOpen, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const totalWives = NOVEL_CHARACTERS.filter(c => c.category === 'esposa_humana' || c.category === 'esposa_zombie').length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Sticky Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalWives={totalWives}
        totalChapters={528}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentTab === 'overview' && (
          <OverviewTab onGoToTab={setCurrentTab} />
        )}

        {currentTab === 'characters' && (
          <CharactersTab searchQuery={searchQuery} />
        )}

        {currentTab === 'system-skills' && (
          <SystemSkillsTab />
        )}

        {currentTab === 'chapters' && (
          <ChaptersTab searchQuery={searchQuery} />
        )}

        {currentTab === 'factions-lore' && (
          <FactionsLoreTab />
        )}

        {currentTab === 'corrections' && (
          <CorrectionsTab />
        )}

        {currentTab === 'simulator' && (
          <LotterySimulator />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 mt-12 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
              多
            </span>
            <span className="text-slate-300 font-semibold">
              Enciclopedia Oficial: Sistema de Más Hijos, Más Bendiciones
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline">Novela Web & Audio Transcript Compendio Completo (Capítulos 1 al 528 & Epílogo)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => setCurrentTab('overview')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Sinopsis
            </button>
            <button 
              onClick={() => setCurrentTab('characters')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Harem
            </button>
            <button 
              onClick={() => setCurrentTab('system-skills')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Habilidades
            </button>
            <button 
              onClick={() => setCurrentTab('corrections')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Corrector
            </button>
            <button 
              onClick={scrollToTop} 
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 transition-all border border-slate-800 cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
