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
};
