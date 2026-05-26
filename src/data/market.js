// 데모 시세 + 기간별 차트 + 변동 이슈
export const QUOTES = {
  stocks: [
    { sym: "KOSPI", name: "코스피", base: 2742.1, chg: +0.83,
      ranges: {
        "1D": [2718,2722,2715,2710,2725,2731,2728,2735,2740,2738,2742],
        "1M": [2610,2640,2625,2680,2705,2690,2720,2700,2735,2742],
        "1Y": [2480,2520,2390,2450,2610,2700,2580,2640,2710,2680,2730,2742],
        "ALL": [{x:"1997",v:650},{x:"1998",v:300},{x:"2000",v:500},{x:"2007",v:2060},{x:"2008",v:940},{x:"2011",v:1990},{x:"2017",v:2470},{x:"2020.3",v:1450},{x:"2021",v:3300},{x:"2022",v:2230},{x:"2024",v:2580},{x:"now",v:2742}],
      },
      issues: [
        { at:"2008", txt:{ko:"리먼 사태 — 글로벌 금융위기로 코스피 940선까지 폭락",en:"Lehman crisis — KOSPI plunged to ~940",ja:"リーマン危機 — コスピ940台まで暴落"}, dir:"down" },
        { at:"2020.3", txt:{ko:"팬데믹 쇼크 — 한 달 만에 1,450선까지 급락 후 V자 반등",en:"Pandemic shock — fell to ~1,450, then V-rebound",ja:"パンデミック・ショック — 1,450台へ急落後V字反発"}, dir:"down" },
        { at:"2021", txt:{ko:"유동성 장세 — 사상 첫 3,300선 돌파",en:"Liquidity rally — first-ever break above 3,300",ja:"流動性相場 — 史上初の3,300台突破"}, dir:"up" },
      ] },
    { sym: "S&P 500", name: "S&P 500", base: 5841.5, chg: -0.42,
      ranges: {
        "1D": [5862,5858,5850,5845,5852,5848,5840,5835,5842,5839,5841],
        "1M": [5720,5760,5740,5800,5780,5825,5810,5850,5835,5841],
        "1Y": [5050,5180,4950,5240,5400,5300,5520,5450,5680,5600,5780,5841],
        "ALL": [{x:"2000",v:1500},{x:"2002",v:815},{x:"2007",v:1565},{x:"2009",v:677},{x:"2013",v:1569},{x:"2020.3",v:2237},{x:"2022",v:3580},{x:"2024",v:5000},{x:"now",v:5841}],
      },
      issues: [
        { at:"2009", txt:{ko:"리먼 사태 저점 — 677, 고점 대비 약 -57%",en:"Lehman bottom — 677, ~-57% from peak",ja:"リーマン底 — 677、高値比約-57%"}, dir:"down" },
        { at:"2020.3", txt:{ko:"팬데믹 — 한 달 만에 -34%, 역사상 가장 빠른 약세장",en:"Pandemic — -34% in a month, fastest bear market ever",ja:"パンデミック — 1か月で-34%、史上最速の弱気相場"}, dir:"down" },
        { at:"2024", txt:{ko:"AI 장세 — 사상 첫 5,000선 돌파",en:"AI rally — first-ever break above 5,000",ja:"AI相場 — 史上初の5,000台突破"}, dir:"up" },
      ] },
    { sym: "N225", name: "닛케이225", base: 38904.2, chg: +1.15,
      ranges: {
        "1D": [38450,38520,38480,38600,38720,38680,38800,38750,38880,38860,38904],
        "1M": [37200,37800,37500,38200,38500,38300,38700,38600,38850,38904],
        "1Y": [33000,34500,32800,35000,38000,37000,39800,38500,40000,38900,39200,38904],
        "ALL": [{x:"1989",v:38900},{x:"1992",v:16000},{x:"2003",v:7800},{x:"2008",v:8000},{x:"2012",v:8600},{x:"2015",v:19000},{x:"2020.3",v:16500},{x:"2024",v:39000},{x:"now",v:38904}],
      },
      issues: [
        { at:"1989", txt:{ko:"일본 버블 정점 — 38,915, 이후 '잃어버린 30년' 시작",en:"Japan bubble peak — 38,915, then the 'lost 30 years'",ja:"日本バブル頂点 — 38,915、以後『失われた30年』"}, dir:"up" },
        { at:"1992", txt:{ko:"버블 붕괴 — 16,000선까지 추락",en:"Bubble burst — fell to ~16,000",ja:"バブル崩壊 — 16,000台へ下落"}, dir:"down" },
        { at:"2024", txt:{ko:"34년 만에 1989년 고점 회복",en:"Recovered the 1989 peak after 34 years",ja:"34年ぶりに1989年高値を回復"}, dir:"up" },
      ] },
    { sym: "NASDAQ", name: "나스닥", base: 18712.3, chg: -0.67,
      ranges: {
        "1D": [18800,18780,18750,18720,18760,18740,18700,18680,18710,18705,18712],
        "1M": [18100,18300,18200,18500,18400,18600,18550,18700,18680,18712],
        "1Y": [15800,16500,15200,16800,17500,17000,18200,17800,18600,18400,18800,18712],
        "ALL": [{x:"2000",v:5048},{x:"2002",v:1114},{x:"2007",v:2810},{x:"2009",v:1577},{x:"2015",v:5056},{x:"2020.3",v:6900},{x:"2021",v:16000},{x:"2022",v:10500},{x:"2024",v:18000},{x:"now",v:18712}],
      },
      issues: [
        { at:"2000", txt:{ko:"닷컴버블 정점 — 5,048, 이후 -78% 붕괴",en:"Dot-com peak — 5,048, then -78% crash",ja:"ドットコム頂点 — 5,048、以後-78%崩壊"}, dir:"up" },
        { at:"2002", txt:{ko:"닷컴버블 저점 — 1,114",en:"Dot-com bottom — 1,114",ja:"ドットコム底 — 1,114"}, dir:"down" },
        { at:"2021", txt:{ko:"팬데믹 유동성 — 기술주 급등 후 2022년 조정",en:"Pandemic liquidity — tech surge, then 2022 correction",ja:"パンデミック流動性 — ハイテク急騰後2022年調整"}, dir:"up" },
      ] },
  ],
  crypto: [
    { sym: "BTC", name: "비트코인", base: 96420, chg: +2.31, unit: "$",
      ranges: {
        "1D": [94200,94800,93900,95200,96000,95500,96800,96200,96600,96300,96420],
        "1M": [88000,91000,87000,93000,95000,92000,97000,94000,96000,96420],
        "1Y": [42000,58000,52000,68000,71000,63000,73000,69000,95000,88000,98000,96420],
        "ALL": [{x:"2013",v:1100},{x:"2017",v:19000},{x:"2018",v:3700},{x:"2021",v:69000},{x:"2022",v:16000},{x:"2024",v:106000},{x:"now",v:96420}],
      },
      issues: [
        { at:"2017", txt:{ko:"첫 대중적 광풍 — $19,000 후 이듬해 -80%",en:"First mass mania — $19K, then -80% next year",ja:"初の大衆的狂熱 — $19K後翌年-80%"}, dir:"up" },
        { at:"2022", txt:{ko:"FTX 거래소 붕괴 — $16,000까지 급락",en:"FTX exchange collapse — fell to $16K",ja:"FTX取引所崩壊 — $16Kまで急落"}, dir:"down" },
        { at:"2024", txt:{ko:"현물 ETF 승인 — $100,000 돌파",en:"Spot ETF approval — broke $100K",ja:"現物ETF承認 — $100K突破"}, dir:"up" },
      ] },
    { sym: "ETH", name: "이더리움", base: 3402, chg: +1.04, unit: "$",
      ranges: {
        "1D": [3340,3360,3330,3380,3400,3385,3420,3395,3410,3398,3402],
        "1M": [3100,3200,3050,3300,3350,3250,3420,3300,3390,3402],
        "1Y": [2200,2800,2400,3100,3300,2900,3500,3200,3600,3300,3450,3402],
        "ALL": [{x:"2016",v:10},{x:"2018",v:1400},{x:"2019",v:130},{x:"2021",v:4800},{x:"2022",v:1100},{x:"2024",v:4000},{x:"now",v:3402}],
      },
      issues: [
        { at:"2021", txt:{ko:"NFT·디파이 열풍 — $4,800 사상 최고",en:"NFT/DeFi boom — $4,800 all-time high",ja:"NFT・DeFi熱風 — $4,800最高値"}, dir:"up" },
        { at:"2022", txt:{ko:"긴축·테라 사태로 $1,100까지 급락",en:"Tightening & Terra collapse — fell to $1,100",ja:"引き締め・テラ事態で$1,100まで急落"}, dir:"down" },
      ] },
    { sym: "SOL", name: "솔라나", base: 214.5, chg: -3.12, unit: "$",
      ranges: {
        "1D": [222,220,218,215,219,216,213,210,214,212,214.5],
        "1M": [195,205,190,210,220,205,225,210,218,214.5],
        "1Y": [95,140,110,180,210,170,240,200,250,220,230,214.5],
        "ALL": [{x:"2021",v:260},{x:"2022",v:8},{x:"2023",v:25},{x:"2024",v:210},{x:"now",v:214.5}],
      },
      issues: [
        { at:"2021", txt:{ko:"신흥 강자로 부상 — $260 정점",en:"Rose as a challenger — $260 peak",ja:"新興の強者として浮上 — $260頂点"}, dir:"up" },
        { at:"2022", txt:{ko:"FTX 사태 직격 — $8까지 폭락",en:"Hit hard by FTX — crashed to $8",ja:"FTX事態直撃 — $8まで暴落"}, dir:"down" },
      ] },
    { sym: "XRP", name: "리플", base: 2.18, chg: +5.40, unit: "$",
      ranges: {
        "1D": [2.05,2.08,2.04,2.10,2.14,2.11,2.16,2.13,2.17,2.15,2.18],
        "1M": [1.80,1.95,1.75,2.00,2.10,1.95,2.20,2.05,2.15,2.18],
        "1Y": [0.50,0.62,0.55,0.70,1.20,2.40,1.80,2.50,2.20,2.00,2.30,2.18],
        "ALL": [{x:"2018",v:3.3},{x:"2020",v:0.2},{x:"2021",v:1.8},{x:"2023",v:0.5},{x:"2024",v:2.4},{x:"now",v:2.18}],
      },
      issues: [
        { at:"2018", txt:{ko:"코인 광풍 정점 — $3.3",en:"Crypto mania peak — $3.3",ja:"コイン狂熱頂点 — $3.3"}, dir:"up" },
        { at:"2024", txt:{ko:"규제 불확실성 완화 기대로 반등",en:"Rebound on easing regulatory uncertainty",ja:"規制不確実性緩和の期待で反発"}, dir:"up" },
      ] },
  ],
};

