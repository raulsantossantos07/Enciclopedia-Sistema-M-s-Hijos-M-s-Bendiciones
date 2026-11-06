import React, { useState } from 'react';
import { NOVEL_FACTIONS } from '../data/factions';
import { SECRET_LORE } from '../data/secretLore';
import { 
  ShieldAlert, 
  Globe, 
  Skull, 
  Crown, 
  Flame, 
  Sparkles, 
  AlertTriangle,
  Building2,
  ChevronDown,
  CheckCircle2,
  Eye
} from 'lucide-react';

export const FactionsLoreTab: React.FC = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<'alien' | 'factions' | 'zombies' | 'rankings'>('alien');
  const [expandedLoreId, setExpandedLoreId] = useState<string>('conspiracion-alienigena');

  const zombieTiers = [
    { level: 1, colorName: 'Blanco / Pálido', bgClass: 'bg-slate-200 text-slate-950', borderClass: 'border-slate-300', traits: 'Zombies comunes y mecánicos. Sin visión nocturna, torpes, atraídos exclusivamente por ruido y sangre fresca. Inteligencia nula.' },
    { level: 2, colorName: 'Cian / Azul Claro', bgClass: 'bg-cyan-500 text-slate-950', borderClass: 'border-cyan-400', traits: 'Zombies ágiles y veloces. Conservan reflejos atléticos superiores a un humano adulto. Aparecen con mayor frecuencia a los 30 días.' },
    { level: 3, colorName: 'Verde Esmeralda', bgClass: 'bg-emerald-500 text-slate-950', borderClass: 'border-emerald-400', traits: 'Reyes Zombies Iniciales. Desarrollan inteligencia de un niño de 3 a 4 años y despiertan su PRIMERA habilidad especial (Berserker de fuego, sónico, etc.).' },
    { level: 4, colorName: 'Púrpura / Morado', bgClass: 'bg-purple-500 text-slate-100', borderClass: 'border-purple-400', traits: 'Reyes Zombies Élite. Velocidad y ferocidad que supera a escuadrones de mutantes Nivel 4. Ojos morados brillantes.' },
    { level: 5, colorName: 'Naranja Fuego', bgClass: 'bg-amber-500 text-slate-950', borderClass: 'border-amber-400', traits: 'Emperadores Zombies. Si son alimentados por Linuo (como Shui Nian), su piel vuelve a ser tersa, rosada y humana. Si evolucionan por su cuenta, su carne se seca como momias y desarrollan colmillos afilados.' },
    { level: 6, colorName: 'Rojo Carmesí', bgClass: 'bg-rose-600 text-slate-100', borderClass: 'border-rose-500', traits: 'Monarcas Supremos. Les crecen cuernos en la cabeza (astas de ciervo en Shui Nian, cuernos carnosos en Linuo) y despiertan su propia HABILIDAD DE DOMINIO (como el Dominio Carmesí).' },
    { level: 7, colorName: 'Dorado Cósmico', bgClass: 'bg-yellow-400 text-slate-950', borderClass: 'border-yellow-300', traits: 'Dioses Zombies. Fuerza colosal destructora de ciudades, pupilas de oro puro, dos habilidades sobrehumanas completas y comando sobre hordas de millones.' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Sub-tab Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setSelectedSubTab('alien')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedSubTab === 'alien'
              ? 'bg-purple-600 text-slate-100 shadow-lg shadow-purple-600/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Globe className="w-4 h-4 text-purple-300" />
          <span>La Conspiración Alienígena Gorsula</span>
        </button>

        <button
          onClick={() => setSelectedSubTab('factions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedSubTab === 'factions'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4 text-amber-300" />
          <span>Bases y Facciones Humanas</span>
        </button>

        <button
          onClick={() => setSelectedSubTab('zombies')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedSubTab === 'zombies'
              ? 'bg-rose-600 text-slate-100 shadow-lg shadow-rose-600/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Skull className="w-4 h-4 text-rose-300" />
          <span>Biología y Niveles de Zombies</span>
        </button>

        <button
          onClick={() => setSelectedSubTab('rankings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedSubTab === 'rankings'
              ? 'bg-emerald-600 text-slate-100 shadow-lg shadow-emerald-600/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Crown className="w-4 h-4 text-emerald-300" />
          <span>Rankings Mundiales & Enemigos Extranjeros</span>
        </button>
      </div>

      {/* 1. Alien Conspiracy Tab */}
      {selectedSubTab === 'alien' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 border border-purple-900/60 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold">
              <ShieldAlert className="w-4 h-4" />
              El Mayor Secreto Desvelado de la Historia
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-100">
              La Falsa "Organización Oficial": Parásitos del Planeta Nisugu
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              Durante 200 capítulos, los sobrevivientes creían que la <em>Organización Oficial de Usuarios Despiertos</em> era 
              el remanente del gobierno protegiendo al pueblo. En realidad, son una civilización interestelar invasora 
              (<strong>Raza Gorsula / Gusila</strong>) que lleva siglos oculta en la Tierra mediante injertos de piel humana. 
              Crearon la epidemia zombie para criar mutantes de Nivel 10 como "combustible" para su nave estelar, 
              mientras drenan el núcleo de la Tierra para llevárselo y dejar que el planeta explote en 3 años.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {SECRET_LORE.map(lore => {
              const isExpanded = expandedLoreId === lore.id;
              return (
                <div
                  key={lore.id}
                  className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedLoreId(isExpanded ? '' : lore.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-850 transition-colors cursor-pointer"
                  >
                    <div>
                      <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <span className="text-amber-400">✦</span>
                        {lore.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {lore.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-amber-400 font-semibold shrink-0">
                      {isExpanded ? 'Ocultar' : 'Leer Detalles'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="p-5 bg-slate-950/70 border-t border-slate-800 space-y-4">
                      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-xs text-amber-300/90 font-medium leading-relaxed">
                        {lore.summary}
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Puntos Clave del Descubrimiento:
                        </span>
                        <div className="space-y-1.5">
                          {lore.fullExplanation.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                              <span className="text-purple-400 font-bold shrink-0">{idx + 1}.</span>
                              <span className="leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-slate-500 font-mono">
                          Capítulos Clave: {lore.keyChapters.join(', ')}
                        </span>
                        <div className="text-emerald-400 font-medium">
                          Verificado en el texto canónico
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Human Factions Tab */}
      {selectedSubTab === 'factions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              Catálogo de Bases & Facciones de la Ciudad Zongan y Sichuan
            </h3>
            <span className="text-xs text-slate-400">
              {NOVEL_FACTIONS.length} facciones registradas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NOVEL_FACTIONS.map(fac => (
              <div 
                key={fac.id}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-100 text-base flex items-center gap-2">
                        {fac.name}
                      </h4>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Líder: <strong className="text-slate-200">{fac.leader}</strong>
                      </span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase whitespace-nowrap ${
                      fac.status === 'Activa' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : fac.status.includes('Destruida') 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {fac.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 space-y-1">
                    <div className="text-slate-400">
                      Ubicación: <span className="text-slate-200">{fac.location}</span>
                    </div>
                    <div className="text-amber-400 font-semibold">
                      Nivel de Poder: {fac.powerLevel}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-rose-300/90 bg-rose-950/20 p-2.5 rounded-lg border border-rose-900/40">
                  <strong>Destino Final:</strong> {fac.destiny}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Zombie Biology Tab */}
      {selectedSubTab === 'zombies' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Skull className="w-5 h-5 text-rose-400" />
              Biología Zombie & Jerarquía de Colores de Pupilas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              En el universo de la novela, el color de las pupilas revela con exactitud el nivel biológico y la cantidad 
              de energía condensada en el cristal cerebral del zombie. A partir del Nivel 3 adquieren inteligencia y habilidades; 
              al Nivel 6 desarrollan cuernos y campos de Dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zombieTiers.map(tier => (
              <div 
                key={tier.level}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center font-black text-xs text-slate-200 font-mono">
                      {tier.level}
                    </div>
                    <span className="font-bold text-slate-100 text-sm">
                      Zombie Nivel {tier.level}
                    </span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${tier.bgClass} ${tier.borderClass}`}>
                    Pupilas {tier.colorName}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tier.traits}
                </p>

                <div className="text-[11px] text-slate-400 bg-slate-950 p-2 rounded border border-slate-800">
                  <strong>Representantes Canónicos:</strong>{' '}
                  {tier.level === 1 && 'Xiao Juan, hordas del centro comercial'}
                  {tier.level === 2 && 'Hordas ágiles de Beian y Wushan'}
                  {tier.level === 3 && 'Zombies con garras o fuego primitivo'}
                  {tier.level === 4 && 'Feng Tianlin (mutado), Lei Tian (mutado)'}
                  {tier.level === 5 && 'Wang Jialin, Huang Fan (mutado), Tie Yunfan'}
                  {tier.level === 6 && 'Shui Nian (Dominio Carmesí), Linuo (Dominio del Rey)'}
                  {tier.level === 7 && 'Monstruos legendarios del centro de Sichuan'}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl text-xs text-slate-300 space-y-2">
            <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-400" />
              Diferencia Biológica: Zombies Naturales vs. Reinas de Linuo
            </h4>
            <p className="leading-relaxed">
              Los zombies que evolucionan de forma natural en las ruinas urbanas se vuelven cada vez más monstruosos: 
              su carne se marchita como momias arrugadas, les brotan colmillos salvajes y pierden toda humanidad. 
              Por el contrario, las <strong>Reinas Zombies alimentadas por Linuo</strong> (como Shui Nian y Ah Guayi) 
              consumen cristales limpios y reciben cuidado humano; al subir a Nivel 5 y 6 su piel se vuelve suave, rosada 
              y sedosa, su inteligencia alcanza la de jóvenes humanas y pueden convivir armoniosamente con las esposas humanas.
            </p>
          </div>
        </div>
      )}

      {/* 4. World Rankings Tab */}
      {selectedSubTab === 'rankings' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              La Lista Global de Clasificación de Usuarios Despiertos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La Organización Oficial instaló pantallas holográficas monumentales en todas las capitales del mundo. 
              Aunque Linuo superó a todos convirtiéndose en el N°1 de la Tierra (Nivel 7-8), los oficiales lo declararon "muerto", 
              devolviendo provisionalmente los puestos a los magnates extranjeros.
            </p>
          </div>

          <div className="space-y-3">
            {/* Rank 1: Linuo */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black text-lg flex items-center justify-center shrink-0">
                  #1
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-100 text-base">Linuo (China / Zongan)</h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40">
                      Récord Mundial Absoluto: Etapa 9,999
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Nivel 8 Real • Poder cósmico, Dominio Soberano, Caza de Monstruos vinculada y flechas divinas.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded border border-emerald-900 self-start sm:self-auto">
                El Verdadero Emperador
              </span>
            </div>

            {/* Rank 2 (ex #1): Watanabe Kumajiro */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 font-bold text-lg flex items-center justify-center shrink-0">
                  #2
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-200 text-sm">Watanabe Kumajiro (Nación Insular / Japón)</h4>
                    <span className="text-xs text-slate-400 font-mono">Etapa ~7,000</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Maestro de Kendo de Requio (Tokio). Primer humano en descubrir el uso de cristales zombies. 
                    Padre de Watanabe Shizuka (líder comercial de la Sociedad del Dragón Negro en Chengdu).
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto">
                Kendo Supremo Nivel 6+
              </span>
            </div>

            {/* Rank 3: Satanás */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 font-bold text-lg flex items-center justify-center shrink-0">
                  #3
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-200 text-sm">Satanás (Estados Unidos / Houston)</h4>
                    <span className="text-xs text-slate-400 font-mono">Puesto 2 Mundial Inicial</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Tirano sanguinario con melena de león rubia. Ejecutó a su subordinado George y a su amante 
                    al enterarse de que Linuo lo había desplazado al 3° lugar mundial.
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto">
                Poder Oscuro Nivel 6
              </span>
            </div>

            {/* Rank 4: Alexander */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 font-bold text-lg flex items-center justify-center shrink-0">
                  #4
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-200 text-sm">Alexander (Reino Unido / Londres)</h4>
                    <span className="text-xs text-slate-400 font-mono">Puesto 3 Mundial Inicial</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Aristócrata británico que movilizó a sus unidades de asesinato encubiertas hacia China 
                    enfurecido por ser superado por Linuo.
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto">
                Caballero Imperial Nivel 6
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
