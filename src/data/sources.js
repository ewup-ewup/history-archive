/**
 * SOURCES — 사건별 참고/출처 링크.
 *
 * 구성: 위키백과(게이트웨이 레퍼런스) + 가능한 경우 기관·1차 자료(원문 연설·보고서·백서·고전 등).
 * 모든 URL은 추가 시점에 HTTP 200으로 접근 가능함을 확인했습니다(원칙 9 — 존재하지 않는 링크 금지).
 * EventDetail에서 출처 노트 아래에 '참고 자료' 링크 목록으로 렌더링됩니다.
 *
 * label은 언어 중립적(고유명사 위주)이라 4개 언어 공통으로 사용합니다.
 */
export const SOURCES = {
  cowrie: [
    { label: "Wikipedia: Shell money", url: "https://en.wikipedia.org/wiki/Shell_money" },
    { label: "Wikipedia: Cowrie", url: "https://en.wikipedia.org/wiki/Cowrie" },
  ],
  tulip: [
    { label: "Wikipedia: Tulip mania", url: "https://en.wikipedia.org/wiki/Tulip_mania" },
    { label: "Mackay, Extraordinary Popular Delusions (1841)", url: "https://en.wikipedia.org/wiki/Extraordinary_Popular_Delusions_and_the_Madness_of_Crowds" },
  ],
  lydia: [
    { label: "Wikipedia: Croeseid (Lydian coinage)", url: "https://en.wikipedia.org/wiki/Croeseid" },
    { label: "Wikipedia: History of coins", url: "https://en.wikipedia.org/wiki/History_of_coins" },
  ],
  debasement: [
    { label: "Wikipedia: Debasement", url: "https://en.wikipedia.org/wiki/Debasement" },
    { label: "Wikipedia: Roman currency", url: "https://en.wikipedia.org/wiki/Roman_currency" },
  ],
  jiaozi: [
    { label: "Wikipedia: Jiaozi (currency)", url: "https://en.wikipedia.org/wiki/Jiaozi_(currency)" },
    { label: "Wikipedia: History of Chinese currency", url: "https://en.wikipedia.org/wiki/History_of_Chinese_currency" },
  ],
  medici: [
    { label: "Wikipedia: Medici Bank", url: "https://en.wikipedia.org/wiki/Medici_Bank" },
    { label: "Wikipedia: House of Medici", url: "https://en.wikipedia.org/wiki/House_of_Medici" },
  ],
  "price-revolution": [
    { label: "Wikipedia: Price revolution", url: "https://en.wikipedia.org/wiki/Price_revolution" },
    { label: "Wikipedia: Potosí", url: "https://en.wikipedia.org/wiki/Potosí" },
  ],
  voc: [
    { label: "Wikipedia: Dutch East India Company", url: "https://en.wikipedia.org/wiki/Dutch_East_India_Company" },
    { label: "Wikipedia: Amsterdam Stock Exchange", url: "https://en.wikipedia.org/wiki/Amsterdam_Stock_Exchange" },
  ],
  "south-sea": [
    { label: "Wikipedia: South Sea Company", url: "https://en.wikipedia.org/wiki/South_Sea_Company" },
    { label: "Wikipedia: Bubble Act (1720)", url: "https://en.wikipedia.org/wiki/Bubble_Act" },
  ],
  mississippi: [
    { label: "Wikipedia: Mississippi Company", url: "https://en.wikipedia.org/wiki/Mississippi_Company" },
    { label: "Wikipedia: John Law (economist)", url: "https://en.wikipedia.org/wiki/John_Law_(economist)" },
  ],
  "gold-standard": [
    { label: "Wikipedia: Gold standard", url: "https://en.wikipedia.org/wiki/Gold_standard" },
    { label: "Wikipedia: Bretton Woods system", url: "https://en.wikipedia.org/wiki/Bretton_Woods_system" },
  ],
  "1907": [
    { label: "Wikipedia: Panic of 1907", url: "https://en.wikipedia.org/wiki/Panic_of_1907" },
    { label: "Federal Reserve History", url: "https://www.federalreservehistory.org/essays/panic-of-1907" },
  ],
  weimar: [
    { label: "Wikipedia: Weimar hyperinflation", url: "https://en.wikipedia.org/wiki/Hyperinflation_in_the_Weimar_Republic" },
    { label: "Wikipedia: German Papiermark", url: "https://en.wikipedia.org/wiki/German_Papiermark" },
  ],
  "1929": [
    { label: "Wikipedia: Wall Street Crash of 1929", url: "https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929" },
    { label: "Federal Reserve History", url: "https://www.federalreservehistory.org/essays/stock-market-crash-of-1929" },
  ],
  nixon: [
    { label: "Wikipedia: Nixon shock", url: "https://en.wikipedia.org/wiki/Nixon_shock" },
    { label: "Nixon's 1971 address (American Presidency Project)", url: "https://www.presidency.ucsb.edu/documents/address-the-nation-outlining-new-economic-policy-the-challenge-peace" },
  ],
  "1997": [
    { label: "Wikipedia: 1997 Asian financial crisis", url: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis" },
    { label: "Wikipedia: International Monetary Fund", url: "https://en.wikipedia.org/wiki/International_Monetary_Fund" },
  ],
  railway: [
    { label: "Wikipedia: Railway Mania", url: "https://en.wikipedia.org/wiki/Railway_Mania" },
    { label: "Wikipedia: George Hudson (the Railway King)", url: "https://en.wikipedia.org/wiki/George_Hudson" },
  ],
  "black-monday": [
    { label: "Wikipedia: Black Monday (1987)", url: "https://en.wikipedia.org/wiki/Black_Monday_(1987)" },
    { label: "Federal Reserve History", url: "https://www.federalreservehistory.org/essays/stock-market-crash-of-1987" },
  ],
  "japan-1989": [
    { label: "Wikipedia: Japanese asset price bubble", url: "https://en.wikipedia.org/wiki/Japanese_asset_price_bubble" },
    { label: "Wikipedia: Lost Decades", url: "https://en.wikipedia.org/wiki/Lost_Decades" },
  ],
  ltcm: [
    { label: "Wikipedia: Long-Term Capital Management", url: "https://en.wikipedia.org/wiki/Long-Term_Capital_Management" },
    { label: "Lowenstein, When Genius Failed (2000)", url: "https://en.wikipedia.org/wiki/When_Genius_Failed" },
  ],
  dotcom: [
    { label: "Wikipedia: Dot-com bubble", url: "https://en.wikipedia.org/wiki/Dot-com_bubble" },
    { label: "Wikipedia: NASDAQ Composite", url: "https://en.wikipedia.org/wiki/NASDAQ_Composite" },
  ],
  "2008": [
    { label: "Wikipedia: 2008 financial crisis", url: "https://en.wikipedia.org/wiki/2008_financial_crisis" },
    { label: "FCIC Final Report (2011)", url: "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf" },
  ],
  bitcoin: [
    { label: "Wikipedia: Bitcoin", url: "https://en.wikipedia.org/wiki/Bitcoin" },
    { label: "Bitcoin whitepaper — Satoshi Nakamoto (2008)", url: "https://bitcoin.org/bitcoin.pdf" },
  ],
  "covid-2020": [
    { label: "Wikipedia: 2020 stock market crash", url: "https://en.wikipedia.org/wiki/2020_stock_market_crash" },
    { label: "Wikipedia: Everything bubble", url: "https://en.wikipedia.org/wiki/Everything_bubble" },
  ],
  "crypto-2022": [
    { label: "Wikipedia: FTX", url: "https://en.wikipedia.org/wiki/FTX" },
    { label: "Wikipedia: Terra (blockchain)", url: "https://en.wikipedia.org/wiki/Terra_(blockchain)" },
  ],
  ai: [
    { label: "Wikipedia: AI boom", url: "https://en.wikipedia.org/wiki/AI_boom" },
    { label: "Wikipedia: Generative artificial intelligence", url: "https://en.wikipedia.org/wiki/Generative_artificial_intelligence" },
  ],
  "euro-debt": [
    { label: "Wikipedia: European debt crisis", url: "https://en.wikipedia.org/wiki/European_debt_crisis" },
    { label: "ECB — Draghi 'whatever it takes' speech (2012)", url: "https://www.ecb.europa.eu/press/key/date/2012/html/sp120726.en.html" },
  ],
  "svb-2023": [
    { label: "Wikipedia: Collapse of Silicon Valley Bank", url: "https://en.wikipedia.org/wiki/Collapse_of_Silicon_Valley_Bank" },
    { label: "Wikipedia: Acquisition of Credit Suisse by UBS", url: "https://en.wikipedia.org/wiki/Acquisition_of_Credit_Suisse_by_UBS" },
  ],
};
