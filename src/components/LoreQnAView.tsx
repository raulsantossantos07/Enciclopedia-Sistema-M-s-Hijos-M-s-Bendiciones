import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle, Sparkles, BookOpen, AlertCircle, Heart, Crown, Clock } from 'lucide-react';

interface FAQItem {
  question: string;
  category: 'Final & Epílogo' | 'Trama Completa' | 'Personajes & Harén' | 'Sistema Cósmico' | 'Glosario & Nombres';
  answer: string;
  details?: string[];
}

const FAQS: FAQItem[] = [
  {
    question: "¿Cómo termina la novela en el Capítulo 528 y qué ocurre en el Epílogo de 16 Años?",
    category: "Final & Epílogo",
    answer: "El final de la obra (Capítulos 520 a 528) es apoteósico y feliz. Lin Nuo derrota al Comité Interestelar de Casia, asciende a Nivel 14 de Ley Absoluta, decreta la abolición universal de la esclavitud en todo el cosmos y crea el 'Método de Cultivo Excavador' para emancipar a la humanidad. La novela culmina con un emotivo salto temporal de 16 años donde se revelan los frutos de su dinastía y una escena final que cierra el círculo con el Capítulo 1:",
    details: [
      "1.032 Hijos y más de 500 Esposas: Lin Nuo vive en armonía total. Todos sus hijos llevan el apellido Lin y nacen dotados con superpoderes de nivel divino.",
      "El Primogénito Lin Chenxi (16 años): Hijo de Wu Suyan, es alto, apuesto y poderoso, liderando con orgullo a sus cientos de hermanos y hermanas en el patrullaje de la Tierra pacificada.",
      "Las Hijas Prodigio: Chu Benben y Lin Rui se han convertido en jóvenes deidades inmortales que controlan la suerte y el tiempo.",
      "Vidas de los Aliados: Lu Tian y Wei Yuxuan tuvieron una hija llamada Lu Ranran; Fang Ye y Ye Feng continúan su divertido romance tsundere; Lei Jintian dirige la academia de cultivo de la humanidad.",
      "La Escena Final del Capítulo 528: Lin Nuo camina de la mano de Wu Suyan de regreso a la boutique de trajes del centro comercial del Capítulo 1. Saca el taburete original, una rebanada de pan y le dice con una sonrisa cómplice: 'Señora tendera... ¿sabes lo que tienes que hacer ahora, verdad?'. Wu Suyan se sonroja, ríe y se abraza a él, terminando la novela con amor eterno."
    ]
  },
  {
    question: "¿De qué trata la historia completa a lo largo de los 528 capítulos?",
    category: "Trama Completa",
    answer: "La historia abarca el viaje completo de Lin Nuo (Lino), dividida en dos grandes sagas de 10 arcos argumentales en total:",
    details: [
      "Parte 1 (Caps. 1 a 270): Supervivencia en Naga, activación del sistema con Wu Suyan, domesticación de la Reina Zombi Suiyan con carne wagyu, fundación de la Base Diao Zatian en Binhu Garden, exterminio de los Tres Tiranos (Perro de Hierro, Lobo de Bronce, León de Oro), aniquilación de la secta Yipiantian y descubrimiento de la nave pirámide subterránea de los Gusila con la muerte del Cardenal Buffan.",
      "Parte 2 (Caps. 271 a 528): Expedición a Osaka para rescatar a Suiyan y bautizarla como reina híbrida inmortal; sometimiento de Japón y unión de la doncella espadachina Watanabe Shizuka; campaña de Seúl destruyendo el sádico 'Juego del Calamar Zombi' del Clan Lee y rescate de la Spider-Girl Yin Xiao'an; consolidación del norte cortando la cordillera Changbai por Gu Xiaolian y unión con el Hada Lin Ziwei; gran guerra espacial contra el Rey Gusila Aicers (destruido sobre la Luna con la Lanza del Caos) y el falso Dios del Sol Jackman; y el clímax cósmico contra el Arcángel Casia del Comité Interestelar.",
      "Epílogo (Cap. 528): Salto de 16 años, consagración del Reino de la Ley Absoluta, invención del Método de Cultivo Excavador y dinastía de 1.032 descendientes."
    ]
  },
  {
    question: "¿Cuál es la verdadera naturaleza y origen del 'Sistema de Más Hijos, Más Bendiciones'?",
    category: "Sistema Cósmico",
    answer: "Durante más de 400 capítulos se especula si el sistema era un dispositivo de espionaje o una trampa alienígena. Sin embargo, en el Arco 10 Lin Nuo desentraña la verdad suprema: el Sistema no es una máquina ni una creación de los Gusila ni del Comité Interestelar, sino la encarnación consciente de la 'Voluntad Cósmica de las Estrellas'.",
    details: [
      "El cosmos agonizaba debido a la tiranía de organizaciones como el Comité Interestelar, que trataban a planetas enteros como cosechas y ganado biológico.",
      "La Voluntad Cósmica seleccionó a Lin Nuo por su inquebrantable templanza, astucia y capacidad de proteger vidas, otorgándole la autoridad de procrear y expandir una nueva dinastía de semidioses que equilibren el universo.",
      "Al comprender esto, Lin Nuo no se deja subordinar por el sistema, sino que asimila sus leyes, alcanzando el Nivel 14 (Reino de la Ley Absoluta) y convirtiéndose en el Demiurgo soberano del universo."
    ]
  },
  {
    question: "¿Qué es el 'Método de Cultivo Excavador del Potencial Humano' creado por Lin Nuo?",
    category: "Sistema Cósmico",
    answer: "En los capítulos finales (Cap. 526), Lin Nuo se da cuenta de que la evolución humana no puede depender eternamente de cazar zombis o consumir cristales de mutación tóxicos. Por ello, combinando las leyes cósmicas, la energía espiritual de Changbai y la anatomía humana, inventa el 'Método de Cultivo Excavador del Potencial Humano' (挖掘机修炼法).",
    details: [
      "Permite a cualquier ser humano corriente despertar sus canales de energía internos sin necesidad de arriesgarse ante virus ni someterse a cirugías genéticas.",
      "Lin Nuo le entrega el pergamino supremo original al General Lei Jintian (Dios del Trueno) para que sea el Gran Maestro Instructor de todas las academias de la nueva Tierra.",
      "Gracias a este método, la humanidad deja de temer al apocalipsis y florece como una civilización de cultivadores estelares independientes."
    ]
  },
  {
    question: "¿Quiénes son todas las esposas clave de Lin Nuo a lo largo de los 528 capítulos?",
    category: "Personajes & Harén",
    answer: "Lin Nuo llega a tener más de 500 esposas hacia el epílogo, pero sus consortes principales y comandantes de mayor renombre son:",
    details: [
      "1. Wu Suyan (Hermana Yan): Primera esposa oficial, administradora del harén y madre del primogénito Lin Chenxi. Poder: Visión de rayos X y láser de plasma Nivel 8.",
      "2. Watanabe Shizuka (Wu Jing): Doncella personal francesa de combate, hija del maestro Kumajiro. Belleza 98, Kendo Grulla Nivel 9 de Ley de Espada.",
      "3. Yin Xiao'an (Spider Girl): Rescatada en Seúl, protege huérfanos. Belleza 96, acrobacias arácnidas y seda de nanofibras.",
      "4. Gu Xiaolian: Hada de Changbai, salvada de los ancianos opresores tras el corte de la cordillera. Llama Glacial Nivel 8.",
      "5. Lin Ziwei: Hada celestial de la espada del Sur. Belleza 99, formación de las Siete Espadas Voladoras Nivel 9.",
      "6. Yin Miaoyi: La mujer más hermosa del norte de China, emperatriz y gobernadora de Kioto / Naga.",
      "7. Tian Xinxia (Sombra): Exmiembro del Escuadrón Trueno, asesina sigilosa en traje táctico y jefa de inteligencia.",
      "8. Suiyan (Xiaoyan): Primera Reina Zombi. Rescatada en Osaka y devuelta a su forma humana e inmortalidad híbrida.",
      "9. Yu Xin & Yu Qian: Las hermanas gemelas universitarias (sónico y barreras reflectivas).",
      "10. Liu Ruoxi, Tang Rou, Fang Ye, Wei Yuxuan, Ji Mengyao, Ren Yin y Sato Saeko."
    ]
  },
  {
    question: "¿Quiénes son los hijos más prodigiosos de Lin Nuo y qué hacen?",
    category: "Personajes & Harén",
    answer: "Entre los 1.032 hijos de Lin Nuo, tres destacan con luz propia por sus roles en la trama y en el epílogo:",
    details: [
      "Lin Chenxi (16 años): Primogénito concebido con Wu Suyan. Heredó el fuego del sol primordial de su padre y la serenidad de su madre. En el epílogo lidera a sus cientos de hermanos y hermanas con autoridad fraterna intachable.",
      "Lin Rui (4 años en guerra, 20 en epílogo): Hija prodigio con la runa del tiempo. Domina la 'Congelación Temporal' y la 'Reversión del Ciclo' (Samsara), capaz de detener armas planetarias y curar cualquier daño rebobinando el tiempo biológico.",
      "Chu Benben (6 años en guerra, 22 en epílogo): Niña divina de la suerte y causalidad absoluta. Cualquier cosa que decreta riendo mientras come caramelos se manifiesta físicamente (hizo autodestruirse al titán Gusila)."
    ]
  },
  {
    question: "Glosario de Nombres y Corrección de Términos (Subtítulos DownSub YouTube)",
    category: "Glosario & Nombres",
    answer: "Las transcripciones automáticas de audionovelas chinas en YouTube generan confusiones fonéticas. A continuación se presentan las correspondencias oficiales depuradas:",
    details: [
      "• Lin Nuo (林诺) = Traducido erróneamente a veces como 'Lino', 'Lin Yao', 'Jefe Lin', 'Hermano Nuo'. Es el protagonista supremo.",
      "• Wu Suyan (吴素妍) = Traducida como 'Hermana Guan' o 'Suyan'. Es la primera esposa y dueña de la tienda de ropa.",
      "• Suiyan / Xiaoyan = La primera Reina Zombi domesticada con carne fina y rescatada en Osaka.",
      "• Watanabe Shizuka = Traducida fonéticamente como 'Watanabe Izuka' o 'Wu Jing'. Es la doncella francesa espadachina.",
      "• Yin Xiao'an = Traducida como 'Yin Xiaopei'. La heroína con disfraz de araña en Seúl.",
      "• Gu Xiaolian = Traducida como 'Yu Xiaolian'. La matriarca del Clan Gu en Changbai.",
      "• Casia (Jasa) = El Arcángel de 8 alas del Comité Interestelar cuyas alas fueron asadas en barbacoa.",
      "• Jackman (Yakeman) = El falso Dios del Sol del Consejo Oscuro.",
      "• Rey Aicers (Eicers) = El monarca de la raza alienígena Gusila destruido sobre la órbita de la Luna.",
      "• Diao Zatian (Base Binhu) = Nombre informal arrogante de la base principal ('Increíble que desafía al cielo').",
      "• Método de Cultivo Excavador (挖掘机修炼法) = La técnica creada por Lin Nuo para desenterrar el potencial de toda la humanidad."
    ]
  }
];

