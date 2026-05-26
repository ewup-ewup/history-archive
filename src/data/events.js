// 갈림길 사건 데이터 (등급은 하루 단위로 통일)
export const EVENTS = [
  {
    year: 1929, rarity: "prism",
    cat: { ko: "검은 화요일 · 대공황", en: "Black Tuesday · The Great Depression", ja: "暗黒の火曜日 · 大恐慌" },
    title: { ko: "5년의 상승이 며칠 만에 무너지다", en: "Five years of gains collapse in days", ja: "5年の上昇が数日で崩れる" },
    body: { ko: "구두닦이 소년까지 종목을 추천하던 만장일치의 낙관. 그 끝에서 시장은 가장 잔혹하게 돌아섰습니다.", en: "Even shoeshine boys were tipping stocks — unanimous optimism. At its peak, the market turned with brutal force.", ja: "靴磨きの少年まで銘柄を推す全会一致の楽観。その果てに市場は最も残酷に反転しました。" },
    prompt: { ko: "폭락이 시작된 그 순간, 당신의 한 수는?", en: "The crash begins — what's your move?", ja: "暴落が始まったその瞬間、あなたの一手は？" },
    cards: [
      { s: { C: 2, R: 2 }, axis: { ko: "역발상 · 위험선호", en: "Contrarian · Risk", ja: "逆張り · リスク選好" }, text: { ko: "공포가 극에 달한 지금이 바닥이다. 우량주를 줍는다.", en: "Peak fear means the bottom. Scoop up blue chips.", ja: "恐怖が極まる今が底だ。優良株を拾う。" } },
      { s: { P: 2 }, axis: { ko: "인내", en: "Patience", ja: "忍耐" }, text: { ko: "떨어지는 칼날은 잡지 않는다. 안정될 때까지 기다린다.", en: "Never catch a falling knife. Wait for calm.", ja: "落ちるナイフは掴まない。落ち着くまで待つ。" } },
      { s: { A: 2, C: 1 }, axis: { ko: "분석", en: "Analysis", ja: "分析" }, text: { ko: "부채 비율과 밸류에이션부터 다시 계산한다.", en: "Recompute debt ratios and valuations first.", ja: "負債比率と評価から計算し直す。" } },
    ],
  },
  {
    year: 1997, rarity: "gold",
    cat: { ko: "아시아 외환위기", en: "Asian Financial Crisis", ja: "アジア通貨危機" },
    title: { ko: "하루가 다르게 무너지는 환율", en: "An exchange rate crumbling by the day", ja: "日に日に崩れる為替レート" },
    body: { ko: "우량 기업마저 줄도산하고 거리엔 금 모으기 행렬. 공포가 시장을 완전히 지배하던 시절.", en: "Even blue-chip firms collapsed; lines formed to donate gold. Fear ruled the market completely.", ja: "優良企業まで倒産が相次ぎ、街には金集めの列。恐怖が市場を完全に支配した時代。" },
    prompt: { ko: "피와 공포가 거리에 넘칠 때, 당신은?", en: "Blood and fear in the streets — and you?", ja: "血と恐怖が街に溢れるとき、あなたは？" },
    cards: [
      { s: { C: 2, R: 1 }, axis: { ko: "역발상 · 위험선호", en: "Contrarian · Risk", ja: "逆張り · リスク選好" }, text: { ko: "역사적 저점이다. 분할로 과감히 매수에 들어간다.", en: "A historic low. Buy boldly, in tranches.", ja: "歴史的な底値だ。分割で大胆に買い向かう。" } },
      { s: { A: 2 }, axis: { ko: "분석", en: "Analysis", ja: "分析" }, text: { ko: "외환보유고와 환율 데이터로 회복 시점을 추정한다.", en: "Estimate the recovery from reserves and FX data.", ja: "外貨準備と為替データで回復時点を推定する。" } },
      { s: { P: 2 }, axis: { ko: "인내 · 안정", en: "Patience · Safety", ja: "忍耐 · 安定" }, text: { ko: "시장에서 발을 뺀다. 지금은 살아남는 것이 우선.", en: "Step out of the market. Survival comes first.", ja: "市場から手を引く。今は生き残ることが最優先。" } },
    ],
  },
  {
    year: 2000, rarity: "gold",
    cat: { ko: "닷컴버블", en: "Dot-com Bubble", ja: "ドットコムバブル" },
    title: { ko: "'.com'만 붙으면 폭등하던 시대", en: "Add '.com' and the stock soared", ja: "「.com」を付ければ急騰した時代" },
    body: { ko: "수익 한 푼 없는 회사가 수조 원의 가치를 인정받고, 나만 뒤처지는 듯한 초조함이 시장을 덮었습니다.", en: "Firms with zero profit were valued in the trillions, and the fear of being left behind gripped everyone.", ja: "利益ゼロの企業が数兆ウォンの価値を認められ、自分だけ取り残される焦りが市場を覆いました。" },
    prompt: { ko: "모두가 미래를 사들이는 광풍 속에서?", en: "Everyone's buying the future — and you?", ja: "皆が未来を買い漁る熱狂の中で？" },
    cards: [
      { s: { R: 2 }, axis: { ko: "위험선호", en: "Risk", ja: "リスク選好" }, text: { ko: "혁명에 올라탄다. 성장주에 과감히 베팅한다.", en: "Ride the revolution. Bet hard on growth.", ja: "革命に乗る。成長株に大胆に賭ける。" } },
      { s: { A: 2, C: 1 }, axis: { ko: "분석 · 역발상", en: "Analysis · Contrarian", ja: "分析 · 逆張り" }, text: { ko: "실제 매출과 현금흐름이 있는 기업만 골라 담는다.", en: "Buy only firms with real revenue and cash flow.", ja: "実際の売上とキャッシュフローのある企業だけ選ぶ。" } },
      { s: { C: 2 }, axis: { ko: "역발상", en: "Contrarian", ja: "逆張り" }, text: { ko: "이해 못 하는 거품엔 손대지 않는다. 멀리한다.", en: "Don't touch a bubble you don't understand.", ja: "理解できないバブルには手を出さない。" } },
    ],
  },
  {
    year: 2008, rarity: "silver",
    cat: { ko: "리먼 사태", en: "Lehman Collapse", ja: "リーマンショック" },
    title: { ko: "대마불사의 신화가 깨지던 날", en: "The day 'too big to fail' broke", ja: "「大きすぎて潰せない」神話が崩れた日" },
    body: { ko: "158년 역사의 투자은행이 파산하고 금융 시스템이 흔들렸습니다. 그러나 각국은 사상 최대의 돈을 풀기 시작했습니다.", en: "A 158-year-old bank failed and the system shook. Yet governments began unleashing record liquidity.", ja: "158年の歴史を持つ投資銀行が破綻し金融システムが揺れました。しかし各国は史上最大の資金供給を始めました。" },
    prompt: { ko: "시스템이 붕괴하는 듯한 그 순간?", en: "The system seems to be collapsing?", ja: "システムが崩壊するようなその瞬間？" },
    cards: [
      { s: { C: 2, R: 1 }, axis: { ko: "역발상 · 위험선호", en: "Contrarian · Risk", ja: "逆張り · リスク選好" }, text: { ko: "정부가 결국 구한다. 패닉의 바닥에서 매수한다.", en: "Governments will rescue. Buy at peak panic.", ja: "政府が結局救う。パニックの底で買う。" } },
      { s: { P: 2, C: 1 }, axis: { ko: "인내", en: "Patience", ja: "忍耐" }, text: { ko: "분할 매수로 천천히 들어간다. 시점은 맞히려 않는다.", en: "Enter slowly in tranches; don't time the bottom.", ja: "分割でゆっくり入る。底は当てに行かない。" } },
      { s: { A: 2 }, axis: { ko: "분석", en: "Analysis", ja: "分析" }, text: { ko: "유동성 정책의 효과를 데이터로 검증한 뒤 움직인다.", en: "Verify the liquidity policy's effect, then act.", ja: "流動性政策の効果をデータで検証してから動く。" } },
    ],
  },
  {
    year: 2020, rarity: "prism",
    cat: { ko: "팬데믹 쇼크", en: "Pandemic Shock", ja: "パンデミック・ショック" },
    title: { ko: "한 달 만에 멈춰버린 세계", en: "A world frozen in a month", ja: "一か月で止まった世界" },
    body: { ko: "한 달 만에 30% 넘게 폭락하고 유가는 사상 첫 마이너스. 그러나 유례없이 풀린 돈이 사상 최고의 반등을 만들었습니다.", en: "Markets fell 30%+ in a month and oil went negative for the first time. Then unprecedented stimulus drove a record rebound.", ja: "一か月で30%超下落し原油は史上初のマイナス。しかし前例なき資金供給が史上最高の反発を生みました。" },
    prompt: { ko: "세상이 멈춘 듯한 그 봄, 당신은?", en: "That spring the world stopped — and you?", ja: "世界が止まったあの春、あなたは？" },
    cards: [
      { s: { R: 2, C: 1 }, axis: { ko: "위험선호 · 역발상", en: "Risk · Contrarian", ja: "リスク選好 · 逆張り" }, text: { ko: "가장 빠른 폭락은 가장 빠른 기회다. 전력 매수.", en: "The fastest crash is the fastest chance. Buy all in.", ja: "最速の暴落は最速の好機。全力買い。" } },
      { s: { P: 2 }, axis: { ko: "인내", en: "Patience", ja: "忍耐" }, text: { ko: "여유 자금으로 분할 매수하며 평정심을 지킨다.", en: "Buy in tranches with spare cash; keep composure.", ja: "余裕資金で分割買い、平静を保つ。" } },
      { s: { A: 2, P: 1 }, axis: { ko: "분석", en: "Analysis", ja: "分析" }, text: { ko: "과거 위기들의 회복 패턴을 분석해 대응한다.", en: "Analyze past crises' recovery patterns and respond.", ja: "過去の危機の回復パターンを分析して対応する。" } },
    ],
  },
];

