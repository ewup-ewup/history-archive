/**
 * REFLECTIONS — 사건별 자기점검 질문 사전 (3개 × 3언어).
 * 단순 정보 소비 → 능동 학습 전환용. EventDetail에서 textarea로 답 입력 가능.
 * 답은 localStorage('ha-reflections-v1')에 자동 저장.
 *
 * 작성 원칙 (3축):
 *  Q1 메커니즘 이해 — "왜 그렇게 됐나" 본문 핵심 재구성
 *  Q2 본인 투영   — "당신이 그 자리에 있었다면" 시점 전환
 *  Q3 오늘과 연결 — "지금 시장·내 결정과 어떻게 닿나" 적용
 */
export const REFLECTIONS = {
  cowrie: {
    ko: [
      "자안패가 본질 가치 없이 화폐가 될 수 있었던 진짜 이유는 무엇이었을까요?",
      "당신이 자안패 시대 부족 구성원이라면, 어떤 순간 '이 조개를 받기 싫다'고 느꼈을까요?",
      "오늘 가치 있다고 여겨지는 디지털 자산 중, 비슷한 '집단 신뢰만으로 선' 가치를 가진 건 어떤 게 있을까요?",
    ],
    en: [
      "What was the real reason cowries could become money without intrinsic value?",
      "If you were a tribal member in the cowrie era, when might you have refused to accept a shell?",
      "Among today's digital assets, which ones hold value purely through 'collective belief' in the same way?",
    ],
    ja: [
      "子安貝が本来価値なく貨幣となりえた本当の理由は何だったでしょうか?",
      "あなたが子安貝時代の部族の一員なら、どんな瞬間に『この貝は受け取りたくない』と感じたでしょうか?",
      "今日価値があるとされるデジタル資産の中で、同じく『集団的信頼だけで立つ』価値を持つものは何でしょうか?",
    ],
  },
  tulip: {
    ko: [
      "튤립 광풍에서 단순한 '광기'가 아니라 시스템적 요인(선도 계약·결제 시스템 부재 등)은 무엇이었을까요?",
      "당신이 1636년 네덜란드 상인이라면, 가격이 두 배 오를 때 팔까요 더 살까요? 왜?",
      "지금 내가 보고 있는 자산 중에 '본질 가치보다 다음 구매자 기대'가 더 크게 느껴지는 게 있을까요?",
    ],
    en: [
      "Beyond simple 'madness,' what systemic factors (forward contracts, lack of clearing, etc.) drove tulip mania?",
      "If you were a Dutch merchant in 1636 and prices had doubled, would you sell or buy more? Why?",
      "Among assets you're watching now, which feels more driven by 'expectation of the next buyer' than intrinsic value?",
    ],
    ja: [
      "チューリップ狂熱で単なる『狂気』ではなくシステム的要因(先渡し契約・決済システムの不在など)は何だったでしょうか?",
      "あなたが1636年オランダの商人なら、価格が2倍になったとき売りますか、もっと買いますか? なぜ?",
      "今あなたが見ている資産の中で、『本質価値より次の買い手への期待』が強く感じられるものはありますか?",
    ],
  },
  lydia: {
    ko: [
      "리디아 주화 이전엔 어떻게 거래가 이뤄졌고, 무엇이 가장 큰 마찰이었을까요?",
      "당신이 리디아 왕이라면, '왕의 도장' 신뢰를 얻기 위해 가장 먼저 했어야 할 일은 무엇일까요?",
      "오늘 중앙은행 디지털화폐(CBDC) 논의에서 리디아 모델은 어떻게 적용·확장될 수 있을까요?",
    ],
    en: [
      "Before Lydian coins, how were transactions done — and what was the biggest friction?",
      "If you were the king of Lydia, what would you do first to earn trust in 'the king's stamp'?",
      "In today's CBDC debate, how could Lydia's model be applied or extended?",
    ],
    ja: [
      "リディア貨幣以前、取引はどのように行われ、何が最大の摩擦だったでしょうか?",
      "あなたがリディア王なら、『王の印章』への信頼を得るためにまず何をすべきでしょうか?",
      "今日のCBDC(中央銀行デジタル通貨)議論で、リディアモデルはどう適用・拡張できるでしょうか?",
    ],
  },
  debasement: {
    ko: [
      "로마가 100년에 걸쳐 점진적으로 변조한 이유는 무엇일까요? (왜 한꺼번에 안 했을까)",
      "당신이 2세기 로마 상인이라면, 새 동전의 은 함량이 줄었다는 걸 어떻게 알 수 있었을까요?",
      "현대 인플레이션이 2%를 넘을 때, 사람들이 '내 돈의 가치가 줄어든다'고 느끼는 신호는 무엇일까요?",
    ],
    en: [
      "Why did Rome debase gradually over a century rather than all at once?",
      "If you were a 2nd-century Roman merchant, how could you detect that new coins had less silver?",
      "When modern inflation exceeds 2%, what signals tell people 'my money is losing value'?",
    ],
    ja: [
      "ローマが100年かけて漸進的に改鋳した理由は何でしょうか?(なぜ一度にやらなかったか)",
      "あなたが2世紀ローマの商人なら、新硬貨の銀含有量が減ったことをどう察知できたでしょうか?",
      "現代のインフレが2%を超えるとき、人々が『お金の価値が減っている』と感じる兆候は何でしょうか?",
    ],
  },
  jiaozi: {
    ko: [
      "송 정부가 교자 발행량을 절제하지 못한 구조적 이유는 무엇이었을까요?",
      "당신이 11세기 쓰촨 상인이라면, 교자를 받을지 거절할지 무엇으로 판단했을까요?",
      "오늘 명목화폐(달러·원)에 대한 신뢰의 균열 신호는 어떻게 보일까요?",
    ],
    en: [
      "What structural reason kept the Song government from restraining jiaozi issuance?",
      "If you were an 11th-century Sichuan merchant, what would tell you whether to accept jiaozi?",
      "Today, what cracks in trust toward fiat money (dollars, won) might first appear?",
    ],
    ja: [
      "宋政府が交子の発行量を抑制できなかった構造的理由は何だったでしょうか?",
      "あなたが11世紀四川の商人なら、交子を受け取るか拒否するか何で判断したでしょうか?",
      "今日、名目通貨(ドル・円)への信頼の亀裂はどう現れるでしょうか?",
    ],
  },
  "south-sea": {
    ko: [
      "남해회사가 정치권과 결합한 게 거품을 키운 핵심 메커니즘이었던 이유는 무엇일까요?",
      "당신이 1720년 영국 중산층이라면, 주가가 5배 올랐을 때 매수했을까요?",
      "오늘 정부 지원·보조금이 큰 산업에서 비슷한 패턴이 보이는 곳이 있을까요?",
    ],
    en: [
      "Why was the South Sea Company's entanglement with politics the core mechanism inflating the bubble?",
      "If you were a British middle-class person in 1720 and the stock had risen 5x, would you have bought in?",
      "In today's heavily government-backed industries, do you see similar patterns?",
    ],
    ja: [
      "南海会社が政治と結合したことがバブルを膨らませた核心メカニズムだった理由は何でしょうか?",
      "あなたが1720年の英国中産階級なら、株価が5倍に上がったとき買い付けたでしょうか?",
      "今日、政府支援・補助金の大きな産業で同様のパターンが見られる場所はあるでしょうか?",
    ],
  },
  mississippi: {
    ko: [
      "John Law의 시스템이 영국 남해회사보다 더 빨리 커지고 더 깊이 무너진 이유는 무엇일까요?",
      "당신이 John Law의 측근이었다면, 어느 순간에 '이건 안 된다'고 경고했을까요?",
      "오늘 국가가 직접 통제하는 자산 시장(예: 일부 신흥국)에서 비슷한 위험이 있을까요?",
    ],
    en: [
      "Why did John Law's system grow faster and collapse deeper than Britain's South Sea Company?",
      "If you were one of John Law's confidants, at what moment would you have warned him 'this won't work'?",
      "In markets directly controlled by states today (e.g., some emerging economies), do similar risks exist?",
    ],
    ja: [
      "John Lawのシステムが英国南海会社よりも速く膨らみ深く崩れた理由は何でしょうか?",
      "あなたがJohn Lawの側近なら、どの瞬間に『これはダメだ』と警告したでしょうか?",
      "今日、国家が直接統制する資産市場(例: 一部の新興国)で同様のリスクはあるでしょうか?",
    ],
  },
  "gold-standard": {
    ko: [
      "금본위제의 자동조정 메커니즘이 위기 시 오히려 위기를 키운 이유는 무엇일까요?",
      "당신이 1925년 영국 정책 결정자라면, 금본위 복귀 평가를 어떻게 정했을까요?",
      "비트코인의 '발행량 고정'이 금본위제와 같은 트레이드오프를 다시 만들 가능성이 있을까요?",
    ],
    en: [
      "Why did the gold standard's self-adjusting mechanism amplify, rather than dampen, crises?",
      "As a 1925 British policymaker, how would you have set the gold-standard return parity?",
      "Could Bitcoin's 'capped supply' recreate the same trade-offs as the gold standard?",
    ],
    ja: [
      "金本位制の自動調整メカニズムが危機時にかえって危機を拡大させた理由は何でしょうか?",
      "あなたが1925年英国の政策決定者なら、金本位復帰の平価をどう決めたでしょうか?",
      "ビットコインの『発行量固定』が金本位制と同じトレードオフを再生する可能性はありますか?",
    ],
  },
  "1907": {
    ko: [
      "1907년 미국 시스템에서 중앙은행 부재가 만든 결정적 취약점은 무엇이었을까요?",
      "당신이 J.P.Morgan이었다면, 어느 신탁부터 살리기로 결정하고 그 기준은 무엇이었을까요?",
      "오늘 '대마불사 + 그림자 금융' 위험은 어디서 가장 크게 보이나요?",
    ],
    en: [
      "What was the decisive vulnerability the absence of a central bank created in the 1907 U.S. system?",
      "As J.P. Morgan, which trust would you have chosen to save first — and by what criteria?",
      "Where today is the 'too big to fail + shadow banking' risk most visible to you?",
    ],
    ja: [
      "1907年米国システムで中央銀行の不在が生んだ決定的な脆弱性は何だったでしょうか?",
      "あなたがJ.P.モルガンなら、どの信託から救うと決め、その基準は何だったでしょうか?",
      "今日『大きすぎて潰せない+シャドーバンキング』のリスクはどこに最も大きく見えますか?",
    ],
  },
  weimar: {
    ko: [
      "바이마르 인플레이션이 통상의 정책으로 멈출 수 없게 된 임계점은 어디였을까요?",
      "당신이 1923년 베를린 직장인이라면, 봉급을 받자마자 무엇을 했을까요?",
      "오늘 '인플레이션 기대'가 다시 풀릴 신호는 어떻게 보일까요?",
    ],
    en: [
      "Where was the threshold beyond which Weimar inflation could no longer be stopped by ordinary policy?",
      "If you were a Berlin office worker in 1923, what would you do the moment you received your pay?",
      "Today, what signs would suggest that 'inflation expectations' are unanchoring again?",
    ],
    ja: [
      "ワイマル・インフレが通常の政策で止められなくなった臨界点はどこだったでしょうか?",
      "あなたが1923年ベルリンの会社員なら、給料を受け取った瞬間に何をしたでしょうか?",
      "今日『インフレ期待』が再び解き放たれる兆候はどう見えるでしょうか?",
    ],
  },
  "1929": {
    ko: [
      "1929년 폭락 직전, 모두가 낙관하는 상황에서 반대 의견을 어떻게 발견할 수 있었을까요?",
      "당신이 1929년 가을 신용 매수 투자자라면, 첫 -10% 하락 때 어떻게 행동했을까요?",
      "오늘 지수가 사상 최고권에 있을 때, 1929년이 던지는 같은 질문은 무엇일까요?",
    ],
    en: [
      "Just before the 1929 crash, when everyone was optimistic, how could you have found contrary views?",
      "If you were a margin-buying investor in autumn 1929, how would you have acted at the first −10% drop?",
      "When indexes today sit at record highs, what is the same question 1929 quietly poses?",
    ],
    ja: [
      "1929年暴落直前、皆が楽観する状況で反対意見をどう発見できたでしょうか?",
      "あなたが1929年秋の信用買い投資家なら、最初の-10%下落のときどう行動したでしょうか?",
      "今日、指数が史上最高値圏にあるとき、1929年が静かに投げる同じ問いは何でしょうか?",
    ],
  },
  nixon: {
    ko: [
      "1971년 닉슨의 결정이 공개적·일회성이었기에 정상화 경로가 있었던 이유는 무엇일까요?",
      "당신이 1971년 8월 16일(쇼크 다음 날) 외국 정부 재무장관이라면, 첫 반응은 무엇이었을까요?",
      "오늘 기축통화의 지위가 위협받는다면 어떤 신호로 시작될까요?",
    ],
    en: [
      "Why did Nixon's open, one-time decision in 1971 leave a path for normalization?",
      "On August 16, 1971 (the day after the shock), as a foreign finance minister, what would your first reaction be?",
      "Today, what signals would mark the beginning of the reserve currency's status being threatened?",
    ],
    ja: [
      "1971年のニクソンの決定が公開的・一回性であったため正常化経路があった理由は何でしょうか?",
      "あなたが1971年8月16日(ショック翌日)の外国政府の財務大臣なら、最初の反応は何だったでしょうか?",
      "今日、基軸通貨の地位が脅かされるとしたら、どんな兆候から始まるでしょうか?",
    ],
  },
  "1997": {
    ko: [
      "한국이 외환위기에 가장 취약했던 단일 구조적 요인은 무엇이었을까요?",
      "당신이 1997년 11월 한국 기업 CFO라면, 단기 외채 차환 실패를 어떻게 막을 수 있었을까요?",
      "오늘 신흥국 중 비슷한 단기 외채 구조를 가진 곳이 어디일까요?",
    ],
    en: [
      "What was the single structural factor that made Korea most vulnerable in the 1997 crisis?",
      "As a Korean corporate CFO in November 1997, how could you have prevented short-term debt rollover failure?",
      "Among today's emerging markets, where do you see similar short-term external debt structures?",
    ],
    ja: [
      "韓国が通貨危機に最も脆弱だった単一の構造的要因は何だったでしょうか?",
      "あなたが1997年11月の韓国企業CFOなら、短期外債のロールオーバー失敗をどう防げたでしょうか?",
      "今日の新興国の中で、同様の短期外債構造を持つ場所はどこでしょうか?",
    ],
  },
  railway: {
    ko: [
      "1840년대 영국에서 철도 기술은 진짜였는데 주가는 거품이 된 이유의 핵심은 무엇일까요?",
      "당신이 1845년 영국 중산층이라면, 어떤 철도 회사에 투자할지 어떻게 가렸을까요?",
      "오늘 AI 시장에서 살아남을 회사를 미리 알아볼 수 있는 단서가 있을까요?",
    ],
    en: [
      "In 1840s Britain, what was the core reason rail tech was real yet stock prices became a bubble?",
      "As a British middle-class person in 1845, how would you have chosen which railway companies to back?",
      "In today's AI market, are there clues for spotting the companies that will survive?",
    ],
    ja: [
      "1840年代の英国で鉄道技術は本物だったが株価がバブルになった理由の核心は何でしょうか?",
      "あなたが1845年英国の中産階級なら、どの鉄道会社に投資するかをどう選別したでしょうか?",
      "今日のAI市場で、生き残る会社を事前に見分ける手がかりはあるでしょうか?",
    ],
  },
  "black-monday": {
    ko: [
      "1987년 폭락이 1929년처럼 경제 침체로 이어지지 않은 핵심 차이는 무엇이었을까요?",
      "당신이 1987년 10월 19일 포트폴리오 매니저라면, 시장이 멈춘 순간 어떤 결정을 했을까요?",
      "오늘 알고리즘 트레이딩·HFT가 일으킬 수 있는 비슷한 위험은 어디서 보이나요?",
    ],
    en: [
      "What was the key difference that kept the 1987 crash from spiraling into recession like 1929?",
      "As a portfolio manager on October 19, 1987, what decision would you have made the moment the market froze?",
      "Where do you see similar risks today from algorithmic trading and HFT?",
    ],
    ja: [
      "1987年の暴落が1929年のように景気後退に繋がらなかった核心的な違いは何だったでしょうか?",
      "あなたが1987年10月19日のポートフォリオマネージャーなら、市場が停止した瞬間どんな決定をしたでしょうか?",
      "今日、アルゴリズム取引・HFTが起こしうる同様のリスクはどこに見えますか?",
    ],
  },
  "japan-1989": {
    ko: [
      "일본이 1929 미국보다 더 깊고 길게 빠진 구조적 이유는 무엇일까요?",
      "당신이 1989년 일본은행 정책위원이라면, 1990년 금리 인상 속도를 어떻게 정했을까요?",
      "오늘 한국·중국이 일본화(Japanification)를 피하려면 어떤 신호를 봐야 할까요?",
    ],
    en: [
      "What structural reasons made Japan's slump deeper and longer than America's after 1929?",
      "As a Bank of Japan policymaker in 1989, how would you have set the pace of 1990 rate hikes?",
      "For Korea and China to avoid 'Japanification' today, what signals should they watch?",
    ],
    ja: [
      "日本が1929年の米国よりも深く長く陥った構造的理由は何でしょうか?",
      "あなたが1989年の日本銀行の政策委員なら、1990年の利上げ速度をどう決めたでしょうか?",
      "今日、韓国・中国が『日本化(Japanification)』を避けるために、どんな兆候を見るべきでしょうか?",
    ],
  },
  dotcom: {
    ko: [
      "닷컴버블이 영국 철도 광풍과 거의 같은 곡선을 그린 이유는 우연일까요, 구조적일까요?",
      "당신이 2000년 초 닷컴주에 투자 중이라면, 어느 신호에서 빠져나왔을까요?",
      "오늘 AI 시장이 닷컴의 정확한 반복일지, 다른 케이스일지를 가르는 단서는 무엇일까요?",
    ],
    en: [
      "Was the dot-com bubble tracing the same curve as British Railway Mania coincidence — or structural?",
      "As an investor in dot-com stocks in early 2000, at what signal would you have exited?",
      "Today, what clues separate AI being an exact dot-com repeat from being a different case?",
    ],
    ja: [
      "ドットコムバブルが英国の鉄道狂熱とほぼ同じ曲線を描いた理由は偶然でしょうか、構造的でしょうか?",
      "あなたが2000年初頭にドットコム株に投資していたら、どの兆候で抜けたでしょうか?",
      "今日、AI市場がドットコムの正確な反復なのか、別のケースなのかを分ける手がかりは何でしょうか?",
    ],
  },
  "2008": {
    ko: [
      "복잡한 금융 공학이 위험을 숨기기만 했지 없애지 못한 이유는 무엇이었을까요?",
      "당신이 2007년 모기지 담보 증권 분석가라면, 어떤 데이터를 봤어야 했을까요?",
      "오늘 '너무 커서 안 망한다'는 믿음이 있는 자산·기관·국가는 어디일까요?",
    ],
    en: [
      "Why did complex financial engineering only hide risk rather than remove it?",
      "As a mortgage-backed securities analyst in 2007, what data should you have been watching?",
      "Today, where is there still belief that 'this is too big to fail' — for assets, institutions, or nations?",
    ],
    ja: [
      "複雑な金融工学がリスクを隠しただけで取り除けなかった理由は何だったでしょうか?",
      "あなたが2007年のモーゲージ担保証券アナリストなら、どのデータを見るべきだったでしょうか?",
      "今日『大きすぎて潰せない』という信頼がある資産・機関・国はどこでしょうか?",
    ],
  },
  bitcoin: {
    ko: [
      "비트코인의 가치가 순수 집단 신뢰만으로 유지될 때, 그 신뢰가 깨질 수 있는 시나리오는 무엇일까요?",
      "당신이 처음 비트코인을 알게 된 사람에게 그 가치를 한 문장으로 설명한다면 어떻게 하시겠습니까?",
      "'국가 없는 돈'과 '국가 화폐' 사이의 균형이 향후 10년 어떻게 변할까요?",
    ],
    en: [
      "If Bitcoin's value rests on pure collective trust, what scenarios could break that trust?",
      "How would you explain Bitcoin's value in one sentence to someone hearing of it for the first time?",
      "How will the balance between 'money without a state' and 'state money' shift over the next ten years?",
    ],
    ja: [
      "ビットコインの価値が純粋に集団的信頼だけで維持されるとき、その信頼が崩れうるシナリオは何でしょうか?",
      "あなたが初めてビットコインを知る人に、その価値を一文で説明するとしたら何でしょうか?",
      "『国家なきお金』と『国家のお金』の均衡は今後10年でどう変わるでしょうか?",
    ],
  },
  "covid-2020": {
    ko: [
      "2020년 대응이 1929식 붕괴를 막은 동시에 2022 인플레이션을 만든 메커니즘은 무엇이었을까요?",
      "당신이 2020년 3월 23일 시장 저점에서 자금이 있었다면, 무엇을 사고 무엇을 안 샀을까요?",
      "오늘 코로나 사이클의 직접적 후속편이라 할 만한 시장 변화는 무엇일까요?",
    ],
    en: [
      "What mechanism made the 2020 response both prevent a 1929-style collapse and seed the 2022 inflation shock?",
      "If you had capital at the March 23, 2020 market low, what would you have bought — and what would you have avoided?",
      "Today, what market shifts can fairly be called the direct sequel to the COVID cycle?",
    ],
    ja: [
      "2020年の対応が1929型の崩壊を防いだ一方で2022年のインフレを生んだメカニズムは何だったでしょうか?",
      "あなたが2020年3月23日の市場底値で資金を持っていたら、何を買い、何を買わなかったでしょうか?",
      "今日、コロナ・サイクルの直接的な続編と呼べる市場の変化は何でしょうか?",
    ],
  },
  ai: {
    ko: [
      "AI 광풍이 이번엔 진짜 패러다임 변화인지, 아니면 닷컴의 반복인지를 가르는 핵심 지표는 무엇일까요?",
      "당신이 지금 시장을 본다면, '진짜 위의 거품'을 어떻게 가려낼 수 있을까요?",
      "5년 뒤 이 사건의 결말이 어떻게 쓰여 있을 거라 기대하나요? 왜 그렇게 예상하나요?",
    ],
    en: [
      "What key indicator separates the AI surge being a real paradigm shift from being a repeat of dot-com?",
      "Looking at the market today, how would you tell apart 'a bubble on top of something real'?",
      "Five years from now, how do you expect this event's ending to be written — and why?",
    ],
    ja: [
      "AI狂熱が今回は本物のパラダイム転換なのか、ドットコムの反復なのかを分ける核心指標は何でしょうか?",
      "あなたが今市場を見るとき、『本物の上のバブル』をどう見分けるでしょうか?",
      "5年後、この事件の結末はどう書かれていると期待しますか?なぜそう予想しますか?",
    ],
  },
};
