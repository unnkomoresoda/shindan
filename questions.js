// 5Q Diagnostic Questions

const QUESTIONS = {
  iq: [
    {
      category: 'logic',
      text: '複雑な問題に直面したとき、あなたはどうしますか？',
      answers: [
        { text: 'すぐに試してみる', level: 1, category: 'logic' },
        { text: '経験則から判断する', level: 2, category: 'logic' },
        { text: '要素に分解して分析する', level: 3, category: 'logic' },
        { text: '体系的に因果関係を整理する', level: 4, category: 'logic' }
      ]
    },
    {
      category: 'logic',
      text: 'AはBで、BはCである場合、AはCであると結論づけることについて：',
      answers: [
        { text: 'いつもそうとは限らない', level: 1, category: 'logic' },
        { text: 'たいていそうだと思う', level: 2, category: 'logic' },
        { text: 'そうであることが多い', level: 3, category: 'logic' },
        { text: 'そうに違いない', level: 4, category: 'logic' }
      ]
    },
    {
      category: 'logic',
      text: '矛盾する意見を聞いたとき、あなたはどうしますか？',
      answers: [
        { text: '気にしない', level: 1, category: 'logic' },
        { text: 'どちらかが正しいと思う', level: 2, category: 'logic' },
        { text: '条件によって異なると考える', level: 3, category: 'logic' },
        { text: 'その矛盾の根本原因を探る', level: 4, category: 'logic' }
      ]
    },
    {
      category: 'logic',
      text: '新しい理論を学ぶとき、あなたはどのアプローチを取りますか？',
      answers: [
        { text: '実例から学ぶ', level: 1, category: 'logic' },
        { text: '基本的な使い方を学ぶ', level: 2, category: 'logic' },
        { text: '理論の背景を理解する', level: 3, category: 'logic' },
        { text: '他の理論との関連性を理解する', level: 4, category: 'logic' }
      ]
    },
    {
      category: 'pattern',
      text: '大量のデータを見るとき、あなたはどのように対応しますか？',
      answers: [
        { text: '個別の情報に注目する', level: 1, category: 'pattern' },
        { text: '全体的な傾向を見る', level: 2, category: 'pattern' },
        { text: '隠れた法則を探す', level: 3, category: 'pattern' },
        { text: '構造的なパターンを発見する', level: 4, category: 'pattern' }
      ]
    },
    {
      category: 'pattern',
      text: '新しい現象を目にしたとき、あなたはどう反応しますか？',
      answers: [
        { text: 'そのまま受け入れる', level: 1, category: 'pattern' },
        { text: '既知の例と比較する', level: 2, category: 'pattern' },
        { text: '他の現象との共通点を探す', level: 3, category: 'pattern' },
        { text: '普遍的な法則を推測する', level: 4, category: 'pattern' }
      ]
    },
    {
      category: 'pattern',
      text: '歴史や統計データから学ぶとき、あなたはどうしますか？',
      answers: [
        { text: '重要な出来事だけを覚える', level: 1, category: 'pattern' },
        { text: '時系列で理解する', level: 2, category: 'pattern' },
        { text: '周期的なパターンを認識する', level: 3, category: 'pattern' },
        { text: '根底にある構造を理解する', level: 4, category: 'pattern' }
      ]
    },
    {
      category: 'verbal',
      text: '複雑な概念を説明するとき、あなたはどうしますか？',
      answers: [
        { text: '具体例を挙げる', level: 1, category: 'verbal' },
        { text: '段階的に説明する', level: 2, category: 'verbal' },
        { text: '定義を明確にして説明する', level: 3, category: 'verbal' },
        { text: '理論的枠組みを示して説明する', level: 4, category: 'verbal' }
      ]
    },
    {
      category: 'verbal',
      text: '言葉の意味について、あなたはどう考えますか？',
      answers: [
        { text: '一般的な使い方で十分', level: 1, category: 'verbal' },
        { text: '文脈によって意味が変わる', level: 2, category: 'verbal' },
        { text: '正確な定義が重要', level: 3, category: 'verbal' },
        { text: '言葉の背後にある概念を理解する', level: 4, category: 'verbal' }
      ]
    },
    {
      category: 'inference',
      text: '不完全な情報から判断する必要があるとき、あなたはどうしますか？',
      answers: [
        { text: '判断を先延ばしにする', level: 1, category: 'inference' },
        { text: '最も可能性が高いと思うことを選ぶ', level: 2, category: 'inference' },
        { text: '複数の可能性を検討する', level: 3, category: 'inference' },
        { text: '推論プロセスを明確にして判断する', level: 4, category: 'inference' }
      ]
    },
    {
      category: 'inference',
      text: '結論に至るまでのプロセス、あなたはどう重視しますか？',
      answers: [
        { text: '結論が正しければプロセスは関係ない', level: 1, category: 'inference' },
        { text: 'プロセスはある程度重要', level: 2, category: 'inference' },
        { text: 'プロセスと結論は同等に重要', level: 3, category: 'inference' },
        { text: 'プロセスの妥当性が最も重要', level: 4, category: 'inference' }
      ]
    }
  ],
  eq: [
    {
      category: 'selfAwareness',
      text: '自分の感情について、あなたはどの程度認識していますか？',
      answers: [
        { text: 'あまり意識していない', level: 1, category: 'selfAwareness' },
        { text: '大きな感情の変化は気づく', level: 2, category: 'selfAwareness' },
        { text: '微細な感情の変化に気づく', level: 3, category: 'selfAwareness' },
        { text: '感情の原因まで理解している', level: 4, category: 'selfAwareness' }
      ]
    },
    {
      category: 'selfAwareness',
      text: '自分の強みと弱みについて、あなたはどう思いますか？',
      answers: [
        { text: 'あまり考えたことがない', level: 1, category: 'selfAwareness' },
        { text: 'なんとなく知っている', level: 2, category: 'selfAwareness' },
        { text: '具体的に理解している', level: 3, category: 'selfAwareness' },
        { text: '詳細に分析し改善計画がある', level: 4, category: 'selfAwareness' }
      ]
    },
    {
      category: 'selfControl',
      text: '怒りや不安を感じたとき、あなたはどうしますか？',
      answers: [
        { text: 'そのまま表現する', level: 1, category: 'selfControl' },
        { text: 'しばらく待って落ち着く', level: 2, category: 'selfControl' },
        { text: '意識的にコントロールする', level: 3, category: 'selfControl' },
        { text: 'その感情を有効活用する', level: 4, category: 'selfControl' }
      ]
    },
    {
      category: 'selfControl',
      text: '衝動的な行動をしそうになったとき、あなたはどうしますか？',
      answers: [
        { text: 'よく衝動的に行動してしまう', level: 1, category: 'selfControl' },
        { text: 'たまに抑制できない', level: 2, category: 'selfControl' },
        { text: 'たいていは抑制できる', level: 3, category: 'selfControl' },
        { text: 'いつも理性的に判断できる', level: 4, category: 'selfControl' }
      ]
    },
    {
      category: 'empathy',
      text: '他人が悩んでいるとき、あなたはどう感じますか？',
      answers: [
        { text: '自分の問題ではないと思う', level: 1, category: 'empathy' },
        { text: 'かわいそうだと思う', level: 2, category: 'empathy' },
        { text: '相手の気持ちを理解しようとする', level: 3, category: 'empathy' },
        { text: '相手の気持ちを自分のことのように感じる', level: 4, category: 'empathy' }
      ]
    },
    {
      category: 'empathy',
      text: '他人の行動の背景にある感情や動機、あなたはどの程度理解できますか？',
      answers: [
        { text: 'あまり考えない', level: 1, category: 'empathy' },
        { text: '表面的には理解できる', level: 2, category: 'empathy' },
        { text: 'かなり深く理解できる', level: 3, category: 'empathy' },
        { text: '非常に深く理解できる', level: 4, category: 'empathy' }
      ]
    },
    {
      category: 'adjustment',
      text: '対立が生じたとき、あなたはどうしますか？',
      answers: [
        { text: '自分の意見を通す', level: 1, category: 'adjustment' },
        { text: '相手の意見も聞く', level: 2, category: 'adjustment' },
        { text: '妥協点を探す', level: 3, category: 'adjustment' },
        { text: 'ウィン・ウィンの解決策を探す', level: 4, category: 'adjustment' }
      ]
    },
    {
      category: 'adjustment',
      text: '環境や状況が変わったとき、あなたはどうしますか？',
      answers: [
        { text: '戸惑う', level: 1, category: 'adjustment' },
        { text: 'しばらくして適応する', level: 2, category: 'adjustment' },
        { text: '比較的早く適応する', level: 3, category: 'adjustment' },
        { text: 'すぐに適応し活用する', level: 4, category: 'adjustment' }
      ]
    },
    {
      category: 'relationship',
      text: '人間関係を構築するとき、あなたはどのアプローチを取りますか？',
      answers: [
        { text: '相手に合わせるだけ', level: 1, category: 'relationship' },
        { text: '表面的な付き合い', level: 2, category: 'relationship' },
        { text: '相互理解を重視する', level: 3, category: 'relationship' },
        { text: '深い信頼関係を構築する', level: 4, category: 'relationship' }
      ]
    },
    {
      category: 'relationship',
      text: '他人の期待や要望に対して、あなたはどうしますか？',
      answers: [
        { text: '自分の都合を優先する', level: 1, category: 'relationship' },
        { text: '時々応じる', level: 2, category: 'relationship' },
        { text: 'バランスを取ろうとする', level: 3, category: 'relationship' },
        { text: '相手の気持ちを最優先に考える', level: 4, category: 'relationship' }
      ]
    }
  ],
  aq: [
    {
      category: 'recovery',
      text: '失敗や挫折を経験したとき、あなたはどうしますか？',
      answers: [
        { text: 'かなり落ち込む', level: 1, category: 'recovery' },
        { text: 'しばらく落ち込むが回復する', level: 2, category: 'recovery' },
        { text: '比較的早く立ち直る', level: 3, category: 'recovery' },
        { text: 'すぐに次のステップを考える', level: 4, category: 'recovery' }
      ]
    },
    {
      category: 'recovery',
      text: '困難な状況から抜け出すとき、あなたはどうしますか？',
      answers: [
        { text: '誰かに頼る', level: 1, category: 'recovery' },
        { text: '時間が解決するのを待つ', level: 2, category: 'recovery' },
        { text: '自分で対策を考える', level: 3, category: 'recovery' },
        { text: '主体的に行動して解決する', level: 4, category: 'recovery' }
      ]
    },
    {
      category: 'persistence',
      text: '困難な目標に取り組むとき、あなたはどうしますか？',
      answers: [
        { text: 'すぐに諦める', level: 1, category: 'persistence' },
        { text: 'しばらく続けて諦める', level: 2, category: 'persistence' },
        { text: 'かなり粘り強く取り組む', level: 3, category: 'persistence' },
        { text: 'どんなに困難でも続ける', level: 4, category: 'persistence' }
      ]
    },
    {
      category: 'persistence',
      text: '失敗を繰り返すとき、あなたはどう感じますか？',
      answers: [
        { text: '自分は無能だと思う', level: 1, category: 'persistence' },
        { text: 'やはり難しいのかと思う', level: 2, category: 'persistence' },
        { text: 'もう一度試してみようと思う', level: 3, category: 'persistence' },
        { text: 'より良い方法を探そうと思う', level: 4, category: 'persistence' }
      ]
    },
    {
      category: 'analysis',
      text: '問題が発生したとき、あなたはどうしますか？',
      answers: [
        { text: 'パニックになる', level: 1, category: 'analysis' },
        { text: '誰かに相談する', level: 2, category: 'analysis' },
        { text: '原因を分析する', level: 3, category: 'analysis' },
        { text: '根本原因を特定し対策を立てる', level: 4, category: 'analysis' }
      ]
    },
    {
      category: 'analysis',
      text: '過去の失敗から学ぶとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり考えない', level: 1, category: 'analysis' },
        { text: 'なんとなく気をつける', level: 2, category: 'analysis' },
        { text: '原因を分析する', level: 3, category: 'analysis' },
        { text: 'システム化して再発防止する', level: 4, category: 'analysis' }
      ]
    },
    {
      category: 'adaptation',
      text: '予期しない変化に対して、あなたはどうしますか？',
      answers: [
        { text: 'パニックになる', level: 1, category: 'adaptation' },
        { text: 'しばらく戸惑う', level: 2, category: 'adaptation' },
        { text: '比較的早く対応する', level: 3, category: 'adaptation' },
        { text: 'すぐに対応し活用する', level: 4, category: 'adaptation' }
      ]
    },
    {
      category: 'adaptation',
      text: '新しい環境に適応するとき、あなたはどうしますか？',
      answers: [
        { text: 'かなり時間がかかる', level: 1, category: 'adaptation' },
        { text: 'しばらく時間がかかる', level: 2, category: 'adaptation' },
        { text: '比較的早く適応する', level: 3, category: 'adaptation' },
        { text: 'すぐに適応し活躍する', level: 4, category: 'adaptation' }
      ]
    },
    {
      category: 'ownership',
      text: '失敗の責任について、あなたはどう考えますか？',
      answers: [
        { text: '他人のせいにする', level: 1, category: 'ownership' },
        { text: '状況のせいにすることもある', level: 2, category: 'ownership' },
        { text: '自分の責任と認識する', level: 3, category: 'ownership' },
        { text: '完全に自分の責任として改善する', level: 4, category: 'ownership' }
      ]
    },
    {
      category: 'ownership',
      text: '結果に対して、あなたはどう向き合いますか？',
      answers: [
        { text: '運だと思う', level: 1, category: 'ownership' },
        { text: '運と努力の両方だと思う', level: 2, category: 'ownership' },
        { text: 'ほぼ自分の努力の結果だと思う', level: 3, category: 'ownership' },
        { text: '完全に自分の責任と考える', level: 4, category: 'ownership' }
      ]
    }
  ],
  sq: [
    {
      category: 'atmosphere',
      text: '会議やグループの雰囲気を読むとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり気にしない', level: 1, category: 'atmosphere' },
        { text: '大きな変化には気づく', level: 2, category: 'atmosphere' },
        { text: '微妙な雰囲気の変化に気づく', level: 3, category: 'atmosphere' },
        { text: '雰囲気を読んで先手を打つ', level: 4, category: 'atmosphere' }
      ]
    },
    {
      category: 'atmosphere',
      text: '他人の気分や感情を察知するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり気づかない', level: 1, category: 'atmosphere' },
        { text: '明らかな場合は気づく', level: 2, category: 'atmosphere' },
        { text: 'ほぼ察知できる', level: 3, category: 'atmosphere' },
        { text: '微細な変化も察知できる', level: 4, category: 'atmosphere' }
      ]
    },
    {
      category: 'power',
      text: '他人に影響を与えるとき、あなたはどのアプローチを取りますか？',
      answers: [
        { text: 'あまり影響を与えようとしない', level: 1, category: 'power' },
        { text: '直接的に主張する', level: 2, category: 'power' },
        { text: '相手を理解した上で提案する', level: 3, category: 'power' },
        { text: '相手が自発的に動くように導く', level: 4, category: 'power' }
      ]
    },
    {
      category: 'power',
      text: 'グループの中での自分の影響力について、あなたはどう認識していますか？',
      answers: [
        { text: 'ほぼない', level: 1, category: 'power' },
        { text: 'あまりない', level: 2, category: 'power' },
        { text: 'ある程度ある', level: 3, category: 'power' },
        { text: 'かなりある', level: 4, category: 'power' }
      ]
    },
    {
      category: 'role',
      text: '社会や組織の中での自分の役割について、あなたはどう考えていますか？',
      answers: [
        { text: 'あまり考えない', level: 1, category: 'role' },
        { text: 'なんとなく認識している', level: 2, category: 'role' },
        { text: '明確に認識している', level: 3, category: 'role' },
        { text: '役割を最大限に活かしている', level: 4, category: 'role' }
      ]
    },
    {
      category: 'role',
      text: '期待される役割と自分の個性のバランスについて、あなたはどうしますか？',
      answers: [
        { text: '個性を優先する', level: 1, category: 'role' },
        { text: 'どちらかというと個性を優先', level: 2, category: 'role' },
        { text: 'バランスを取ろうとする', level: 3, category: 'role' },
        { text: '役割を果たしつつ個性を表現する', level: 4, category: 'role' }
      ]
    },
    {
      category: 'structure',
      text: '組織や集団の構造を理解するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり気にしない', level: 1, category: 'structure' },
        { text: '表面的には理解する', level: 2, category: 'structure' },
        { text: 'ある程度深く理解する', level: 3, category: 'structure' },
        { text: '複雑な権力構造まで理解する', level: 4, category: 'structure' }
      ]
    },
    {
      category: 'structure',
      text: '社会的な階級やステータスについて、あなたはどう認識していますか？',
      answers: [
        { text: 'あまり気にしない', level: 1, category: 'structure' },
        { text: 'なんとなく認識している', level: 2, category: 'structure' },
        { text: 'かなり認識している', level: 3, category: 'structure' },
        { text: 'それを活用して行動している', level: 4, category: 'structure' }
      ]
    },
    {
      category: 'influence',
      text: '重要な決定を下すとき、あなたはどうしますか？',
      answers: [
        { text: '自分だけで決める', level: 1, category: 'influence' },
        { text: '少数の意見を聞く', level: 2, category: 'influence' },
        { text: '複数の関係者の意見を聞く', level: 3, category: 'influence' },
        { text: '全体の利益を考慮して決める', level: 4, category: 'influence' }
      ]
    },
    {
      category: 'influence',
      text: 'ネットワークや人脈を活用するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり活用しない', level: 1, category: 'influence' },
        { text: '必要な時だけ活用する', level: 2, category: 'influence' },
        { text: '積極的に活用する', level: 3, category: 'influence' },
        { text: '戦略的に構築・活用している', level: 4, category: 'influence' }
      ]
    }
  ],
  xq: [
    {
      category: 'learning',
      text: '新しいことを学ぶとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり学ぼうとしない', level: 1, category: 'learning' },
        { text: '必要な時だけ学ぶ', level: 2, category: 'learning' },
        { text: '積極的に学ぶ', level: 3, category: 'learning' },
        { text: '常に学ぶ意欲がある', level: 4, category: 'learning' }
      ]
    },
    {
      category: 'learning',
      text: '失敗から学ぶとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり学ばない', level: 1, category: 'learning' },
        { text: 'なんとなく学ぶ', level: 2, category: 'learning' },
        { text: '意識的に学ぶ', level: 3, category: 'learning' },
        { text: '深く分析して学ぶ', level: 4, category: 'learning' }
      ]
    },
    {
      category: 'abstraction',
      text: '経験から法則や原則を抽出するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまりしない', level: 1, category: 'abstraction' },
        { text: 'たまにしる', level: 2, category: 'abstraction' },
        { text: 'よくしている', level: 3, category: 'abstraction' },
        { text: 'いつも意識している', level: 4, category: 'abstraction' }
      ]
    },
    {
      category: 'abstraction',
      text: '複雑な経験を理論化するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまりしない', level: 1, category: 'abstraction' },
        { text: '時々試みる', level: 2, category: 'abstraction' },
        { text: 'よく試みる', level: 3, category: 'abstraction' },
        { text: '常に理論化している', level: 4, category: 'abstraction' }
      ]
    },
    {
      category: 'transfer',
      text: 'ある領域での学習を他の領域に応用するとき、あなたはどうしますか？',
      answers: [
        { text: 'あまりしない', level: 1, category: 'transfer' },
        { text: '時々思いつく', level: 2, category: 'transfer' },
        { text: 'よく応用できる', level: 3, category: 'transfer' },
        { text: '常に応用を考えている', level: 4, category: 'transfer' }
      ]
    },
    {
      category: 'transfer',
      text: '過去の成功経験を新しい状況に活かすとき、あなたはどうしますか？',
      answers: [
        { text: 'ほぼ活かさない', level: 1, category: 'transfer' },
        { text: 'たまに活かす', level: 2, category: 'transfer' },
        { text: 'よく活かす', level: 3, category: 'transfer' },
        { text: 'いつも活かしている', level: 4, category: 'transfer' }
      ]
    },
    {
      category: 'reproducibility',
      text: '自分の成功を他人に教えるとき、あなたはどうしますか？',
      answers: [
        { text: 'あまり教えない', level: 1, category: 'reproducibility' },
        { text: '経験を話すだけ', level: 2, category: 'reproducibility' },
        { text: '方法を説明する', level: 3, category: 'reproducibility' },
        { text: 'システム化して教える', level: 4, category: 'reproducibility' }
      ]
    },
    {
      category: 'reproducibility',
      text: '成功の再現性について、あなたはどう考えていますか？',
      answers: [
        { text: '再現は難しいと思う', level: 1, category: 'reproducibility' },
        { text: '時々再現できる', level: 2, category: 'reproducibility' },
        { text: 'かなり再現できる', level: 3, category: 'reproducibility' },
        { text: 'システム化して再現できる', level: 4, category: 'reproducibility' }
      ]
    },
    {
      category: 'growth',
      text: '自分の成長について、あなたはどう考えていますか？',
      answers: [
        { text: 'あまり成長していない', level: 1, category: 'growth' },
        { text: 'ゆっくり成長している', level: 2, category: 'growth' },
        { text: '着実に成長している', level: 3, category: 'growth' },
        { text: '急速に成長している', level: 4, category: 'growth' }
      ]
    },
    {
      category: 'growth',
      text: '長期的な成長目標について、あなたはどう考えていますか？',
      answers: [
        { text: 'あまり考えない', level: 1, category: 'growth' },
        { text: 'なんとなく考えている', level: 2, category: 'growth' },
        { text: '具体的に計画している', level: 3, category: 'growth' },
        { text: '詳細に計画し実行している', level: 4, category: 'growth' }
      ]
    }
  ]
};
