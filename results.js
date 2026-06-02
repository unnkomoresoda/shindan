// 5Q Results and Scoring System

const RESULTS_DATA = {
  iq: {
    name: 'IQ（思考知能）',
    description: '論理的思考、パターン認識、言語分析、推論能力',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '実行優先型' },
      { min: 40, max: 59, rank: '実用型', type: '実行優先型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '実行優先型': {
        strengths: ['直感的な判断が早い', '実践的な問題解決ができる', '複雑さを避けてシンプルに考える'],
        weaknesses: ['理論的な説明が苦手', '長期的な戦略立案が難しい', '細部の検証を後回しにする'],
        improvements: ['論理的思考の訓練', '段階的な分析スキル習得', '理論と実践のバランス'],
        environment: '即座の判断が求められる現場、実行重視の組織',
        referencePersons: [
          { name: 'トーマス・エジソン', reason: '試行錯誤を通じた実践的発明' },
          { name: '本田宗一郎', reason: '現場経験から生まれた革新' },
          { name: '豊臣秀吉', reason: '実行力による天下統一' }
        ]
      },
      '論理構築型': {
        strengths: ['複雑な現象を体系化できる', '因果関係を正確に理解する', '理論的な説得力がある'],
        weaknesses: ['完璧さを求めすぎて行動が遅れる', '実行段階での柔軟性が低い', '細部にこだわりすぎる'],
        improvements: ['実行スピードの向上', '不確実性への耐性', '段階的実装の習得'],
        environment: '理論構築が重要な研究機関、戦略立案部門',
        referencePersons: [
          { name: 'アイザック・ニュートン', reason: '複雑な現象を論理体系として整理' },
          { name: 'アラン・チューリング', reason: '計算理論の体系化' },
          { name: '湯川秀樹', reason: '物理学の理論体系構築' }
        ]
      },
      'パターン発見型': {
        strengths: ['隠れた法則を見出せる', '大量の情報から構造を抽出できる', '新しい視点を提供できる'],
        weaknesses: ['その法則の理論的説明が難しい', '細部の検証が不十分', '直感に頼りすぎる'],
        improvements: ['理論的な説明スキル', '仮説検証プロセス', '論文執筆能力'],
        environment: 'データ分析、研究開発、戦略企画',
        referencePersons: [
          { name: 'チャールズ・ダーウィン', reason: '大量の観察から進化論を発見' },
          { name: 'ニコラ・テスラ', reason: '自然界の法則から発明を創出' },
          { name: '南方熊楠', reason: '生態系の複雑な構造を解明' }
        ]
      },
      '言語分析型': {
        strengths: ['概念を正確に定義できる', '複雑な思想を整理できる', 'コミュニケーション能力が高い'],
        weaknesses: ['言葉に頼りすぎて実行が遅れる', '定義の違いで議論が長くなる', '実践的な判断が遅い'],
        improvements: ['実行力の強化', '決断スピード', '多様な表現方法の習得'],
        environment: '教育機関、思想形成、コミュニケーション重視の組織',
        referencePersons: [
          { name: '孔子', reason: '言葉・概念を整理し思想体系を構築' },
          { name: 'ルートヴィヒ・ウィトゲンシュタイン', reason: '言語の本質を分析' },
          { name: '福沢諭吉', reason: '概念の翻訳と思想の普及' }
        ]
      },
      '総合処理型': {
        strengths: ['複数領域を統合できる', '知識を実務に変換できる', '全体最適を考える'],
        weaknesses: ['各領域の深さが浅くなる可能性', '専門性の追求が難しい', '細部の完璧さを求めにくい'],
        improvements: ['特定領域の深掘り', '専門知識の強化', 'バランス感覚の維持'],
        environment: '経営層、プロデューサー職、複合的な問題解決が必要な部門',
        referencePersons: [
          { name: 'ベンジャミン・フランクリン', reason: '複数領域を横断した知識活用' },
          { name: 'ジョン・フォン・ノイマン', reason: '数学から経済学まで統合' },
          { name: '渋沢栄一', reason: '知識を社会制度に変換' }
        ]
      }
    }
  },
  eq: {
    name: 'EQ（感情知能）',
    description: '自己認識、自己制御、共感、調整、関係構築',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '独立判断型' },
      { min: 40, max: 59, rank: '実用型', type: '独立判断型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '独立判断型': {
        strengths: ['自分の判断軸がしっかりしている', '周囲の圧力に流されない', '決断が早い'],
        weaknesses: ['他人の気持ちを軽視することがある', '人間関係が冷淡に見える', 'チームワークが難しい'],
        improvements: ['共感スキルの育成', '他者理解の深化', '柔軟な対応'],
        environment: '独立した判断が求められる職種、起業家的環境',
        referencePersons: [
          { name: 'スティーブ・ジョブズ', reason: '自分の判断軸で革新を推進' },
          { name: 'マーガレット・サッチャー', reason: '信念を貫いた指導' },
          { name: '本田宗一郎', reason: '独立した判断で企業を成長' }
        ]
      },
      '共感型': {
        strengths: ['他人の痛みに寄り添える', '信頼関係を築きやすい', '安心感を与えられる'],
        weaknesses: ['他人の問題に巻き込まれやすい', '境界線が曖昧になる', '決断が遅れる'],
        improvements: ['境界線の設定', '自己主張スキル', '問題解決能力'],
        environment: 'カウンセリング、福祉、教育、人事部門',
        referencePersons: [
          { name: 'ダイアナ妃', reason: '弱者への寄り添い' },
          { name: 'フレッド・ロジャース', reason: '子どもへの深い共感' },
          { name: '黒柳徹子', reason: 'ユニセフ活動を通じた共感' }
        ]
      },
      '調整型': {
        strengths: ['対立を解決できる', '長期的な安定を作れる', 'チームをまとめられる'],
        weaknesses: ['妥協しすぎる', '決断が曖昧になる', '強いメッセージが出しにくい'],
        improvements: ['リーダーシップの強化', '明確な方針提示', '決断力'],
        environment: 'マネジメント職、政治、外交',
        referencePersons: [
          { name: 'ネルソン・マンデラ', reason: '対立する勢力をまとめた調整力' },
          { name: 'ジミー・カーター', reason: '平和構築への調整' },
          { name: '徳川家康', reason: '長期的な安定を実現' }
        ]
      },
      '観察型': {
        strengths: ['人間の微細な変化を察知できる', '深い洞察ができる', '創造的な表現ができる'],
        weaknesses: ['行動が遅れる', '他人に意見を述べにくい', '実行力が弱い'],
        improvements: ['実行力の強化', '意見表明スキル', '行動スピード'],
        environment: '文学、心理学、芸術、研究',
        referencePersons: [
          { name: 'ジェーン・グドール', reason: '動物の行動を深く観察' },
          { name: '紫式部', reason: '人間関係の微細な描写' },
          { name: '夏目漱石', reason: '人間心理の深い洞察' }
        ]
      },
      '戦略共感型': {
        strengths: ['人間理解を戦略に活かせる', '組織をまとめられる', '長期的な信頼を構築できる'],
        weaknesses: ['複雑さが増す', '短期的な決断が難しい', '個人の感情が優先されることもある'],
        improvements: ['シンプルさの追求', '短期的判断力', 'バランス感覚'],
        environment: '経営層、大型プロジェクトリーダー、政治指導者',
        referencePersons: [
          { name: 'エイブラハム・リンカーン', reason: '人間理解を政治に活かした' },
          { name: 'ウォーレン・バフェット', reason: '人間心理を投資戦略に活かした' },
          { name: '松下幸之助', reason: '人間理解を経営に活かした' }
        ]
      }
    }
  },
  aq: {
    name: 'AQ（逆境知能）',
    description: '回復力、粘り強さ、分析力、適応力、責任感',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '安定維持型' },
      { min: 40, max: 59, rank: '実用型', type: '慎重適応型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '安定維持型': {
        strengths: ['秩序を重視できる', '急激な変化を避けられる', '安定した環境を作れる'],
        weaknesses: ['変化への対応が遅い', '新しい挑戦が難しい', '停滞しやすい'],
        improvements: ['変化への適応力', '新しい視点の習得', 'チャレンジ精神'],
        environment: '安定が重要な業界、伝統的な組織',
        referencePersons: [
          { name: 'ジョージ・ワシントン', reason: '激動の中で秩序を維持' },
          { name: '上杉鷹山', reason: '領地の安定を重視' },
          { name: '徳川家康', reason: '長期的な安定体制を構築' }
        ]
      },
      '慎重適応型': {
        strengths: ['焦らず時機を待つ', '環境に適応できる', '着実に成果を出す'],
        weaknesses: ['決断が遅れる', 'チャンスを逃すことがある', '主体性が弱い'],
        improvements: ['決断スピード', '主体性の強化', 'チャンスの見極め'],
        environment: '長期的な成長が必要な環境、変化が緩やかな業界',
        referencePersons: [
          { name: '徳川家康', reason: '時機を待つ忍耐力' },
          { name: '吉田茂', reason: '慎重な政治判断' },
          { name: 'チャールズ・ダーウィン', reason: '長期的な観察と適応' }
        ]
      },
      '修復型': {
        strengths: ['危機を立て直せる', '停滞を打破できる', '再建能力が高い'],
        weaknesses: ['危機的状況でないと動かない', '予防的な対応が弱い', '安定期に退屈する'],
        improvements: ['予防的思考', '平時の改善', '継続性'],
        environment: '危機管理、再建プロジェクト、改革推進',
        referencePersons: [
          { name: 'フランクリン・ルーズベルト', reason: '大恐慌からの立て直し' },
          { name: '二宮尊徳', reason: '荒廃した村の再建' },
          { name: '稲盛和夫', reason: '企業の再建と成長' }
        ]
      },
      '戦略型': {
        strengths: ['困難を戦略で突破できる', '資源配分が上手', '複雑な状況を理解できる'],
        weaknesses: ['人間関係が冷淡に見える', '感情的な配慮が不足', '短期的な成果重視'],
        improvements: ['人間関係スキル', '共感能力', '長期的視点'],
        environment: '経営戦略、軍事、複雑な問題解決',
        referencePersons: [
          { name: 'ナポレオン・ボナパルト', reason: '戦略的な困難突破' },
          { name: '孫子', reason: '戦略理論の構築' },
          { name: '武田信玄', reason: '戦略的な領土拡大' }
        ]
      },
      '変革型': {
        strengths: ['ルール自体を変えられる', '根本的な改革ができる', '新しい時代を作れる'],
        weaknesses: ['既存の価値を否定しすぎる', '混乱を招くことがある', '伝統を軽視する'],
        improvements: ['歴史への理解', '段階的改革', '保守的視点の習得'],
        environment: '起業、社会改革、革新的な組織',
        referencePersons: [
          { name: 'リー・クアンユー', reason: 'シンガポール建国と改革' },
          { name: '鄧小平', reason: '中国の構造改革' },
          { name: '織田信長', reason: 'ルール自体を変えた革新' }
        ]
      }
    }
  },
  sq: {
    name: 'SQ（社会知能）',
    description: '雰囲気読み、影響力、役割認識、構造理解、影響力行使',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '個人集中型' },
      { min: 40, max: 59, rank: '実用型', type: '関係実務型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '個人集中型': {
        strengths: ['個人の技術や思想が深い', '集団適応より個人の表現を優先', '独自の世界観を持つ'],
        weaknesses: ['組織適応が難しい', '人間関係が限定的', '集団での影響力が弱い'],
        improvements: ['コミュニケーション能力', '組織理解', '柔軟性'],
        environment: '芸術、研究、専門職、個人事業主',
        referencePersons: [
          { name: 'ブレーズ・パスカル', reason: '個人の思想を深掘り' },
          { name: '宮本武蔵', reason: '個人の技術を極めた' },
          { name: 'ゴッホ', reason: '個人の表現を貫いた' }
        ]
      },
      '関係実務型': {
        strengths: ['人間関係を実利に活かせる', '協力を引き出せる', '取引が上手'],
        weaknesses: ['深い信頼関係が築きにくい', '利己的に見える', '長期的な関係が弱い'],
        improvements: ['信頼関係構築', '長期的視点', '利他的行動'],
        environment: '営業、人事、ネットワーク構築が必要な職種',
        referencePersons: [
          { name: '豊臣秀吉', reason: '人間関係を活用した出世' },
          { name: 'アンドリュー・カーネギー', reason: '人脈を活用した事業展開' },
          { name: 'ベンジャミン・フランクリン', reason: '人間関係を活用した成功' }
        ]
      },
      '調停型': {
        strengths: ['対立を解決できる', '合意形成が上手', '秩序を作れる'],
        weaknesses: ['強いリーダーシップが出しにくい', '決断が遅れる', '妥協しすぎる'],
        improvements: ['リーダーシップ', '決断力', '明確な方針提示'],
        environment: 'マネジメント、外交、紛争解決',
        referencePersons: [
          { name: 'コフィー・アナン', reason: '国連での調停' },
          { name: 'ネルソン・マンデラ', reason: '人種間の調整' },
          { name: '聖徳太子', reason: '豪族間の調整' }
        ]
      },
      '戦略型': {
        strengths: ['権力構造を理解できる', '長期的に動ける', '複雑な関係を操作できる'],
        weaknesses: ['信頼関係が浅い', '人間的な温かみが不足', '計算的に見える'],
        improvements: ['信頼構築', '人間関係の深化', '透明性'],
        environment: '経営層、政治、大型プロジェクトリーダー',
        referencePersons: [
          { name: 'ビスマルク', reason: '権力構造の操作' },
          { name: '徳川家康', reason: '長期的な権力構造構築' },
          { name: '諸葛亮', reason: '複雑な関係の戦略的操作' }
        ]
      },
      '設計型': {
        strengths: ['組織や制度を設計できる', '人ではなく仕組みで成果を出す', '持続可能なシステムを作れる'],
        weaknesses: ['個人的な関係が薄い', '人間的な配慮が不足', '冷淡に見える'],
        improvements: ['人間関係スキル', '共感能力', '温かみの追加'],
        environment: '組織設計、制度構築、経営企画',
        referencePersons: [
          { name: 'ピーター・ドラッカー', reason: 'マネジメント理論の構築' },
          { name: '渋沢栄一', reason: '日本の経済制度設計' },
          { name: '大久保利通', reason: '明治維新の制度設計' }
        ]
      }
    }
  },
  xq: {
    name: 'XQ（経験知能）',
    description: '学習力、抽象化、転移、再現性、成長志向',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '経験直結型' },
      { min: 40, max: 59, rank: '実用型', type: '経験蓄積型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '経験直結型': {
        strengths: ['実践から直接学べる', '試行錯誤が上手', '現場の知恵がある'],
        weaknesses: ['理論化が難しい', '他人に教えられない', '再現性が低い'],
        improvements: ['理論化スキル', '言語化能力', '体系化'],
        environment: '現場作業、実践的な職人技が必要な環境',
        referencePersons: [
          { name: '宮本武蔵', reason: '実践を通じた技術習得' },
          { name: 'トーマス・エジソン', reason: '試行錯誤による発明' },
          { name: '本田宗一郎', reason: '現場経験から革新を創出' }
        ]
      },
      '経験蓄積型': {
        strengths: ['大量の経験から卓越を生む', '継続的な改善ができる', '深い専門性を持つ'],
        weaknesses: ['新しい領域への転移が難しい', '変化への対応が遅い', '理論的説明が弱い'],
        improvements: ['新領域への応用', '理論化', '変化への適応'],
        environment: '専門職、職人、長期的な改善が必要な環境',
        referencePersons: [
          { name: 'エジソン', reason: '1000回以上の実験による成功' },
          { name: '葛飾北斎', reason: '生涯を通じた芸術の追求' },
          { name: 'イチロー', reason: '継続的な改善による卓越' }
        ]
      },
      '改善型': {
        strengths: ['現場経験を改善に変える', '生産性を高められる', '仕組みを作れる'],
        weaknesses: ['現状維持に陥りやすい', '革新的な変化が難しい', '大きな改革ができない'],
        improvements: ['革新的思考', '大局的視点', 'チャレンジ精神'],
        environment: '製造業、プロセス改善、オペレーション',
        referencePersons: [
          { name: '大野耐一', reason: 'トヨタ生産方式の構築' },
          { name: '稲盛和夫', reason: 'アメーバ経営の創出' },
          { name: 'ヘンリー・フォード', reason: 'ベルトコンベアの発明' }
        ]
      },
      '抽象化型': {
        strengths: ['経験から法則を抽出できる', '理論を構築できる', '他領域に応用できる'],
        weaknesses: ['実行が遅れる', '現場感覚が不足', '理論と実践のギャップ'],
        improvements: ['実行力の強化', '現場理解', '実装スキル'],
        environment: '研究、理論構築、戦略企画',
        referencePersons: [
          { name: 'アリストテレス', reason: '経験から論理体系を構築' },
          { name: 'ピーター・ドラッカー', reason: 'マネジメント理論の抽象化' },
          { name: '梅棹忠夫', reason: '情報学の理論構築' }
        ]
      },
      '再現設計型': {
        strengths: ['自分の成功を他者でも再現できる仕組みにできる', '組織全体の成長を実現できる', '持続可能なシステムを作れる'],
        weaknesses: ['個人の成功が限定される', 'スケーラビリティ重視で個別対応が弱い', '人間的な温かみが不足'],
        improvements: ['個別対応スキル', '人間関係の深化', '柔軟性'],
        environment: '経営層、組織開発、スケーラブルなビジネス構築',
        referencePersons: [
          { name: 'ヘンリー・フォード', reason: 'アセンブリラインの再現設計' },
          { name: '渋沢栄一', reason: '企業経営の仕組み化' },
          { name: '松下幸之助', reason: 'パナソニック経営の再現設計' }
        ]
      }
    }
  }
};

