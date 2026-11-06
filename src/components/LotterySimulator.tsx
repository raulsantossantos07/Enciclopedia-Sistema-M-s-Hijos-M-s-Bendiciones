import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Award, 
  Crown, 
  Flame, 
  ShieldCheck, 
  Gift, 
  Sliders, 
  CheckCircle2,
  Baby
} from 'lucide-react';

interface DropReward {
  id: string;
  name: string;
  tier: 'comun' | 'raro' | 'epico' | 'supremo';
  description: string;
  statBonus?: { stat: string; amount: number };
  skillPoints?: number;
}

const NORMAL_DROPS: DropReward[] = [
  { id: '1', name: '10 Puntos de Habilidad', tier: 'comun', description: 'Puntos básicos para subir habilidades de Lv1 a Lv2.', skillPoints: 10 },
  { id: '2', name: '5 Puntos de Atributo Físico', tier: 'comun', description: 'Mejora en defensa y agilidad.', statBonus: { stat: 'Defensa', amount: 5 } },
  { id: '3', name: 'Piedra Espacial Estándar (+1 m³)', tier: 'comun', description: 'Expande el almacenamiento dimensional en 1 metro cúbico.' },
  { id: '4', name: 'Flechas de Aleación de Alta Gama', tier: 'raro', description: 'Munición mental de aleación disparada a velocidad de bala.' },
  { id: '5', name: '100 Puntos de Habilidad', tier: 'raro', description: 'Paquete mediano de puntos del sistema.', skillPoints: 100 },
  { id: '6', name: 'Píldora de Purificación', tier: 'raro', description: 'Limpia impurezas y refresca la mente.' }
];

const BENBEN_LUCKY_DROPS: DropReward[] = [
  { id: '7', name: 'Piedra Espacial Suprema (Expande x50 veces)', tier: 'supremo', description: 'Multiplica el volumen de almacenamiento espacial por 50 veces instantáneas (hasta 62.5M m³).' },
  { id: '8', name: 'Habilidad: Dominio Soberano Lv. 1', tier: 'supremo', description: 'Control absoluto sobre cualquier ser vivo u objeto en 50 metros a la redonda.' },
  { id: '9', name: '40,000 Puntos de Habilidad', tier: 'epico', description: 'Mega paquete de puntos del sistema para upgrades de Nivel 6.', skillPoints: 40000 },
  { id: '10', name: 'Piedra Mágica Celestial de Ballesta', tier: 'supremo', description: 'Modula el tamaño de las flechas divinas: desde una aguja invisible hasta una lanza de 2 metros.' },
  { id: '11', name: 'Balsa de Salvamento en Cápsula (3 pisos con piscina)', tier: 'supremo', description: 'Cápsula encogible que despliega un albergue de lujo para 500 personas.' },
  { id: '12', name: 'Inmunidad Absoluta a Toxinas y Venenos', tier: 'epico', description: 'Inmunidad pasiva cósmica a todos los venenos del universo.' },
  { id: '13', name: 'Corona de Cristal de Hielo & Bisturí de la Vida', tier: 'epico', description: 'Pack de artefactos para potenciar las habilidades del harem.' }
];