export const LoreQnAView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Final & Epílogo', 'Trama Completa', 'Personajes & Harén', 'Sistema Cósmico', 'Glosario & Nombres'];

  const filteredFaqs = FAQS.filter(
    (faq) => selectedFilter === 'Todos' || faq.category === selectedFilter
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Box */}
      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">
            Compendio de Respuestas Clave & Gran Final (528 Capítulos)
          </h3>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            Todas las respuestas definitivas sobre la conclusión de la novela, el epílogo de 16 años, la dinastía de 1.032 hijos, el Método de Cultivo Excavador, la barbacoa del Ángel Casia y la aclaración de nombres fonéticos.
          </p>
        </div>
      </div>

      {/* Filter Category Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
              selectedFilter === cat
                ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion FAQ list */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? 'bg-zinc-900 border-amber-500/50 shadow-xl'
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-amber-400 border border-zinc-700 shrink-0">
                    {faq.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-zinc-100">
                    {faq.question}
                  </h4>
                </div>
                <button className="text-zinc-400 hover:text-white shrink-0 p-1">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {isOpen && (
                <div className="px-4 sm:px-6 pb-6 pt-1 border-t border-zinc-800/80 space-y-3 animate-fadeIn text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <p>{faq.answer}</p>
                  {faq.details && (
                    <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2 mt-3">
                      {faq.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-zinc-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
