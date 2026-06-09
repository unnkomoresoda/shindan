
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
          { name: 'マザー・テレサ', reason: '共感と奉仕の実践' },
          { name: '新渡戸稲造', reason: '人道的な思想の実践' }
        ]
      },
      '自己認識型': {
        strengths: ['自分の強みと弱みを理解している', '自分の感情をコントロールできる', '他者からのフィードバックを受け入れやすい'],
        weaknesses: ['自己批判が強すぎることがある', '自信が不足することがある', '決断に時間がかかることがある'],
        improvements: ['自信の構築', '行動力の強化', 'ポジティブ思考'],
        environment: 'コーチング、カウンセリング、自己啓発関連',
        referencePersons: [
          { name: 'アリストテレス', reason: '自己認識と徳の追求' },
          { name: 'ジョン・ウッデン', reason: '自己認識に基づく指導' },
          { name: '稲盛和夫', reason: '自己認識と経営哲学' }
        ]
      },
      '自己制御型': {
        strengths: ['感情をコントロールできる', 'ストレス下でも冷静でいられる', '長期的な目標を達成しやすい'],
        weaknesses: ['感情を抑圧しすぎることがある', '他人の感情に鈍感になることがある', '人間関係が冷たく見える'],
        improvements: ['感情表現のスキル', '他者への共感', '柔軟性の向上'],
        environment: 'リーダーシップ、危機管理、高ストレス職種',
        referencePersons: [
          { name: 'マハトマ・ガンジー', reason: '自己制御による非暴力抵抗' },
          { name: 'ネルソン・マンデラ', reason: '自己制御と和解' },
          { name: '山田太郎', reason: '自己制御による組織運営' }
        ]
      },
      '調整型': {
        strengths: ['他人の気持ちを理解し、適切に対応できる', '対立を解決できる', 'チームの雰囲気を良くできる'],
        weaknesses: ['自分の意見を主張しにくい', '決断が曖昧になることがある', '自分のニーズを後回しにする'],
        improvements: ['自己主張スキル', '決断力の強化', '自分のニーズの認識'],
        environment: 'マネジメント、カウンセリング、組織開発',
        referencePersons: [
          { name: 'ジョン・F・ケネディ', reason: '対立の調整と和解' },
          { name: 'コリン・パウエル', reason: '組織の調整と統一' },
          { name: '松下幸之助', reason: '人間関係の調整と経営' }
        ]
      },
      '関係構築型': {
        strengths: ['人間関係を構築しやすい', '他人を動機づけられる', 'チームワークが得意'],
        weaknesses: ['関係に頼りすぎることがある', '論理的な判断が後回しになることがある', '個人の成果が落ちることがある'],
        improvements: ['論理的思考の強化', '個人の成果の追求', '関係と成果のバランス'],
        environment: 'セールス、マーケティング、組織開発、リーダーシップ',
        referencePersons: [
          { name: 'オプラ・ウィンフリー', reason: '人間関係を通じた影響力' },
          { name: 'リチャード・ブランソン', reason: '人間関係を基盤とした経営' },
          { name: '稲盛和夫', reason: '人間関係と経営成果の統合' }
        ]
      }
    }
  },
  aq: {
    name: 'AQ（逆境知能）',
    description: '変化への適応、学習能力、回復力、革新性',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '実行優先型' },
      { min: 40, max: 59, rank: '実用型', type: '実行優先型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '実行優先型': {
        strengths: ['素早く行動に移せる', '試行錯誤から学べる', '完璧さより実行を優先'],
        weaknesses: ['計画不足で失敗することがある', '学習が浅くなることがある', '同じ失敗を繰り返すことがある'],
        improvements: ['計画スキルの強化', '深い分析', '体系的な学習'],
        environment: 'スタートアップ、営業、現場主導の組織',
        referencePersons: [
          { name: 'リチャード・ブランソン', reason: '行動優先の経営' },
          { name: 'トーマス・エジソン', reason: '試行錯誤による発明' },
          { name: '本田宗一郎', reason: '現場から学ぶ経営' }
        ]
      },
      '修復型': {
        strengths: ['失敗から学べる', '問題を解決できる', '困難な状況で強みを発揮'],
        weaknesses: ['失敗を待つ傾向がある', '予防的な行動が少ない', '効率性が低いことがある'],
        improvements: ['予防的思考', '計画性の強化', '効率化'],
        environment: '危機管理、問題解決、ターンアラウンド',
        referencePersons: [
          { name: 'ウィンストン・チャーチル', reason: '危機からの回復' },
          { name: 'ネルソン・マンデラ', reason: '困難からの再出発' },
          { name: '李秋水', reason: '経営危機からの回復' }
        ]
      },
      '粘り強さ型': {
        strengths: ['困難に耐えられる', '長期的な目標を達成できる', '継続的な改善ができる'],
        weaknesses: ['変化への対応が遅い', '新しいアプローチを試しにくい', '柔軟性が低い'],
        improvements: ['変化への対応', '新しい視点の取り入れ', '柔軟性の向上'],
        environment: '長期プロジェクト、研究開発、組織改革',
        referencePersons: [
          { name: 'トーマス・エジソン', reason: '粘り強い実験' },
          { name: 'ウォルト・ディズニー', reason: '粘り強い夢の追求' },
          { name: '豊田喜一郎', reason: '粘り強い品質改善' }
        ]
      },
      '適応型': {
        strengths: ['変化に素早く対応できる', '新しい環境に適応しやすい', '柔軟な思考ができる'],
        weaknesses: ['一貫性が欠けることがある', '深い根を張りにくい', '長期的な視点が弱い'],
        improvements: ['一貫性の強化', '深い関係構築', '長期的な視点'],
        environment: 'グローバル企業、急速に変化する業界、コンサルティング',
        referencePersons: [
          { name: 'ジャック・ウェルチ', reason: '変化への適応と革新' },
          { name: 'サティア・ナデラ', reason: '組織の適応と変革' },
          { name: '孫正義', reason: '急速な変化への適応' }
        ]
      },
      '責任感型': {
        strengths: ['自分の行動に責任を持つ', '問題を自分のこととして取り組む', '主体的に行動できる'],
        weaknesses: ['責任を背負いすぎることがある', '他人の責任を引き受けることがある', 'ストレスが高くなることがある'],
        improvements: ['ストレス管理', '適切な責任の分担', '委譲スキル'],
        environment: 'リーダーシップ、経営層、起業家',
        referencePersons: [
          { name: 'ジョン・F・ケネディ', reason: '責任感に基づく指導' },
          { name: 'スティーブ・ジョブズ', reason: '責任感による革新' },
          { name: '稲盛和夫', reason: '責任感と経営哲学' }
        ]
      }
    }
  },
  sq: {
    name: 'SQ（社会知能）',
    description: '組織理解、人間関係、協調性、社会的認識',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '独立判断型' },
      { min: 40, max: 59, rank: '実用型', type: '独立判断型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '独立判断型': {
        strengths: ['自分の判断軸がしっかりしている', '周囲の圧力に流されない', '個性を表現できる'],
        weaknesses: ['組織の一員としての行動が難しい', '人間関係が冷淡に見える', 'チームワークが難しい'],
        improvements: ['組織への理解', '協調性の育成', '人間関係スキル'],
        environment: '起業家、独立職業、個人の判断が重視される職種',
        referencePersons: [
          { name: 'スティーブ・ジョブズ', reason: '個性と判断軸' },
          { name: 'イーロン・マスク', reason: '独立した判断による革新' },
          { name: '孫正義', reason: '独立した経営判断' }
        ]
      },
      '雰囲気読み型': {
        strengths: ['組織の雰囲気を読める', '人間関係を円滑にできる', 'チームの調整役になれる'],
        weaknesses: ['自分の意見を主張しにくい', '決断が曖昧になることがある', '自分のニーズを後回しにする'],
        improvements: ['自己主張スキル', '決断力の強化', '自分のニーズの認識'],
        environment: 'マネジメント、カウンセリング、組織開発',
        referencePersons: [
          { name: 'ジョン・F・ケネディ', reason: '雰囲気の読み取りと指導' },
          { name: 'コリン・パウエル', reason: '組織の雰囲気の理解と統一' },
          { name: '松下幸之助', reason: '人間関係と雰囲気の構築' }
        ]
      },
      '影響力型': {
        strengths: ['他人に影響を与えられる', 'リーダーシップを発揮できる', '組織を動かせる'],
        weaknesses: ['影響力に頼りすぎることがある', '論理的な説得が弱いことがある', '長期的な関係が浅くなることがある'],
        improvements: ['論理的思考の強化', '深い関係構築', '持続的な影響力'],
        environment: 'セールス、マーケティング、リーダーシップ',
        referencePersons: [
          { name: 'オプラ・ウィンフリー', reason: '影響力の構築' },
          { name: 'リチャード・ブランソン', reason: '影響力による経営' },
          { name: '稲盛和夫', reason: '影響力と経営成果' }
        ]
      },
      '役割認識型': {
        strengths: ['自分の役割を理解している', 'チーム内での位置付けが明確', '組織への貢献が明確'],
        weaknesses: ['役割の枠を超えにくい', '創意工夫が少ないことがある', '主体性が弱いことがある'],
        improvements: ['主体性の強化', '創意工夫', '役割を超えた行動'],
        environment: '大規模組織、階層的な組織、官公庁',
        referencePersons: [
          { name: 'ピーター・ドラッカー', reason: '役割と責任の理論' },
          { name: 'ジョン・P・コッター', reason: '役割と変革' },
          { name: '野中郁次郎', reason: '役割と知識創造' }
        ]
      },
      '構造理解型': {
        strengths: ['組織の構造を理解できる', '組織の動きを予測できる', '効率的に行動できる'],
        weaknesses: ['人間関係が機械的に見える', '感情的な側面を見落とすことがある', '柔軟性が低いことがある'],
        improvements: ['人間関係スキル', '感情への理解', '柔軟性の向上'],
        environment: 'コンサルティング、組織開発、経営企画',
        referencePersons: [
          { name: 'ピーター・ドラッカー', reason: '組織の構造と機能' },
          { name: 'ジョン・P・コッター', reason: '組織変革の構造' },
          { name: '野中郁次郎', reason: '組織の知識創造構造' }
        ]
      }
    }
  },
  xq: {
    name: 'XQ（経験知能）',
    description: '学習能力、知恵の統合、人生の意味、成長志向',
    ranks: [
      { min: 0, max: 39, rank: '現場型', type: '実行優先型' },
      { min: 40, max: 59, rank: '実用型', type: '実行優先型' },
      { min: 60, max: 74, rank: '成長型', type: null },
      { min: 75, max: 89, rank: '高水準', type: null },
      { min: 90, max: 100, rank: '卓越型', type: null }
    ],
    types: {
      '実行優先型': {
        strengths: ['素早く行動に移せる', '経験から実践的な学びを得られる', '効率的に進める'],
        weaknesses: ['深い思考が不足することがある', '経験の意味を見落とすことがある', '長期的な視点が弱い'],
        improvements: ['深い思考', '経験の意味の探求', '長期的な視点'],
        environment: 'スタートアップ、営業、現場主導の組織',
        referencePersons: [
          { name: 'リチャード・ブランソン', reason: '行動優先の学習' },
          { name: 'トーマス・エジソン', reason: '試行錯誤からの学習' },
          { name: '本田宗一郎', reason: '現場からの学習' }
        ]
      },
      '学習型': {
        strengths: ['継続的に学習できる', '新しい知識を統合できる', '成長志向が強い'],
        weaknesses: ['学習に時間がかかることがある', '実行が遅れることがある', '完璧さを求めすぎることがある'],
        improvements: ['実行スピードの向上', '不完全な状態での行動', '効率的な学習'],
        environment: '教育機関、研究開発、コンサルティング',
        referencePersons: [
          { name: 'ベンジャミン・フランクリン', reason: '継続的な学習' },
          { name: 'ジョン・フォン・ノイマン', reason: '多領域の学習と統合' },
          { name: '福沢諭吉', reason: '学習と啓蒙' }
        ]
      },
      '抽象化型': {
        strengths: ['複雑な経験を理論化できる', '本質を見抜ける', '他人に教えられる'],
        weaknesses: ['理論化に時間がかかることがある', '実行が遅れることがある', '細部を見落とすことがある'],
        improvements: ['実行スピードの向上', '細部への注意', '理論と実践のバランス'],
        environment: '教育機関、思想形成、コンサルティング',
        referencePersons: [
          { name: 'アリストテレス', reason: '経験の抽象化と理論化' },
          { name: 'イマヌエル・カント', reason: '経験の理論化' },
          { name: '湯川秀樹', reason: '現象の理論化' }
        ]
      },
      '転移型': {
        strengths: ['ある領域の学習を他の領域に応用できる', '多領域の知識を統合できる', '創意工夫ができる'],
        weaknesses: ['各領域の深さが浅くなることがある', '専門性が不足することがある', '細部の完璧さを求めにくい'],
        improvements: ['特定領域の深掘り', '専門知識の強化', 'バランス感覚の維持'],
        environment: '経営層、プロデューサー職、複合的な問題解決',
        referencePersons: [
          { name: 'ベンジャミン・フランクリン', reason: '複数領域の知識の転移' },
          { name: 'ジョン・フォン・ノイマン', reason: '多領域の知識の統合' },
          { name: '渋沢栄一', reason: '知識の社会への転移' }
        ]
      },
      '再現性型': {
        strengths: ['学んだことを再現できる', '他人に教えられる', '組織に知識を定着させられる'],
        weaknesses: ['新しい創意工夫が少ないことがある', '既存の枠を超えにくい', '革新性が低いことがある'],
        improvements: ['創意工夫の強化', '既存の枠を超える思考', '革新性の向上'],
        environment: 'トレーニング、組織開発、品質管理',
        referencePersons: [
          { name: 'W・エドワーズ・デミング', reason: '品質管理の再現性' },
          { name: 'トヨタ生産方式の開発者', reason: '生産方式の再現性' },
          { name: '稲盛和夫', reason: '経営哲学の再現性' }
        ]
      },
      '成長型': {
        strengths: ['継続的に成長できる', '困難を成長の機会と見なせる', '人生の意味を見つけられる'],
        weaknesses: ['成長に時間がかかることがある', '現在の成果を見落とすことがある', '完璧さを求めすぎることがある'],
        improvements: ['現在の成果の認識', '効率的な成長', '完璧さからの解放'],
        environment: 'リーダーシップ、コーチング、自己啓発',
        referencePersons: [
          { name: 'ネルソン・マンデラ', reason: '継続的な成長と変革' },
          { name: 'マハトマ・ガンジー', reason: '人生を通じた成長' },
          { name: '稲盛和夫', reason: '人生の成長と経営' }
        ]
      }
    }
  },
  bq: {
    name: 'BQ（認知バイアス耐性）',
    description: '認知バイアスの影響を受けにくさ、思考の客観性、判断の信頼性',
    ranks: [
      { min: 0, max: 49, rank: '要注意', type: 'バイアス影響大' },
      { min: 50, max: 69, rank: '平均的', type: 'バイアス影響中' },
      { min: 70, max: 89, rank: '高水準', type: 'バイアス影響小' },
      { min: 90, max: 100, rank: '卓越', type: 'バイアス影響最小' }
    ],
    types: {
      'バイアス影響大': {
        strengths: ['直感的な判断が早い', '行動に移しやすい', 'リスクを取りやすい'],
        weaknesses: ['思い込みや先入観の影響を受けやすい', '確証バイアスに陥りやすい', '判断の客観性が低い'],
        improvements: ['複数の視点から検討する', 'データに基づいた判断', 'フィードバックの受け入れ'],
        environment: 'リスク許容度が高い環境、起業家的環境',
        referencePersons: [
          { name: 'スティーブ・ジョブズ', reason: '直感に基づいた判断' },
          { name: 'イーロン・マスク', reason: 'リスクを取った判断' },
          { name: '孫正義', reason: 'リスクを取った経営判断' }
        ]
      },
      'バイアス影響中': {
        strengths: ['バランスの取れた判断ができる', '直感と論理を組み合わせられる', '状況に応じた判断ができる'],
        weaknesses: ['時々バイアスの影響を受けることがある', '判断の一貫性が欠けることがある', '確信が持ちにくいことがある'],
        improvements: ['自分のバイアスパターンの認識', '判断プロセスの標準化', '定期的な検証'],
        environment: '一般的な組織、バランスが重視される環境',
        referencePersons: [
          { name: 'ウォーレン・バフェット', reason: 'バランスの取れた判断' },
          { name: 'ジャック・ウェルチ', reason: '直感と分析の統合' },
          { name: '稲盛和夫', reason: 'バランスの取れた経営判断' }
        ]
      },
      'バイアス影響小': {
        strengths: ['客観的な判断ができる', '複数の視点から検討できる', '判断の信頼性が高い'],
        weaknesses: ['判断に時間がかかることがある', '行動が遅れることがある', '完璧さを求めすぎることがある'],
        improvements: ['判断スピードの向上', '不完全な情報での判断', '行動力の強化'],
        environment: '科学、研究、分析が重視される環境',
        referencePersons: [
          { name: 'アイザック・ニュートン', reason: '客観的な分析' },
          { name: 'アラン・チューリング', reason: '論理的な思考' },
          { name: '湯川秀樹', reason: '客観的な分析と理論化' }
        ]
      },
      'バイアス影響最小': {
        strengths: ['非常に客観的な判断ができる', '複数の視点を統合できる', '判断の信頼性が最も高い'],
        weaknesses: ['判断に時間がかかることがある', '行動が遅れることがある', '完璧さを求めすぎることがある'],
        improvements: ['判断スピードの向上', '不完全な情報での判断', '行動力の強化'],
        environment: '高度な分析が必要な環境、科学的アプローチが重視される環境',
        referencePersons: [
          { name: 'ベルトランド・ラッセル', reason: '論理的な思考と批判的思考' },
          { name: 'カール・ポパー', reason: '科学的方法論' },
          { name: '南方熊楠', reason: '複合的で客観的な分析' }
        ]
      }
    }
  }
};

