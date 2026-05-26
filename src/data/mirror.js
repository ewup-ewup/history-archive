// 날짜별 거울 데이터 (MM-DD) — 현재 화면에서는 미사용, 향후 활용 위해 보존
export const MIRROR_DB = {
  "05-25": {
    year: 1977, icons: ["TrendingUp", "Scale"],
    ago: { ko: "49년 전 오늘", en: "49 years ago today", ja: "49年前の今日" },
    cat: { ko: "문화 · 산업의 탄생", en: "Culture · birth of an industry", ja: "文化 · 産業の誕生" },
    title: { ko: "한 편의 영화가, 하나의 산업으로", en: "One film becomes an industry", ja: "一本の映画が、一つの産業に" },
    body: { ko: "제작사조차 흥행을 기대하지 않았던 SF 영화가 개봉했습니다. 이 영화는 이후 수십 년에 걸쳐 완구·게임·미디어를 아우르는 거대한 프랜차이즈 생태계로 성장했습니다.", en: "A sci-fi film even its studio doubted opened today. Over decades it grew into a vast franchise ecosystem spanning toys, games, and media.", ja: "制作会社さえ成功を期待しなかったSF映画が公開されました。数十年かけて玩具・ゲーム・メディアを包む巨大なフランチャイズ生態系に成長しました。" },
    echo: { ko: "하나의 혁신적 제품이 예상을 뛰어넘어 거대한 생태계 산업으로 확장되는 패턴은 시장에서 반복됩니다. 스마트폰이 앱·액세서리 생태계를, 전기차가 충전·배터리 생태계를 낳은 것처럼요.", en: "One innovative product expanding beyond expectation into a vast ecosystem is a pattern markets repeat — as smartphones birthed app and accessory ecosystems, and EVs birthed charging and battery ones.", ja: "一つの革新的製品が予想を超え巨大な生態系産業へ拡張するパターンは市場で繰り返されます。スマホがアプリ・周辺機器の生態系を、EVが充電・電池の生態系を生んだように。" },
    persp: [
      { lens: { ko: "성장의 눈", en: "Growth lens", ja: "成長の眼" }, text: { ko: "단일 히트작이 아니라 그것이 만들어낼 '생태계'의 크기를 상상한 쪽이 가장 큰 보상을 얻었습니다.", en: "Those who imagined not a single hit but the size of the ecosystem it would create reaped the most.", ja: "単発のヒットではなく、それが生む『生態系』の大きさを想像した側が最大の報酬を得ました。" } },
      { lens: { ko: "신중의 눈", en: "Caution lens", ja: "慎重の眼" }, text: { ko: "하지만 모든 히트작이 산업이 되진 않습니다. 초기에 산업화 가능성을 가려내는 일은 결과를 안 뒤에야 쉬워 보입니다.", en: "But not every hit becomes an industry. Spotting that potential early only looks easy in hindsight.", ja: "しかし全てのヒットが産業になるわけではありません。初期に産業化の可能性を見抜くのは結果を知った後だけ簡単に見えます。" } },
    ],
    also: [
      { year: 1961, t: { ko: "케네디, '10년 안에 달에 사람을' 선언", en: "Kennedy vows a Moon landing within a decade", ja: "ケネディ、10年以内の月着陸を宣言" } },
      { year: 1953, t: { ko: "미국, 네바다에서 핵 포병 실험", en: "U.S. conducts nuclear artillery test in Nevada", ja: "米国、ネバダで核砲兵実験" } },
      { year: 1925, t: { ko: "스콥스 재판 — 진화론 교육 논쟁", en: "Scopes Trial — evolution teaching debate", ja: "スコープス裁判 — 進化論教育の論争" } },
    ],
  },
  "05-26": {
    year: 1896, icons: ["LineChart", "Clock"],
    ago: { ko: "130년 전 오늘", en: "130 years ago today", ja: "130年前の今日" },
    cat: { ko: "금융 · 지수의 탄생", en: "Finance · birth of the index", ja: "金融 · 指数の誕生" },
    title: { ko: "다우존스 지수, 세상에 처음 등장하다", en: "The Dow Jones index first appears", ja: "ダウ・ジョーンズ指数、初めて登場" },
    body: { ko: "찰스 다우가 12개 기업의 주가를 하나의 숫자로 묶어 발표했습니다. 시장 전체의 체온을 재는 '지수'라는 개념이 태어난 순간입니다. 40.94로 시작한 이 숫자는 한 세기 넘게 세계 경제의 맥박을 기록해 왔습니다.", en: "Charles Dow bundled 12 firms' prices into one number. The concept of an 'index' — taking the market's temperature — was born. Starting at 40.94, it has logged the world economy's pulse for over a century.", ja: "チャールズ・ダウが12社の株価を一つの数字にまとめ発表しました。市場全体の体温を測る『指数』という概念が生まれた瞬間です。40.94から始まったこの数字は一世紀以上、世界経済の脈拍を記録してきました。" },
    echo: { ko: "개별 종목의 소음에서 벗어나 전체의 흐름을 하나의 숫자로 보려는 시도는 투자의 역사를 바꿨습니다. 오늘날의 지수 추종 투자(인덱스 펀드)는 모두 이 발상에서 출발했습니다.", en: "The attempt to see the whole flow as one number, free of individual noise, changed investing history. Today's index investing all began with this idea.", ja: "個別銘柄の騒音から離れ、全体の流れを一つの数字で見る試みは投資の歴史を変えました。今日のインデックス投資はすべてこの発想から始まりました。" },
    persp: [
      { lens: { ko: "분석의 눈", en: "Analysis lens", ja: "分析の眼" }, text: { ko: "개별 기업을 다 알 수 없다면, 시장 전체를 사는 것도 하나의 합리적 전략이라는 생각의 뿌리입니다.", en: "If you can't know every firm, buying the whole market is itself a rational strategy — this is its root.", ja: "個別企業を全て知り得ないなら、市場全体を買うのも合理的戦略という考えの根です。" } },
      { lens: { ko: "역사의 눈", en: "History lens", ja: "歴史の眼" }, text: { ko: "초기 12개 기업 중 오늘까지 같은 형태로 남은 곳은 없습니다. 영원한 우량 기업은 없다는 교훈이기도 합니다.", en: "None of the original 12 firms survive in the same form today — a lesson that no blue chip is forever.", ja: "当初の12社のうち今日まで同じ形で残る企業はありません。永遠の優良企業はないという教訓でもあります。" } },
    ],
    also: [
      { year: 1868, t: { ko: "미국, 존슨 대통령 탄핵 부결", en: "U.S. Senate acquits President Johnson", ja: "米国、ジョンソン大統領弾劾否決" } },
      { year: 1940, t: { ko: "덩케르크 철수 작전 시작", en: "Dunkirk evacuation begins", ja: "ダンケルク撤退作戦開始" } },
      { year: 1972, t: { ko: "미·소 ABM 제한 협정 체결", en: "U.S.–USSR sign the ABM Treaty", ja: "米ソ、ABM制限条約締結" } },
    ],
  },
  "05-27": {
    year: 1931, icons: ["TrendingDown", "Scale"],
    ago: { ko: "95년 전 오늘", en: "95 years ago today", ja: "95年前の今日" },
    cat: { ko: "기술 · 도약의 상징", en: "Tech · a symbol of ambition", ja: "技術 · 飛躍の象徴" },
    title: { ko: "엠파이어 스테이트 빌딩, 대공황 한복판에서 문을 열다", en: "The Empire State Building opens amid the Depression", ja: "エンパイア・ステート・ビル、大恐慌の只中で開業" },
    body: { ko: "세계 최고층 빌딩이 뉴욕에 완공됐습니다. 놀라운 건 시점입니다. 대공황으로 경제가 바닥을 기던 시기에 불과 410일 만에 지어 올린 야심작이었지만, 입주자가 없어 한동안 '엠프티 스테이트 빌딩'이라 불렸습니다.", en: "The world's tallest building was completed in New York — astonishing for its timing. Raised in just 410 days as the Depression bottomed out, it sat so empty it was nicknamed the 'Empty State Building.'", ja: "世界最高層ビルがニューヨークに完成しました。驚くべきはその時期です。大恐慌で経済が底を這う中わずか410日で建てた野心作でしたが、入居者がなく一時『エンプティ・ステート・ビル』と呼ばれました。" },
    echo: { ko: "최대의 야심이 최악의 시기와 겹치는 일은 드물지 않습니다. 호황기에 기획된 거대 프로젝트가 불황기에 완성되어 빛을 잃는 패턴은, 부동산과 설비 투자에서 반복되어 왔습니다.", en: "Grand ambition colliding with the worst timing is not rare. Megaprojects planned in booms and completed in busts have dimmed again and again — in real estate and capital spending.", ja: "最大の野心が最悪の時期と重なることは珍しくありません。好況期に計画された巨大事業が不況期に完成し輝きを失うパターンは、不動産や設備投資で繰り返されてきました。" },
    persp: [
      { lens: { ko: "역발상의 눈", en: "Contrarian lens", ja: "逆張りの眼" }, text: { ko: "불황기에 지은 자산은 시간이 지나 결국 도시의 상징이 되었습니다. 침체기의 투자가 장기적으로 빛난 사례입니다.", en: "An asset built in a slump eventually became the city's icon — a case where downturn investment shone long term.", ja: "不況期に建てた資産は時を経て都市の象徴になりました。低迷期の投資が長期で輝いた事例です。" } },
      { lens: { ko: "신중의 눈", en: "Caution lens", ja: "慎重の眼" }, text: { ko: "그러나 완공 직후 수년간의 공실은 현실이었습니다. 타이밍의 불운은 장기 가치와 별개로 단기 고통을 줍니다.", en: "Yet years of vacancy after completion were real. Bad timing inflicts short-term pain regardless of long-term value.", ja: "しかし完成直後の数年の空室は現実でした。タイミングの不運は長期価値とは別に短期の痛みを与えます。" } },
    ],
    also: [
      { year: 1937, t: { ko: "샌프란시스코 금문교 개통", en: "San Francisco's Golden Gate Bridge opens", ja: "サンフランシスコ、金門橋開通" } },
      { year: 1905, t: { ko: "러일전쟁 쓰시마 해전 발발", en: "Battle of Tsushima in the Russo-Japanese War", ja: "日露戦争・対馬海戦勃発" } },
      { year: 1703, t: { ko: "표트르 대제, 상트페테르부르크 건설", en: "Peter the Great founds Saint Petersburg", ja: "ピョートル大帝、サンクトペテルブルク建設" } },
    ],
  },
  "10-29": {
    year: 1929, icons: ["TrendingDown", "Scale"],
    ago: { ko: "97년 전 오늘", en: "97 years ago today", ja: "97年前の今日" },
    cat: { ko: "금융 · 검은 화요일", en: "Finance · Black Tuesday", ja: "金融 · 暗黒の火曜日" },
    title: { ko: "검은 화요일, 광란의 시대가 끝나다", en: "Black Tuesday ends the roaring era", ja: "暗黒の火曜日、狂乱の時代が終わる" },
    body: { ko: "뉴욕 증시가 하루 만에 붕괴했습니다. 5년간 멈추지 않던 상승이 단 며칠 만에 무너지며 대공황의 문을 열었습니다. 구두닦이 소년까지 종목을 추천하던 낙관의 끝에서, 시장은 가장 잔혹한 방식으로 돌아섰습니다.", en: "The New York market collapsed in a single day. Five years of relentless gains crumbled in days, opening the Great Depression. At the end of optimism so wide even shoeshine boys tipped stocks, the market turned with utmost cruelty.", ja: "ニューヨーク株式市場が一日で崩壊しました。5年間止まらなかった上昇が数日で崩れ、大恐慌の扉を開きました。靴磨きの少年まで銘柄を推す楽観の果てに、市場は最も残酷に反転しました。" },
    echo: { ko: "모두가 낙관할 때가 가장 위험하다는 명제의 원형입니다. 과도한 빚으로 부풀려진 자산, 만장일치의 낙관 — 이 조합은 이후의 모든 버블에서 변주되어 반복되었습니다.", en: "The archetype of 'most dangerous when all are optimistic.' Assets inflated by excess debt plus unanimous optimism — this pairing recurred, with variations, in every later bubble.", ja: "皆が楽観するときが最も危険という命題の原型です。過剰な負債で膨らんだ資産、全会一致の楽観 — この組み合わせは以後の全てのバブルで変奏され繰り返されました。" },
    persp: [
      { lens: { ko: "역발상의 눈", en: "Contrarian lens", ja: "逆張りの眼" }, text: { ko: "군중이 만장일치로 한 방향을 가리킬 때, 그 반대편을 살펴본 소수가 자산을 지켰습니다.", en: "When the crowd points one way in unison, the few who looked the other way preserved their assets.", ja: "群衆が全会一致で一方を指すとき、反対側を見た少数が資産を守りました。" } },
      { lens: { ko: "신중의 눈", en: "Caution lens", ja: "慎重の眼" }, text: { ko: "다만 '언제' 무너질지는 아무도 몰랐습니다. 거품을 알아도 시점을 맞히는 건 별개의 영역입니다.", en: "Yet no one knew 'when' it would break. Knowing it's a bubble is separate from timing it.", ja: "ただし『いつ』崩れるかは誰も分かりませんでした。バブルと分かっても時期を当てるのは別の領域です。" } },
    ],
    also: [
      { year: 1923, t: { ko: "터키 공화국 수립, 아타튀르크 대통령 취임", en: "Republic of Turkey founded; Atatürk president", ja: "トルコ共和国樹立、アタテュルク大統領就任" } },
      { year: 1969, t: { ko: "최초의 ARPANET 메시지 — 인터넷의 origin", en: "First ARPANET message — origin of the internet", ja: "最初のARPANETメッセージ — インターネットの起源" } },
      { year: 1998, t: { ko: "존 글렌, 77세에 우주 비행 — 최고령 우주인", en: "John Glenn flies to space at 77 — oldest astronaut", ja: "ジョン・グレン、77歳で宇宙飛行 — 最高齢宇宙飛行士" } },
    ],
  },
};

