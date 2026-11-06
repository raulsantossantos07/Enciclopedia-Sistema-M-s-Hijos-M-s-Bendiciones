import React, { useState } from 'react';
import { Shield, Radio, Key, Globe, EyeOff, Terminal } from 'lucide-react';

export const FactionsLoreTab: React.FC = () => {
  const [selectedSecret, setSelectedSecret] = useState<number | null>(null);

  const factions = [
    {
      name: 'Base Diao Zatian (Binhu Garden)',
      leader: 'Lin Nuo (Linuo)',
      power: 'Nivel 14 (Ley Absoluta)',
      status: 'Imperio Dominante / Paraíso Protegido',
      desc: 'Originalmente un lujoso complejo residencial jardín en Zongan. Convertida por Lin Nuo en una fortaleza impenetrable equipada con domos estelares y reactores de energía estelar que albergan a más de 15.000 supervivientes humanos bajo un régimen de abundancia absoluta.'
    },
    {
      name: 'El Consejo Oscuro',
      leader: 'Jackman (Falso Dios del Sol)',
      power: 'Nivel 10 (Sintético)',
      status: 'Aniquilado / Purgado por Zatian',
      desc: 'Coalición secreta de la antigua aristocracia humana global y los 12 clanes de la Tierra (incluyendo las familias Lee de Seúl y Mitsui de Osaka). Vendieron a la humanidad común a cambio de vacunas de inmunidad y pactaron con los Gusila para abandonar el planeta.'
    },
    {
      name: 'La Flota de la Raza Gusila',
      leader: 'Rey Aicers',
      power: 'Nivel 11 (Tecnológico / Cósmico)',
      status: 'Destruida en la Órbita Lunar',
      desc: 'Extraterrestres de piel verde infiltrados con máscaras de tejido humano vivo. Su propósito real al dispersar el meteorito con el virus era convertir la biomasa zombi en biocombustible interestelar y usar humanos de nivel 10 como baterías.'
    },
    {
      name: 'Comité Interestelar de Supervisión',
      leader: 'Arcángel Casia (8 Alas)',
      power: 'Nivel 11 (Juicio de Plasma)',
      status: 'Derrotado y Disuelto',
      desc: 'Entidad reguladora cósmica que decretó la purga y limpieza de la corteza terrestre tras la infestación de la plaga. Fueron completamente erradicados por Lin Nuo tras intentar incinerar la atmósfera.'
    }
  ];

  const secrets = [
    {
      title: 'El Origen Real del Virus Zombi',
      content: 'El virus no nació de un fallo de laboratorio terrestre. Fue una bio-arma empaquetada en un meteorito por la tribu Gusila. El virus altera los nucleótidos celulares para forzar la evolución biológica rápida hacia el nivel 10, nivel en el cual el núcleo de energía del mutante madura lo suficiente para ser extraído y usado como fuente de ignición para los motores hiperespaciales de las flotas alienígenas.'
    },
    {
      title: 'El Secreto del Sistema Duozi Duofu',
      content: 'Durante el torneo cósmico final en el capítulo 523, se revela que el místico "Sistema de Más Hijos, Más Bendiciones" de Lin Nuo no es un programa artificial alienígena. Es la encarnación cuántica de la "Voluntad Cósmica de las Estrellas", la cual eligió a un humano puro superviviente para contrarrestar la purga del Comité Interestelar y salvar la semilla del linaje genético terrestre.'
    },
    {
      title: 'La Purga de las Alas de Casia',
      content: 'En el clímax del capítulo 519, cuando el emisario divino Casia intentó invocar el plasma solar para limpiar el planeta, Lin Nuo ejecutó su Campo Soberano Nivel 14 de Ley Absoluta. Le arrancó las 8 alas de energía mística con sus propias manos y las utilizó en una barbacoa estelar campestre para alimentar y potenciar los atributos físicos de su harén de esposas y aliadas.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn text-xs sm:text-sm">
      {/* Listado de Facciones Geopolíticas */}
      <div className="space-y-4">
        <h3 className="text-base font-bold font-mono text-amber-400 flex items-center gap-2 uppercase tracking-wider">
          <Globe className="w-5 h-5 text-amber-500" /> Archivo de Inteligencia: Facciones y Fuerzas Globales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {factions.map((f, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/20 transition-all space-y-3 shadow-md">
              <div className="flex justify-between items-start gap-2 border-b border-slate-800 pb-2">
                <div>
                  <h4 className="font-bold text-slate-100 font-mono text-sm">{f.name}</h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">Comando: <span className="text-slate-200">{f.leader}</span></p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-500 font-mono">
                  {f.power}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">{f.desc}</p>
              <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded w-fit border border-slate-900">
                <Shield className="w-3.5 h-3.5 text-slate-600" /> Estatus: <span className="text-slate-300 font-bold">{f.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloque Encapsulado de Secretos Desclasificados del Lore */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-purple-500/20 space-y-4 shadow-2xl">
        <div className="border-b border-slate-800 pb-2">
          <h3 className="text-base font-bold font-mono text-purple-400 flex items-center gap-2 uppercase tracking-wide">
            <Radio className="w-5 h-5 text-purple-500 animate-pulse" /> Transmisión Encriptada: Secretos de la Alianza Zatian
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Haz clic sobre cualquier nodo para descifrar los archivos de la memoria de los cardenales.</p>
        </div>

        <div className="space-y-2.5">
          {secrets.map((s, idx) => {
            const isOpen = selectedSecret === idx;
            return (
              <div key={idx} className="border border-slate-800/80 rounded-xl bg-slate-950/60 overflow-hidden transition-all">
                <button
                  onClick={() => setSelectedSecret(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center justify-between font-mono font-bold text-left text-xs text-slate-200 hover:bg-slate-900/40 transition-colors"
                >
                  <span className="flex items-center gap-2 text-slate-100">
                    <Terminal className="w-4 h-4 text-purple-500" /> {s.title}
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2 py-0.5 rounded">
                    {isOpen ? 'CERRAR NODULO' : 'DECODIFICAR'}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 bg-slate-950 border-t border-slate-900 font-sans text-xs text-slate-400 leading-relaxed shadow-inner">
                    {s.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
