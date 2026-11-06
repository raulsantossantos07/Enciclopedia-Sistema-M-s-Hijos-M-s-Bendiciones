import React, { useState, useMemo } from 'react';
import { NOVEL_CHARACTERS } from '../data/characters';
import { Character, CharacterCategory } from '../types/novel';
import { 
  Heart, 
  Shield, 
  Sparkles, 
  Crown, 
  Baby, 
  Skull, 
  UserX, 
  Flame,
  Award,
  Search,
  Filter,
  Users,
  Compass,
  Layers,
  Zap,
  Globe,
  Radio,
  Building2,
  ChevronRight
} from 'lucide-react';

interface CharactersTabProps {
  searchQuery: string;
}

export const CharactersTab: React.FC<CharactersTabProps> = ({ searchQuery: globalSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<CharacterCategory | 'all'>('all');
  const [localSearch, setLocalSearch] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const effectiveSearch = localSearch || globalSearch;

  const categories: { id: CharacterCategory | 'all'; label: string; count: number; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Todos', count: NOVEL_CHARACTERS.length, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'protagonista', label: 'Protagonista', count: NOVEL_CHARACTERS.filter(c => c.category === 'protagonista').length, icon: <Crown className="w-4 h-4 text-amber-400" /> },
    { id: 'esposa_humana', label: 'Esposas Humanas', count: NOVEL_CHARACTERS.filter(c => c.category === 'esposa_humana').length, icon: <Heart className="w-4 h-4 text-rose-400" /> },
    { id: 'esposa_zombie', label: 'Reinas Zombi', count: NOVEL_CHARACTERS.filter(c => c.category === 'esposa_zombie').length, icon: <Skull className="w-4 h-4 text-purple-400" /> },
    { id: 'ninia_protegida', label: 'Niñas & Hijas', count: NOVEL_CHARACTERS.filter(c => c.category === 'ninia_protegida').length, icon: <Baby className="w-4 h-4 text-emerald-400" /> },
    { id: 'aliado', label: 'Aliados Clave', count: NOVEL_CHARACTERS.filter(c => c.category === 'aliado').length, icon: <Shield className="w-4 h-4 text-blue-400" /> },
    { id: 'consejo_oscuro', label: 'Consejo Oscuro', count: NOVEL_CHARACTERS.filter(c => c.category === 'consejo_oscuro').length, icon: <Radio className="w-4 h-4 text-purple-500" /> },
    { id: 'lider_enemigo', label: 'Líderes Enemigos', count: NOVEL_CHARACTERS.filter(c => c.category === 'lider_enemigo').length, icon: <UserX className="w-4 h-4 text-red-400" /> },
    { id: 'lider_base', label: 'Líderes de Bases', count: NOVEL_CHARACTERS.filter(c => c.category === 'lider_base').length, icon: <Building2 className="w-4 h-4 text-cyan-400" /> },
    { id: 'alienigena', label: 'Alienígenas Gorsula', count: NOVEL_CHARACTERS.filter(c => c.category === 'alienigena').length, icon: <Globe className="w-4 h-4 text-teal-400" /> }
  ];

  const filteredCharacters = useMemo(() => {
    return NOVEL_CHARACTERS.filter(char => {
      const matchesCategory = selectedCategory === 'all' || char.category === selectedCategory;
      const searchLower = effectiveSearch.toLowerCase().trim();
      if (!searchLower) return matchesCategory;

      const matchesSearch = 
        char.canonicalName.toLowerCase().includes(searchLower) ||
        char.originalNamesInText.some(n => n.toLowerCase().includes(searchLower)) ||
        char.awakenedAbility.name.toLowerCase().includes(searchLower) ||
        char.description.toLowerCase().includes(searchLower) ||
        (char.combatRole && char.combatRole.toLowerCase().includes(searchLower)) ||
        (char.factionAffiliation && char.factionAffiliation.toLowerCase().includes(searchLower)) ||
        (char.systemItemGiven && char.systemItemGiven.toLowerCase().includes(searchLower));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, effectiveSearch]);

  const getCategoryBadge = (cat: CharacterCategory) => {
    switch (cat) {
      case 'protagonista':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">Protagonista</span>;
      case 'esposa_humana':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-rose-500/10 text-rose-300 border border-rose-500/30">Esposa Humana</span>;
      case 'esposa_zombie':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">Reina Zombi</span>;
      case 'ninia_protegida':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Hija / Protegida</span>;
      case 'aliado':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">Aliado Leal</span>;
      case 'consejo_oscuro':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-purple-950/80 text-purple-300 border border-purple-800">Consejo Oscuro</span>;
      case 'lider_enemigo':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-red-500/10 text-red-300 border border-red-500/30">Tirano / Enemigo</span>;
      case 'lider_base':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Líder de Base</span>;
      case 'alienigena':
        return <span className="px-2 py-0.5 text-[11px] rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">Alienígena Gorsula</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1 rounded-full ${selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid of Characters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCharacters.map(char => (
          <div
            key={char.id}
            onClick={() => setSelectedCharacter(char)}
            className={`group cursor-pointer rounded-xl bg-slate-900/80 hover:bg-slate-900 border p-4 transition-all duration-200 flex flex-col justify-between shadow-lg ${
              char.category === 'protagonista'
                ? 'border-amber-500/50 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 shadow-amber-500/10'
                : 'border-slate-800 hover:border-amber-500/50 hover:shadow-amber-500/10'
            }`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-100 text-base group-hover:text-amber-400 transition-colors">
                      {char.canonicalName}
                    </h4>
                    {char.charmRank && (
                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${
                        char.charmRank === 'SSS'
                          ? 'bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-amber-300 border-amber-400'
                          : char.charmRank === 'SS'
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' 
                          : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                      }`}>
                        {char.charmRank}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate max-w-[220px]">
                    En transcripción: <span className="text-slate-400">{char.originalNamesInText.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
                {getCategoryBadge(char.category)}
              </div>

              {/* Status & Measurements Pill */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] mb-3">
                {char.age && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {char.age} años
                  </span>
                )}
                {char.height && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {char.height}
                  </span>
                )}
                {char.measurements && (
                  <span className="px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-900/60 font-mono">
                    {char.measurements}
                  </span>
                )}
                <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                  char.status.includes('Embarazada') || char.status.includes('Madre')
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : char.status.includes('Aniquilado') || char.status.includes('Ejecutado') || char.status.includes('Fallecido')
                    ? 'bg-red-950 text-red-400 border border-red-900'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}>
                  {char.status}
                </span>
              </div>

              {/* Faction and Combat Role */}
              {char.combatRole && (
                <div className="text-[11px] text-slate-300 bg-slate-950 px-2 py-1 rounded border border-slate-800/80 mb-2.5 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-amber-500 shrink-0" />
                  <span className="truncate"><strong>Rol:</strong> {char.combatRole}</span>
                </div>
              )}

              {/* Loyalty Bar if applicable */}
              {char.loyaltyPercentage !== undefined && char.loyaltyPercentage > 0 && (
                <div className="mb-3">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span className="flex items-center gap-1 text-rose-400 font-medium">
                      <Heart className="w-3 h-3 fill-rose-500/30 text-rose-400" /> Lealtad / Afinidad
                    </span>
                    <span className="font-bold text-slate-200">{char.loyaltyPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        char.loyaltyPercentage === 100 
                          ? 'bg-gradient-to-r from-rose-500 to-amber-400' 
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${char.loyaltyPercentage}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Ability Preview */}
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 text-xs mb-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold flex items-center gap-1 truncate max-w-[200px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {char.awakenedAbility.name}
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                    Nv. {char.awakenedAbility.level}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {char.awakenedAbility.description}
                </p>
                {char.awakenedAbility.skillTree && (
                  <span className="text-[10px] text-emerald-400 block pt-1 font-semibold">
                    ✦ Árbol de {char.awakenedAbility.skillTree.length} niveles desbloqueable
                  </span>
                )}
              </div>

              {/* Item given if any */}
              {char.systemItemGiven && (
                <div className="text-[11px] text-emerald-400/90 flex items-center gap-1 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50 mb-2 truncate">
                  <Award className="w-3 h-3 shrink-0" />
                  <span className="truncate">Objeto: {char.systemItemGiven}</span>
                </div>
              )}

              {/* Description preview */}
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {char.description}
              </p>
            </div>

            {/* Footer with Cap info */}
            <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span>Cap. {char.firstAppearanceChapter}</span>
              {char.becameWifeChapter && char.becameWifeChapter > 0 && (
                <span className="text-rose-400 font-medium">Esposa en Cap. {char.becameWifeChapter}</span>
              )}
              <span className="text-amber-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform font-medium">
                Ver ficha y árbol →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Full Character Lore & Skill Tree */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-100">{selectedCharacter.canonicalName}</h3>
                  {selectedCharacter.charmRank && (
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Rango {selectedCharacter.charmRank}
                    </span>
                  )}
                  {getCategoryBadge(selectedCharacter.category)}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Nombres en transcripción: <span className="text-amber-400 font-mono">{selectedCharacter.originalNamesInText.join(' • ')}</span>
                </p>
                {selectedCharacter.factionAffiliation && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    Facción: <span className="text-cyan-400 font-medium">{selectedCharacter.factionAffiliation}</span>
                  </p>
                )}
              </div>
              <button 
                onClick={() => setSelectedCharacter(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Edad & Altura</span>
                <span className="font-bold text-slate-200">{selectedCharacter.age ? `${selectedCharacter.age} años` : 'N/A'} • {selectedCharacter.height || 'N/A'}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Medidas / Físico</span>
                <span className="font-bold text-rose-300 font-mono">{selectedCharacter.measurements || 'No registradas'}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Lealtad al Sistema</span>
                <span className="font-bold text-amber-300">{selectedCharacter.loyaltyPercentage !== undefined ? `${selectedCharacter.loyaltyPercentage}%` : 'N/A'}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Estado Canónico</span>
                <span className="font-bold text-emerald-400">{selectedCharacter.status}</span>
              </div>
            </div>

            {/* Ability Detail */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Habilidad: {selectedCharacter.awakenedAbility.name}
                </span>
                <div className="flex items-center gap-1.5">
                  {selectedCharacter.awakenedAbility.element && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                      {selectedCharacter.awakenedAbility.element}
                    </span>
                  )}
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    Nivel {selectedCharacter.awakenedAbility.level}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCharacter.awakenedAbility.description}
              </p>

              {selectedCharacter.awakenedAbility.synergyWithLinuo && (
                <div className="text-xs text-rose-300 bg-rose-950/20 p-2.5 rounded-lg border border-rose-900/40">
                  <strong className="text-rose-400">Sinergia con el Sistema de Linuo:</strong> {selectedCharacter.awakenedAbility.synergyWithLinuo}
                </div>
              )}

              {/* Character's Individual Skill Tree if present */}
              {selectedCharacter.awakenedAbility.skillTree && selectedCharacter.awakenedAbility.skillTree.length > 0 && (
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <h5 className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Árbol de Progresión de Habilidad del Personaje
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCharacter.awakenedAbility.skillTree.map((node) => (
                      <div key={node.level} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                        <div className="flex items-center justify-between text-amber-400 font-bold">
                          <span>Nivel {node.level}: {node.name}</span>
                          {node.unlockedAtChapter && (
                            <span className="text-[10px] text-slate-500 font-mono">Cap. {node.unlockedAtChapter}</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {node.description}
                        </p>
                        {node.specialEffect && (
                          <span className="text-[10px] text-emerald-400 block font-medium">
                            ✦ {node.specialEffect}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedCharacter.systemItemGiven && (
                <div className="text-xs text-emerald-400 font-medium pt-2 border-t border-slate-900 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Objeto / Arma Otorgada: <strong>{selectedCharacter.systemItemGiven}</strong></span>
                </div>
              )}
            </div>

            {/* Narrative description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Perfil & Papel en la Trama</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                {selectedCharacter.description}
              </p>
            </div>

            {/* Lore Highlights */}
            {selectedCharacter.loreHighlights && selectedCharacter.loreHighlights.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Hitos Canónicos en la Novela</h4>
                <ul className="space-y-1.5">
                  {selectedCharacter.loreHighlights.map((hl, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2 rounded border border-slate-800/40">
                      <span className="text-amber-500 font-bold shrink-0">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCharacter(null)}
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
