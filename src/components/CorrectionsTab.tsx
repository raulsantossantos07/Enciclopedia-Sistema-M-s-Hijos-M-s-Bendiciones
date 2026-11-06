import React, { useState, useMemo } from 'react';
import { NOVEL_CORRECTIONS } from '../data/corrections';
import { NameCorrection } from '../types/novel';
import { 
  SpellCheck, 
  Search, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

export const CorrectionsTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputSnippet, setInputSnippet] = useState(
    'Lin Yao se acercó a Guusyan y le dio un trozo de pan. Luego rescató a Yusin en los conductos de aire y llamó a Yukian para que matara a Lidan y a Feneng. Mientras tanto, Suinyan lideraba a los zombies por la noche y Luda Chen observaba junto a Luan y Fange.'
  );
  const [copied, setCopied] = useState(false);

  const filteredCorrections = useMemo(() => {
    return NOVEL_CORRECTIONS.filter(item => {
      const q = searchTerm.toLowerCase().trim();
      if (!q) return true;
      return (
        item.rawTranscriptTerm.toLowerCase().includes(q) ||
        item.correctedCanonicalName.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q)
      );
    });
  }, [searchTerm]);

  // Real-time Text Fixer algorithm
  const fixedSnippet = useMemo(() => {
    let result = inputSnippet;

    const replacementRules: [RegExp, string][] = [
      [/\b(Lin Yao|Linia|Lino|Linu)\b/gi, 'Linuo'],
      [/\b(Guusyan|Wueyan|Wyan|Wuan|Guyan|Gus Suyan)\b/gi, 'Wu Suyan'],
      [/\b(Suinyan|Swinyan|Suin|Xiaoyan|Siaoyan)\b/gi, 'Shui Nian'],
      [/\b(Yusin|Yuin)\b/gi, 'Yu Xin'],
      [/\b(Yukian Kian|Kian Kian)\b/gi, 'Yu Qianqian'],
      [/\b(Yukian|Yuxi|Yian)\b/gi, 'Yu Qian'],
      [/\b(Zouchu|Zuchuchu|Chuchuie)\b/gi, 'Zou Chuchu'],
      [/\b(Liuyan|Liu Yangan|Liu Yang)\b/gi, 'Liu Yan'],
      [/\b(Fan Jin|Fang Yin|Fang Fei)\b/gi, 'Fang Jin'],
      [/\b(Sentong|Sentón)\b/gi, 'Shen Tong'],
      [/\b(Yunie|Butterfly)\b/gi, 'Yun Die'],
      [/\b(Hong Hu|Onu|Ongu)\b/gi, 'Chen Honghu'],
      [/\b(Lisiaoxin|Lisia|Liaoxin)\b/gi, 'Li Xiaoxin'],
      [/\b(Wen Yi Jing|Wii Jing|Wen Yihin)\b/gi, 'Wen Yijing'],
      [/\b(Kanan Yuran|Jouran|Kan Youran)\b/gi, 'Qian Youran'],
      [/\b(Suiagia|Jiajia)\b/gi, 'Su Jiajia'],
      [/\b(Zoli|Zaoli|Zoiol)\b/gi, 'Zhao Li'],
      [/\b(Gunazage|Gunaza|Gunaz)\b/gi, 'Gu Nazha'],
      [/\b(Agui|Aguayi|Aayi|Ayiku)\b/gi, 'Ah Guayi'],
      [/\b(Chubenben|Chuban|Xiaoben)\b/gi, 'Chu Benben'],
      [/\b(Luda Chen|Luda Cheng)\b/gi, 'Lu Dacheng'],
      [/\b(Luan)\b/gi, 'Lu Tian'],
      [/\b(Fange|Xiao Ye|Xiaoye)\b/gi, 'Fang Ye'],
      [/\b(Efeng|Jefeng)\b/gi, 'Ye Feng'],
      [/\b(Ninfanglan|Nin Fanglan|Nilan Fang)\b/gi, 'Ning Fanglan'],
      [/\b(Tiunfan)\b/gi, 'Tie Yunfan'],
      [/\b(Leitian)\b/gi, 'Lei Tian'],
      [/\b(Sanjun|Sanufa)\b/gi, 'Shan Jun'],
      [/\b(Sania|Saniaoban)\b/gi, 'Shan Xiaoban'],
      [/\b(Hang Fan)\b/gi, 'Huang Fan'],
      [/\b(Hang Feng)\b/gi, 'Huang Feng'],
      [/\b(Zanglin)\b/gi, 'Zhang Lin'],
      [/\b(Juang Dafei|Juan Dafey)\b/gi, 'Huang Dafei'],
      [/\b(Zou Wiin|Zou Huin)\b/gi, 'Zou Huiying'],
      [/\b(Hangue|Maestro Yuksu)\b/gi, 'Huang Yue'],
      [/\b(Niesiao|Nieo)\b/gi, 'Nie Xiao'],
      [/\b(Bufan|Buffan)\b/gi, 'Bufan'],
      [/\b(Tuolin|Tojin)\b/gi, 'Tolin'],
      [/\b(Gusila|Gouzula|Goslly)\b/gi, 'Gorsula'],
      [/\b(Feneng)\b/gi, 'Feng Sen'],
      [/\b(Lidan|Lidakuan)\b/gi, 'Li Dakuan'],
      [/\b(base deatian|base de|base deautian|base diaan)\b/gi, 'Base Diao Zatian'],
      [/\b(boxeo)\b/gi, 'feminismo / quejas de género'],
      [/\b(comedor de libros)\b/gi, 'devorador de humanos']
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
    <div className="space-y-8 animate-fadeIn">
      {/* Intro Box explaining why text is broken */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <SpellCheck className="w-5 h-5 text-amber-400" />
          ¿Por qué el texto original contiene tantos nombres alterados y errores?
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          El archivo suministrado proviene de una transcripción automática de subtítulos en español (auto-generated audio subtitles) 
          de una novela web/audiolibro china (<em>manhua</em>/donghua traducido). Los sistemas de reconocimiento de voz y traducción 
          automática confunden los tonos mandarines fonéticamente parecidos, generando deformaciones caóticas: 
          por ejemplo, <strong>Lin Nuo</strong> se convierte indistintamente en <em>Lino</em>, <em>Lin Yao</em> o <em>Linia</em>; 
          <strong>Wu Suyan</strong> en <em>Guusyan</em>, <em>Wueyan</em> o <em>Wuan</em>; y términos de argot como 
          <em>Nv Quan</em> (derechos femeninos/feminismo) se traducen absurdamente como <em>boxeo</em>.
        </p>
        <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 pt-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          A continuación tienes la normalización canónica oficial y una herramienta interactiva para corregir cualquier párrafo.
        </div>
      </div>

      {/* Interactive Live Text Fixer */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Herramienta Interactiva: Limpiador & Corrector de Nombres en Tiempo Real
          </h3>
          <span className="text-xs text-amber-400 font-mono">
            Auto-Fix Engine v2.0
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Pega cualquier fragmento del texto original con errores para obtener la versión limpia, canónica y con nombres normalizados:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> Texto con Errores del Audio (Bruto)
            </label>
            <textarea
              value={inputSnippet}
              onChange={(e) => setInputSnippet(e.target.value)}
              rows={6}
              className="w-full p-3 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all resize-none"
              placeholder="Pega aquí cualquier fragmento del texto..."
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Texto Normalizado & Corregido
              </label>
              <button
                onClick={handleCopy}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copiado!' : 'Copiar Texto Limpio'}
              </button>
            </div>
            <div className="w-full p-3 text-xs rounded-xl bg-slate-950 border border-emerald-900/60 text-slate-200 font-mono overflow-y-auto max-h-[148px] leading-relaxed shadow-inner">
              {fixedSnippet}
            </div>
          </div>
        </div>
      </div>

      {/* Dictionary of Corrections */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              Diccionario Canónico de Equivalencias y Glosario de Erratas
            </h3>
            <p className="text-xs text-slate-400">
              Consulta cómo se escribe originalmente cada nombre en el audio y su traducción correcta.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filtrar diccionario..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {filteredCorrections.map((corr, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-2 text-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/60 font-semibold">
                    {corr.rawTranscriptTerm}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/60 text-sm">
                    {corr.correctedCanonicalName}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium bg-slate-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto">
                  {corr.role}
                </span>
              </div>

              <p className="text-slate-300 text-[11px] leading-relaxed">
                {corr.explanation}
              </p>

              <div className="text-[10px] text-slate-500 font-mono">
                {corr.frequencyNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
