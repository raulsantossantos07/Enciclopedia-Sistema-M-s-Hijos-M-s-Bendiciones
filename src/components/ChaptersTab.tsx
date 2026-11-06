import React, { useState, useMemo } from 'react';
import { STORY_ARCS, KEY_CHAPTER_SUMMARIES } from '../data/chapters';
import { ChapterSummary, StoryArc } from '../types/novel';
import { 
  Layers, 
  MapPin, 
  Flame, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ChaptersTabProps {
  searchQuery: string;
}

export const ChaptersTab: React.FC<ChaptersTabProps> = ({ searchQuery: globalSearch }) => {
  const [selectedArcId, setSelectedArcId] = useState<string>('all');
  const [localSearch, setLocalSearch] = useState('');
  const [activeChapter, setActiveChapter] = useState<ChapterSummary | null>(KEY_CHAPTER_SUMMARIES[0]);

  const effectiveSearch = localSearch || globalSearch;

  const filteredChapters = useMemo(() => {
    return KEY_CHAPTER_SUMMARIES.filter(chap => {
      const matchesArc = selectedArcId === 'all' || chap.arcId === selectedArcId;
      const q = effectiveSearch.toLowerCase().trim();
      if (!q) return matchesArc;

      const matchesQuery = 
        chap.chapter.toString().includes(q) ||
        chap.title.toLowerCase().includes(q) ||
        chap.summary.toLowerCase().includes(q) ||
        chap.keyEvents.some(k => k.toLowerCase().includes(q)) ||
        chap.charactersIntroduced.some(c => c.toLowerCase().includes(q));

      return matchesArc && matchesQuery;
    });
  }, [selectedArcId, effectiveSearch]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Arc Selector Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Estructura de la Novela en 8 Grandes Arcos (Cap. 1 al 270)
          </h3>
          <span className="text-xs text-slate-400">
            {filteredChapters.length} capítulos analizados
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          <button
            onClick={() => setSelectedArcId('all')}
            className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
              selectedArcId === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-850 border-slate-800'
            }`}
          >
            <span className="block font-bold">Todos</span>
            <span className="text-[10px] opacity-80">Cap. 1-270</span>
          </button>

          {STORY_ARCS.map(arc => {
            const isSelected = selectedArcId === arc.id;
            return (
              <button
                key={arc.id}
                onClick={() => setSelectedArcId(arc.id)}
                className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-slate-200 border-slate-800'
                }`}
              >
                <span className="block font-bold truncate">Arco {arc.number}</span>
                <span className="text-[10px] opacity-80 block truncate">{arc.chapterRange}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column View: Chapter List + Detailed Chapter Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Chapter Browser */}
        <div className="lg:col-span-5 space-y-2 max-h-[720px] overflow-y-auto pr-1">
          {filteredChapters.map(chap => {
            const isSelected = activeChapter?.chapter === chap.chapter;
            return (
              <div
                key={chap.chapter}
                onClick={() => setActiveChapter(chap)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 text-xs space-y-1.5 ${
                  isSelected
                    ? 'bg-amber-950/30 border-amber-500/50 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-100 flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[11px] font-mono font-bold text-amber-400 shrink-0">
                      {chap.chapter}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[240px]">
                      {chap.title}
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {chap.arcId.replace('arc-', 'Arco ')}
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] line-clamp-2 leading-relaxed">
                  {chap.summary}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {chap.keyEvents.slice(0, 2).map((evt, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-400 border border-slate-800 truncate max-w-[150px]">
                      • {evt}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredChapters.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs">
              No se encontraron capítulos con el filtro actual.
            </div>
          )}
        </div>

        {/* Right Column: Active Chapter Detailed Dossier */}
        <div className="lg:col-span-7">
          {activeChapter ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 sticky top-24 shadow-2xl">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Capítulo {activeChapter.chapter}
                  </span>
                  <span className="text-slate-400 capitalize">
                    {STORY_ARCS.find(a => a.id === activeChapter.arcId)?.title || ''}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-100">
                  {activeChapter.title}
                </h3>
              </div>

              {/* Comprehensive Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Sinopsis del Capítulo
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {activeChapter.summary}
                </p>
              </div>

              {/* Key Events Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Acontecimientos Cruciales
                </h4>
                <div className="space-y-1.5">
                  {activeChapter.keyEvents.map((evt, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Linuo Progression / System Drop */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-1">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Evolución y Ganancia de Linuo en este Capítulo:
                </span>
                <p className="text-slate-300">
                  {activeChapter.linuoGrowth}
                </p>
              </div>

              {/* Characters Introduced / Featured */}
              {activeChapter.charactersIntroduced.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                    Personajes Clave del Capítulo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeChapter.charactersIntroduced.map((charName, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                      >
                        {charName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center text-slate-500 text-sm">
              Selecciona un capítulo para ver el desglose detallado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