// Calculate score from answers (0-4 scale)
function calculateScore(answers, diagnostic) {
  let totalLevel = 0;
  let biasCount = 0;
  
  answers.forEach(answer => {
    if (answer) {
      totalLevel += answer.level;
      // Count bias answers (level 0)
      if (answer.level === 0) {
        biasCount++;
      }
    }
  });
  
  const maxScore = answers.length * 4;
  const score = Math.round((totalLevel / maxScore) * 100);
  
  return {
    score: Math.min(100, Math.max(0, score)),
    biasCount: biasCount
  };
}

// Calculate BQ from all answers across all diagnostics
function calculateBQ(allAnswers) {
  let totalBiasCount = 0;
  let totalAnswerCount = 0;
  
  Object.keys(allAnswers).forEach(diagnostic => {
    allAnswers[diagnostic].forEach(answer => {
      if (answer) {
        totalAnswerCount++;
        if (answer.level === 0) {
          totalBiasCount++;
        }
      }
    });
  });
  
  // BQ = (1 - (biasCount / totalAnswerCount)) * 100
  // If no answers, return 50 (neutral)
  if (totalAnswerCount === 0) return 50;
  
  const biasRatio = totalBiasCount / totalAnswerCount;
  const bq = Math.round((1 - biasRatio) * 100);
  
  return Math.min(100, Math.max(0, bq));
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
        judgment: '論理構築型',
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
        adaptability: '適応型',
        learning: '学習型'
      },
      sq: {
        harmony: '雰囲気読み型',
        purpose: '目的認識型',
        contribution: '貢献型',
        culture: '文化適応型',
        communication: 'コミュニケーション型'
      },
      xq: {
        reflection: '反省型',
        integration: '統合型',
        perspective: '視点拡張型',
        meaning: '意味探求型',
        growth: '成長型'
      }
    };
    
    type = typeMap[diagnostic][maxCategory] || '総合型';
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