// Calculate score from answers
function calculateScore(answers) {
  let totalLevel = 0;
  answers.forEach(answer => {
    totalLevel += answer.level;
  });
  
  const maxScore = answers.length * 4;
  const score = Math.round((totalLevel / maxScore) * 100);
  return Math.min(100, Math.max(0, score));
}

// Get rank and type for a diagnostic
function getRankAndType(diagnostic, score, categoryScores) {
  const diagnosticData = RESULTS_DATA[diagnostic];
  const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
  
  let type = rankData.type;
  
  if (!type) {
    // Determine type based on category scores
    const categories = Object.keys(categoryScores);
    const maxCategory = categories.reduce((a, b) => 
      categoryScores[a] > categoryScores[b] ? a : b
    );
    
    const typeMap = {
      iq: {
        logic: '論理構築型',
        pattern: 'パターン発見型',
        verbal: '言語分析型',
        inference: '推論型',
        processing: '総合処理型'
      },
      eq: {
        selfAwareness: '自己認識型',
        selfControl: '自己制御型',
        empathy: '共感型',
        adjustment: '調整型',
        relationship: '関係構築型'
      },
      aq: {
        recovery: '修復型',
        persistence: '粘り強さ型',
        analysis: '分析型',
        adaptation: '適応型',
        ownership: '責任感型'
      },
      sq: {
        atmosphere: '雰囲気読み型',
        power: '影響力型',
        role: '役割認識型',
        structure: '構造理解型',
        influence: '影響力行使型'
      },
      xq: {
        learning: '学習型',
        abstraction: '抽象化型',
        transfer: '転移型',
        reproducibility: '再現性型',
        growth: '成長型'
      }
    };
    
    type = typeMap[diagnostic][maxCategory];
  }
  
  return {
    rank: rankData.rank,
    type: type
  };
}

// Get type details
function getTypeDetails(diagnostic, type) {
  const diagnosticData = RESULTS_DATA[diagnostic];
  return diagnosticData.types[type] || null;
}

// Get integrated type
function getIntegratedType(scores) {
  const { iq, eq, aq, sq, xq } = scores;
  
  if (aq >= 75 && sq >= 75 && xq >= 75) return '変革リーダー型';
  if (iq >= 75 && aq >= 75 && xq >= 75) return '戦略実行型';
  if (eq >= 75 && sq >= 75) return '調整支援型';
  if (sq >= 75) return '組織設計型';
  if (xq >= 75) return '学習成長型';
  if (aq >= 75) return '逆境突破型';
  if (eq >= 75) return '人間理解型';
  if (iq >= 75) return '思考特化型';
  
  return '実用バランス型';
}
