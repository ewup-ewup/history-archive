/**
 * esContent — 스페인어(es) 콘텐츠 오버라이드 (Phase 2 Step 3~).
 * i18nFallback.ensureEsFallback()가 ERAS 등에 이 값을 es로 주입한다.
 * 여기 없는 필드는 자동으로 영어(en) 폴백.
 *
 * ES_ERAS[i][field] = 스페인어 문자열 (timeline.js ERAS와 같은 순서).
 */
export const ES_ERAS = [
  {
    title: "Antes del intercambio — la era de regalos y deudas",
    when: "Desde el amanecer de la humanidad hasta el sedentarismo",
    mind: "Confianza",
    mindFull: "La memoria era la moneda",
    summary: "Antes del dinero, los humanos vivían recordando el dar y recibir. Que la comunidad recordara junta quién debía a quién — esa fue la primera economía.",
    world: "Las bandas de cazadores-recolectores vivían del regalo y la reciprocidad, sin dinero. El pacto tácito 'yo comparto mi caza, la próxima vez compartes tú' unía a la comunidad.",
    korea: "Los pueblos paleolíticos y neolíticos de la península coreana también compartían la caza y la cosecha dentro de la banda. Al guardar grano en cerámica de patrón de peine, arraigaron las ideas de 'excedente' y 'reparto'.",
    japan: "El pueblo Jōmon del archipiélago japonés también vivía de la caza, la recolección y la pesca, compartiendo dentro de la banda. Al guardar bellotas y nueces en cerámica Jōmon, brotaron el sedentarismo y el excedente.",
    usa: "Los primeros pueblos de América (paleoindios) vivían de la reciprocidad, repartiendo la caza mayor en la banda. En la costa del Pacífico esto floreció luego en tradiciones de regalo como el potlatch.",
    hispanic: "Tanto los pueblos paleolíticos y neolíticos de Iberia como los primeros habitantes de Latinoamérica vivían del reparto y la reciprocidad. La tradición andina del 'ayni' (ayuda mutua) refleja las raíces profundas de esta reciprocidad.",
    psych: "¿Por qué compartir sin dinero? Porque los humanos desarrollaron un cerebro que recuerda 'lo que se debe'. La reciprocidad fue un instinto de supervivencia, y esta 'memoria de la deuda' se convirtió en el prototipo de todo el crédito y las finanzas posteriores.",
  },
  {
    title: "Trueque y dinero mercancía",
    when: "Del Neolítico a la Edad del Bronce",
    mind: "Consenso",
    mindFull: "Acordar creer en las conchas",
    summary: "La agricultura creó excedentes y comenzó el intercambio. Pero el desajuste entre 'mi arroz' y 'tu sal' era incómodo, así que surgió algo que todos aceptaban: el dinero mercancía.",
    world: "Conchas, sal, ganado y grano sirvieron como dinero. En particular, las conchas de cauri circularon ampliamente por Asia y África. La palabra 'salario' viene de 'sal'.",
    korea: "En las eras de Gojoseon y Samhan, el grano, la tela y el arroz eran medios de intercambio. Con la llegada del hierro, el propio hierro se usó a veces como medio precioso.",
    japan: "Con el cultivo de arroz del periodo Yayoi, el arroz se volvió una medida de valor. Durante siglos Japón calculó la riqueza y los estipendios en arroz (koku), mientras la tela y la seda también servían como medios de intercambio.",
    usa: "Los pueblos de los bosques del este de Norteamérica usaban el 'wampum' (cuentas de concha ensartadas) como medio de valor y de acuerdo. El grano, las pieles y el cobre también servían en el intercambio entre tribus.",
    hispanic: "En Mesoamérica, las semillas de cacao servían como dinero — los precios del mercado se contaban en semillas. Los Andes funcionaban con reciprocidad y trueque sin moneda, mientras que el dinero mercancía de Iberia se difundió por el comercio con mercaderes fenicios y griegos.",
    psych: "Una concha no tiene valor propio. ¿Entonces por qué aceptarla? Porque la gente creía que 'los demás también la aceptarán'. Esta ilusión colectiva — real porque todos creen — es la esencia del dinero, y llega hasta el bitcoin de hoy.",
  },
  {
    title: "El nacimiento de la moneda metálica",
    when: "Desde el siglo VII a. C.",
    mind: "Autoridad",
    mindFull: "El rostro del rey garantiza el valor",
    summary: "Incluso el dinero mercancía exigía pesar y comprobar la pureza. Cuando los Estados estamparon en el metal un peso fijo y un sello, declarando 'yo garantizo esto', comenzó la era de la acuñación.",
    world: "Hacia el siglo VII a. C., el reino de Lidia acuñó las primeras monedas de electro. A través de Grecia y Roma, las monedas con 'el retrato del soberano' se volvieron símbolos de poder y confianza.",
    korea: "Bajo el rey Seongjong de Goryeo, el Geonwon Jungbo (996) se acuñó como primera moneda metálica. El Sangpyeong Tongbo de Joseon (desde 1633) fue la primera moneda de circulación nacional, conocida como 'yeopjeon'.",
    japan: "Japón acuñó el Fuhonsen a finales del siglo VII y el Wadōkaichin en 708. En la era medieval importó monedas chinas, hasta que el shogunato Edo unificó la moneda con el Kan'ei Tsūhō (desde 1636).",
    usa: "Los pueblos indígenas de Norteamérica no desarrollaron acuñación. La América colonial hizo circular dólares de plata españoles (reales de a ocho) y monedas británicas hasta que la Ley de Acuñación de 1792 creó la Casa de la Moneda de EE. UU. y el dólar.",
    hispanic: "Iberia pasó por las monedas coloniales griegas y fenicias, la acuñación de la Hispania romana y el dinar y el dírham del Al-Ándalus islámico. Latinoamérica no tenía moneda propia, pero los reales de plata españoles acuñados en Potosí y Ciudad de México se volvieron dinero global.",
    psych: "¿Por qué confiar en un disco de metal? Por la 'autoridad' estampada en él. El centro de la confianza monetaria pasó del 'consenso de la comunidad' a la 'garantía del Estado'. Pero cuando los reyes degradaban la pureza, la confianza se derrumbaba — la primera inflación.",
  },
  {
    title: "Papel moneda y bancos",
    when: "Desde la China Song del siglo XI",
    mind: "Crédito",
    mindFull: "Confiar en el papel como en el oro",
    summary: "Las monedas eran pesadas y peligrosas. Los mercaderes empezaron a depositar oro y a comerciar con los 'recibos', y ese papel se volvió dinero. La humanidad dio un gran salto — comerciar solo con una promesa, sin lo físico.",
    world: "El primer papel moneda del mundo fue el 'jiaozi' de la China Song en el siglo XI. Más tarde en Europa, los recibos de los orfebres evolucionaron hacia los billetes, y nació el sistema bancario moderno.",
    korea: "Goryeo y Joseon intentaron el jeohwa (papel moneda de morera), pero no arraigó por falta de confianza. El papel moneda pleno llegó en el siglo XX, a través del Imperio Coreano y la era colonial.",
    japan: "El papel moneda más antiguo de Japón fue el Yamada Hagaki de Ise a principios del siglo XVII, y los dominios de la era Edo emitían sus propios billetes (hansatsu). El yen se introdujo en 1871 y el Banco de Japón se fundó en 1882.",
    usa: "América comenzó con el papel colonial de Massachusetts en 1690, y la moneda 'Continental' de la Revolución se derrumbó por sobreemisión. Tras la era de la banca libre, la Ley Bancaria Nacional de 1863 y la Reserva Federal de 1913 establecieron el sistema bancario moderno.",
    hispanic: "España fundó el Banco de San Carlos en 1782 (antecesor del Banco de España) y emitió los 'vales reales' en papel, que sufrieron inflación. Tras la independencia, los países latinoamericanos crearon bancos nacionales y monedas propias, pero también heredaron una historia de inflación crónica.",
    psych: "¿Cómo se confió en un trozo de papel como en el oro? Gracias a la promesa 'canjeable por oro en cualquier momento' — es decir, el crédito. Este salto del crédito hizo estallar el capitalismo, pero también sembró un nuevo miedo a que 'la promesa pueda romperse' — la semilla de los pánicos bancarios.",
  },
  {
    title: "El patrón oro y los tipos de cambio",
    when: "Del siglo XIX a 1971",
    mind: "Orden",
    mindFull: "Las naciones alinean el precio del dinero",
    summary: "Como cada nación tenía su moneda, el comercio necesitaba un 'tipo de cambio'. Anclar las monedas al oro bajo el patrón oro creó orden, que luego evolucionó hacia un sistema basado en el dólar.",
    world: "En el siglo XIX, el patrón oro liderado por Gran Bretaña se volvió la norma mundial. El sistema de Bretton Woods de 1944 hizo del dólar la moneda de reserva, y el fin de la convertibilidad del oro por Nixon en 1971 abrió la era moderna de tipos flotantes.",
    korea: "El Imperio Coreano adoptó el patrón oro en 1901, pero fue frustrado por el imperialismo japonés. Tras la liberación se introdujo el won, y la crisis de 1997 hizo que toda la nación sintiera el terror de los tipos de cambio.",
    japan: "Japón adoptó el patrón oro en 1897, financiado por la indemnización de la guerra sino-japonesa. Tras la Segunda Guerra Mundial, el sistema de Bretton Woods fijó el tipo en 360 ¥/$ durante su era de alto crecimiento, hasta que flotó en 1973 tras el shock Nixon de 1971.",
    usa: "Tras los debates del siglo XIX entre el oro y la plata (el movimiento de la Plata Libre), EE. UU. aprobó la Ley del Patrón Oro de 1900. Abandonó el patrón oro interno en la Depresión de 1933; el sistema de Bretton Woods de 1944 hizo del dólar el ancla mundial a 35 $/oz, hasta que Nixon puso fin a la convertibilidad en 1971.",
    hispanic: "España introdujo la peseta en 1868, pero nunca mantuvo largo tiempo un patrón oro pleno, oscilando entre la plata y el dinero fiduciario. Latinoamérica intentó repetidamente anclajes al oro y al dólar con frecuentes devaluaciones — algunos adoptando la dolarización (Ecuador, Panamá), otros soportando hiperinflaciones.",
    psych: "¿Por qué se tambalea toda una nación con los tipos de cambio? Porque el tipo es 'la nota de confianza del mundo hacia el dinero de mi país'. La crisis de 1997 fue el arquetipo del pánico colectivo cuando esa confianza se rompe — todos huyeron al dólar a la vez, amplificando la crisis.",
  },
  {
    title: "El dinero fiduciario y la era digital",
    when: "De 1971 al presente",
    mind: "Miedo y codicia",
    mindFull: "Cuando la creencia tiembla, el mercado también",
    summary: "Sin respaldo de oro, el dinero moderno se sostiene solo sobre la 'creencia'. Tarjetas de crédito, dinero electrónico y hasta el bitcoin — el dinero se volvió cada vez más abstracto, y los mercados cada vez más sensibles a la psicología humana.",
    world: "La burbuja puntocom (2000), Lehman (2008) y el shock de la pandemia (2020) fueron burbujas y caídas creadas por la codicia y el miedo. En 2009, el bitcoin realizó en código el viejo sueño del 'dinero sin Estado'.",
    korea: "Como potencia tecnológica, Corea lidera el mundo en pagos móviles y transferencias instantáneas. Al mismo tiempo, vive una y otra vez el ciclo de codicia y miedo en las fiebres inmobiliaria y cripto.",
    japan: "Tras flotar, Japón pasó por la apreciación del yen, la burbuja de activos de los años 80 y las 'tres décadas perdidas', siendo pionero en tipos cero y flexibilización cuantitativa. Reguló las cripto pronto tras el colapso de Mt. Gox en 2014 y se convirtió en un campo de pruebas de política monetaria en medio de la deflación y el envejecimiento.",
    usa: "El dólar estadounidense siguió siendo la moneda de reserva mundial incluso sin un ancla física. A través de la desinflación de Volcker, la crisis de 2008 y la flexibilización cuantitativa, y el estímulo de 2020, América también ha sido el escenario central de los activos digitales — el nacimiento del bitcoin en 2009 y la aprobación del ETF al contado en 2024.",
    hispanic: "España se unió al euro (1999/2002), retirando la peseta. Latinoamérica ha soportado crisis recurrentes — el default de Argentina en 2001 y repetidas hiperinflaciones —, pero muestra una de las mayores tasas de adopción de cripto y stablecoins del mundo como vía de escape de la inflación, y El Salvador hizo del bitcoin moneda de curso legal en 2021.",
    psych: "¿Por qué los mercados repiten siempre burbujas y pánicos? Porque cuanto más puro 'creer' se vuelve el dinero, más gobiernan el mercado las emociones que lo sacuden — la codicia y el miedo. Toda burbuja de la historia empezó con la codicia del 'esta vez es diferente' y terminó con el miedo del 'se acabó todo'.",
  },
];