// Get integrated type (including BQ)
function getIntegratedType(scores) {
  const { iq, eq, aq, sq, xq, bq } = scores;
  
  // BQが高い場合の特別な判定
  if (bq >= 85) {
    if (aq >= 75 && sq >= 75 && xq >= 75) return '戦略的変革リーダー型';
    if (iq >= 75 && aq >= 75 && xq >= 75) return '客観的実行型';
    if (eq >= 75 && sq >= 75) return '信頼構築型';
  }
  
  // 従来の判定
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


// Integrated Explanations
const INTEGRATED_EXPLANATIONS = {
  transformationLeader: {
    title: '総合解説：変革リーダー型',
    condition: 'aq >= 75 && sq >= 75 && xq >= 75',
    explanation: 'あなたの5Qバランスを見ると、AQ・SQ・XQが強く出ています。これは、困難に耐えるだけでなく、状況や組織の構造を読み、経験から学んだことを使って仕組みごと変えていくタイプです。単純な個人能力よりも、構造を設計して成果を再現する力が中心になります。',
    challenge: '一方で、自分が改善できることを他人にも求めすぎると、周囲がついてこられない場合があります。あなたにとって自然な改善速度が、周囲にとっては速すぎる場合があります。',
    recommendation: '今後は、正しい設計だけでなく、相手が動ける設計に変換することが重要です。EQを伸ばすことで、個人の成果が組織の成果に変わりやすくなります。',
    strength: '経験を構造化し、人や組織を読み、逆境でも仕組みを変えて成果を出す',
    bqNote: 'BQが高い場合は、客観的な分析に基づいた変革ができるため、より信頼性の高い改革が実現できます。'
  },
  strategicExecutor: {
    title: '総合解説：戦略実行型',
    condition: 'iq >= 75 && aq >= 75 && xq >= 75',
    explanation: 'あなたの5Qバランスを見ると、IQ・AQ・XQが強く出ています。これは、複雑な問題を分析し、困難に耐えながら、経験から学んだことを使って実行していくタイプです。論理的な戦略と実行力を兼ね備えています。',
    challenge: '一方で、人間関係や組織の文脈を見落とすことがあります。正しい戦略でも、人が動かなければ成果は出ません。',
    recommendation: 'EQとSQを伸ばすことで、戦略が人を動かす力に変わります。特に、相手の気持ちや組織の雰囲気を読む力を強化することが重要です。',
    strength: '複雑な問題を分析し、困難に耐えながら、学んだことを実行する',
    bqNote: 'BQが高い場合は、客観的な分析に基づいた戦略立案ができるため、より効果的な実行が可能になります。'
  },
  coordinationSupport: {
    title: '総合解説：調整支援型',
    condition: 'eq >= 75 && sq >= 75',
    explanation: 'あなたの5Qバランスを見ると、EQ・SQが強く出ています。これは、人の気持ちを理解し、組織の構造や雰囲気を読み、調整と支援を通じて成果を出すタイプです。人間関係を中心に、チームの効率性を高めます。',
    challenge: '一方で、論理的な分析や困難への対応が弱いことがあります。感情的な調整だけでは、根本的な問題解決ができない場合があります。',
    recommendation: 'IQとAQを伸ばすことで、調整だけでなく、問題解決の力も持つようになります。特に、論理的な分析と困難への対応力を強化することが重要です。',
    strength: '人の気持ちを理解し、組織を読み、調整と支援を通じて成果を出す',
    bqNote: 'BQが高い場合は、感情と論理のバランスが取れた調整ができるため、より信頼性の高い支援が実現できます。'
  },
  organizationalDesign: {
    title: '総合解説：組織設計型',
    condition: 'sq >= 75',
    explanation: 'あなたの5Qバランスを見ると、SQが強く出ています。これは、組織の構造や人間関係を理解し、それを活かして成果を出すタイプです。組織設計や人事戦略が得意です。',
    challenge: '一方で、個人の論理的思考や困難への対応が弱いことがあります。組織の設計だけでは、実行段階での問題に対応できない場合があります。',
    recommendation: 'IQとAQを伸ばすことで、設計だけでなく、実行の力も持つようになります。特に、論理的な分析と困難への対応力を強化することが重要です。',
    strength: '組織の構造と人間関係を理解し、それを活かして成果を出す',
    bqNote: 'BQが高い場合は、客観的な組織分析に基づいた設計ができるため、より効果的な組織運営が可能になります。'
  },
  learningGrowth: {
    title: '総合解説：学習成長型',
    condition: 'xq >= 75',
    explanation: 'あなたの5Qバランスを見ると、XQが強く出ています。これは、経験から学び、継続的に成長するタイプです。人生や仕事の意味を見つけ、それに向かって行動します。',
    challenge: '一方で、現在の成果や短期的な目標を見落とすことがあります。成長志向が強すぎると、現在の役割を果たせない場合があります。',
    recommendation: 'IQとEQを伸ばすことで、学習だけでなく、現在の成果を出す力も持つようになります。特に、論理的な思考と人間関係の構築力を強化することが重要です。',
    strength: '経験から学び、継続的に成長し、人生の意味を見つける',
    bqNote: 'BQが高い場合は、経験から客観的な学びを得られるため、より効果的な成長が実現できます。'
  },
  adversityBreakthrough: {
    title: '総合解説：逆境突破型',
    condition: 'aq >= 75',
    explanation: 'あなたの5Qバランスを見ると、AQが強く出ています。これは、困難に耐え、変化に対応し、新しいアプローチを試すタイプです。逆境の中でも成果を出す力があります。',
    challenge: '一方で、長期的な戦略や人間関係の構築が弱いことがあります。逆境対応だけでは、組織全体の成果に結びつきにくい場合があります。',
    recommendation: 'IQとSQを伸ばすことで、逆境対応だけでなく、戦略と組織の力も持つようになります。特に、論理的な思考と組織理解力を強化することが重要です。',
    strength: '困難に耐え、変化に対応し、新しいアプローチを試す',
    bqNote: 'BQが高い場合は、困難な状況でも客観的に判断できるため、より効果的な対応が可能になります。'
  },
  humanUnderstanding: {
    title: '総合解説：人間理解型',
    condition: 'eq >= 75',
    explanation: 'あなたの5Qバランスを見ると、EQが強く出ています。これは、人の気持ちを理解し、信頼関係を築き、相手を支援するタイプです。人間関係を中心に成果を出します。',
    challenge: '一方で、論理的な分析や困難への対応が弱いことがあります。感情的な理解だけでは、根本的な問題解決ができない場合があります。',
    recommendation: 'IQとAQを伸ばすことで、理解だけでなく、問題解決の力も持つようになります。特に、論理的な分析と困難への対応力を強化することが重要です。',
    strength: '人の気持ちを理解し、信頼関係を築き、相手を支援する',
    bqNote: 'BQが高い場合は、感情と論理のバランスが取れた理解ができるため、より信頼性の高い支援が実現できます。'
  },
  thinkingSpecialist: {
    title: '総合解説：思考特化型',
    condition: 'iq >= 75',
    explanation: 'あなたの5Qバランスを見ると、IQが強く出ています。これは、複雑な問題を分析し、論理的に解決するタイプです。戦略立案や研究開発が得意です。',
    challenge: '一方で、人間関係や組織の文脈を見落とすことがあります。正しい分析でも、人が動かなければ成果は出ません。',
    recommendation: 'EQとSQを伸ばすことで、分析だけでなく、人を動かす力も持つようになります。特に、相手の気持ちや組織の雰囲気を読む力を強化することが重要です。',
    strength: '複雑な問題を分析し、論理的に解決する',
    bqNote: 'BQが高い場合は、客観的な分析に基づいた解決策が提示できるため、より信頼性の高い提案が可能になります。'
  },
  practicalBalance: {
    title: '総合解説：実用バランス型',
    condition: 'default',
    explanation: 'あなたの5Qバランスを見ると、各指標がバランスしています。これは、状況に応じて、論理的思考、感情理解、適応力、組織理解、学習能力を使い分けるタイプです。多くの場面で活躍できます。',
    challenge: '一方で、特定の領域での深さが不足することがあります。バランスの良さは、一般的には強みですが、特定の専門性が求められる場面では弱みになることがあります。',
    recommendation: '今後は、自分の強みの領域を見つけ、その領域を深掘りすることが重要です。同時に、他の領域のバランスを保つことで、より多くの場面で活躍できるようになります。',
    strength: '状況に応じて、複数の能力を使い分け、多くの場面で活躍する',
    bqNote: 'BQが高い場合は、バランスの取れた判断ができるため、より信頼性の高い意思決定が可能になります。'
  }
};

// Get integrated explanation
function getIntegratedExplanation(scores) {
  const { iq, eq, aq, sq, xq, bq } = scores;
  
  let key = 'practicalBalance';
  
  if (bq >= 85) {
    if (aq >= 75 && sq >= 75 && xq >= 75) key = 'transformationLeader';
    else if (iq >= 75 && aq >= 75 && xq >= 75) key = 'strategicExecutor';
    else if (eq >= 75 && sq >= 75) key = 'coordinationSupport';
  } else {
    if (aq >= 75 && sq >= 75 && xq >= 75) key = 'transformationLeader';
    else if (iq >= 75 && aq >= 75 && xq >= 75) key = 'strategicExecutor';
    else if (eq >= 75 && sq >= 75) key = 'coordinationSupport';
    else if (sq >= 75) key = 'organizationalDesign';
    else if (xq >= 75) key = 'learningGrowth';
    else if (aq >= 75) key = 'adversityBreakthrough';
    else if (eq >= 75) key = 'humanUnderstanding';
    else if (iq >= 75) key = 'thinkingSpecialist';
  }
  
  return INTEGRATED_EXPLANATIONS[key] || INTEGRATED_EXPLANATIONS.practicalBalance;
}