// 시장 맥락에 연결되는 역사 사례 (사이드바 ↔ 타임라인 공용)
export const ECHOES = {
  stocks: {
    context: {
      ko: "지금 AI 기술이 시장을 끌어올리고 있습니다. 새로운 기술·뉴스·정책이 시장에 반영된 역사 속 순간들 — 열광은 어디까지가 진짜였을까요?",
      en: "AI is lifting the market right now. Moments in history when new tech, news, or policy hit the market — how much of the euphoria was real?",
      ja: "今、AI技術が市場を押し上げています。新技術・ニュース・政策が市場に反映された歴史の瞬間 — 熱狂はどこまで本物だったのか？",
    },
    items: [
      {
        eraIdx: 5, eventId: "railway", tag: { ko: "기술 혁신", en: "Tech", ja: "技術革新" }, year: "1849 · 1995 · 2000",
        title: { ko: "철도 광풍부터 닷컴버블까지", en: "From railway mania to dot-com", ja: "鉄道狂熱からドットコムまで" },
        line: { ko: "새 기술이 등장할 때마다 시장은 먼저 열광하고 나중에 옥석을 가렸습니다. 영국 철도주, 1990년대 인터넷주 모두 같은 곡선을 그렸습니다.", en: "Each new technology first sparked euphoria, then sorted winners from losers. British railways and 1990s internet stocks traced the same curve.", ja: "新技術が現れるたび市場はまず熱狂し、後で玉石を選別しました。英国の鉄道株、90年代のネット株も同じ曲線を描きました。" },
      },
      {
        eraIdx: 5, eventId: "2008", tag: { ko: "위기", en: "Crisis", ja: "危機" }, year: "2008",
        title: { ko: "리먼 사태 — 신뢰가 무너진 날", en: "Lehman — the day trust broke", ja: "リーマン — 信頼が崩れた日" },
        line: { ko: "'대마불사'를 믿던 시장이 하루아침에 무너졌습니다. 호황의 끝엔 늘 '이번엔 다르다'는 낙관이 있었습니다.", en: "A market that believed 'too big to fail' collapsed overnight. The end of every boom carried the optimism of 'this time is different.'", ja: "『大きすぎて潰せない』と信じた市場が一夜で崩れました。好況の終わりには常に『今回は違う』という楽観がありました。" },
      },
      {
        eraIdx: 4, eventId: "nixon", tag: { ko: "정책·환율", en: "Policy", ja: "政策・為替" }, year: "1971 · 1997",
        title: { ko: "닉슨 쇼크와 외환위기", en: "Nixon Shock and the FX crisis", ja: "ニクソン・ショックと通貨危機" },
        line: { ko: "한 번의 정책 발표, 한 번의 환율 붕괴가 세계 시장의 규칙을 바꿨습니다. 정치는 늘 시장의 가장 큰 변수였습니다.", en: "One policy announcement, one currency collapse rewrote the rules of world markets. Politics was always the market's biggest variable.", ja: "一度の政策発表、一度の為替崩壊が世界市場のルールを変えました。政治は常に市場の最大の変数でした。" },
      },
    ],
  },
  crypto: {
    context: {
      ko: "가상자산이 다시 들썩입니다. 본질 가치를 둘러싼 논쟁은 처음이 아닙니다 — 역사는 '새로운 부의 약속'을 여러 번 목격했습니다.",
      en: "Crypto is stirring again. The debate over intrinsic value is nothing new — history has witnessed many 'promises of new wealth.'",
      ja: "暗号資産が再び動いています。本質的価値をめぐる論争は初めてではありません — 歴史は何度も『新しい富の約束』を目撃しました。",
    },
    items: [
      {
        eraIdx: 1, eventId: "tulip", tag: { ko: "최초의 버블", en: "First bubble", ja: "最初のバブル" }, year: "1637",
        title: { ko: "튤립 광풍 — 꽃 한 송이가 집 한 채", en: "Tulip mania — a flower worth a house", ja: "チューリップ狂熱 — 花一輪が家一軒" },
        line: { ko: "본질 가치 없이 '남들도 살 것'이라는 믿음만으로 값이 치솟다 어느 날 꺼졌습니다. 모든 버블의 원형입니다.", en: "Prices soared on belief alone — 'others will buy too' — then vanished one day. The archetype of every bubble.", ja: "本質的価値なく『他人も買う』という信頼だけで値が高騰し、ある日消えました。全てのバブルの原型です。" },
      },
      {
        eraIdx: 1, eventId: "cowrie", tag: { ko: "화폐의 본질", en: "What money is", ja: "貨幣の本質" }, year: "기원전 ~",
        title: { ko: "조개껍데기는 왜 돈이 되었나", en: "Why shells became money", ja: "なぜ貝殻がお金になったか" },
        line: { ko: "본래 가치 없는 조개를 모두가 믿어 화폐가 됐습니다. '믿으면 가치가 생긴다'는 구조는 코인 논쟁의 핵심과 같습니다.", en: "Worthless shells became money because everyone believed. 'Belief creates value' — the same structure at the heart of the crypto debate.", ja: "本来価値のない貝を皆が信じて貨幣になりました。『信じれば価値が生まれる』構造はコイン論争の核心と同じです。" },
      },
      {
        eraIdx: 5, eventId: "bitcoin", tag: { ko: "국가 없는 돈", en: "Stateless money", ja: "国家なきお金" }, year: "2009",
        title: { ko: "비트코인 — 코드로 만든 화폐", en: "Bitcoin — money made of code", ja: "ビットコイン — コードで作られた貨幣" },
        line: { ko: "'국가 없는 돈'이라는 오랜 상상이 코드로 구현됐습니다. 혁신인지 환상인지, 역사는 아직 판결 중입니다.", en: "The old dream of 'money without a state' was realized in code. Innovation or illusion — history is still deciding.", ja: "『国家なきお金』という長年の想像がコードで実現しました。革新か幻想か、歴史はまだ判決中です。" },
      },
    ],
  },
};

// 레퍼럴 파트너 (데모)
export const PARTNERS = {
  stocks: [
    { name: "파트너 증권 A", note: "수수료 평생 무료 이벤트", tag: "국내주식" },
    { name: "글로벌 브로커 B", note: "해외주식 0.07%", tag: "미국주식" },
  ],
  crypto: [
    { name: "거래소 C", note: "가입 시 수수료 20% 할인", tag: "현물" },
    { name: "거래소 D", note: "원화 입금 지원", tag: "KRW" },
  ],
};
