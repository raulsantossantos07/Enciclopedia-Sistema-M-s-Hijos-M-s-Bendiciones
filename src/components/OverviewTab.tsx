import React from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Skull,
  UserCheck,
  Building,
  AlertTriangle,
  HeartHandshake
} from 'lucide-react';

interface OverviewTabProps {
  onGoToTab: (tab: any) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onGoToTab }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner with Executive Digest */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
            <Skull className="w-3.5 h-3.5" />
            Apocalipsis Zombie Global & Invasión Extraterrestre
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Toda la Información de la Historia:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-rose-400">
              De Día Salvo Humanos, De Noche Lidero Zombies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Esta es la enciclopedia definitiva que extrae, analiza, unifica y corrige todo el contenido de la novela. 
            Sigue a <strong>Linuo</strong>, un joven de 25 años que despierta el <em>Sistema de Más Hijos Más Bendiciones</em>, 
            construyendo la base más poderosa del mundo (<strong>Diao Zatian</strong>), liderando a una legión secreta de reinas zombies y 
            enfrentando la conspiración cósmica de la <strong>Raza Alienígena Gorsula</strong> para salvar a la Tierra de la destrucción total.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Protagonista</span>
              <span className="text-amber-400 font-bold text-sm sm:text-base">Linuo (Lin Nuo)</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Nivel de Poder</span>
              <span className="text-rose-400 font-bold text-sm sm:text-base">Nivel 8 (N°1 Mundial)</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Harem Consolidado</span>
              <span className="text-amber-300 font-bold text-sm sm:text-base">25+ Humanas / 20 Zombies</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Plazo de Extinción</span>
              <span className="text-red-400 font-bold text-sm sm:text-base">3 Años Restantes</span>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Core Pillars of the Novel */}
      <div>
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Los 4 Pilares Fundamentales de la Trama
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pillar 1 */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">1. El Sistema "Más Hijos, Más Bendiciones" (Duozi Duofu)</h4>
                <span className="text-xs text-amber-400/80 font-medium">Mecánica de Farmeo y Crecimiento Infinito</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El sistema recompensa a Linuo cada vez que una mujer hermosa acepta voluntariamente ser su esposa. 
              Gana tiradas de ruleta, bonos directos de atributos físicos (Fuerza, Defensa, Agilidad, Poder Mental), 
              y al subir de nivel sus esposas, el sistema le devuelve puntos de habilidad. Con el tiempo, 
              su habilidad de caza se enlaza a sus mujeres, generando millones de puntos de experiencia automáticamente.
            </p>
            <button 
              onClick={() => onGoToTab('system-skills')} 
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold pt-1 cursor-pointer"
            >
              Explorar Árbol de Habilidades & Stats <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Skull className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">2. La Doble Vida: De Día Héroe, De Noche Rey Zombie</h4>
                <span className="text-xs text-rose-400/80 font-medium">Dominio de Hordas y Reinas No-Muertas</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Linuo posee la habilidad de transformarse en Rey Zombie con pupilas de colores evolucionadas y cuernos carnosos. 
              Por el día protege a los humanos y construye la base <em>Diao Zatian</em>; por la noche lidera a las hordas, 
              alimenta con cristales a sus esposas zombies (encabezadas por <strong>Shui Nian</strong>) y las educa para que 
              pastoreen a miles de zombies hacia zonas de tiro controladas sin causar desastres.
            </p>
            <button 
              onClick={() => onGoToTab('characters')} 
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold pt-1 cursor-pointer"
            >
              Ver Harem Humano & Harem Zombie <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">3. La Conspiración Extraterrestre de la Raza Gorsula</h4>
                <span className="text-xs text-purple-400/80 font-medium">La Falsa Organización Oficial y la Cosecha Cósmica</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La supuesta "Organización Oficial de Usuarios Despiertos" es una avanzadilla de alienígenas de piel verde 
              del sistema Nisugu. Ellos crearon el virus zombie y las mutaciones humanas para usar a la humanidad como "baterías": 
              buscan que los líderes alcancen el Nivel 10 para convertirlos en cristales gigantes y alimentar su nave espacial, 
              mientras drenan el núcleo de la Tierra para llevarse su energía, dejando que el planeta explote en 3 años.
            </p>
            <button 
              onClick={() => onGoToTab('factions-lore')} 
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold pt-1 cursor-pointer"
            >
              Ver Documento de la Conspiración Alienígena <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">4. La Des-zombificación y el Rito del Alma</h4>
                <span className="text-xs text-emerald-400/80 font-medium">Reversión de la Muerte y Conservación de Poder</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              En las montañas de Sichuan, Linuo descubre el <em>Rito Secreto de Retorno del Alma</em> del Clan de Astrólogos y Brujas. 
              Al disolver el cristal cerebral, el alma humana regresa al cuerpo de un zombie original, manteniendo la indestructibilidad 
              física de Reina Zombie pero con emociones, mente humana y corazón latiendo (demostrado con <strong>Ah Guayi</strong>). 
              Linuo aprende el principio para aplicarlo a Shui Nian y al resto de su harem sin sacrificios.
            </p>
            <button 
              onClick={() => onGoToTab('chapters')} 
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold pt-1 cursor-pointer"
            >
              Leer Crónica de Capítulos & Arcos <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Narrative Breakdown by Chronology */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          Resumen Completo de la Historia (Línea de Tiempo)
        </h3>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-amber-400">Fase 1: El Centro Comercial de Zongan (Cap. 1 - 54)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Linuo mata a Xiao Juan, rescata a Wu Suyan en el piso 5 y despierta el Sistema. Se arrastra por los ductos 
              para salvar a Yu Xin y rescata a Yu Qian usando sus primeras bolas de fuego. Descubre los cristales en las cabezas 
              de los zombies, doma a Shui Nian (su primera zombie), rescata a la celebridad Liu Yan y adopta a la niña Chu Benben 
              en el piso 6. Pacta con Lu Dacheng y termina con el "Holocausto Ígneo" de 6,000 zombies en la plaza exterior.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-rose-400">Fase 2: Asentamiento en Binhu Garden y Nacimiento de "Diao Zatian" (Cap. 55 - 85)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Ocupan la villa de lujo de Zou Chuchu, someten a la Base Zorro Rojo (Chen Honghu y Li Xiaoxin) y fundan la 
              Base Diao Zatian. Linuo asimila los recursos de Huo Bao (combustible) y Yu Xiang (víveres agrícolas), rescatando a 
              la maestra de venenos Yun Die. Sus esposas Wu Suyan y Fang Jin quedan embarazadas de Linuo.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-purple-400">Fase 3: La Purga de los Tiranos Distritales (Cap. 86 - 135)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Huang Xiao intenta extorsionar a Diao Zatian y Linuo lo ejecuta arrojando sus 100 cadáveres desde el cielo. 
              Lei Tian (Rey del Trueno) acosa a Chu Benben, sufre la maldición de mala suerte y es destripado por Shui Nian. 
              Luo Qiang descubre que su hijo Xiaoyu es biológico de Liu Batian y envenena a toda la Base Ba Wang.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-blue-400">Fase 4: Choque de Titanes y la Palma Dorada Rulai (Cap. 136 - 185)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Linuo compra a Yu Qianqian (portales) en la subasta oficial, vence a la feminista Ning Fanglan con la Palma Dorada Rulai 
              (cráter de 50 metros), salva a Wen Yijing y aniquila al Rey de Sangre Tie Yunfan silenciando sus poderes con Visión Perspicaz.
            </p>
          </div>

          {/* Milestone 5 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-red-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-red-400">Fase 5: La Batalla de los 300,000 Zombies y el Agujero Negro (Cap. 186 - 217)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Huang Fan y los líderes restantes desvían 300,000 zombies de Beian. Linuo extermina la horda en solitario con flechas 
              al ritmo de canciones infantiles y ejecuta a Huang Fan. An Jian revela la conspiración alienígena y muere con honores. 
              Linuo asalta la sede oficial de Zongan y pelea con el Cardenal alienígena Bufan. Bufan se autodestruye en un agujero negro 
              y Linuo se desliza por una grieta espacial usando su espacio de almacenamiento, cayendo en Sichuan.
            </p>
          </div>

          {/* Milestone 6 */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-slate-950" />
            <h4 className="text-sm font-bold text-emerald-400">Fase 6: El Éxodo en Sichuan y la Rebelión en Chengdu (Cap. 218 - 270)</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Linuo es sanado por Su Jiajia en Talong Village. Resuelve la tragedia de Zhao Li, vence al Dios Brujo Gushen, 
              resucita a Ah Guayi, evacua a la tribu de Xingchen en la Balsa Cápsula y funda la base "Bomba al Cielo" en el búnker 
              de Jiang Bin en Chengdu. Se infiltra en la sede provincial como el Obispo Fu Yi y hace que 10,000 mayordomos alienígenas 
              se suiciden en vivo ante 100,000 personas, detonando la guerra global de liberación.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ / Guía Rápida para el Usuario */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Preguntas Frecuentes & Secretos Resueltos de la Novela
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block">¿Por qué Wu Suyan creía ser estéril?</span>
            <p className="text-slate-300 leading-relaxed">
              Fue un engaño de su exmarido Luo Qiang y de su jefe Liu Batian. Liu Batian había dejado embarazada a su amante Li Fang, 
              así que sobornó a un médico para decir que Wu Suyan era infértil y empujar a Luo Qiang a casarse con Li Fang para que 
              criara a su hijo ilegítimo sin levantar sospechas en la empresa.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block">¿Por qué Linuo fingió su muerte en el agujero negro?</span>
            <p className="text-slate-300 leading-relaxed">
              No fingió su absorción: fue jalado de verdad al estar silenciado por el Campo Silencioso de Bufan. 
              Sin embargo, al sobrevivir en Sichuan, decidió NO regresar de inmediato para que los alienígenas y el mundo 
              creyeran que estaba muerto, permitiéndole operar encubierto con la habilidad de Transformación y golpear desde las sombras.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block">¿Cómo funcionan los colores de los ojos de los zombies?</span>
            <p className="text-slate-300 leading-relaxed">
              Indican el nivel de poder del zombie: <strong>Nivel 1</strong> (Blanco), <strong>Nivel 2</strong> (Azul/Cian), 
              <strong>Nivel 3</strong> (Verde), <strong>Nivel 4</strong> (Púrpura/Morado), <strong>Nivel 5</strong> (Naranja), 
              <strong>Nivel 6</strong> (Rojo Carmesí con cuernos de ciervo o toro), y <strong>Nivel 7</strong> (Dorado).
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block">¿Qué es la Balsa de Salvamento en Cápsula?</span>
            <p className="text-slate-300 leading-relaxed">
              Es un drop supremo del sistema que parece una pequeña píldora. Al lanzarse al suelo se expande en una balsa de lujo 
              de 200m x 100m x 15m con 3 pisos, bar, dormitorios para 500 personas y piscina con cúpula solar en el 3° piso. 
              Permite a Linuo transportar aldeas enteras en el bolsillo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