// 카드 등급
export const RARITY = {
  silver: { label: "Silver · 흔한 순간", color: "#8B95A1", soft: "#F2F4F6", glow: "rgba(139,149,161,0.25)" },
  gold: { label: "Gold · 중대한 순간", color: "#F5A623", soft: "#FFF6E5", glow: "rgba(245,166,35,0.3)" },
  prism: { label: "Prism · 역사를 바꾼 순간", color: "#8B5CF6", soft: "#F3EEFF", glow: "rgba(139,92,246,0.32)" },
};

// 투자 초상 8유형
export const TYPES = {
  RC: { ko: "역발상 사냥꾼", en: "The Vulture", ja: "逆張りの狩人", sub: "The Vulture" },
  RA: { ko: "공격적 전략가", en: "The Strategist", ja: "攻撃的な戦略家", sub: "The Strategist" },
  RP: { ko: "신념의 장기투자자", en: "The Conviction Holder", ja: "信念の長期投資家", sub: "The Conviction Holder" },
  CP: { ko: "침착한 현인", en: "The Patient Sage", ja: "冷静な賢者", sub: "The Patient Sage" },
  CA: { ko: "냉철한 회의주의자", en: "The Skeptic", ja: "冷徹な懐疑主義者", sub: "The Skeptic" },
  PA: { ko: "체계적 설계자", en: "The Architect", ja: "体系的な設計者", sub: "The Architect" },
  BAL: { ko: "균형의 항해사", en: "The Equilibrist", ja: "均衡の航海士", sub: "The Equilibrist" },
};

// 4축 라벨
export const AXIS_LABEL = {
  ko: { R: "위험 선호", C: "역발상", P: "인내·장기", A: "분석 의존" },
  en: { R: "Risk appetite", C: "Contrarian", P: "Patience", A: "Analysis" },
  ja: { R: "リスク選好", C: "逆張り", P: "忍耐・長期", A: "分析依存" },
};

// 누적 점수 → 초상 유형 산출
export function resolveType(sc) {
  const sum = sc.R + sc.C + sc.P + sc.A;
  if (sum === 0) return null;
  const arr = [["R", sc.R], ["C", sc.C], ["P", sc.P], ["A", sc.A]].sort((a, b) => b[1] - a[1]);
  if (arr[0][1] - arr[3][1] <= 1) return "BAL";
  const key = [arr[0][0], arr[1][0]].sort().join("");
  const map = { CR: "RC", CP: "CP", AR: "RA", PR: "RP", AC: "CA", AP: "PA" };
  return map[key] || "BAL";
}