export const MIRROR_FALLBACK = {
  year: { ko: "매일", en: "Daily", ja: "毎日" }, icons: ["Eye"],
  ago: { ko: "역사의 운율", en: "The rhyme of history", ja: "歴史の韻律" },
  cat: { ko: "오늘의 거울", en: "Today's mirror", ja: "今日の鏡" },
  title: { ko: "역사는 반복하지 않지만, 비슷한 운율로 흐른다", en: "History doesn't repeat, but it rhymes", ja: "歴史は繰り返さないが、似た韻律で流れる" },
  body: { ko: "오늘 날짜의 대표 사건은 아직 아카이브에 정리 중입니다. 그러나 역사의 어느 하루도 시장에 교훈을 남기지 않은 날은 없습니다. 날짜를 넘겨 다른 날의 거울을 들여다보세요.", en: "Today's headline event is still being archived. Yet no day in history has left the market without a lesson. Flip the date to peer into another day's mirror.", ja: "今日の代表的な出来事はまだアーカイブ整理中です。しかし歴史のどの一日も市場に教訓を残さなかった日はありません。日付をめくって別の日の鏡を覗いてください。" },
  echo: { ko: "마크 트웨인이 남겼다고 전해지는 말처럼, 역사는 똑같이 되풀이되지 않지만 비슷한 운율로 흐릅니다. 그 운율에 귀 기울이는 것이 이 아카이브의 목적입니다.", en: "As the line attributed to Mark Twain goes, history does not repeat itself, but it rhymes. Listening to that rhyme is the purpose of this archive.", ja: "マーク・トウェインが残したと伝わる言葉のように、歴史は同じには繰り返さないが似た韻律で流れます。その韻律に耳を傾けるのがこのアーカイブの目的です。" },
  persp: [
    { lens: { ko: "오늘의 눈", en: "Today's lens", ja: "今日の眼" }, text: { ko: "화살표를 눌러 데이터가 채워진 날짜로 이동해 보세요. 5월 25–27일, 10월 29일에 사례가 준비되어 있습니다.", en: "Use the arrows to move to a date with data. Cases are ready for May 25–27 and Oct 29.", ja: "矢印でデータのある日付へ移動してください。5月25〜27日、10月29日に事例があります。" } },
  ],
  also: [
    { year: 1929, t: { ko: "검은 화요일 — 10월 29일 보기", en: "Black Tuesday — see Oct 29", ja: "暗黒の火曜日 — 10月29日へ" } },
    { year: 1896, t: { ko: "다우지수 탄생 — 5월 26일 보기", en: "Dow index born — see May 26", ja: "ダウ指数誕生 — 5月26日へ" } },
    { year: 1977, t: { ko: "스타워즈 개봉 — 5월 25일 보기", en: "Star Wars opens — see May 25", ja: "スター・ウォーズ公開 — 5月25日へ" } },
  ],
};