// 사건 목록 메타(제목·연도·임팩트·심리)의 스페인어 — ERA_EVENTS에 주입.
// 사건 인덱스·타임라인 카드·검색·cross-link·이전다음 등 목록 레이어용.
export const ES_EVENTS_META = {
  cowrie: {
    title: "Las conchas de cauri se difunden como dinero",
    year: "a. C. ~",
    impact: "Conchas sin valor propio circularon por toda Asia y África. El primer caso en que el dinero se sostuvo sobre un solo consenso: 'todos lo aceptan'.",
    mind: "Creo porque los demás creen — la esencia del dinero, la 'confianza colectiva', funcionando por primera vez.",
  },
  tulip: {
    title: "Tulipomanía — la primera burbuja",
    impact: "Un solo bulbo de tulipán llegó a costar como una casa y se desplomó en días. Precio basado solo en la creencia — 'otros comprarán' — el arquetipo de toda burbuja.",
    mind: "Cuando la codicia susurra 'esta vez es diferente', el final siempre fue el mismo.",
  },
  lydia: {
    title: "Lidia acuña las primeras monedas",
    year: "siglo VII a. C.",
    impact: "Cuando el Estado garantizó el peso y el sello en el metal, desapareció la necesidad de pesar en cada trato. Un nuevo orden: 'la autoridad garantiza el valor'.",
    mind: "El centro de la confianza pasó de la 'comunidad' al 'Estado'.",
  },
  debasement: {
    title: "La degradación de la moneda romana — la primera inflación",
    year: "Roma, siglo III",
    impact: "Una Roma sin fondos redujo en secreto el contenido de plata, y el valor del dinero se desplomó. La primera lección sobre lo que ocurre cuando el Estado traiciona la confianza.",
    mind: "Cuando la autoridad garante rompe su propia confianza, el dinero vale menos que el papel.",
  },
  jiaozi: {
    title: "Jiaozi — el primer papel moneda del mundo",
    year: "Song, siglo XI",
    impact: "El comercio empezó con recibos de papel en lugar de monedas pesadas. Nació la era del crédito — comerciar con una promesa, sin lo físico.",
    mind: "En cuanto se confió en 'canjeable en cualquier momento', el papel se volvió oro.",
  },
  "south-sea": {
    title: "La burbuja de los Mares del Sur — hasta Newton perdió",
    impact: "La acción de la South Sea Company británica subió diez veces en un año y se derrumbó. Hasta Newton perdió una fortuna, y se dice que afirmó que podía calcular los astros, pero no la locura de la gente.",
    mind: "Hasta la inteligencia fue impotente ante la psicología de masas. La manía siempre arrastró también a los más listos.",
  },
  mississippi: {
    title: "La burbuja del Misisipi — el gran experimento de John Law",
    impact: "Francia entregó a John Law el poder de emitir dinero y montó un gran experimento canjeando deuda estatal por acciones de la Compañía del Misisipi. La acción se disparó y se derrumbó en un año, y la confianza francesa en el papel moneda no se recuperó durante casi un siglo.",
    mind: "Que el propio Estado pudiera inflar una burbuja de papel moneda — ese golpe abonó el terreno fiscal de la Revolución Francesa.",
  },
  "gold-standard": {
    title: "El patrón oro liderado por Gran Bretaña se expande",
    year: "siglo XIX",
    impact: "Al anclar las naciones sus monedas al oro, surgió un orden estable de tipos de cambio para el comercio. La economía mundial empezó a unirse bajo una sola regla.",
    mind: "Un ancla común — el 'oro' — sostuvo la confianza entre naciones.",
  },
  "1907": {
    title: "El pánico de 1907 — el rescate privado de J.P. Morgan",
    impact: "El sistema financiero de EE. UU., que operaba sin banco central, estuvo al borde del colapso por una cascada de pánicos bancarios iniciada con la quiebra de un gran fideicomiso (el Knickerbocker), y solo las negociaciones personales de J.P. Morgan salvaron el sistema. El suceso fue el catalizador directo de la creación de la Reserva Federal seis años después.",
    mind: "Una era en que la credibilidad de un solo hombre podía sostener el sistema — pero la conciencia de que ningún hombre es eterno forjó la institución.",
  },
  weimar: {
    title: "La hiperinflación de Weimar — cien mil millones de marcos por un pan",
    impact: "En noviembre de 1923, 1 dólar = 4,2 billones de marcos. Una hogaza de pan costaba cien mil millones de marcos. La peor inflación del siglo XX mostró hasta dónde puede caer una sociedad entera cuando la confianza monetaria se rompe una vez.",
    mind: "La experiencia de ver la riqueza convertida en papel mojado quebró la autodefensa política de la sociedad de Weimar, y en ese vacío entró el extremismo.",
  },
  "1929": {
    title: "El Martes Negro — comienza la Gran Depresión",
    impact: "Cinco años de subidas implacables se desmoronaron en días. Activos inflados por deuda más optimismo unánime — el arquetipo de la combinación más peligrosa.",
    mind: "Lo más peligroso es cuando todos son optimistas. Cuando la multitud señalaba un lado, los pocos que miraron al otro sobrevivieron.",
  },
  nixon: {
    title: "El shock Nixon — fin de la convertibilidad del oro",
    impact: "EE. UU. puso fin a su promesa de canjear dólares por oro. El dinero perdió al fin su ancla física, sosteniéndose en la pura 'creencia' — el inicio de la era moderna de tipos flotantes.",
    mind: "Un solo anuncio de política reescribió las reglas del mercado mundial. La política siempre fue la mayor variable del mercado.",
  },
  "1997": {
    title: "La crisis financiera asiática — el colapso de la confianza",
    impact: "Las monedas asiáticas, incluida la coreana, se desplomaron en cadena. Un tipo de cambio es 'la nota de confianza del mundo hacia el dinero de un país'; cuando se rompió, todos huyeron al dólar a la vez, amplificando la crisis.",
    mind: "Cuando la confianza se rompe, todos corren a la misma salida. Esa estampida agrandó la crisis.",
  },
  railway: {
    title: "La fiebre ferroviaria británica",
    year: "Década de 1840",
    impact: "El capital inundó la nueva tecnología ferroviaria; las acciones de ferrocarriles se dispararon y luego cayeron. La tecnología era real, pero los precios se recalentaron — el inicio de un patrón clásico de la innovación derramándose en burbujas.",
    mind: "La tecnología puede ser correcta y el precio equivocado. 'Innovación' y 'precio' eran cuestiones distintas.",
  },
  "black-monday": {
    title: "Lunes Negro — el −22 % de la automatización en un día",
    impact: "El 19 de octubre de 1987 el Dow cayó un 22,6 % en un solo día — una caída diaria mayor que el Martes Negro de 1929, pero la recuperación fue rápida y no siguió recesión. Fue la primera vez que la negociación automatizada por computadora se reveló como riesgo sistémico.",
    mind: "Cuando las computadoras vendían más rápido que los humanos, los mercados se desplomaban a una velocidad que los humanos no podían prever. Un nuevo miedo para una nueva era.",
  },
  "japan-1989": {
    title: "La burbuja de activos de Japón — el inicio de la década perdida",
    impact: "Tras alcanzar el Nikkei un máximo histórico de 38.915, cayó cerca de un 80 % en más de una década, con el inmobiliario de Tokio desplomándose en proporción similar. La 'década perdida' (o tres) que empezó en el mayor pico de activos desde 1929 se volvió el caso de estudio estándar de política monetaria en una era de deflación y estancamiento demográfico.",
    mind: "El pico de una burbuja no era 'ya subió todo', sino la certeza unánime de 'aún hay más'. Japón tampoco se libró de esa trampa.",
  },
  dotcom: {
    title: "La burbuja puntocom — la ilusión del '.com'",
    impact: "La era en que cualquier nombre con '.com' se disparaba se vino abajo. La revolución de internet era real, pero estallaron las burbujas de empresas sin beneficios. La misma curva que la fiebre ferroviaria, 150 años después.",
    mind: "En cada era de innovación, el mercado primero se entusiasmó y luego separó el grano de la paja.",
  },
  "2008": {
    title: "Lehman — se rompe el 'demasiado grande para caer'",
    impact: "Un banco de inversión de 158 años quebró, sacudiendo el sistema financiero. Un mercado que creía en el 'demasiado grande para caer' se derrumbó de la noche a la mañana; el final de todo auge llevaba un 'esta vez es diferente'.",
    mind: "La creencia 'demasiado grande para caer' era en sí misma la burbuja más peligrosa.",
  },
  bitcoin: {
    title: "Bitcoin — dinero sin Estado",
    impact: "El viejo sueño del 'dinero sin Estado' se hizo realidad en código. La historia del dinero, que empezó con conchas, volvió a 'un activo que se sostiene solo en la creencia' — innovación o ilusión, la historia aún decide.",
    mind: "Como las conchas, el bitcoin gana valor 'si todos creen'. La esencia es la misma que hace 5.000 años.",
  },
  "covid-2020": {
    title: "El shock COVID y el auge de activos — el oso más rápido + el mayor estímulo",
    impact: "En solo cinco semanas de febrero-marzo de 2020, el S&P 500 se hundió un 34 % — el mercado bajista más rápido de la historia. Pero el mayor estímulo monetario y fiscal registrado dio la vuelta al mercado en seis meses, y en 2021 surgió una 'burbuja de todo' con todos los activos subiendo a la vez. El patrón de que la propia respuesta a la crisis se vuelve la semilla de la siguiente apareció en forma extrema.",
    mind: "El miedo paralizó el sistema; la política lo revivió al instante. Pero la misma mano que lo revivió se volvió la fuente de la siguiente burbuja.",
  },
  ai: {
    title: "La revolución de la IA y el mercado de hoy",
    year: "2023 ~",
    impact: "Las expectativas sobre la IA están elevando el mercado. Como con los ferrocarriles e internet, la tecnología es probablemente real — pero dónde divergen 'expectativa' y 'precio' solo se aclaró siempre en retrospectiva.",
    mind: "¿En qué curva de la historia estamos ahora? Responder a eso depende de ti.",
  },
};

