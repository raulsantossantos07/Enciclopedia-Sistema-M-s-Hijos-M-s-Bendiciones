import React, { useState } from 'react';
import { LINUO_SYSTEM_SKILLS, SYSTEM_ITEMS } from '../data/systemSkills';
import { STATS_TIMELINE } from '../data/statsTimeline';
import { SystemSkill, StatSnapshot } from '../types/novel';
import { 
  Zap, 
  Flame, 
  Shield, 
  Eye, 
  Compass, 
  Sparkles, 
  Package, 
  TrendingUp,
  Sliders,
  ChevronRight,
  Award,
  Crown
} from 'lucide-react';

export const SystemSkillsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'combate' | 'percepcion' | 'supervivencia' | 'movilidad' | 'dominio'>('all');
  const [activeSnapshotIndex, setActiveSnapshotIndex] = useState<number>(STATS_TIMELINE.length - 1);
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>('campo-soberano');

  const currentSnapshot: StatSnapshot = STATS_TIMELINE[activeSnapshotIndex];

  const filteredSkills = LINUO_SYSTEM_SKILLS.filter(skill => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Interactive Stat Evolution Simulator */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Evolución de Atributos de Linuo por Capítulos
            </h3>
            <p className="text-xs text-slate-400">
              Desliza la barra para ver las estadísticas exactas de Linuo en cada hito canónico de la novela.
            </p>
          </div>
          <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold self-start sm:self-auto">
            Capítulo {currentSnapshot.chapter}: {currentSnapshot.milestoneTitle}
          </div>
        </div>

        {/* Milestone Slider */}
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={STATS_TIMELINE.length - 1}
            value={activeSnapshotIndex}
            onChange={(e) => setActiveSnapshotIndex(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono overflow-x-auto">
            {STATS_TIMELINE.map((snap, i) => (
              <button
                key={i}
                onClick={() => setActiveSnapshotIndex(i)}
                className={`hover:text-amber-400 transition-colors ${i === activeSnapshotIndex ? 'text-amber-400 font-bold' : ''}`}
              >
                Cap.{snap.chapter}
              </button>
            ))}
          </div>
        </div>

        {/* Live Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-900/90 p-3 rounded-xl border border-rose-900/40 space-y-1">
            <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Fuerza Física
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {currentSnapshot.fuerza.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400">
              {currentSnapshot.fuerza >= 1000 ? 'Multiplicador Titánico' : 'Base de combate'}
            </span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-blue-900/40 space-y-1">
            <span className="text-[11px] font-bold text-blue-400 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Defensa Corpórea
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {currentSnapshot.defensa.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400">
              {currentSnapshot.defensa >= 1000 ? 'Inmune a balas/láser' : 'Resistencia inicial'}
            </span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-emerald-900/40 space-y-1">
            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Agilidad y Esquiva
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {currentSnapshot.agilidad.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400">
              {currentSnapshot.agilidad >= 1000 ? 'Velocidad del rayo' : 'Reflejos normales'}
            </span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-purple-900/40 space-y-1">
            <span className="text-[11px] font-bold text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Poder Espiritual
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {currentSnapshot.poderEspiritual.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400">Control de Dominio</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-amber-900/40 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <Crown className="w-3.5 h-3.5" /> Carisma / Atracción
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {currentSnapshot.carisma}
            </div>
            <span className="text-[10px] text-slate-400">Piel pura sin imperfecciones</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-amber-500/40 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" /> Puntos Habilidad
            </span>
            <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
              {currentSnapshot.puntosHabilidad.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400">Reserva de upgrades</span>
          </div>
        </div>

        {/* Context Note for this snapshot */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
          <span className="text-amber-500 font-bold shrink-0">Nota de Trama:</span>
          <span>{currentSnapshot.contextNote}</span>
        </div>
      </div>

      {/* Skill Tree & Evolution */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Árbol de Habilidades del Sistema de Linuo (Nivel 1 al Nivel 8)
            </h3>
            <p className="text-xs text-slate-400">
              Desglose nivel por nivel de cada habilidad ganada en los sorteos con sus cambios cualitativos.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {(['all', 'combate', 'dominio', 'percepcion', 'supervivencia', 'movilidad'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-2.5 py-1 rounded-md capitalize font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-amber-500 text-slate-950 font-bold' 
                    : 'bg-slate-900 text-slate-400 hover:text-slate-100 border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'Todas' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {filteredSkills.map(skill => {
            const isExpanded = expandedSkillId === skill.id;
            return (
              <div 
                key={skill.id}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0">
                      Lv.{skill.currentLevel}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                        {skill.name}
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold uppercase ${
                          skill.type === 'pasiva' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
                        }`}>
                          {skill.type}
                        </span>
                      </h4>
                      <span className="text-[11px] text-slate-400 capitalize">
                        Categoría: {skill.category} • Niveles documentados: {skill.levels.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-amber-400 font-semibold hidden sm:inline-block">
                      {isExpanded ? 'Ocultar Evolución' : 'Ver Niveles'}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {skill.levels.map((lvl) => (
                        <div 
                          key={lvl.level}
                          className={`p-3 rounded-lg border text-xs space-y-1.5 ${
                            lvl.level === skill.currentLevel
                              ? 'bg-amber-950/20 border-amber-500/40'
                              : 'bg-slate-900/60 border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-amber-400">
                              Nivel {lvl.level}
                            </span>
                            {lvl.unlockedAtChapter && (
                              <span className="text-[10px] text-slate-500 font-mono">
                                Cap. {lvl.unlockedAtChapter}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            {lvl.description}
                          </p>
                          {lvl.keyChanges && (
                            <span className="text-[10px] text-emerald-400 block pt-1 border-t border-slate-800/60 font-medium">
                              ✦ {lvl.keyChanges}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Special Items Inventory */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-400" />
            Catálogo de Artefactos y Objetos Supremos del Sistema
          </h3>
          <p className="text-xs text-slate-400">
            Armas y tesoros dimensionales producidos por la Ruleta de la Fortuna y entregados por Linuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SYSTEM_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  {item.name}
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                  Cap. {item.unlockedAtChapter}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400 border-t border-slate-800/60">
                <span>Portador: <strong className="text-slate-200">{item.holder}</strong></span>
                <span className="text-emerald-400 font-medium">{item.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
