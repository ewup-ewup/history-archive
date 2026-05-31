/**
 * EVENT_LINKS — 21사건 본문 cross-link용 자연어 패턴 사전.
 * 본문에서 다른 사건명이 등장하면 자동으로 해당 사건 상세 페이지로 링크.
 *
 * 패턴 작성 원칙:
 * - 명확하게 그 사건만 가리키는 표현만 포함 (예: "AI" 단독은 너무 일반적이라 제외, "AI 시대"는 OK)
 * - 흔한 변형까지 (튤립 광풍 / 튤립 거품 / 튤립) 포함하되 너무 짧은 것은 제외
 * - 영문 케이스는 그대로 매칭 (Substring match, case-sensitive — Bitcoin은 매칭, bit은 안 함)
 * - 긴 패턴이 짧은 패턴보다 우선 매칭됨 (linkify.jsx에서 자동 정렬)
 * - 자기 자신은 자동으로 제외됨 (linkify.jsx의 currentEventId 필터)
 */
export const EVENT_LINKS = {
  cowrie: {
    ko: ["조개껍데기", "자안패(조개)", "자안패"],
    en: ["cowrie shells", "cowries", "cowrie"],
    ja: ["子安貝"],
  },
  tulip: {
    ko: ["튤립 광풍", "튤립 거품"],
    en: ["tulip mania", "Tulip mania"],
    ja: ["チューリップ狂熱", "チューリップ・バブル"],
  },
  lydia: {
    ko: ["리디아 주화", "리디아"],
    en: ["Lydian coinage", "Lydia"],
    ja: ["リディア貨幣", "リディア"],
  },
  debasement: {
    ko: ["로마 데나리우스 변조", "로마 은화 변조", "로마 데나리우스", "데나리우스"],
    en: ["Roman debasement", "denarius debasement", "denarius"],
    ja: ["ローマ銀貨改鋳", "デナリウス改鋳", "デナリウス"],
  },
  jiaozi: {
    ko: ["송 교자", "교자(交子)", "교자"],
    en: ["Song jiaozi", "jiaozi"],
    ja: ["宋の交子", "交子"],
  },
  "south-sea": {
    ko: ["남해 거품", "남해회사", "남해 광풍"],
    en: ["South Sea Bubble", "South Sea Company", "South Sea bubble"],
    ja: ["南海バブル", "南海会社", "南海泡沫"],
  },
  mississippi: {
    ko: ["미시시피 거품", "미시시피 회사", "John Law"],
    en: ["Mississippi Bubble", "Mississippi Company", "John Law"],
    ja: ["ミシシッピ・バブル", "ミシシッピ会社", "John Law"],
  },
  "gold-standard": {
    ko: ["고전적 금본위제", "금본위제", "금본위"],
    en: ["classical gold standard", "gold standard"],
    ja: ["古典的金本位制", "金本位制"],
  },
  "1907": {
    ko: ["1907 패닉", "1907년 패닉", "1907년 공황", "니커보커 신탁", "J.P. Morgan", "J.P.Morgan"],
    en: ["Panic of 1907", "1907 panic", "Knickerbocker Trust", "J.P. Morgan"],
    ja: ["1907年恐慌", "ニッカーボッカー信託", "J.P.モルガン"],
  },
  weimar: {
    ko: ["바이마르 초인플레이션", "바이마르 인플레이션", "바이마르"],
    en: ["Weimar hyperinflation", "Weimar inflation", "Weimar"],
    ja: ["ワイマル・ハイパーインフレーション", "ワイマル"],
  },
  "1929": {
    ko: ["1929년 대공황", "1929 대공황", "대공황", "검은 화요일"],
    en: ["Great Depression", "Black Tuesday"],
    ja: ["大恐慌", "暗黒の火曜日"],
  },
  nixon: {
    ko: ["닉슨 쇼크", "닉슨"],
    en: ["Nixon Shock"],
    ja: ["ニクソン・ショック"],
  },
  "1997": {
    ko: ["아시아 외환위기", "1997 외환위기", "IMF 위기", "한국 외환위기"],
    en: ["1997 Asian financial crisis", "Asian financial crisis", "IMF crisis"],
    ja: ["1997年アジア通貨危機", "アジア通貨危機", "IMF危機"],
  },
  railway: {
    ko: ["영국 철도 광풍", "철도 광풍", "철도 거품"],
    en: ["British Railway Mania", "Railway Mania"],
    ja: ["英国鉄道狂熱", "鉄道狂熱"],
  },
  "black-monday": {
    ko: ["블랙 먼데이", "검은 월요일", "1987년 폭락"],
    en: ["Black Monday", "1987 crash"],
    ja: ["ブラックマンデー", "暗黒の月曜日"],
  },
  "japan-1989": {
    ko: ["일본 자산 거품", "일본 거품", "잃어버린 30년", "잃어버린 10년"],
    en: ["Japan asset bubble", "Japanese bubble", "lost three decades", "lost decade"],
    ja: ["日本資産バブル", "日本バブル", "失われた30年", "失われた10年"],
  },
  dotcom: {
    ko: ["닷컴버블", "닷컴 버블"],
    en: ["dot-com bubble", "dotcom bubble"],
    ja: ["ドットコムバブル"],
  },
  "2008": {
    ko: ["리먼 사태", "글로벌 금융위기", "2008 금융위기", "리먼"],
    en: ["Lehman crisis", "2008 financial crisis", "global financial crisis"],
    ja: ["リーマン危機", "リーマン・ショック", "2008年金融危機"],
  },
  bitcoin: {
    ko: ["비트코인"],
    en: ["Bitcoin"],
    ja: ["ビットコイン"],
  },
  "covid-2020": {
    ko: ["코로나 사이클", "코로나 충격", "팬데믹 쇼크"],
    en: ["COVID cycle", "COVID shock", "pandemic shock"],
    ja: ["コロナ・サイクル", "コロナ衝撃", "パンデミック・ショック"],
  },
  ai: {
    ko: ["AI 시대", "AI 광풍", "AI 장세", "AI 혁명"],
    en: ["AI era", "AI rally", "AI revolution", "AI mania"],
    ja: ["AI時代", "AI狂熱", "AI革命"],
  },
};