// 사건 상세 본문 스페인어 (EVENT_DETAIL에 주입). 배치로 채워나감.
// 필드: subtitle·stats[{k,v}]·body[]·mechanism[]·aftermath[]·lesson·today·source·chart{unit,cap,peak,dataNote}
export const ES_EVENT_DETAIL = {
  tulip: {
    subtitle: "Países Bajos · 1634–1637",
    stats: [
      { k: "Bulbo más caro", v: "El precio de una casa" },
      { k: "Hasta el desplome", v: "Solo unos días" },
      { k: "Valor restante", v: "Casi cero" },
    ],
    chart: {
      cap: "Precio del bulbo de tulipán — colapso vertical pocos días tras el pico",
      peak: "Pico de la manía (feb. 1637)",
    },
    body: [
      "Los Países Bajos del siglo XVII vivían su Siglo de Oro. La Compañía de las Indias Orientales traía riqueza inmensa, y una nueva clase mercante buscaba símbolos de ella. El tulipán, llegado del Imperio otomano, ocupó ese lugar — sobre todo los bulbos mutados con patrones únicos por un virus, que se negociaban a precios astronómicos por su rareza.",
      "En el apogeo, un solo bulbo equivalía a diez años del salario de un artesano, incluso a una mansión junto al canal. La gente no compraba para cultivarlos, sino para 'venderlos más caros'. El comercio estalló con 'contratos de futuros' antes de que ningún bulbo cambiara de manos, y los papeles cambiaban de dueño decenas de veces en las tabernas.",
      "En febrero de 1637, en una subasta, de pronto dejaron de aparecer compradores. En ese instante todos comprendieron a la vez: 'ya no hay un tonto mayor que me lo compre más caro'. Los precios se hundieron más de un 99 % en días, dejando con las manos vacías a innumerables tenedores de papel.",
    ],
    mechanism: [
      "La tulipomanía no puede explicarse como mera 'locura'. La mayoría de las operaciones no eran de bulbos reales, sino contratos a plazo durante el invierno — los bulbos solo se desentierran en primavera, así que la gente pasó todo el invierno comprando y vendiendo 'promesas de entrega', revendiéndolas en las tabernas sin cámara de compensación central, sin control de márgenes, sin garantías.",
      "El precio se anclaba en bulbos infectados por un virus, cuyas franjas únicas eran la escasez — pero esos patrones no se reproducían de forma fiable, así que la calidad de la descendencia de cualquier bulbo era inverificable. El 'activo' subyacente de cada contrato era, pues, un resultado futuro fundamentalmente incomprobable. A medida que subían los precios, los nuevos compradores entraban no por el valor del bulbo, sino por la expectativa de que 'el próximo comprador pagará más'.",
    ],
    lesson: "La tulipomanía fue el primer caso a gran escala que mostró cómo el 'valor intrínseco' y el 'precio' pueden separarse por completo. Lo que sostenía el precio no era la belleza de la flor, sino la creencia en 'el próximo comprador pagando más'. El momento en que esa creencia se desvaneció fue el desplome.",
    aftermath: [
      "Tras el estallido, la respuesta del gobierno y los tribunales neerlandeses fue sorprendentemente tibia. En la primavera de 1637, ciudades como Haarlem dictaminaron que los contratos a plazo — tratados como algo parecido al juego — no se ejecutarían legalmente, y empujaron a las partes a saldar cuentas en privado. El daño se concentró en una parte de los mercaderes y la clase media; la economía neerlandesa en general no se hundió, y el comercio con las Indias Orientales y el poder naval continuaron durante décadas.",
      "Lo que perduró mucho más que cualquier cambio institucional fue una cicatriz cultural. Tras 'Delirios populares extraordinarios' de Charles Mackay (1841), la tulipomanía se volvió la metáfora arquetípica de toda burbuja de activos — 'el tulipán del siglo XXI' reaparece automáticamente cada vez que un nuevo activo se dispara. En honor a la verdad, estudios más recientes han sostenido que la escala de la manía fue algo exagerada por los moralistas victorianos — una salvedad que conviene recordar.",
    ],
    today: "Cada vez que un nuevo activo se dispara con un 'esta vez es diferente', aparece la sombra del tulipán. La pregunta que separa la innovación de la manía siempre fue una: ¿sostiene este precio el valor, o la expectativa sobre el próximo comprador?",
    source: "Edición propia a partir de la historia económica estándar. Algunas cifras varían según los registros de la época.",
  },
  "1929": {
    subtitle: "Estados Unidos · octubre de 1929",
    stats: [
      { k: "Caída del pico al mínimo", v: "aprox. −89 %" },
      { k: "Hasta recuperarse", v: "unos 25 años" },
      { k: "Pico de desempleo", v: "aprox. 25 %" },
    ],
    chart: {
      unit: "Dow Jones",
      cap: "Promedio Industrial Dow Jones (1921–1954)",
      peak: "381 (3 sept. 1929)",
      dataNote: "Basado en la trayectoria real del Dow (pico 381,17 → falso repunte en primavera de 1930 → mínimo 41,22, −89 % → recuperado en 1954). Fuente: Federal Reserve History (FRED)",
    },
    body: [
      "Los Estados Unidos de los años 20 — los 'Felices Años Veinte'. El automóvil, la radio y la electricidad rehicieron la vida diaria mientras las acciones subían sin fin. La compra a margen — pedir prestado para comprar acciones y luego volver a endeudarse con ellas como garantía — estaba muy extendida. El optimismo era unánime, hasta el punto de que se decía que incluso los limpiabotas daban consejos bursátiles.",
      "Las grietas empezaron el 24 de octubre de 1929 (Jueves Negro). Solo el 29 de octubre (Martes Negro) el mercado entró en pánico; las acciones compradas a margen fueron liquidadas por la fuerza, y la caída alimentó la caída. Cinco años de ganancias implacables se desmoronaron en días.",
      "La tragedia mayor vino después. El desplome se extendió a una cadena de quiebras bancarias y a la Gran Depresión, con el desempleo llegando al 25 %. El mercado tardó nada menos que 25 años en recuperar su pico.",
    ],
    mechanism: [
      "La profundidad de la Gran Depresión no se explica solo por 'un desplome bursátil'. El mecanismo central fue el apalancamiento apilado en tres capas. Primero, la compra a margen de los inversores minoristas: un 10 % de entrada y un 90 % prestado estaba muy extendido, de modo que incluso una caída del 10 % desencadenaba la liquidación forzosa. Segundo, los fondos de inversión en forma de pirámide — un fondo tenía acciones de otro fondo, que tenía otro, multiplicando geométricamente las pérdidas al deshacerse la estructura.",
      "La tercera capa fue el propio sistema financiero. EE. UU. no tenía seguro de depósitos, la banca comercial y la de inversión no estaban separadas, y los bancos tenían acciones directamente. La quiebra de un banco desataba pánicos sobre el siguiente, y unos 9.000 bancos cerraron entre 1930 y 1933. Atada al patrón oro, la Reserva Federal subió tipos una y otra vez en plena crisis para frenar la salida de oro — la masa monetaria se contrajo cerca de un tercio entre 1929 y 1933 (el clásico diagnóstico de Friedman y Schwartz).",
    ],
    lesson: "La Depresión es el arquetipo de la combinación más peligrosa: 'activos inflados por deuda' al encontrarse con el 'optimismo unánime'. Cuando todos miran en la misma dirección, no quedan compradores. Y el apalancamiento amplifica la caída tanto como la subida.",
    aftermath: [
      "El golpe impulsó un rediseño del propio sistema financiero de EE. UU. La Ley Glass-Steagall de 1933 separó la banca comercial de la de inversión para que el dinero de los depositantes ya no financiara la especulación bursátil (derogada en parte en 1999). Ese mismo año se creó la Corporación Federal de Seguro de Depósitos (FDIC), que rompió la reacción en cadena de los pánicos bancarios mediante el seguro de depósitos. La Ley de Bolsa de 1934 creó la SEC, lanzando la regulación moderna de divulgación, uso de información privilegiada y compra a margen.",
      "También hubo giros en la política monetaria y fiscal. EE. UU. abandonó de hecho el patrón oro en 1933 (incluso se prohibió la tenencia privada de oro), y el New Deal levantó los pilares del Estado de bienestar moderno — obra pública, Seguridad Social, protección laboral. A nivel macroeconómico, la 'Teoría general' de Keynes (1936) fue profundamente influyente, desplazando el equilibrio desde la ortodoxia decimonónica del 'los mercados se autocorrigen' hacia 'en las depresiones profundas, el gobierno debe crear demanda'. Buena parte de este esqueleto institucional sigue funcionando hoy.",
    ],
    today: "Cuando los índices están en máximos históricos y todos son optimistas, 1929 pregunta en voz baja: ¿cuánta 'deuda' se ha acumulado ahora en el mercado, y cuántos miran hacia el otro lado?",
    source: "Edición propia a partir de la historia económica y financiera estándar. La caída y la recuperación varían según la base del índice.",
  },
  dotcom: {
    subtitle: "Estados Unidos · 1995–2002",
    stats: [
      { k: "Pico del Nasdaq", v: "Marzo de 2000" },
      { k: "Caída desde el pico", v: "aprox. −78 %" },
      { k: "Hasta recuperarse", v: "unos 15 años" },
    ],
    chart: {
      unit: "Nasdaq Comp.",
      cap: "Índice Nasdaq Composite (1995–2015)",
      peak: "5.048 (10 mar. 2000)",
      dataNote: "Basado en la trayectoria real del Nasdaq (751 en 1995 → pico 5.048,62 → repuntes intermedios → mínimo 1.108,49, −78 % → recuperado en 2015). Fuente: registros públicos de mercado",
    },
    body: [
      "A finales de los años 90, internet surgió como la tecnología que lo cambiaría todo. Esa expectativa era correcta — el problema fue que los precios de las acciones corrieron muy por delante de ella. Bastaba añadir '.com' a un nombre para que las acciones se multiplicaran el primer día, incluso con cero ingresos.",
      "Los inversores creían que 'las viejas medidas como el PER no se aplican a la nueva economía' — que el número de usuarios creciendo como bola de nieve, y no los beneficios, era la nueva medida del valor. El capital riesgo volcaba miles de millones en un solo plan de negocio.",
      "Tras alcanzar el Nasdaq su pico en marzo de 2000, la burbuja se desinfló durante dos años. Miles de puntocom sin beneficios desaparecieron y el Nasdaq cayó cerca de un 78 %. Pero de los escombros sobrevivieron ganadores reales como Amazon y Google.",
    ],
    mechanism: [
      "El mecanismo de la burbuja puntocom fue la combinación de tres nuevas infraestructuras de mercado. Primero, tras la exitosa salida a bolsa de Netscape en 1995, bastaba el nombre '.com' para cotizar con valoraciones de miles de millones sobre ingresos casi nulos — hubo unas 460 salidas a bolsa puntocom en EE. UU. en 1999–2000, con una rentabilidad media del primer día de cerca del 65 %. Segundo, surgieron nuevos criterios de valoración — métricas no financieras como 'eyeballs' (visitantes), 'tasa de clics' y 'mindshare' reemplazaron a los ingresos como herramientas de justificación, y empresas sin beneficios con alta 'tasa de quema' (burn rate) podían valorarse mientras prometieran una futura cuota de mercado enorme. Tercero, la expansión de los planes 401(k) y las correduías de descuento (E*Trade y otras) llevó por primera vez a los inversores minoristas al mercado a gran escala — 'day trading' se volvió una palabra cotidiana.",
      "Sobre esto operaron dos bucles de retroalimentación. El primero fue el ciclo 'empresas de infraestructura como Cisco → startups puntocom → publicidad que vuelve a los ingresos de las de infraestructura' — gran parte de los ingresos de Cisco venía de startups puntocom financiadas con capital riesgo, y esas puntocom compraban equipos de Cisco, Oracle y Sun Microsystems para generar sus ingresos. El segundo fue un bucle mediático — la cobertura de cotizaciones las 24 horas de CNBC y Bloomberg reforzaba la narrativa de que 'las acciones suben para siempre'. En el pico de marzo de 2000 el Nasdaq Composite tocó 5.048 y para octubre de 2002 había caído a 1.114, un −78 %. Cisco fue brevemente la empresa más valiosa del mundo, con unos 500.000 millones de dólares de capitalización, y perdió casi un 90 %.",
    ],
    lesson: "La burbuja puntocom trazó la misma curva que la fiebre ferroviaria, 150 años después. 'Las viejas medidas no se aplican a la nueva tecnología' es la frase típica de toda burbuja. La revolución era real, pero el precio no podía saber de antemano quién sobreviviría a ella.",
    aftermath: [
      "La consecuencia institucional directa del desplome puntocom fue la Ley Sarbanes-Oxley de 2002 (SOX). Combinada con fraudes contables como Enron (2001) y WorldCom (2002), la SOX convirtió la responsabilidad contable personal de directores ejecutivos y financieros en materia de responsabilidad penal (hasta 20 años por certificación falsa) y reforzó las reglas de gobernanza — verificación del control interno de las cotizadas, independencia del auditor externo y más. Esto se volvió de hecho obligatorio para toda empresa estadounidense cotizada e influyó en las normas contables globales. La crítica de que los costes de cumplimiento de la SOX son excesivos para las empresas pequeñas continúa hoy.",
      "El legado más profundo es un cambio en el patrón de las salidas a bolsa. Antes de las puntocom, incluso empresas pequeñas y jóvenes solían salir a bolsa pronto; después, la edad media de una salida a bolsa en EE. UU. pasó de unos 4 años desde la fundación a unos 11 (según el seguimiento de Jay Ritter). El hueco lo llenaron las 'rondas de capital riesgo en etapa tardía' (series C/D/E) que surgieron a finales de los 90 y estallaron en la década de 2010, junto con el capital privado — la carga de riesgo del capital se desplazó de los mercados públicos a los privados tras las puntocom. Entretanto, las puntocom supervivientes (Amazon, eBay, Google, etc.) acabaron realizando el 'dominio de la economía de internet' que la burbuja había prometido, lo que convierte este caso en uno de los más fuertes de la historia para el patrón de que 'lo verdadero llega después de la burbuja'.",
    ],
    today: "En el auge de la IA vuelve a oírse 'esta vez es diferente'. La lección de las puntocom tiene dos caras — internet realmente cambió el mundo y, a la vez, la mayoría de las acciones puntocom cayeron a cero. Creer en la revolución no es lo mismo que creer en cada precio.",
    source: "Edición propia a partir de la historia financiera estándar. La caída y la recuperación varían según la base del índice.",
  },
  "2008": {
    subtitle: "Estados Unidos · 2007–2009",
    stats: [
      { k: "El banco que quebró", v: "158 años de historia" },
      { k: "Caída del S&P 500", v: "aprox. −57 %" },
      { k: "Respuesta política", v: "Liquidez récord" },
    ],
    chart: {
      unit: "S&P 500",
      cap: "Índice S&P 500 (2007–2013)",
      peak: "1.565 (9 oct. 2007)",
      dataNote: "Basado en la trayectoria real del S&P 500 (pico 1.565,15 → desplome de Lehman en sept. 2008 → mínimo 676,53, ~−57 % → recuperado en 2013). Fuente: registros públicos de mercado",
    },
    body: [
      "A mediados de los años 2000 dominaba la creencia de que los precios de la vivienda en EE. UU. 'nunca bajan'. Los bancos concedían hipotecas (subprime) incluso a deudores dudosos, y luego empaquetaban estos préstamos arriesgados en productos complejos vendidos por todo el mundo. El riesgo se empaquetó fuera de la vista.",
      "Cuando los precios de la vivienda se giraron, empezó una reacción en cadena. En septiembre de 2008 quebró el banco de inversión Lehman Brothers, de 158 años. Un mercado que creía en el 'demasiado grande para caer' quedó atónito, y un congelamiento del crédito — nadie confiando en nadie — bloqueó las finanzas mundiales.",
      "Los gobiernos y los bancos centrales liberaron una liquidez récord para evitar el colapso sistémico. Los mercados acabaron recuperándose, pero dejaron la lección: 'lo que se creía seguro era lo más peligroso'.",
    ],
    mechanism: [
      "El mecanismo de la crisis de 2008 fue una cadena de tres capas. La primera capa fue el mercado inmobiliario de EE. UU. — a principios y mediados de los 2000, los tipos bajos y los criterios de préstamo relajados entregaron volúmenes enormes de hipotecas no tradicionales, a tipo variable y solo de intereses, a deudores 'subprime' de menor solvencia. De 2002 a 2006, los precios de la vivienda en EE. UU. (Case-Shiller) subieron cerca de un 80 %. La gente se endeudaba sobre el supuesto de que 'los precios de la vivienda suben para siempre', y algunos repetían el 'flipping' a casas más grandes en cuanto compraban.",
      "La segunda capa fue la titulización. Los bancos no mantenían las hipotecas en sus libros; miles de hipotecas se agrupaban en bonos de titulización hipotecaria (MBS) → se reagrupaban en obligaciones de deuda garantizada (CDO) → se reestructuraban de nuevo en 'CDO sintéticos', vendidos a inversores de todo el mundo. Las agencias de calificación (Moody's, S&P) otorgaron la nota AAA a grandes porciones sin comprender del todo la estructura, y la percepción de 'activos seguros' generó demanda global. La tercera capa fueron las permutas de incumplimiento crediticio (CDS), que permitían a cualquiera apostar por el impago de un bono como si comprara un seguro — amplificando el riesgo sistémico. Cuando los precios de la vivienda en EE. UU. tocaron techo y bajaron en 2007, la cadena subprime → MBS → CDO → CDS se deshizo en sentido inverso, y el 15 de septiembre de 2008, Lehman Brothers (con 639.000 millones de dólares en activos) presentó la mayor quiebra empresarial de la historia de EE. UU.",
    ],
    lesson: "El núcleo de Lehman: la ilusión de que 'empaquetar el riesgo fuera de la vista lo hace desaparecer'. La compleja ingeniería financiera ocultó el riesgo, pero no lo eliminó. Y la creencia 'demasiado grande para caer' era en sí misma la burbuja más peligrosa.",
    aftermath: [
      "La respuesta de 2008 se desarrolló en dos dimensiones. A corto plazo: la primera política monetaria no convencional de la Reserva Federal — bajar el tipo de referencia al 0–0,25 % y comprar cerca de 4,5 billones de dólares en bonos mediante flexibilización cuantitativa (QE). Al mismo tiempo, el Programa de Alivio de Activos en Problemas (TARP, ~700.000 millones) inyectó capital directamente en los bancos, y AIG, Citigroup, GM y Chrysler fueron de hecho nacionalizados o rescatados. Esta respuesta evitó un colapso monetario y económico a la escala de 1929, pero recibió fuertes críticas por reafirmar el riesgo moral del 'demasiado grande para caer'.",
      "El resultado institucional fue la Ley Dodd-Frank de Reforma de Wall Street y Protección al Consumidor de 2010 — con unas 2.300 páginas, la legislación más amplia de la historia regulatoria financiera de EE. UU. Sus herramientas centrales incluyen (1) la Regla Volcker (prohibir la negociación por cuenta propia de los bancos comerciales), (2) la nueva Oficina de Protección Financiera del Consumidor (CFPB), (3) reglas reforzadas de capital y liquidez para las instituciones financieras de importancia sistémica (SIFI, ligadas a Basilea III) y (4) la compensación central obligatoria de derivados. 2008 fue también un punto de inflexión social y político — la QE posterior a la crisis infló los precios de los activos y amplió la brecha entre quienes tienen activos y quienes no, alimentando el movimiento Occupy (2011), la política populista (de izquierda y derecha) y el auge de las criptomonedas (el documento técnico de Bitcoin se publicó el 31 de octubre de 2008). Dodd-Frank se flexibilizó en parte en 2018 y volvió a ponerse a prueba durante el episodio del SVB en 2023.",
    ],
    today: "Cuando 'este producto es seguro' o 'esto no puede quebrar' se extiende por el mercado, 2008 pregunta: ¿ha desaparecido el riesgo, o solo se ha empaquetado fuera de la vista?",
    source: "Edición propia a partir de la historia financiera estándar. La caída varía según el índice y el periodo.",
  },
  bitcoin: {
    subtitle: "Mundial · 2009 ~ presente",
    stats: [
      { k: "Emisor", v: "Ninguno (descentralizado)" },
      { k: "Suministro total", v: "21 M fijo" },
      { k: "Volatilidad", v: "muy alta" },
    ],
    chart: {
      unit: "Bitcoin (USD)",
      cap: "Precio del bitcoin (2013–2025)",
      peak: "123.000 $ (jul. 2025)",
      dataNote: "Basado en precios reales (19 mil $ en 2017 → 69 mil $ en 2021 → 16 mil $ tras FTX en 2022 → ~123 mil $ en jul. 2025). Marcado por ciclos de auge y caída de ~4 años; muy volátil",
    },
    body: [
      "En 2009, justo después de que la crisis de 2008 sacudiera la confianza en 'el dinero gestionado por Estados y bancos', una figura desconocida (Satoshi Nakamoto) lanzó el bitcoin. La idea central era radical — dinero que funciona solo con matemáticas y código, sin un Estado emisor y sin un banco que lo garantice.",
      "El bitcoin hizo funcionar por primera vez en la realidad el viejo sueño de la humanidad del 'dinero sin Estado'. También se sitúa en medio de un feroz debate — unos lo llaman el futuro del dinero, otros un activo especulativo sin valor intrínseco.",
      "Lo llamativo: el bitcoin cerró el círculo de la historia del dinero. Como las conchas, no tiene valor inherente, pero gana valor 'si todos creen'. Volvió a mostrar, en la era digital, que la esencia del dinero es la misma que hace 5.000 años — la creencia colectiva.",
    ],
    mechanism: [
      "El mecanismo del bitcoin fue una respuesta técnica a la vieja pregunta: '¿se puede crear dinero sin un Estado?'. Tres invenciones centrales: primero, la prueba de trabajo (Proof-of-Work) — generar un nuevo bloque exige enormes recursos de cómputo para resolver un difícil problema matemático, de modo que el coste de falsificar siempre es mayor que el de ser honesto. Segundo, el libro mayor distribuido (blockchain) — cada registro de transacción lo mantienen a la vez unos 10.000 nodos o más, y si un nodo manipula, la mayoría lo rechaza. Tercero, un suministro fijado en el propio código — un total de 21 millones, con la nueva emisión reduciéndose a la mitad cada cuatro años aproximadamente (el 'halving'). El emisor no es una persona, sino el código.",
      "La idea central del diseño es distribuir la confianza. El dinero convencional se apoya en la confianza en un emisor (un banco central); el bitcoin reparte esa confianza entre unos 10.000 nodos y mineros independientes y un código público — para alterar el sistema, una institución tendría que reunir más de la mitad de la potencia de cómputo mundial. Sin embargo, el diseño conlleva contrapartidas. Primero, el rendimiento es lento (unas 7 transacciones por segundo, una fracción ínfima de la capacidad de Visa). Segundo, el consumo energético de la prueba de trabajo ronda los 150–170 TWh anuales — cercano al consumo total de Noruega. Tercero, y de forma más fundamental, el único ancla de valor es la demanda en sí, por lo que la volatilidad es intrínsecamente grande (el −84 % de la burbuja de 2017, el −77 % de la de 2021 y varios otros ciclos de desplome).",
    ],
    lesson: "El bitcoin es el caso que responde de forma más dramática a la pregunta de este archivo: '¿qué hace que el dinero sea dinero?'. Sin respaldo en oro, sin garantía estatal. Su valor se sostiene en un solo hecho: 'todos creen'. Esa es su fortaleza — y, a la vez, su mayor debilidad.",
    aftermath: [
      "La llegada del bitcoin es un punto de inflexión en curso en la historia del pensamiento monetario. Directamente, se han derivado más de 10.000 altcoins (la mayoría burbujas y fracasos), y desde que Ethereum (2015) introdujo los 'contratos inteligentes', se han formado nuevos mercados como las finanzas descentralizadas (DeFi), los NFT y las stablecoins. En 2024, las stablecoins (USDT, USDC, etc.) suman cerca de 150.000 millones de dólares de capitalización — una estructura paradójica de 'volver a poner el dólar sobre las cripto', es decir, la envoltura digital del dinero fiduciario.",
      "Las respuestas institucionales van en dos direcciones. Por un lado, los bancos centrales de todo el mundo investigan y despliegan CBDC (monedas digitales de banco central) — China (piloto del yuan digital), Europa (estudio del euro digital), EE. UU. (en discusión) — todos respondiendo a la posibilidad del 'dinero digital' que planteó el bitcoin. Por otro lado, la regulación — la aprobación de ETF de bitcoin al contado por la SEC de EE. UU. en 2024, el reglamento europeo MiCA (en vigor en 2024) y la Ley de Protección del Usuario de Activos Virtuales de Corea (en vigor en 2024) — está absorbiendo las cripto en el universo legal de activos. La posición a largo plazo del propio bitcoin — oro digital o residuo de una manía especulativa — aún la decide la historia, pero, sin duda, ha cambiado de forma permanente el debate sobre el futuro del sistema monetario.",
    ],
    today: "Si el bitcoin es innovación o manía, la historia aún lo decide. Una cosa está clara — si la 'creencia' sostiene su precio, la pregunta que viene desde los tulipanes también se aplica aquí. Su alta volatilidad exige una mirada más prudente.",
    source: "Edición propia a partir del documento técnico público y de relatos estándar. No es asesoramiento de inversión; las cripto son muy volátiles.",
  },
  cowrie: {
    subtitle: "Asia y África · a. C. ~",
    stats: [
      { k: "Circulación", v: "A través de continentes" },
      { k: "Valor intrínseco", v: "Casi ninguno" },
      { k: "Duración de uso", v: "Milenios" },
    ],
    chart: {
      cap: "Adopción del dinero mercancía — difusión gradual durante milenios",
      peak: "Uso intercontinental",
    },
    body: [
      "Cuando los humanos obtuvieron excedentes con la agricultura, comenzó el intercambio. Pero el trueque tenía una falla fundamental — había que encontrar a alguien que a la vez quisiera tu arroz y tuviera la sal que tú querías. Esta 'doble coincidencia de deseos' exigía una solución.",
      "Una de las cosas que ocupó ese papel fue la concha de cauri. Duradera y de desgaste lento, difícil de falsificar, lo bastante uniforme para contarse con facilidad. Sobre todo, a todos les parecía 'bonita' y la aceptaban de buen grado. Las cauris circularon como dinero por vastas regiones de Asia y África.",
      "Lo llamativo: una concha en sí casi no tenía 'utilidad' — no se podía comer ni vestir. Aun así la gente la aceptaba, porque creía que 'la próxima persona también la aceptará'. El secreto más profundo del dinero se reveló aquí por primera vez.",
    ],
    mechanism: [
      "Las cauris funcionaron como dinero por razones estructurales claras. Primero, las conchas de Cypraea moneta eran naturalmente uniformes en forma y tamaño — contables como 'unidades' sin procesarlas. Segundo, eran duraderas, ligeras y prácticamente imposibles de falsificar (haría falta el molusco vivo de la misma especie). Tercero, su origen — sobre todo las Maldivas en el océano Índico — era limitado, así que se volvían naturalmente escasas tierra adentro.",
      "Lo que sostenía el valor era la combinación de la aceptación colectiva y de un suministro naturalmente restringido: todos las tomaban por convención social, y nadie podía 'imprimir' más con facilidad. Pero el equilibrio podía romperse — cuando las potencias coloniales europeas del siglo XIX enviaron toneladas de cauris maldivas a África Occidental, la moneda local de cauris perdió valor rápidamente. Un caso temprano de 'colapso monetario por un shock de oferta externo'.",
    ],
    lesson: "La cauri es la primera prueba de que la esencia del dinero no es 'el valor de la cosa en sí', sino 'la confianza colectiva en que todos la aceptan'. Esta estructura no ha cambiado ni un ápice en 5.000 años, hasta el bitcoin — si todos creen, aparece el valor; si se pierde la creencia, no es más que una concha.",
    aftermath: [
      "La era de la cauri dejó marcas profundas en la historia del dinero. La más directa está en los caracteres chinos — los relativos al dinero y el comercio (財/riqueza, 貨/bienes, 買/comprar, 賣/vender, 貯/guardar) llevan todos el radical 貝 de 'concha'. La escritura que usamos milenios después aún conserva fosilizada aquella era.",
      "El legado conceptual es mayor. Lo que enseñaron las cauris — que 'un objeto inútil puede volverse dinero si todos lo aceptan' — se convirtió en la raíz de toda forma monetaria posterior (moneda, papel, digital). Cada vez que un activo digital como el bitcoin se enfrenta a la pregunta '¿por qué tiene valor esto?', volvemos a la misma respuesta que dio primero la cauri: 'aceptación colectiva + suministro restringido = dinero'.",
    ],
    today: "Si el valor de un activo viene de su 'utilidad inherente' o de la 'creencia en que otros lo aceptarán' — esta pregunta se aplica por igual a toda moneda y todo activo, desde la era de las conchas hasta hoy.",
    source: "Edición propia a partir de la historia económica y la antropología estándar.",
  },
  lydia: {
    subtitle: "Reino de Lidia · siglo VII a. C.",
    stats: [
      { k: "Material", v: "Electro (aleación de oro y plata)" },
      { k: "Primera garantía", v: "El sello del Estado" },
      { k: "Legado", v: "2.600 años de moneda" },
    ],
    chart: {
      cap: "Confianza en la moneda — la garantía estatal difundió el comercio con rapidez",
      peak: "La era de la moneda se establece",
    },
    body: [
      "El dinero mercancía era cómodo, pero limitado. Para comerciar con trozos de oro o plata había que pesarlos cada vez y sospechar de su pureza. Necesitar balanza y ensayo en cada trato era una gran fricción.",
      "En el siglo VII a. C., el reino de Lidia, en Asia Menor, ofreció una solución: estampar un emblema de león sobre trozos de electro (una aleación natural de oro y plata) de peso fijo. Ese sello declaraba: 'el rey garantiza el peso y la pureza de este metal'. Nació la primera moneda del mundo.",
      "El efecto fue revolucionario. Ahora la gente comerciaba confiando en el sello del rey, sin pesar. El centro de la confianza pasó de 'lo que yo mismo verifico' a 'lo que el Estado garantiza' — una idea que recorre Grecia y Roma hasta cada moneda de hoy.",
    ],
    mechanism: [
      "La innovación de Lidia parece simple, pero fue esencial. Primero, estandarizar el peso de los trozos de electro (una aleación natural de oro y plata) eliminó el pesaje en cada trato. Segundo, el sello del león del rey firmaba visualmente 'el Estado garantiza la pureza y el peso de este metal'. Tercero, la proporción natural de oro y plata del electro variaba mucho (12–43 %), así que los comerciantes no podían verificar el valor con facilidad — el sello del Estado asumió exactamente ese coste de verificación.",
      "El verdadero poder de la idea fue transferir los costes de transacción. El coste de 'pesar + ensayar' que cada comerciante había soportado cada vez quedó agrupado en el coste único del Estado al acuñar. El pago se redujo a contar, y el comercio se aceleró sin comparación. Incluso tras la caída de Lidia, Persia (dárico/siglo), Grecia y Roma adoptaron el modelo por completo; más tarde, para resolver la incertidumbre de valor del electro, se emitieron por separado monedas de oro puro y de plata pura, refinando el estándar.",
    ],
    lesson: "El núcleo de la moneda de Lidia: el descubrimiento de que 'la garantía de la autoridad' reduce drásticamente los costes de transacción. El dinero nunca fue un simple disco de metal, sino 'la confianza en el poder que lo respalda'. La larga historia de la unión entre Estado y dinero empieza aquí.",
    aftermath: [
      "El sistema monetario de Lidia transformó las propias estructuras militar, política y económica. El cambio más directo fue el amanecer de la 'era de los mercenarios' — una vez que un Estado pudo pagar salarios en moneda estandarizada, fueron posibles los ejércitos profesionales independientes de las milicias tribales o ciudadanas, y tanto las ciudades-Estado griegas como el Imperio persa tomaron ese camino. La fiscalidad monetaria, los mercados urbanos y el comercio de larga distancia estallaron con ello.",
      "Institucionalmente, aquí empieza la larga historia de la 'unificación de Estado y dinero'. Desde el dárico de Persia hasta el dracma de Atenas, el denario de Roma y el sólido de Bizancio, hasta los billetes de los bancos centrales modernos — el modelo de Lidia, 'el emisor garantiza el valor', se ha mantenido esencialmente sin cambios durante 2.600 años. Solo ha cambiado la base de la garantía: del contenido metálico (Lidia, Roma), pasando por la convertibilidad en oro (el patrón oro del siglo XIX), hasta la credibilidad del banco central (el dinero fiduciario moderno).",
    ],
    today: "Que hoy aceptemos billetes y cifras digitales sin dudar también descansa en 'la confianza en el emisor'. El sello del león de Lidia solo cambió de forma hasta convertirse en el logotipo de un banco central; la esencia es la misma tras 2.600 años.",
    source: "Edición propia a partir de la historia monetaria estándar.",
  },
  debasement: {
    subtitle: "Imperio romano · siglos I–III",
    stats: [
      { k: "Plata del denario", v: "Hacia cero" },
      { k: "Causa", v: "Déficit crónico" },
      { k: "Resultado", v: "Precios desbocados" },
    ],
    chart: {
      cap: "Contenido de plata del denario — confianza erosionada lentamente",
      peak: "Plata casi pura (inicio del imperio)",
    },
    body: [
      "La moneda de referencia del Imperio romano era el denario de plata. A comienzos del imperio era casi de plata pura, y esa confianza sostenía la vasta economía romana — pagaba a los soldados y era la base de todo trato con las provincias.",
      "Pero cuando la guerra y el lujo vaciaron el tesoro, los emperadores cayeron en una tentación silenciosa: reducir poco a poco el contenido de plata del denario y mezclar metales más baratos. Con la misma plata acuñaban más monedas para cubrir el gasto inmediato. Al principio nadie lo notó.",
      "Pero el mercado acabó por darse cuenta. Al comprender que las monedas tenían menos plata, la gente exigía más monedas por los mismos bienes — los precios se dispararon. Hacia el siglo III el denario había perdido casi todo su valor, y la economía romana cayó en una profunda turbulencia. El primer colapso registrado del valor de una moneda.",
    ],
    mechanism: [
      "La degradación del denario romano no fue mera corrupción, sino una trampa estructural. Primero, subir los impuestos era políticamente difícil (la resistencia del Senado y de los ciudadanos), así que cada vez que faltaban fondos, 'acuñar más monedas con el mismo nombre' era la solución inmediata y silenciosa. La única forma de hacer más monedas con la misma plata era reducir el contenido de plata por moneda y mezclar cobre o plomo. El contenido de plata cayó de cerca del 95 % a mediados del siglo I a menos del 5 % a mediados del III.",
      "Segundo, una vez que el mercado reconoció que 'las monedas tienen menos plata', entró en juego la ley de Gresham — la gente atesoraba las viejas monedas de alta calidad (la moneda mala expulsa a la buena), solo circulaban las degradadas, y exigían más monedas por los mismos bienes. Además, Diocleciano (301 d. C.) intentó fijar los precios por ley (el Edicto de Precios Máximos), pero congelar los precios mientras la oferta monetaria crecía solo hizo que los bienes desaparecieran de los mercados — la primera demostración a gran escala de que los controles de precios no pueden contener la inflación.",
    ],
    lesson: "La degradación de la moneda romana mostró por primera vez qué ocurre 'cuando la autoridad que garantiza el dinero traiciona su propia confianza'. Cuando un emisor erosiona el valor por una ganancia a corto plazo, acaba derrumbándose toda la confianza en esa moneda. La esencia de la inflación, antes y ahora, es 'la dilución de la confianza'.",
    aftermath: [
      "Tras la crisis del siglo III, Roma tuvo que reconstruir su sistema monetario desde cero. Diocleciano (284–305) reacuñó monedas y reorganizó la administración y la fiscalidad, y Constantino (306–337) introdujo una nueva moneda de oro, el sólido. Con unos 4,5 g y más del 95 % de pureza, el sólido se mantuvo estable durante casi 700 años, convirtiéndose en la moneda de referencia del Imperio bizantino y en el patrón medieval del 'oro de verdad' en el comercio europeo, islámico y de Asia oriental — su estabilidad vino directamente de la lección del colapso del denario.",
      "El legado conceptual es más profundo. El patrón 'presión fiscal + monopolio de la emisión = tentación de degradar' se convirtió en el punto de partida de toda la teoría monetaria posterior. Los dos dispositivos centrales de los bancos centrales modernos — los objetivos de inflación explícitos (normalmente el 2 %) y la independencia política del banco central (sobre todo desde los años 70) — tienen su raíz directa en la lección romana: 'no dejes que el emisor destruya el valor del dinero por una ganancia política a corto plazo'. La sombra del denario aún se proyecta sobre toda política monetaria dos milenios después.",
    ],
    today: "Cada vez que los bancos centrales modernos imprimen dinero en masa, surgen temores de un 'denario de la era digital'. La relación entre la oferta monetaria, los precios y la confianza en el dinero — la pregunta que planteó Roma hace 2.000 años sigue vigente hoy.",
    source: "Edición propia a partir de la historia monetaria y romana estándar. Los cambios en el contenido de plata varían según el registro de cada periodo.",
  },
  jiaozi: {
    subtitle: "Sichuan, China Song · siglo XI",
    stats: [
      { k: "Primicia mundial", v: "Papel moneda estatal" },
      { k: "Origen", v: "Monedas de hierro pesadas" },
      { k: "Debilidad", v: "Sobreemisión" },
    ],
    chart: {
      cap: "Valor del jiaozi — la sobreemisión quebró la confianza",
      peak: "Pico de uso generalizado",
    },
    body: [
      "En la China Song del siglo XI, la región de Sichuan tenía un problema peculiar. Escasa de cobre, usaba pesadas monedas de hierro; comprar un rollo de seda significaba acarrear decenas de kilos de monedas en carro. El comercio estaba lastrado.",
      "Los mercaderes idearon un truco: depositar las pesadas monedas de hierro en tiendas de confianza y comerciar con los 'recibos' — una promesa de canjear el papel por monedas en cualquier momento. Ese papel pasaba de mano en mano y se volvió, de hecho, dinero: el primer papel moneda del mundo, el 'jiaozi'. Más tarde el gobierno Song lo emitió oficialmente.",
      "Aquí la humanidad dio un gran salto — comerciar con 'una promesa en papel' sin lo físico pesado. Pero con ello nació una debilidad. Cuando el gobierno se vio en apuros fiscales, imprimió más jiaozi que las monedas de hierro en reserva; la confianza vaciló y el valor se desplomó. La luz y la sombra del papel moneda estuvieron presentes desde el principio.",
    ],
    mechanism: [
      "El funcionamiento del jiaozi evolucionó en dos etapas. La primera (principios del siglo XI) fue de origen privado — dieciséis casas mercantiles de confianza de Sichuan recibían depósitos de monedas de hierro y emitían papel que prometía su valor; ese papel circulaba a su valor nominal. La clave era una correspondencia 1:1 entre las monedas de hierro depositadas y los jiaozi emitidos — la promesa de canjear el papel en cualquier momento era el pilar de la confianza. En 1023 el gobierno Song nacionalizó el sistema y creó la Oficina del Jiaozi en Yizhou, estandarizando la emisión.",
      "La segunda etapa fue la erosión de la confianza. Al principio las reservas se mantuvieron de forma bastante sólida en torno al 70 % de la emisión, pero con el tiempo, bajo la presión del gasto militar (sobre todo las guerras con los kitán, los yurchen y los mongoles en el norte), el Estado Song imprimió muchos más jiaozi que sus reservas. El patrón se repitió cuando la moneda se rebautizó como 'huizi' a finales del siglo XII, y con el 'jiaochao' de la dinastía Yuan llegó de hecho a una emisión ilimitada. El resultado fue el mismo cada vez — cuando el mercado se daba cuenta, el valor se desplomaba.",
    ],
    lesson: "El jiaozi es el punto de partida de una gran invención: el 'crédito'. La capacidad de comerciar solo con una promesa, sin lo físico, hizo estallar el capitalismo. Al mismo tiempo, el dilema eterno del papel moneda apareció desde el principio: 'cuando el emisor de promesas se excede, la confianza se derrumba'.",
    aftermath: [
      "El auge y la caída del jiaozi dejaron un trauma profundo dentro de China. La dinastía Ming volvió a intentar el papel moneda temprano con el 'Da Ming Baochao', pero repitió los fracasos de los Song y los Yuan y perdió valor rápidamente; al final, Ming y Qing se replegaron a un orden monetario conservador anclado en la plata (monedas de plata y lingotes 'sycee') durante unos 400 años. La civilización que primero alcanzó el potencial del papel moneda fue también la primera en reconocer sus peligros y la que más tiempo se mantuvo a distancia.",
      "Desde una perspectiva global, el verdadero legado del jiaozi es haber 'demostrado a la vez el potencial y el peligro del dinero de crédito'. Tras llegar a Europa a través de los relatos de Marco Polo (finales del siglo XIII), la lección Song actuó como advertencia latente cuando el Riksbank de Suecia (1661) y el Banco de Inglaterra (1694) reinventaron el papel moneda en el siglo XVII. El dinero fiduciario de hoy (universalizado tras el fin de Bretton Woods en 1971) funciona como el jiaozi — solo con confianza, sin reservas físicas. En esencia, repetimos el experimento del jiaozi de 1023, sobre un aparato más elaborado (independencia del banco central, objetivos de inflación, disciplina de mercado).",
    ],
    today: "Hoy todos los billetes y el dinero digital son descendientes del jiaozi. La lección del siglo XI — 'la moderación en la emisión mantiene la confianza; la sobreemisión destruye el valor' — es exactamente el núcleo de la política monetaria moderna.",
    source: "Edición propia a partir de la historia monetaria y de la dinastía Song estándar.",
  },
  "south-sea": {
    subtitle: "Gran Bretaña · 1720",
    stats: [
      { k: "Subida de la acción", v: "~10× en un año" },
      { k: "Víctima famosa", v: "Newton (según se dice)" },
      { k: "Naturaleza", v: "Expectativa hueca" },
    ],
    chart: {
      cap: "Acción de los Mares del Sur — una burbuja de expectativa hueca",
      peak: "Pico de la burbuja (verano de 1720)",
    },
    body: [
      "En la Gran Bretaña de 1720, la South Sea Company tenía un monopolio prometido sobre el comercio sudamericano. Su negocio real era escaso, pero la fantasía de 'las inmensas riquezas de Sudamérica' atrapó a la gente. Los privilegios concedidos por absorber la deuda del gobierno añadían confianza.",
      "La acción se disparó cerca de diez veces en menos de un año. De los nobles a los plebeyos, todos se lanzaron, y surgieron por docenas 'compañías' imitadoras de sustancia desconocida. A todos los atrapó la fiebre de 'no puedo ser yo el que se quede atrás'.",
      "La burbuja acabó estallando. Al derrumbarse las expectativas huecas, la acción se desplomó e innumerables inversores quebraron. Hasta el genio Isaac Newton, según se dice, perdió una fortuna. Se cuenta que comentó que podía calcular los movimientos de los cielos, pero no la locura de la gente.",
    ],
    mechanism: [
      "La burbuja de los Mares del Sur no fue solo manía, sino una máquina financiera finamente diseñada. El mecanismo central fue un esquema de canje de deuda por acciones. A cambio de absorber la deuda del gobierno británico, la compañía recibía privilegios (nominalmente un monopolio sobre el comercio sudamericano) e ingresos anuales por intereses; a cambio, emitía sus propias acciones a los tenedores de deuda. El truco clave: 'a medida que sube el precio de la acción, la misma deuda se absorbe con menos acciones → la compañía obtiene un excedente de acciones → venderlas en el mercado o repartirlas como bonificaciones empuja el precio más alto'. Un bucle alcista que se autoalimenta.",
      "Dos tipos de apalancamiento agravaron esto. Primero, los pagos a plazos de la suscripción — los suscriptores pagaban solo un 10–20 % por adelantado y el resto a plazos, permitiendo de hecho una compra apalancada de 5–10×. Segundo, el uso de información privilegiada por directores y políticos — inflaban el precio y vendían en el pico. Justo tras el pico del verano de 1720, los compradores apalancados incapaces de afrontar sus pagos a plazos se vieron forzados a vender, y el precio se desplomó casi un 90 % en un solo trimestre. Una investigación parlamentaria concluyó después que unos 500 diputados y más de 100 nobles habían estado enredados en las acciones y los sobornos.",
    ],
    lesson: "La lección de la burbuja de los Mares del Sur: 'hasta la inteligencia es impotente ante la psicología de masas'. Una de las mentes más brillantes de la historia fue arrastrada por la manía. La astucia no nos protege de las burbujas — de hecho, la confianza de 'yo soy diferente' puede ser lo más peligroso.",
    aftermath: [
      "La consecuencia institucional más directa de la burbuja de los Mares del Sur fue la Ley de Burbujas (Bubble Act) de 1720. La ley prohibió formar sociedades por acciones sin permiso real, suprimiendo de hecho el surgimiento de nuevas corporaciones en Gran Bretaña durante más de un siglo (derogada en 1825). La intención era frenar la especulación, pero los efectos secundarios fueron grandes — la formación de capital en los inicios de la Revolución Industrial quedó restringida, así que buena parte de la primera industrialización británica se financió a través de sociedades, propiedad familiar y préstamos bancarios. El primer caso histórico de 'sobrerregulación posterior a una burbuja que frena la innovación'.",
      "El legado político y cultural perduró mucho más. Al gestionar las secuelas, Robert Walpole consolidó su influencia como el 'Screen-Master' que protegió de la exposición a la casa real y a los funcionarios del gobierno, convirtiéndose en el primer primer ministro de facto de Gran Bretaña (1721–1742). La palabra 'burbuja' se volvió sinónimo de las manías especulativas por este caso, y toda burbuja posterior se discute bajo la sombra del nombre 'South Sea'. La propia compañía, parcialmente liquidada, siguió a la deriva en su forma hasta su disolución total en 1853.",
    ],
    today: "Cuando sientes la certeza de que 'esta inversión es diferente porque he estudiado lo suficiente', la burbuja de los Mares del Sur advierte en voz baja a través de la anécdota de Newton — que hasta el más listo cayó.",
    source: "Edición propia a partir de la historia financiera estándar. La anécdota de Newton se cita ampliamente pero es de origen incierto, por eso se indica 'según se dice'.",
  },
  "gold-standard": {
    subtitle: "Orden mundial liderado por Gran Bretaña · siglo XIX",
    stats: [
      { k: "Ancla", v: "Fijado al oro" },
      { k: "Efecto", v: "Tipos estables" },
      { k: "Debilidad", v: "Rigidez" },
    ],
    chart: {
      cap: "Estabilidad cambiaria — baja volatilidad gracias al ancla del oro",
      peak: "Orden global estable",
    },
    body: [
      "En el siglo XIX, al estallar el comercio mundial, surgió un problema nuevo: con monedas distintas por nación, ¿cómo alinear sus valores? Sin un estándar de cuántos francos franceses equivalían a una libra esterlina, el comercio internacional era una confusión sin fin.",
      "La solución fue un ancla común: el oro. Cuando cada nación fijó su moneda a una cantidad fija de oro, todas las monedas se convertían automáticamente a través del oro. El patrón oro liderado por Gran Bretaña unió la economía mundial del siglo XIX en un orden estable. Con tipos de cambio previsibles, el comercio y la inversión florecieron.",
      "Pero el patrón oro tenía una rigidez fatal. Con la oferta monetaria atada a las reservas de oro, los gobiernos no podían inyectar dinero con flexibilidad ni siquiera en una crisis. Esta rigidez se señaló después como una de las causas que agravaron la Gran Depresión, y en el siglo XX el patrón oro se desvaneció en la historia.",
    ],
    mechanism: [
      "El patrón oro clásico (aproximadamente 1870–1914) funcionaba con dos reglas simples. Primero, el banco central de cada país estaba obligado a cambiar libremente su moneda por oro a una proporción fija — por ejemplo, 1 onza ≈ 4,25 £ en Gran Bretaña, 1 onza = 20,67 $ en EE. UU. Segundo, no había restricción al movimiento de oro entre países. Solo estas dos reglas fijaban los tipos de cambio automáticamente — cuando una moneda subía, la gente convertía oro en ella para obtener un beneficio de arbitraje, y ese flujo devolvía el tipo al equilibrio.",
      "El mecanismo de autoajuste de este sistema se conoce como el 'mecanismo del flujo de precios y metálico' de David Hume. Cuando el oro salía de un país con déficit comercial, la oferta monetaria se contraía → los precios y los salarios bajaban → se recuperaba la competitividad exportadora → se restablecía la balanza comercial → el oro regresaba. La teoría era elegante, pero el coste real era alto — restablecer el equilibrio exigía bajar los precios y los salarios, lo que significaba desempleo y recortes salariales. Peor aún, en una crisis el banco central tenía que subir los tipos para frenar la salida de oro, agravando la recesión — el error político central de la Depresión de 1929 fue precisamente esta restricción del patrón oro.",
    ],
    lesson: "El patrón oro revela el dilema fundamental de la política monetaria: 'la estabilidad y la flexibilidad son una disyuntiva'. El ancla del oro dio confianza y estabilidad, pero ató las manos en una crisis. A qué anclar el dinero — la humanidad aún no ha encontrado una respuesta perfecta.",
    aftermath: [
      "El patrón oro se derrumbó en dos oleadas. La primera llegó al estallar la Primera Guerra Mundial en 1914, cuando los países suspendieron en masa la convertibilidad para financiar el gasto militar. En los años 20, Gran Bretaña intentó volver a la paridad de antes de la guerra en 1925 (Churchill, Norman), pero una revalorización demasiado agresiva produjo deflación crónica y la huelga general de 1926, y Gran Bretaña abandonó de nuevo el oro en 1931. El golpe decisivo fue la Gran Depresión — cuando EE. UU. prohibió la tenencia privada de oro y suspendió la convertibilidad en 1933, el sistema terminó de hecho.",
      "El sistema de Bretton Woods de posguerra (1944–1971) fue un patrón oro modificado, anclando el dólar al oro y las demás monedas al dólar. Pero los déficits comerciales acumulados de EE. UU. y el gasto de la guerra de Vietnam lo derribaron en el shock Nixon de 1971, y la humanidad entró, por primera vez, en una era de dinero fiduciario sin ancla física. En el siglo XXI, algunos defensores del bitcoin que abogan por un 'patrón oro digital', y los bancos centrales que intentan crear anclas autoimpuestas mediante objetivos de inflación y reglas de oferta monetaria (la regla de Taylor), son todos intentos de responder a la pregunta posterior a 1971: 'en una era sin ancla física, ¿qué sostiene el valor del dinero?'.",
    ],
    today: "Que algunos llamen hoy al bitcoin un 'patrón oro digital' encaja en este contexto. Anclar la oferta para ganar confianza, o aflojarla por flexibilidad — el debate del siglo XIX continúa ahora de forma cambiada.",
    source: "Edición propia a partir de la historia económica y financiera estándar.",
  },
  mississippi: {
    subtitle: "Francia · 1716–1720",
    stats: [
      { k: "Subida de la acción", v: "~20× (~500 → ~10.000 libras)" },
      { k: "Sobreemisión de billetes", v: "~2–3× las reservas de oro y plata" },
      { k: "Confianza francesa en el papel moneda", v: "~80 años de silencio" },
    ],
    chart: {
      cap: "Acción de la Compañía del Misisipi — ~20× de subida, colapso en un año",
      peak: "Pico de 1719–1720",
    },
    body: [
      "En 1716, el economista de origen escocés John Law hizo una propuesta radical a un gobierno francés cargado de deudas: 'en lugar de oro y plata, emitir papel moneda respaldado por el crédito del Estado y reactivar la economía'. Con la aprobación del Regente — el duque de Orleans, que gobernaba durante la minoría de Luis XV — Law fundó la Banque Générale en 1716 y empezó a emitir billetes.",
      "En 1717, Law creó la Compañía del Misisipi (Compagnie d'Occident, luego absorbida por la Compagnie des Indes), recibiendo el monopolio del comercio y la minería de oro en la Luisiana francesa. La jugada decisiva — los tenedores de deuda pública podían canjear esa deuda por acciones de la Compañía del Misisipi. En 1718 la Banque Générale fue nacionalizada como Banque Royale, y sus billetes fueron declarados de curso legal; la gente exigía más billetes para comprar las acciones del Misisipi en alza, y Law accedía.",
      "A lo largo de 1719, el precio de la acción subió cerca de veinte veces, de unas 500 libras a un pico cercano a 10.000. La palabra 'millonario' apareció por primera vez en las calles de París. Pero a principios de 1720, cuando algunos inversores intentaron convertir acciones y billetes en oro, todo el sistema tembló a la vez. Law restringió la convertibilidad en oro e imprimió más billetes, pero la confianza ya se había roto. A finales de 1720, la acción estaba cerca de cero y los billetes se habían desplomado. Law huyó de Francia y murió pobre en Venecia.",
    ],
    mechanism: [
      "La estructura de la burbuja del Misisipi funcionó el mismo año (1720) con mecanismos casi idénticos a los de la burbuja de los Mares del Sur — canje de deuda por acciones, emisión creciente de billetes y apalancamiento a plazos. Pero con una diferencia decisiva: en Gran Bretaña, una compañía privada (la South Sea Company) llevó el esquema; en Francia, el propio Estado entregó a un solo hombre — John Law — el poder combinado de emitir dinero, emitir acciones y absorber la deuda estatal. Law era a la vez gobernador del banco central, director de una vasta compañía comercial multinacional y ministro de Finanzas.",
      "Esa concentración de poder hizo la burbuja más grande y más rápida. Cuando los precios de las acciones flaqueaban, Law hacía que la Banque Royale imprimiera más billetes para comprar acciones; cuando los billetes vacilaban, empujaba con más fuerza a comprar acciones — uniendo los dos activos para que se sostuvieran mutuamente. Pero eso era, en el fondo, una mano apuntalando a la otra, y una vez que grandes inversores (como el príncipe de Conti y el duque de Borbón) empezaron a convertir sus tenencias en monedas de oro, ambos lados se derrumbaron a la vez. En su apogeo, se estima que los billetes emitidos fueron unas dos a tres veces las reservas de oro y plata de Francia.",
    ],
    lesson: "La burbuja del Misisipi es el arquetipo de la proposición de que 'cuando el Estado controla directamente el dinero y los activos a la vez, la burbuja crece más y el colapso es más profundo'. Por qué la separación de poderes — la independencia del banco central, la regulación de los valores, la responsabilidad separada de la política monetaria — es un pilar de la estabilidad económica, y no una mera formalidad administrativa: esa respuesta se aprendió al precio más alto en las calles de París en 1720.",
    aftermath: [
      "La consecuencia directa de la burbuja del Misisipi fue un largo estancamiento de las finanzas públicas francesas. La deuda estatal pareció desvanecerse brevemente con el canje de acciones, pero reapareció tras el desplome y — peor — los ciudadanos dejaron de confiar en el papel moneda en sí. Francia no volvió a intentar en serio emitir papel moneda durante unos 80 años (hasta la víspera de la Revolución de 1789), y esa presión fiscal crónica se convirtió en una de las mechas directas de la Revolución Francesa.",
      "A escala histórica mundial, las burbujas gemelas de 1720 (Misisipi y Mares del Sur) produjeron una profunda autorreflexión en las finanzas europeas del siglo XVIII. Gran Bretaña restringió las nuevas sociedades por acciones durante un siglo con la Ley de Burbujas, y Francia no pudo reconstruir un banco central durante casi un siglo (hasta que Napoleón fundó el Banco de Francia en 1800). El propio legado de John Law tiene dos caras — el elogio como pionero de la teoría monetaria moderna y la crítica como un jugador que infló la ilusión de que 'el papel moneda lo resuelve todo' han corrido por carriles paralelos durante más de 200 años.",
    ],
    today: "Cuando los bancos centrales modernos apuntalan los mercados de activos con una flexibilización cuantitativa masiva, la burbuja del Misisipi pregunta en voz baja: ¿de verdad está bien que la misma mano mueva la emisión de dinero y los precios de los activos a la vez? París, en 1720, pagó el precio más alto para enseñar por qué es necesario un diseño institucional independiente y claramente separado.",
    source: "Edición propia a partir de la historia financiera y de la economía francesa estándar. Las cifras de precios y de emisión varían algo según la estimación y el registro.",
  },
  "1907": {
    subtitle: "Estados Unidos · oct.–nov. de 1907",
    stats: [
      { k: "Del pico al mínimo del Dow", v: "aprox. −47 %" },
      { k: "Detonante clave", v: "Quiebra del Knickerbocker Trust (22 oct.)" },
      { k: "Actor del rescate", v: "El sindicato privado de J.P. Morgan" },
    ],
    chart: {
      unit: "Dow Jones",
      cap: "Promedio Industrial Dow Jones (1906–1909) — desplome de ~47 % en el pánico y recuperación",
      peak: "Pico de 1906, mínimo en nov. de 1907",
      dataNote: "Basado en cierres mensuales reales del Dow. Pico ~100 → mínimo ~53 (nov. 1907) → recuperación hacia 1909.",
    },
    body: [
      "En el otoño de 1907, el sistema financiero de EE. UU. estaba al borde de la explosión. Años de crédito laxo de las compañías fiduciarias (trust companies — banca en la sombra que operaba fuera de la regulación bancaria convencional, con activos más arriesgados) habían canalizado enormes préstamos hacia la especulación en acciones y cobre, y cuando el mercado flaqueó, los activos de los fideicomisos flaquearon con él. El 16 de octubre de 1907, dos especuladores, Otto Heinze y Charles Morse, intentaron acaparar la acción de United Copper y fracasaron — encendiendo la mecha.",
      "El Mercantile National Bank, que había prestado a estos especuladores, quedó bajo presión, y el pánico inundó el mercado a medida que el dinero empezaba a drenarse de las compañías fiduciarias. El suceso decisivo llegó el 22 de octubre — el Knickerbocker Trust, uno de los tres mayores fideicomisos de EE. UU., ya no pudo atender las demandas de retirada y suspendió operaciones. Al día siguiente se formó una cola en la Trust Company of America, y el pánico se extendió de fideicomiso → banco → bolsa → dinero a la vista (call money). El tipo del dinero a la vista superó el 100 % — en efecto, el mercado se detuvo.",
      "En ese momento, EE. UU. no tenía banco central (el Primer Banco terminó en 1811, el Segundo en 1836, dejando unos 70 años de vacío). Sin nadie institucionalmente responsable de rescatar el sistema, el banquero estadounidense dominante de la época, J. Pierpont Morgan, reunió a sus colegas banqueros en su propio despacho y dirigió personalmente las negociaciones. Morgan combinó sus fondos y los de sus colegas para inyectar liquidez directamente en los fideicomisos y bancos tambaleantes, y tras días de reuniones maratonianas, el pánico se calmó a principios de noviembre. Aun así, el Dow cayó cerca de un 47 % desde su pico, y el PIB se contrajo cerca de un 11 % a lo largo de dos años.",
    ],
    mechanism: [
      "El mecanismo del pánico de 1907 combinó 'la fragilidad estructural de un sistema sin banco central' con 'el vacío regulatorio en torno a las compañías fiduciarias como banca en la sombra'. En aquel momento, EE. UU. funcionaba sin banco central; una asociación privada llamada las cámaras de compensación (clearing houses) gestionaba la liquidación interbancaria y podía emitir liquidez de emergencia, pero las compañías fiduciarias no eran miembros — cuando los fideicomisos flaqueaban, no había canal oficial para salvarlos. Para 1907, el total de activos de los fideicomisos era aproximadamente igual al de los bancos comerciales de Nueva York, así que el golpe de la caída de un gigante fuera de la regulación fue enorme.",
      "El detonante fue pequeño, pero la cadena de amplificación, larga. Fracaso del acaparamiento de United Copper → crisis del Mercantile National Bank → las retiradas se extienden a los fideicomisos → los fideicomisos retiran el dinero a la vista → el tipo a la vista se dispara → liquidación forzosa de acciones → desplome del Dow → más colapso de fideicomisos. Lo que rompió la cadena fue que el sindicato privado de J.P. Morgan (1) evaluó con rapidez un fideicomiso clave (Trust Co. of America) y lo juzgó salvable, (2) reunió fondos y los inyectó de inmediato, y (3) envió al mercado una señal clara de que 'este fideicomiso se salvará'. En efecto, un solo actor privado desempeñó temporalmente la función de 'prestamista de última instancia'.",
    ],
    lesson: "La lección más profunda del pánico de 1907 fue que 'la credibilidad de un solo hombre podía sostener el sistema, pero ningún hombre es eterno'. J.P. Morgan tenía 70 años ese año. La pregunta '¿quién hará de Morgan en el próximo pánico?' produjo su respuesta seis años después en la Reserva Federal. Un caso decisivo de trasladar la responsabilidad de la respuesta a la crisis del carácter de un individuo privado a una institución oficial.",
    aftermath: [
      "Justo tras el pánico de 1907, el Congreso de EE. UU. aprobó la Ley Aldrich-Vreeland de 1908, que otorgaba la emisión de moneda de emergencia, y creó la Comisión Monetaria Nacional, que dedicó unos cinco años a estudiar a fondo los bancos centrales europeos. Sobre la base de ese informe, el Sistema de la Reserva Federal se creó el 23 de diciembre de 1913, firmado por el presidente Woodrow Wilson. Su estructura distribuida — doce Bancos de la Reserva regionales más una junta central en Washington — fue un compromiso político que reflejaba tanto la eficiencia de un banco central como una desconfianza típicamente estadounidense hacia el poder financiero concentrado del Este.",
      "Los efectos institucionales fueron de dos caras. Desde su fundación en 1913 en adelante, la Reserva Federal desempeñó oficialmente la función de 'prestamista de última instancia' — financiando la Primera Guerra Mundial en 1914, respondiendo a la Depresión de 1929 (con muchos errores de política) y actuando en las crisis de 2008 y 2020 — abriendo una era en la que pánicos como el de 1907 ya no tenían que depender de un solo individuo privado. Sin embargo, el debate político sobre la propia Reserva Federal (independencia, transparencia, temores de interferencia política) ha continuado durante más de un siglo. Entretanto, J.P. Morgan, cuyo poder privado fue criticado en el Congreso tras 1907, fue investigado por el Comité Pujo en 1913 y murió ese mismo año — el nacimiento de la Reserva Federal y el final de la era Morgan ocurrieron casi a la vez.",
    ],
    today: "Toda respuesta moderna de un banco central a una crisis comenzó aquella noche de 1907 en la biblioteca de Morgan. Cuando la Reserva Federal rescató a Bear Stearns y AIG en la crisis de Lehman de 2008, y compró bonos corporativos directamente durante el shock de la COVID en 2020 — todo esto fue una institución oficial haciendo lo que un solo hombre había hecho en privado en 1907. La decisión de hace un siglo, 'nunca dejar una crisis sistémica en manos de una sola persona', se reafirma cada vez que vuelve una crisis hoy.",
    source: "Edición propia a partir de la historia financiera de EE. UU. estándar. Las cifras del Dow Jones y del PIB varían ligeramente según la fuente.",
  },
};
