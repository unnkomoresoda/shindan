// 5Q Diagnostic Questions
const QUESTIONS = {
  iq: [
    // Logic (論理)
    {
      category: 'logic',
      text: '複雑な問題に直面したとき、あなたはどうしますか？',
      choices: [
        { text: 'すぐに試してみる', level: 1 },
        { text: '経験則から判断する', level: 2 },
        { text: '要素に分解して分析する', level: 3 },
        { text: '体系的に因果関係を整理する', level: 4 }
      ]
    },
    {
      category: 'logic',
      text: 'AはBで、BはCである場合、AはCであると結論づけることについて：',
      choices: [
        { text: 'いつもそうとは限らない', level: 1 },
        { text: 'たいていそうだと思う', level: 2 },
        { text: 'そうであることが多い', level: 3 },
        { text: 'そうに違いない', level: 4 }
      ]
    },
    {
      category: 'logic',
      text: '矛盾する意見を聞いたとき、あなたはどうしますか？',
      choices: [
        { text: '気にしない', level: 1 },
        { text: 'どちらかが正しいと思う', level: 2 },
        { text: '条件によって異なると考える', level: 3 },
        { text: 'その矛盾の根本原因を探る', level: 4 }
      ]
    },
    {
      category: 'logic',
      text: '新しい理論を学ぶとき、あなたはどのアプローチを取りますか？',
      choices: [
        { text: '実例から学ぶ', level: 1 },
        { text: '基本的な使い方を学ぶ', level: 2 },
        { text: '理論の背景を理解する', level: 3 },
        { text: '他の理論との関連性を理解する', level: 4 }
      ]
    },
    // Pattern (パターン認識)
    {
      category: 'pattern',
      text: '大量のデータを見るとき、あなたはどのように対応しますか？',
      choices: [
        { text: '個別の情報に注目する', level: 1 },
        { text: '主要な傾向を探す', level: 2 },
        { text: '隠れた構造を見つけようとする', level: 3 },
        { text: 'パターンの背後にある法則を推測する', level: 4 }
      ]
    },
    {
      category: 'pattern',
      text: '異なる分野の事象に共通点を見つけることについて：',
      choices: [
        { text: 'あまり得意ではない', level: 1 },
        { text: 'たまに気づく', level: 2 },
        { text: 'よく気づく', level: 3 },
        { text: '常に共通パターンを探している', level: 4 }
      ]
    },
    {
      category: 'pattern',
      text: '過去の経験から未来を予測することについて：',
      choices: [
        { text: 'できない', level: 1 },
        { text: '同じ状況なら予測できる', level: 2 },
        { text: '似た状況なら予測できる', level: 3 },
        { text: '異なる状況でも法則を応用できる', level: 4 }
      ]
    },
    {
      category: 'pattern',
      text: '問題解決のとき、あなたはどのアプローチを取りますか？',
      choices: [
        { text: 'その場しのぎの解決', level: 1 },
        { text: '似た事例を参考にする', level: 2 },
        { text: '根本原因を探る', level: 3 },
        { text: '根本原因から再発防止策を設計する', level: 4 }
      ]
    },
    // Verbal (言語分析)
    {
      category: 'verbal',
      text: '言葉や概念の定義について、あなたはどう考えますか？',
      choices: [
        { text: '一般的な意味で十分', level: 1 },
        { text: '文脈に応じて理解する', level: 2 },
        { text: '正確な定義を意識する', level: 3 },
        { text: '定義の曖昧さを指摘することが多い', level: 4 }
      ]
    },
    {
      category: 'verbal',
      text: '複雑な説明を聞くとき、あなたはどうしますか？',
      choices: [
        { text: '何となく理解する', level: 1 },
        { text: '要点を抑える', level: 2 },
        { text: '論理構造を理解する', level: 3 },
        { text: '前提や定義まで確認する', level: 4 }
      ]
    },
    {
      category: 'verbal',
      text: '文章を書くとき、あなたはどのレベルで推敲しますか？',
      choices: [
        { text: 'スペルや文法のみ', level: 1 },
        { text: '意味が通じるかどうか', level: 2 },
        { text: '論理的な流れ', level: 3 },
        { text: '前提や定義の正確性', level: 4 }
      ]
    },
    {
      category: 'verbal',
      text: '異なる意見を聞くとき、あなたはどのように対応しますか？',
      choices: [
        { text: 'そうなのかと思う', level: 1 },
        { text: '理由を聞く', level: 2 },
        { text: 'その理由の根拠を確認する', level: 3 },
        { text: 'その意見の前提と定義を検証する', level: 4 }
      ]
    },
    // Inference (推論)
    {
      category: 'inference',
      text: '不完全な情報から判断することについて：',
      choices: [
        { text: 'できるだけ避ける', level: 1 },
        { text: '経験則で判断する', level: 2 },
        { text: '確率的に考える', level: 3 },
        { text: '複数のシナリオを想定する', level: 4 }
      ]
    },
    {
      category: 'inference',
      text: '新しい状況に直面したとき、あなたはどうしますか？',
      choices: [
        { text: '様子を見る', level: 1 },
        { text: '似た経験から判断する', level: 2 },
        { text: '利用可能な情報から推測する', level: 3 },
        { text: '隠れた要因まで考慮して推測する', level: 4 }
      ]
    },
    {
      category: 'inference',
      text: '他人の行動の理由を推測することについて：',
      choices: [
        { text: '表面的な理由で十分', level: 1 },
        { text: '本人の言葉を信じる', level: 2 },
        { text: '背景を考慮する', level: 3 },
        { text: '深い心理まで推測しようとする', level: 4 }
      ]
    },
    {
      category: 'inference',
      text: '統計データを見るとき、あなたはどのように解釈しますか？',
      choices: [
        { text: '数字をそのまま受け取る', level: 1 },
        { text: '一般的な解釈に従う', level: 2 },
        { text: 'バイアスの可能性を考える', level: 3 },
        { text: 'データの背後にある構造を探る', level: 4 }
      ]
    },
    // Processing (処理速度・複雑性対応)
    {
      category: 'processing',
      text: '多くの情報を同時に処理することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: 'できるが時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、複数の層を同時に処理できる', level: 4 }
      ]
    },
    {
      category: 'processing',
      text: '複数の要件が衝突するとき、あなたはどうしますか？',
      choices: [
        { text: '優先順位をつける', level: 1 },
        { text: '妥協点を探す', level: 2 },
        { text: '要件を再構成する', level: 3 },
        { text: '要件の矛盾を解消する新しい枠組みを作る', level: 4 }
      ]
    },
    {
      category: 'processing',
      text: '長時間の集中力が必要な作業について：',
      choices: [
        { text: '避けたい', level: 1 },
        { text: '短時間なら大丈夫', level: 2 },
        { text: '必要なら集中できる', level: 3 },
        { text: '深い思考に没頭することが好き', level: 4 }
      ]
    },
    {
      category: 'processing',
      text: '新しい知識を習得するとき、あなたのペースは：',
      choices: [
        { text: 'ゆっくり', level: 1 },
        { text: '平均的', level: 2 },
        { text: '速い', level: 3 },
        { text: '非常に速く、複数分野を同時に習得できる', level: 4 }
      ]
    }
  ],
  eq: [
    // Self Awareness (自己認識)
    {
      category: 'selfAwareness',
      text: '自分の感情について、あなたはどの程度理解していますか？',
      choices: [
        { text: 'よくわからない', level: 1 },
        { text: 'なんとなくわかる', level: 2 },
        { text: 'だいたいわかる', level: 3 },
        { text: 'なぜそう感じるのか理由まで理解できる', level: 4 }
      ]
    },
    {
      category: 'selfAwareness',
      text: '自分の強みと弱みについて：',
      choices: [
        { text: 'よくわからない', level: 1 },
        { text: 'なんとなく知っている', level: 2 },
        { text: 'ほぼ理解している', level: 3 },
        { text: 'なぜそうなのかまで理解している', level: 4 }
      ]
    },
    {
      category: 'selfAwareness',
      text: '失敗したとき、あなたはどう対応しますか？',
      choices: [
        { text: 'ショックを受ける', level: 1 },
        { text: '理由を考える', level: 2 },
        { text: '自分の行動を振り返る', level: 3 },
        { text: '自分の思考パターンを分析する', level: 4 }
      ]
    },
    {
      category: 'selfAwareness',
      text: '他人からの批判を受けるとき、あなたはどうしますか？',
      choices: [
        { text: '反発する', level: 1 },
        { text: 'ムッとするが聞く', level: 2 },
        { text: '冷静に聞く', level: 3 },
        { text: '自分の盲点として受け入れる', level: 4 }
      ]
    },
    // Self Control (自己制御)
    {
      category: 'selfControl',
      text: '衝動的になったとき、あなたはどうしますか？',
      choices: [
        { text: 'すぐに行動する', level: 1 },
        { text: '少し考えてから行動する', level: 2 },
        { text: '一度立ち止まって考える', level: 3 },
        { text: '感情と事実を分離して判断する', level: 4 }
      ]
    },
    {
      category: 'selfControl',
      text: 'ストレスを感じたとき、あなたはどう対応しますか？',
      choices: [
        { text: 'その感情に任せる', level: 1 },
        { text: '気晴らしをする', level: 2 },
        { text: '原因を分析する', level: 3 },
        { text: 'ストレスを建設的に変換する', level: 4 }
      ]
    },
    {
      category: 'selfControl',
      text: '長期的な目標と短期的な欲望が衝突するとき：',
      choices: [
        { text: '短期的な欲望を優先する', level: 1 },
        { text: '時々短期的な欲望に負ける', level: 2 },
        { text: 'たいていは長期目標を優先する', level: 3 },
        { text: '常に長期目標を優先できる', level: 4 }
      ]
    },
    {
      category: 'selfControl',
      text: '不安や恐れを感じるとき、あなたはどうしますか？',
      choices: [
        { text: '避ける', level: 1 },
        { text: '誰かに頼る', level: 2 },
        { text: '自分で対処する', level: 3 },
        { text: 'その感情から学ぶ', level: 4 }
      ]
    },
    // Empathy (共感)
    {
      category: 'empathy',
      text: '他人が悩んでいるとき、あなたはどうしますか？',
      choices: [
        { text: 'どう対応していいかわからない', level: 1 },
        { text: '慰めようとする', level: 2 },
        { text: 'その人の気持ちを理解しようとする', level: 3 },
        { text: 'その人の立場に立って考える', level: 4 }
      ]
    },
    {
      category: 'empathy',
      text: '他人の感情を読み取ることについて：',
      choices: [
        { text: 'あまり得意ではない', level: 1 },
        { text: '言葉から読み取る', level: 2 },
        { text: '表情や態度から読み取る', level: 3 },
        { text: '言葉にならない感情まで感じ取る', level: 4 }
      ]
    },
    {
      category: 'empathy',
      text: '異なる背景を持つ人を理解することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '努力すればできる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '自然に理解できる', level: 4 }
      ]
    },
    {
      category: 'empathy',
      text: '他人の失敗を見るとき、あなたはどう感じますか？',
      choices: [
        { text: 'しょうがないと思う', level: 1 },
        { text: '同情する', level: 2 },
        { text: 'その人の気持ちを想像する', level: 3 },
        { text: 'その人の立場に立ってサポートしたくなる', level: 4 }
      ]
    },
    // Adjustment (適応性)
    {
      category: 'adjustment',
      text: '環境が変わったとき、あなたはどうしますか？',
      choices: [
        { text: 'ストレスを感じる', level: 1 },
        { text: '時間をかけて適応する', level: 2 },
        { text: '比較的すぐに適応する', level: 3 },
        { text: '変化を機会と捉えて活かす', level: 4 }
      ]
    },
    {
      category: 'adjustment',
      text: '異なる意見の人と協力することについて：',
      choices: [
        { text: '避けたい', level: 1 },
        { text: 'できるが気が進まない', level: 2 },
        { text: 'できる', level: 3 },
        { text: '異なる視点を学べるので好き', level: 4 }
      ]
    },
    {
      category: 'adjustment',
      text: '予期しない状況に直面したとき、あなたはどうしますか？',
      choices: [
        { text: 'パニックになる', level: 1 },
        { text: '混乱するが対応する', level: 2 },
        { text: '冷静に対応する', level: 3 },
        { text: '冷静に対応し、新しい方法を試す', level: 4 }
      ]
    },
    {
      category: 'adjustment',
      text: '他人の期待と自分の意見が異なるとき：',
      choices: [
        { text: '他人の期待に従う', level: 1 },
        { text: '相手の意見も聞く', level: 2 },
        { text: '自分の意見を主張する', level: 3 },
        { text: '相手の期待と自分の意見のバランスを取る', level: 4 }
      ]
    },
    // Relationship (関係構築)
    {
      category: 'relationship',
      text: '新しい人間関係を築くことについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '努力すればできる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、すぐに信頼関係を築ける', level: 4 }
      ]
    },
    {
      category: 'relationship',
      text: '対立が生じたとき、あなたはどうしますか？',
      choices: [
        { text: '避ける', level: 1 },
        { text: '相手に譲る', level: 2 },
        { text: '話し合う', level: 3 },
        { text: 'お互いに理解し合える解決策を探る', level: 4 }
      ]
    },
    {
      category: 'relationship',
      text: '他人の信頼を得ることについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '自然に信頼を得られる', level: 4 }
      ]
    },
    {
      category: 'relationship',
      text: 'チームで働くとき、あなたはどのような役割を果たしますか？',
      choices: [
        { text: '指示に従うだけ', level: 1 },
        { text: '自分の役割を果たす', level: 2 },
        { text: 'チームの一員として協力する', level: 3 },
        { text: 'チームの雰囲気を整え、メンバーをサポートする', level: 4 }
      ]
    }
  ],
  aq: [
    // Recovery (回復力)
    {
      category: 'recovery',
      text: '失敗から立ち直るとき、あなたはどのくらい時間がかかりますか？',
      choices: [
        { text: 'かなり時間がかかる', level: 1 },
        { text: '数日から数週間', level: 2 },
        { text: '数日', level: 3 },
        { text: 'すぐに立ち直り、改善に動く', level: 4 }
      ]
    },
    {
      category: 'recovery',
      text: 'つらい経験をしたとき、あなたはどうしますか？',
      choices: [
        { text: 'しばらく落ち込む', level: 1 },
        { text: '時間を置いて切り替える', level: 2 },
        { text: '原因を整理して改善する', level: 3 },
        { text: '再発しない仕組みに変える', level: 4 }
      ]
    },
    {
      category: 'recovery',
      text: '困難な状況でも、あなたはどの程度希望を持ち続けられますか？',
      choices: [
        { text: '希望を失いやすい', level: 1 },
        { text: '時々希望を失う', level: 2 },
        { text: 'たいていは希望を持ち続ける', level: 3 },
        { text: 'どんな状況でも希望を見出せる', level: 4 }
      ]
    },
    {
      category: 'recovery',
      text: '過去の失敗から学ぶことについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '失敗から多くを学び、成長に活かす', level: 4 }
      ]
    },
    // Persistence (粘り強さ)
    {
      category: 'persistence',
      text: '長期的な目標に向かって、あなたはどのくらい粘り強く取り組めますか？',
      choices: [
        { text: 'すぐに諦める', level: 1 },
        { text: '困難があると諦めることもある', level: 2 },
        { text: 'たいていは続ける', level: 3 },
        { text: 'どんなに困難でも続ける', level: 4 }
      ]
    },
    {
      category: 'persistence',
      text: '何度も失敗しても、あなたはどうしますか？',
      choices: [
        { text: '諦める', level: 1 },
        { text: '別の方法を試す', level: 2 },
        { text: '改善しながら続ける', level: 3 },
        { text: '失敗から学び、より強い方法で続ける', level: 4 }
      ]
    },
    {
      category: 'persistence',
      text: '退屈な作業を続けることについて：',
      choices: [
        { text: '続けられない', level: 1 },
        { text: '短時間なら続けられる', level: 2 },
        { text: '必要なら続けられる', level: 3 },
        { text: '目的のためなら継続できる', level: 4 }
      ]
    },
    {
      category: 'persistence',
      text: '周囲が反対しても、あなたはどの程度信念を貫けますか？',
      choices: [
        { text: 'すぐに諦める', level: 1 },
        { text: '少し続けるが諦める', level: 2 },
        { text: 'ある程度貫く', level: 3 },
        { text: '信念を貫き通す', level: 4 }
      ]
    },
    // Analysis (分析力)
    {
      category: 'analysis',
      text: '問題が発生したとき、あなたはどうしますか？',
      choices: [
        { text: 'とりあえず対処する', level: 1 },
        { text: '表面的な原因を探る', level: 2 },
        { text: '根本原因を探る', level: 3 },
        { text: '根本原因から再発防止策を設計する', level: 4 }
      ]
    },
    {
      category: 'analysis',
      text: '失敗の原因について、あなたはどのレベルで分析しますか？',
      choices: [
        { text: 'しょうがないと思う', level: 1 },
        { text: '他人のせいだと思う', level: 2 },
        { text: '自分の行動を振り返る', level: 3 },
        { text: '自分の思考パターンまで分析する', level: 4 }
      ]
    },
    {
      category: 'analysis',
      text: '複雑な状況を理解することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '表面的には理解できる', level: 2 },
        { text: 'ある程度理解できる', level: 3 },
        { text: '複雑さの中から構造を見出せる', level: 4 }
      ]
    },
    {
      category: 'analysis',
      text: 'データや情報から意味を読み取ることについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '基本的な意味は読み取れる', level: 2 },
        { text: 'ある程度読み取れる', level: 3 },
        { text: '深い洞察を得られる', level: 4 }
      ]
    },
    // Adaptation (適応力)
    {
      category: 'adaptation',
      text: '環境が急激に変わったとき、あなたはどうしますか？',
      choices: [
        { text: 'パニックになる', level: 1 },
        { text: '混乱するが時間をかけて適応する', level: 2 },
        { text: '比較的すぐに適応する', level: 3 },
        { text: '変化を機会と捉えてすぐに適応する', level: 4 }
      ]
    },
    {
      category: 'adaptation',
      text: '予期しない困難に直面したとき、あなたはどうしますか？',
      choices: [
        { text: '対応できない', level: 1 },
        { text: '時間をかけて対応する', level: 2 },
        { text: 'できるだけ対応する', level: 3 },
        { text: '柔軟に対応し、新しい方法を試す', level: 4 }
      ]
    },
    {
      category: 'adaptation',
      text: '自分の計画が変わったとき、あなたはどうしますか？',
      choices: [
        { text: 'ショックを受ける', level: 1 },
        { text: 'がっかりするが対応する', level: 2 },
        { text: '冷静に対応する', level: 3 },
        { text: '新しい計画に素早く適応できる', level: 4 }
      ]
    },
    {
      category: 'adaptation',
      text: '新しい環境での学習について：',
      choices: [
        { text: '時間がかかる', level: 1 },
        { text: 'ある程度時間がかかる', level: 2 },
        { text: '比較的すぐに学べる', level: 3 },
        { text: '新しい環境にすぐに適応し、学べる', level: 4 }
      ]
    },
    // Ownership (責任感)
    {
      category: 'ownership',
      text: '問題が発生したとき、あなたはどうしますか？',
      choices: [
        { text: '他人のせいにする', level: 1 },
        { text: '状況のせいにする', level: 2 },
        { text: '自分の責任を認める', level: 3 },
        { text: '自分の責任を認め、改善に動く', level: 4 }
      ]
    },
    {
      category: 'ownership',
      text: 'チームの失敗について、あなたはどう感じますか？',
      choices: [
        { text: 'チームのせいだと思う', level: 1 },
        { text: 'リーダーのせいだと思う', level: 2 },
        { text: '自分にも責任があると思う', level: 3 },
        { text: '自分の役割を果たせなかったと反省する', level: 4 }
      ]
    },
    {
      category: 'ownership',
      text: '自分の成長について、あなたはどう考えていますか？',
      choices: [
        { text: '環境や他人に頼る', level: 1 },
        { text: '他人のサポートを期待する', level: 2 },
        { text: '自分で工夫する', level: 3 },
        { text: '自分の成長に責任を持ち、主体的に動く', level: 4 }
      ]
    },
    {
      category: 'ownership',
      text: '約束や責任について、あなたはどう対応しますか？',
      choices: [
        { text: '気が進まなければ避ける', level: 1 },
        { text: 'できる範囲で対応する', level: 2 },
        { text: 'たいていは果たす', level: 3 },
        { text: '絶対に果たす', level: 4 }
      ]
    }
  ],
  sq: [
    // Atmosphere (雰囲気読み)
    {
      category: 'atmosphere',
      text: '集団の雰囲気を読むことについて：',
      choices: [
        { text: 'あまり得意ではない', level: 1 },
        { text: 'なんとなく読める', level: 2 },
        { text: 'だいたい読める', level: 3 },
        { text: '微細な変化まで読める', level: 4 }
      ]
    },
    {
      category: 'atmosphere',
      text: '場の空気が悪いとき、あなたはどうしますか？',
      choices: [
        { text: '気にしない', level: 1 },
        { text: 'なんとなく感じる', level: 2 },
        { text: '改善したいと思う', level: 3 },
        { text: '改善するために動く', level: 4 }
      ]
    },
    {
      category: 'atmosphere',
      text: '他人の気分や状態を察することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '言葉から察する', level: 2 },
        { text: '表情や態度から察する', level: 3 },
        { text: '言葉にならない状態まで察する', level: 4 }
      ]
    },
    {
      category: 'atmosphere',
      text: 'グループの中での自分の位置を意識していますか？',
      choices: [
        { text: '意識していない', level: 1 },
        { text: 'なんとなく意識している', level: 2 },
        { text: 'ある程度意識している', level: 3 },
        { text: '常に意識し、適切に行動している', level: 4 }
      ]
    },
    // Power (影響力)
    {
      category: 'power',
      text: '他人に影響を与えることについて：',
      choices: [
        { text: 'できない', level: 1 },
        { text: '限定的にできる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '自然に影響を与えられる', level: 4 }
      ]
    },
    {
      category: 'power',
      text: 'グループで意見を述べるとき、あなたはどうしますか？',
      choices: [
        { text: '述べない', level: 1 },
        { text: '聞かれたら述べる', level: 2 },
        { text: '必要に応じて述べる', level: 3 },
        { text: '自信を持って述べ、受け入れられる', level: 4 }
      ]
    },
    {
      category: 'power',
      text: 'リーダーシップについて、あなたはどう考えていますか？',
      choices: [
        { text: 'リーダーになりたくない', level: 1 },
        { text: '求められれば引き受ける', level: 2 },
        { text: 'リーダーになることもできる', level: 3 },
        { text: '自然にリーダーになる', level: 4 }
      ]
    },
    {
      category: 'power',
      text: '他人を説得することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、自然に説得できる', level: 4 }
      ]
    },
    // Role (役割認識)
    {
      category: 'role',
      text: 'グループの中での自分の役割を意識していますか？',
      choices: [
        { text: '意識していない', level: 1 },
        { text: 'なんとなく意識している', level: 2 },
        { text: 'ある程度意識している', level: 3 },
        { text: '常に意識し、その役割を果たしている', level: 4 }
      ]
    },
    {
      category: 'role',
      text: 'チームで必要な役割を察することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々気づく', level: 2 },
        { text: 'ある程度気づく', level: 3 },
        { text: '常に気づき、適切に対応できる', level: 4 }
      ]
    },
    {
      category: 'role',
      text: '自分の役割を超えて、あなたはどのくらい対応しますか？',
      choices: [
        { text: '対応しない', level: 1 },
        { text: '時々対応する', level: 2 },
        { text: '必要に応じて対応する', level: 3 },
        { text: '常に全体を見て対応する', level: 4 }
      ]
    },
    {
      category: 'role',
      text: 'グループの中で、あなたはどのような役割を果たしていますか？',
      choices: [
        { text: 'メンバーとしてのみ', level: 1 },
        { text: '指示に従う', level: 2 },
        { text: '自分の役割を果たす', level: 3 },
        { text: 'グループ全体を支える', level: 4 }
      ]
    },
    // Structure (構造理解)
    {
      category: 'structure',
      text: '組織や集団の構造を理解することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '表面的には理解できる', level: 2 },
        { text: 'ある程度理解できる', level: 3 },
        { text: '複雑な構造も理解できる', level: 4 }
      ]
    },
    {
      category: 'structure',
      text: '権力関係や利害関係を理解することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '基本的には理解できる', level: 2 },
        { text: 'ある程度理解できる', level: 3 },
        { text: '複雑な関係も理解できる', level: 4 }
      ]
    },
    {
      category: 'structure',
      text: 'グループ内の派閥や関係を察することについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々気づく', level: 2 },
        { text: 'ある程度気づく', level: 3 },
        { text: '常に気づき、理解している', level: 4 }
      ]
    },
    {
      category: 'structure',
      text: '新しい環境での人間関係を把握することについて：',
      choices: [
        { text: '時間がかかる', level: 1 },
        { text: 'ある程度時間がかかる', level: 2 },
        { text: '比較的すぐに把握できる', level: 3 },
        { text: 'すぐに把握し、適切に対応できる', level: 4 }
      ]
    },
    // Influence (影響力行使)
    {
      category: 'influence',
      text: 'グループの意思決定に影響を与えることについて：',
      choices: [
        { text: 'できない', level: 1 },
        { text: '限定的にできる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '自然に影響を与えられる', level: 4 }
      ]
    },
    {
      category: 'influence',
      text: '他人の行動を変えることについて：',
      choices: [
        { text: 'できない', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、自然に変えられる', level: 4 }
      ]
    },
    {
      category: 'influence',
      text: 'グループの方向性を変えることについて：',
      choices: [
        { text: 'できない', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、自然に変えられる', level: 4 }
      ]
    },
    {
      category: 'influence',
      text: '他人の信頼を得ることについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '自然に信頼を得られる', level: 4 }
      ]
    }
  ],
  xq: [
    // Learning (学習力)
    {
      category: 'learning',
      text: '新しいことを学ぶことについて、あなたはどう感じますか？',
      choices: [
        { text: '苦手', level: 1 },
        { text: '努力すればできる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、常に学んでいる', level: 4 }
      ]
    },
    {
      category: 'learning',
      text: '失敗から学ぶことについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時間がかかる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '失敗から多くを学び、成長に活かす', level: 4 }
      ]
    },
    {
      category: 'learning',
      text: '他人の経験から学ぶことについて：',
      choices: [
        { text: 'あまり得意ではない', level: 1 },
        { text: '時々学ぶ', level: 2 },
        { text: 'よく学ぶ', level: 3 },
        { text: '常に学び、自分の成長に活かす', level: 4 }
      ]
    },
    {
      category: 'learning',
      text: '新しい環境での学習について：',
      choices: [
        { text: '時間がかかる', level: 1 },
        { text: 'ある程度時間がかかる', level: 2 },
        { text: '比較的すぐに学べる', level: 3 },
        { text: 'すぐに学べ、応用できる', level: 4 }
      ]
    },
    // Abstraction (抽象化)
    {
      category: 'abstraction',
      text: '具体的な経験から一般的な法則を見出すことについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、常に法則を探している', level: 4 }
      ]
    },
    {
      category: 'abstraction',
      text: '複雑な現象をシンプルに説明することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、本質を捉えて説明できる', level: 4 }
      ]
    },
    {
      category: 'abstraction',
      text: 'パターンから原則を導き出すことについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、深い原則を見出せる', level: 4 }
      ]
    },
    {
      category: 'abstraction',
      text: '異なる分野の共通点を見つけることについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、深い共通点を見出せる', level: 4 }
      ]
    },
    // Transfer (転移)
    {
      category: 'transfer',
      text: '学んだことを別の状況に応用することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、常に応用している', level: 4 }
      ]
    },
    {
      category: 'transfer',
      text: '異なる分野の知識を組み合わせることについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、新しい視点を生み出せる', level: 4 }
      ]
    },
    {
      category: 'transfer',
      text: '過去の経験を新しい状況に活かすことについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、常に活かしている', level: 4 }
      ]
    },
    {
      category: 'transfer',
      text: '知識を実務に変換することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、すぐに実行できる', level: 4 }
      ]
    },
    // Reproducibility (再現性)
    {
      category: 'reproducibility',
      text: '自分の成功を再現することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、常に再現できる', level: 4 }
      ]
    },
    {
      category: 'reproducibility',
      text: '自分の方法を他人に教えることについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、他人も成功させられる', level: 4 }
      ]
    },
    {
      category: 'reproducibility',
      text: '成功の要因を分析することについて：',
      choices: [
        { text: '難しい', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、深く分析できる', level: 4 }
      ]
    },
    {
      category: 'reproducibility',
      text: '仕組みや制度を作ることについて：',
      choices: [
        { text: '苦手', level: 1 },
        { text: '時々できる', level: 2 },
        { text: 'できる', level: 3 },
        { text: '得意で、効果的な仕組みを作れる', level: 4 }
      ]
    },
    // Growth (成長志向)
    {
      category: 'growth',
      text: '自分の成長について、あなたはどう考えていますか？',
      choices: [
        { text: '成長は難しいと思う', level: 1 },
        { text: '成長したいが努力は限定的', level: 2 },
        { text: '成長したいと思っている', level: 3 },
        { text: '常に成長を目指している', level: 4 }
      ]
    },
    {
      category: 'growth',
      text: 'チャレンジすることについて：',
      choices: [
        { text: '避ける', level: 1 },
        { text: '必要に迫られたらする', level: 2 },
        { text: '時々する', level: 3 },
        { text: '常にチャレンジしている', level: 4 }
      ]
    },
    {
      category: 'growth',
      text: '自分の限界を超えることについて：',
      choices: [
        { text: '考えない', level: 1 },
        { text: '時々考える', level: 2 },
        { text: '考えている', level: 3 },
        { text: '常に限界を超えようとしている', level: 4 }
      ]
    },
    {
      category: 'growth',
      text: '長期的な成長計画について：',
      choices: [
        { text: '計画していない', level: 1 },
        { text: 'なんとなく考えている', level: 2 },
        { text: 'ある程度計画している', level: 3 },
        { text: '明確に計画し、実行している', level: 4 }
      ]
    }
  ]
};

