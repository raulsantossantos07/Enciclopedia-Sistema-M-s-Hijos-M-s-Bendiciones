import React, { useState, useMemo } from 'react';
import { SpellCheck, Search, ArrowRight, FileText, Sparkles, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export const CorrectionsTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputSnippet, setInputSnippet] = useState(
    'Lin Yao se acercó a Guusyan y le dio un trozo de pan. Luego rescató a Yusin en los conductos de aire y llamó a Yukian para que matara al obispo alienígena en el centro comercial de Zongan. Mientras tanto, Swinyang lideraba a los zombies por la noche y Luda Chen observaba junto a Luan y Jasa en la base Baoming Sky.'
  );
  const [copied, setCopied] = useState(false);

  // Diccionario canónico extraído directamente de tus archivos de transcripción
  const novelCorrections = [
    { raw: 'Lino / Lin Yao / Lin Laoda / Linia', corrected: 'Lin Nuo (Linuo)', role: 'Protagonista Supremo', exp: 'El líder absoluto de la Alianza Zatian y Emperador de la Noche.', note: 'Muta constantemente debido a los tonos del audio.' },
    { raw: 'Guusyan / Wueyan / Wuan / Gusueyan', corrected: 'Wu Suyan', role: '1.ª Esposa Humana', exp: 'La patrona de la tienda de ropa masculina del piso 5 rescatada por pan.', note: 'Ocurre en el Cap. 4 del audio original.' },
    { raw: 'Suinyan / Swinyang / Suin', corrected: 'Shui Nian (Suiyan)', role: '1.ª Reina Zombie', exp: 'Primera monarca no-muerta domesticada con carne Wagyu fresca.', note: 'Aparece formalmente en el Cap. 11 de la trama.' },
    { raw: 'Yusin / Yuxin', corrected: 'Yu Xin', role: '2.ª Esposa Humana', exp: 'Estudiante universitaria rescatada en el conducto angosto con una varilla.', note: 'Ocurre en los Capítulos 5 y 6.' },
    { raw: 'Yukian / Yuqian', corrected: 'Yu Qian', role: '3.ª Esposa Humana', exp: 'Hermana mayor de Yu Xin, feroz espadachina de cabello vino tinto.', note: 'Desbloqueó el idioma zombie en el Cap. 10.' },
    { raw: 'Zouchu / Zouchuchu / Chuchu', corrected: 'Zou Chuchu', role: '4.ª Esposa Humana', exp: 'Consejera e interrogadora telepática con lectura mental avanzada.', note: 'Capítulos 11 al 14 de la oficina.' },
    { raw: 'Kanan / Kanan Jouran', corrected: 'Kang Ning (Kan Youran)', role: 'Diosa Alquímica', exp: 'Chef de estrellas que desbloqueó el Campo Soberano en el Cap. 96.', note: 'Otorga 10.000 puntos de habilidad.' },
    { raw: 'Watanabe Izuka / Wu Jing / Wuhin', corrected: 'Watanabe Shizuka', role: 'Doncella de la Espada', exp: 'Princesa del kendo de Osaka en uniforme francés con lealtad al 100%.', note: 'Sometida físicamente en la campaña de Japón.' },
    { raw: 'Chuben / Chubenemben', corrected: 'Chu Benben', role: 'Niña Protegida', exp: 'Tótem de la suerte conceptual absoluta que modifica los ratios del gacha.', note: 'Lideró 300 mujeres en elefantes en África (Cap. 451).' },
    { raw: 'Linrou / Linry Pik', corrected: 'Lin Ruier', role: 'Niña Prodigio', exp: 'Diosa del tiempo de 4 años que rejuveneció a Wu Suyan a los 18 años.', note: 'Posee el don de Reencarnación Nivel 3.' },
    { raw: 'Luda Chen / Ludacheng', corrected: 'Lu Dacheng', role: 'Oso de Hierro', exp: 'Líder militar veterano con transformación en oso titán acorazado.', note: 'Límite inicial de 3 minutos al día.' },
    { raw: 'Luan', corrected: 'Lu An', role: 'Aliado Escolta', exp: 'Hijo de Lu Dacheng con la habilidad de Tempestad Furiosa nivel 1.', note: 'Hijo del Oso de Hierro.' },
    { raw: 'Jasa / Casia / Jaluo', corrected: 'Arcángel Casia', role: 'Enemigo Cósmico', exp: 'Emisario del Comité cuyas 8 alas fueron asadas a la parrilla en la barbacoa.', note: 'Eliminado en el icónico Capítulo 519.' },
    { raw: 'Yakeman / Jackson', corrected: 'Jackman', role: 'Tirano del Consejo', exp: 'Falso Dios del Sol decapitado de un golpe de ballesta por Lin Nuo.', note: 'Ocurre en el Capítulo 503.' }
  ];

  const filteredCorrections = useMemo(() => {
    return novelCorrections.filter(item => {
      const q = searchTerm.toLowerCase().trim();
      if (!q) return true;
      return (
        item.raw.toLowerCase().includes(q) ||
        item.corrected.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.exp.toLowerCase().includes(q)
      );
    });
  }, [searchTerm]);

  const fixedSnippet = useMemo(() => {
    let result = inputSnippet;
    
    // Reglas ordenadas de expresiones regulares más específicas a más generales
    const replacementRules: [RegExp, string][] = [
      [/\b(Kanan Jouran|Kanand)\b/gi, 'Kang Ning (Kan Youran)'],
      [/\b(Watanabe Izuka|Guatanaves Izuka|Wu Jing)\b/gi, 'Watanabe Shizuka'],
      [/\b(Lin Yao|Linia|Lino|Linuo|Lin Nuo|Linjaor)\b/gi, 'Lin Nuo (Linuo)'],
      [/\b(Guusyan|Wueyan|Wuan|Gusueyan|Hermana Guan)\b/gi, 'Wu Suyan'],
      [/\b(Suinyan|Swinyang|Suin|Emperatriz Zombi)\b/gi, 'Shui Nian (Suiyan)'],
      [/\b(Yusin)\b/gi, 'Yu Xin'],
      [/\b(Yukian)\b/gi, 'Yu Qian'],
      [/\b(Zouchu|Zouchuchu)\b/gi, 'Zou Chuchu'],
      [/\b(Chuben|Chubenemben)\b/gi, 'Chu Benben'],
      [/\b(Linrou|Linry Pik)\b/gi, 'Lin Ruier'],
      [/\b(Luda Chen|Ludacheng)\b/gi, 'Lu Dacheng'],
      [/\b(Luan)\b/gi, 'Lu An'],
      [/\b(Jasa|Casia|Jaluo)\b/gi, 'Arcángel Casia'],
      [/\b(Yakeman|Jackson)\b/gi, 'Jackman']
    ];

    replacementRules.forEach(([regex, replacement]) => {
      result = result.replace(regex, replacement);
    });
    return result;
  }, [inputSnippet]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fixedSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn text-xs sm:text-sm">
      {/* Explicación Contextual */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 shadow-xl">
        <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
          <SpellCheck className="w-5 h-5" /> 
          ¿Por qué ocurren estas deformaciones de nombres en los subtítulos?
        </div>
        <p className="text-slate-300 leading-relaxed font-sans text-xs">
          El material en bruto exportado desde las plataformas de subtítulos automáticos de YouTube (DownSub) procesa los diálogos mediante reconocimiento fonético del software de IA. Debido a los cuatro tonos característicos del mandarín y la velocidad del audio, los nombres canónicos chinos sufren mutaciones severas: por ejemplo, el protagonista <strong>Lin Nuo</strong> se transforma caóticamente en <em>Lino</em> o <em>Lin Yao</em>, mientras que <strong>Wu Suyan</strong> se deforma en <em>Guusyan</em>.
        </p>
      </div>

      {/* Herramienta Interactiva de Corrección */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-sm font-bold font-mono text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Limpiador Automático de Capítulos en Tiempo Real
          </h3>
          <span className="text-[10px] text-amber-500 font-mono bg-amber-950/30 border border-amber-900/40 px-2 py-0.5 rounded">Engine v2.1</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> Texto con Errores del Audio (Bruto)
            </label>
            <textarea
              value={inputSnippet}
              onChange={(e) => setInputSnippet(e.target.value)}
              rows={5}
              className="w-full p-3 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-400 font-mono focus:outline-none focus:border-rose-500 transition-all resize-none shadow-inner"
              placeholder="Pega aquí cualquier párrafo de los capítulos descargados..."
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Texto Canónico Normalizado
              </label>
              <button
                onClick={handleCopy}
                className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono font-bold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? '¡COPIADO!' : 'COPIAR TEXTO LIMPIO'}
              </button>
            </div>
            <div className="w-full p-3 text-xs rounded-xl bg-slate-950 border border-emerald-900/30 text-slate-200 font-mono h-[116px] overflow-y-auto leading-relaxed shadow-inner">
              {fixedSnippet}
            </div>
          </div>
        </div>
      </div>

      {/* Diccionario de Correspondencias */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-sm font-bold font-mono text-slate-100 flex items-center gap-2 uppercase tracking-wide">
            <FileText className="w-5 h-5 text-purple-400" />
            Glosario de Equivalencias de Transcripción
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en el glosario..."
