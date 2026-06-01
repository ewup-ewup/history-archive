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
};