// Function to get random questions for a diagnostic
function getRandomQuestions(diagnostic, count = 20) {
  const questions = QUESTIONS[diagnostic];
  const categories = ['logic', 'pattern', 'verbal', 'inference', 'processing'];
  
  if (diagnostic === 'eq') {
    categories.length = 0;
    categories.push('selfAwareness', 'selfControl', 'empathy', 'adjustment', 'relationship');
  } else if (diagnostic === 'aq') {
    categories.length = 0;
    categories.push('recovery', 'persistence', 'analysis', 'adaptation', 'ownership');
  } else if (diagnostic === 'sq') {
    categories.length = 0;
    categories.push('atmosphere', 'power', 'role', 'structure', 'influence');
  } else if (diagnostic === 'xq') {
    categories.length = 0;
    categories.push('learning', 'abstraction', 'transfer', 'reproducibility', 'growth');
  }
  
  const questionsPerCategory = count / categories.length;
  const selected = [];
  
  categories.forEach(category => {
    const categoryQuestions = questions.filter(q => q.category === category);
    const shuffled = categoryQuestions.sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, questionsPerCategory));
  });
  
  return selected.sort(() => Math.random() - 0.5);
}

// Function to shuffle choices
function shuffleChoices(question) {
  const shuffled = { ...question };
  shuffled.choices = [...question.choices].sort(() => Math.random() - 0.5);
  return shuffled;
}