export const LotterySimulator: React.FC = () => {
  const [hasBenbenBuff, setHasBenbenBuff] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [recentReward, setRecentReward] = useState<DropReward | null>(null);
  const [rewardHistory, setRewardHistory] = useState<DropReward[]>([]);
  const [accumulatedPoints, setAccumulatedPoints] = useState(15000);
  const [spinsLeft, setSpinsLeft] = useState(3);

  // User simulated stats
  const [stats, setStats] = useState({
    fuerza: 250,
    defensa: 260,
    agilidad: 245,
    poderMental: 280,
    carisma: 20
  });

  const handleSpin = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    setRecentReward(null);

    setTimeout(() => {
      const dropPool = hasBenbenBuff ? BENBEN_LUCKY_DROPS : NORMAL_DROPS;
      const randomReward = dropPool[Math.floor(Math.random() * dropPool.length)];

      setRecentReward(randomReward);
      setRewardHistory(prev => [randomReward, ...prev]);
      setSpinsLeft(prev => prev - 1);

      if (randomReward.skillPoints) {
        setAccumulatedPoints(prev => prev + randomReward.skillPoints!);
      }

      if (randomReward.statBonus) {
        setStats(prev => ({
          ...prev,
          defensa: prev.defensa + (randomReward.statBonus?.amount || 0)
        }));
      }

      setIsSpinning(false);
    }, 1200);
  };

  const addSpin = () => {
    setSpinsLeft(prev => prev + 1);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 text-center space-y-3 shadow-2xl relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          Simulador Oficial del Sistema
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
          Ruleta de la Bendición de Muchos Hijos (Duozi Duofu)
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Experimenta cómo Linuo hace girar la ruleta del sistema para obtener armas divinas, 
          habilidades rotas y piedras espaciales. ¡Activa el amuleto de Chu Benben para obtener drops legendarios garantizados!
        </p>

        {/* Lucky Chu Benben Toggle */}
        <div className="pt-2">
          <button
            onClick={() => setHasBenbenBuff(!hasBenbenBuff)}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 ${
              hasBenbenBuff
                ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Baby className="w-4 h-4" />
            <span>Abrazo de Chu Benben (Suerte Conceptual):</span>
            <span className={`px-2 py-0.5 rounded text-xs font-black ${hasBenbenBuff ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
              {hasBenbenBuff ? 'ACTIVADO (Drops Supremos)' : 'DESACTIVADO (Drops Comunes)'}
            </span>
          </button>
        </div>
      </div>

      {/* Wheel Area & Spin Action */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column: Interactive Spin Hub */}
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-6 shadow-xl relative">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span>Tiradas Disponibles: <strong className="text-amber-400 text-sm font-bold">{spinsLeft}</strong></span>
            <span>Puntos Acumulados: <strong className="text-emerald-400 text-sm font-mono font-bold">{accumulatedPoints.toLocaleString()}</strong></span>
          </div>

          {/* Graphical Roulette Wheel simulation */}
          <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
            <div 
              className={`w-full h-full rounded-full border-4 border-amber-500/40 bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/60 p-2 shadow-2xl flex items-center justify-center ${
                isSpinning ? 'animate-spin duration-500' : ''
              }`}
            >
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-400/30 flex items-center justify-center relative">
                <span className="text-xs font-mono font-black text-amber-500/40 uppercase tracking-widest absolute">
                  SISTEMA DUOZI DUOFU
                </span>
                <div className="w-20 h-20 rounded-full bg-slate-950 border border-amber-500/60 flex items-center justify-center text-amber-400 font-black text-xl shadow-inner">
                  {isSpinning ? '⚡' : '多福'}
                </div>
              </div>
            </div>
            {/* Pointer */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-amber-500 drop-shadow-md" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleSpin}
              disabled={isSpinning || spinsLeft <= 0}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                isSpinning || spinsLeft <= 0
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-amber-500 via-amber-400 to-rose-500 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/30 cursor-pointer active:scale-95'
              }`}
            >
              <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
              <span>{isSpinning ? 'Girando la Ruleta...' : '¡Girar Ruleta del Sistema!'}</span>
            </button>

            <button
              onClick={addSpin}
              className="w-full sm:w-auto px-4 py-3 rounded-xl font-bold text-xs bg-slate-950 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-center gap-1.5"
            >
              <Gift className="w-3.5 h-3.5 text-rose-400" />
              <span>Simular Nueva Esposa (+1 Giro)</span>
            </button>
          </div>

          {/* Reward Display Banner */}
          {recentReward && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-slate-950 border border-amber-500/50 text-left space-y-1.5 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                  ¡RECOMPENSA OBTENIDA!
                </span>
                <span className="text-xs text-amber-400 font-bold capitalize">
                  Tier {recentReward.tier}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-slate-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {recentReward.name}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {recentReward.description}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: User's Simulated Attribute Panel */}
        <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <h4 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              Tu Panel de Anfitrión Simulado
            </h4>
            <span className="text-[11px] text-slate-400">Atributos aumentados por el sistema</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-rose-400 font-medium">Fuerza</span>
              <span className="font-bold font-mono text-slate-100">{stats.fuerza}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-blue-400 font-medium">Defensa</span>
              <span className="font-bold font-mono text-slate-100">{stats.defensa}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-emerald-400 font-medium">Agilidad</span>
              <span className="font-bold font-mono text-slate-100">{stats.agilidad}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-purple-400 font-medium">Poder Mental</span>
              <span className="font-bold font-mono text-slate-100">{stats.poderMental}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-amber-400 font-medium">Carisma</span>
              <span className="font-bold font-mono text-slate-100">{stats.carisma}</span>
            </div>
          </div>

          {/* History of Drops */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Historial de Sorteos Recientes:
            </span>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {rewardHistory.map((rew, i) => (
                <div key={i} className="text-[11px] text-slate-300 p-1.5 rounded bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <span className="truncate max-w-[190px]">{rew.name}</span>
                  <span className="text-[9px] uppercase font-bold text-amber-400">{rew.tier}</span>
                </div>
              ))}
              {rewardHistory.length === 0 && (
                <div className="text-[11px] text-slate-500 italic text-center py-2">
                  Aún no has girado la ruleta.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
