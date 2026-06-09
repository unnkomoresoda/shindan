// 5Q診断 - 5択形式 + BQ（認知バイアス耐性）検出
// 全50問を高品質な5択に改修
// 0点 = 能力不足ではなく「認知バイアスが強く出ている回答」

const QUESTIONS = {
  iq: [
    {
      id: "iq_001",
      type: "judgment",
      text: "新しいプロジェクトの企画書を読んだ。提案内容は魅力的だが、前提条件に矛盾を感じた。あなたは？",
      answers: [
        {
          text: "矛盾を指摘して、修正を求める前に、提案者の意図を詳しく聞く",
          level: 3,
          category: "judgment"
        },
        {
          text: "矛盾点をリストアップし、メールで具体的に質問する",
          level: 4,
          category: "judgment"
        },
        {
          text: "魅力的な部分が大きいので、矛盾は運用で対応できると判断する",
          level: 1,
          category: "judgment"
        },
        {
          text: "矛盾の背景にある前提条件の変化を、業界トレンドから推測する",
          level: 3,
          category: "judgment"
        },
        {
          text: "提案内容が良さそうなので、細部は気にせず進める",
          level: 0,
          category: "bias",
          bias_type: "confirmation"
        }
      ]
    },
    {
      id: "iq_002",
      type: "pattern",
      text: "データ分析の結果、予想と逆の傾向が出た。あなたの最初の行動は？",
      answers: [
        {
          text: "分析方法に誤りがないか、まず手法を検証する",
          level: 4,
          category: "pattern"
        },
        {
          text: "結果が正しいと仮定して、新しい仮説を立てる",
          level: 3,
          category: "pattern"
        },
        {
          text: "データ収集の時期や対象に偏りがなかったか確認する",
          level: 3,
          category: "pattern"
        },
        {
          text: "予想が外れたのは分析が間違っているからだと考える",
          level: 0,
          category: "bias",
          bias_type: "outcome"
        },
        {
          text: "結果の意味を理解するより、今後の対応方法を考える",
          level: 2,
          category: "pattern"
        }
      ]
    },
    {
      id: "iq_003",
      type: "abstraction",
      text: "複数の失敗事例を見ている。共通パターンを見つけたが、例外もある。あなたは？",
      answers: [
        {
          text: "共通パターンを優先し、例外は後で分析する",
          level: 2,
          category: "abstraction"
        },
        {
          text: "共通パターンと例外の両方を説明する理論を構築する",
          level: 4,
          category: "abstraction"
        },
        {
          text: "例外を無視して、共通パターンのみを報告する",
          level: 1,
          category: "abstraction"
        },
        {
          text: "例外ケースが重要な示唆を含んでいないか、詳しく調べる",
          level: 3,
          category: "abstraction"
        },
        {
          text: "見つけたパターンが正しいと信じ、それ以上掘り下げない",
          level: 0,
          category: "bias",
          bias_type: "confirmation"
        }
      ]
    },
    {
      id: "iq_004",
      type: "reverse_trap",
      text: "複雑な問題について、シンプルな解釈と複雑な解釈の両方が成立する。あなたは？",
      answers: [
        {
          text: "シンプルな解釈を採用し、実装を優先する",
          level: 3,
          category: "inference"
        },
        {
          text: "複雑な解釈の方が正確だと考え、詳細に検討する",
          level: 2,
          category: "inference"
        },
        {
          text: "両者の前提条件の違いを明確にして、使い分ける",
          level: 4,
          category: "inference"
        },
        {
          text: "専門家の意見を求めて、判断を委ねる",
          level: 1,
          category: "inference"
        },
        {
          text: "自分が最初に思いついた解釈が正しいと判断する",
          level: 0,
          category: "bias",
          bias_type: "anchoring"
        }
      ]
    },
    {
      id: "iq_005",
      type: "tradeoff",
      text: "提案Aは論理的だが実装が難しい。提案Bは実装しやすいが仮定が多い。あなたは？",
      answers: [
        {
          text: "実装可能性を優先し、Bで始めて改善する",
          level: 3,
          category: "processing"
        },
        {
          text: "論理的正確性を優先し、Aの実装方法を工夫する",
          level: 2,
          category: "processing"
        },
        {
          text: "AとBの仮定を比較し、どちらのリスクが大きいか判断する",
          level: 4,
          category: "processing"
        },
        {
          text: "どちらでもいいので、とにかく早く決めて進める",
          level: 1,
          category: "processing"
        },
        {
          text: "みんなが選んでいる方を選ぶ",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    },
    {
      id: "iq_006",
      type: "judgment",
      text: "ある理論が一般的だが、自分の経験では異なる。あなたは？",
      answers: [
        {
          text: "自分の経験が特殊ケースか、理論が不完全かを区別する",
          level: 4,
          category: "judgment"
        },
        {
          text: "理論が正しいと仮定し、自分の経験の解釈を見直す",
          level: 2,
          category: "judgment"
        },
        {
          text: "自分の経験を信じ、理論に疑問を持つ",
          level: 2,
          category: "judgment"
        },
        {
          text: "両者の違いについて、他の人の意見を聞く",
          level: 3,
          category: "judgment"
        },
        {
          text: "権威のある人が言っているから理論が正しいと判断する",
          level: 0,
          category: "bias",
          bias_type: "authority"
        }
      ]
    },
    {
      id: "iq_007",
      type: "pattern",
      text: "情報が不足しているが、判断を求められている。あなたは？",
      answers: [
        {
          text: "必要な情報を明確にして、判断を遅延させる",
          level: 3,
          category: "pattern"
        },
        {
          text: "不足している情報を推測して、判断する",
          level: 2,
          category: "pattern"
        },
        {
          text: "現在の情報で最善の判断をし、後で修正する準備をする",
          level: 3,
          category: "pattern"
        },
        {
          text: "判断に必要な情報の優先順位を決めて、段階的に集める",
          level: 4,
          category: "pattern"
        },
        {
          text: "情報がないなら、一般的な答えを選ぶ",
          level: 0,
          category: "bias",
          bias_type: "availability"
        }
      ]
    },
    {
      id: "iq_008",
      type: "abstraction",
      text: "細部の議論が続いている。全体像を見直すべきか判断に迷う。あなたは？",
      answers: [
        {
          text: "細部を詰めることが全体の精度を高めると考える",
          level: 1,
          category: "abstraction"
        },
        {
          text: "全体像の確認を優先し、細部は後回しにする",
          level: 3,
          category: "abstraction"
        },
        {
          text: "細部と全体のどちらが現在の課題解決に必要かを判断する",
          level: 4,
          category: "abstraction"
        },
        {
          text: "議論を一度中断して、全体像を図解する",
          level: 3,
          category: "abstraction"
        },
        {
          text: "議論が長く続いているから、もう十分だと判断する",
          level: 0,
          category: "bias",
          bias_type: "sunk_cost"
        }
      ]
    },
    {
      id: "iq_009",
      type: "reverse_trap",
      text: "自分の分析結果が、多くの人の直感と異なる。あなたは？",
      answers: [
        {
          text: "自分の分析を信頼し、結果を提示する",
          level: 2,
          category: "inference"
        },
        {
          text: "多くの人の直感の方が正しいと考え、分析を見直す",
          level: 1,
          category: "inference"
        },
        {
          text: "分析と直感の乖離の理由を調べ、どちらが正しいか検証する",
          level: 4,
          category: "inference"
        },
        {
          text: "分析結果を提示しつつ、直感との違いについても説明する",
          level: 3,
          category: "inference"
        },
        {
          text: "多数派に合わせて、分析結果を修正する",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    },
    {
      id: "iq_010",
      type: "judgment",
      text: "複数の専門家の意見が対立している。あなたは？",
      answers: [
        {
          text: "各専門家の前提条件や視点の違いを理解する",
          level: 4,
          category: "judgment"
        },
        {
          text: "最も権威のある専門家の意見に従う",
          level: 1,
          category: "judgment"
        },
        {
          text: "各意見の根拠を比較し、最も論理的なものを選ぶ",
          level: 3,
          category: "judgment"
        },
        {
          text: "対立している専門家たちに、さらに議論させる",
          level: 2,
          category: "judgment"
        },
        {
          text: "一番有名な専門家の意見を選ぶ",
          level: 0,
          category: "bias",
          bias_type: "authority"
        }
      ]
    }
  ],
  eq: [
    {
      id: "eq_001",
      type: "situation",
      text: "同僚が失敗して落ち込んでいる。あなたは？",
      answers: [
        {
          text: "励ましの言葉をかけ、前向きになるよう促す",
          level: 2,
          category: "empathy"
        },
        {
          text: "失敗の原因を一緒に分析し、次の対策を考える",
          level: 3,
          category: "adjustment"
        },
        {
          text: "同僚の気持ちを聞き、本人が何を必要としているか理解する",
          level: 4,
          category: "empathy"
        },
        {
          text: "失敗は誰にでもあることを伝え、気にしなくていいと言う",
          level: 1,
          category: "empathy"
        },
        {
          text: "同僚の失敗を自分のせいだと感じ、謝る",
          level: 0,
          category: "bias",
          bias_type: "responsibility"
        }
      ]
    },
    {
      id: "eq_002",
      type: "conflict",
      text: "チーム内で意見が対立している。あなたは？",
      answers: [
        {
          text: "自分の意見が正しいと主張する",
          level: 1,
          category: "relationship"
        },
        {
          text: "各人の意見の背景にある価値観や懸念を理解しようとする",
          level: 4,
          category: "relationship"
        },
        {
          text: "妥協点を見つけ、双方が納得できる案を提案する",
          level: 3,
          category: "adjustment"
        },
        {
          text: "リーダーに判断を委ねる",
          level: 1,
          category: "relationship"
        },
        {
          text: "対立を避けるため、みんなの意見に同意する",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    },
    {
      id: "eq_003",
      type: "selfControl",
      text: "自分の提案が否定された。あなたの最初の反応は？",
      answers: [
        {
          text: "すぐに反論し、自分の考えが正しいことを説明する",
          level: 1,
          category: "selfControl"
        },
        {
          text: "なぜ否定されたのか、冷静に理由を聞く",
          level: 4,
          category: "selfControl"
        },
        {
          text: "落ち込むが、時間をかけて気持ちを整理する",
          level: 2,
          category: "selfControl"
        },
        {
          text: "否定した人の意図を推測し、関係を修復しようとする",
          level: 3,
          category: "relationship"
        },
        {
          text: "自分の提案が否定されたのは、自分が無能だからだと思う",
          level: 0,
          category: "bias",
          bias_type: "self_blame"
        }
      ]
    },
    {
      id: "eq_004",
      type: "awareness",
      text: "自分が他の人に与えている影響について、あなたは？",
      answers: [
        {
          text: "自分の行動がどう受け取られているか、定期的に確認する",
          level: 4,
          category: "selfAwareness"
        },
        {
          text: "自分の意図が正しければ、受け取り方は相手の問題だと考える",
          level: 1,
          category: "selfAwareness"
        },
        {
          text: "信頼できる人に、自分の印象を聞くことがある",
          level: 3,
          category: "selfAwareness"
        },
        {
          text: "自分の行動が相手にどう見えているか、常に気になる",
          level: 2,
          category: "selfAwareness"
        },
        {
          text: "自分がどう見られているかは、相手の気分次第だと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "eq_005",
      type: "emotion",
      text: "ストレスを感じたとき、あなたは？",
      answers: [
        {
          text: "感情を抑えて、仕事に集中する",
          level: 2,
          category: "selfControl"
        },
        {
          text: "ストレスの原因を特定し、対処方法を考える",
          level: 3,
          category: "adjustment"
        },
        {
          text: "信頼できる人に話を聞いてもらう",
          level: 3,
          category: "relationship"
        },
        {
          text: "ストレスを感じるのは弱さだと考え、克服しようとする",
          level: 1,
          category: "selfControl"
        },
        {
          text: "ストレスを感じたら、それは環境が悪いからだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "eq_006",
      type: "motivation",
      text: "チームのモチベーションが低下している。あなたは？",
      answers: [
        {
          text: "各メンバーが何に不満を感じているか、個別に話を聞く",
          level: 4,
          category: "empathy"
        },
        {
          text: "チーム全体で目標を再確認し、モチベーションを高める",
          level: 3,
          category: "relationship"
        },
        {
          text: "モチベーションが低いのは、メンバーの責任だと考える",
          level: 1,
          category: "empathy"
        },
        {
          text: "リーダーに報告し、対応を求める",
          level: 2,
          category: "relationship"
        },
        {
          text: "モチベーションが低いのは、自分の指導が不足しているからだと思う",
          level: 0,
          category: "bias",
          bias_type: "self_blame"
        }
      ]
    },
    {
      id: "eq_007",
      type: "feedback",
      text: "部下にフィードバックを与えるとき、あなたは？",
      answers: [
        {
          text: "改善点を直接的に指摘する",
          level: 1,
          category: "relationship"
        },
        {
          text: "部下の気持ちや背景を理解した上で、建設的なフィードバックを与える",
          level: 4,
          category: "empathy"
        },
        {
          text: "強みを認めた上で、改善点を提案する",
          level: 3,
          category: "relationship"
        },
        {
          text: "フィードバックが嫌われるのを避け、曖昧に伝える",
          level: 1,
          category: "relationship"
        },
        {
          text: "部下が傷つくかもしれないので、良いことだけ言う",
          level: 0,
          category: "bias",
          bias_type: "avoidance"
        }
      ]
    },
    {
      id: "eq_008",
      type: "decision",
      text: "重要な決断をするとき、あなたは？",
      answers: [
        {
          text: "論理的に分析し、感情は除外する",
          level: 2,
          category: "selfControl"
        },
        {
          text: "分析と直感の両方を考慮する",
          level: 4,
          category: "adjustment"
        },
        {
          text: "自分の価値観に基づいて判断する",
          level: 3,
          category: "selfAwareness"
        },
        {
          text: "他の人の意見を参考にしながら判断する",
          level: 2,
          category: "relationship"
        },
        {
          text: "感情的に判断し、後で理由を考える",
          level: 0,
          category: "bias",
          bias_type: "impulsivity"
        }
      ]
    },
    {
      id: "eq_009",
      type: "relationship",
      text: "信頼できる関係を築くために、あなたは？",
      answers: [
        {
          text: "相手の話を聞き、相手を理解しようとする",
          level: 4,
          category: "empathy"
        },
        {
          text: "自分の価値観や考えを明確に伝える",
          level: 3,
          category: "selfAwareness"
        },
        {
          text: "相手に好かれるよう、相手の期待に合わせる",
          level: 1,
          category: "relationship"
        },
        {
          text: "定期的にコミュニケーションを取る",
          level: 3,
          category: "relationship"
        },
        {
          text: "相手が自分をどう評価しているか、常に気にする",
          level: 0,
          category: "bias",
          bias_type: "approval_seeking"
        }
      ]
    },
    {
      id: "eq_010",
      type: "conflict",
      text: "自分の価値観と組織の方針が異なる場合、あなたは？",
      answers: [
        {
          text: "組織の方針に従うべきか、自分の価値観を優先すべきか、冷静に判断する",
          level: 4,
          category: "selfControl"
        },
        {
          text: "自分の価値観を優先し、組織に異議を唱える",
          level: 2,
          category: "selfAwareness"
        },
        {
          text: "組織の方針に従う",
          level: 1,
          category: "adjustment"
        },
        {
          text: "信頼できる人に相談し、判断を仰ぐ",
          level: 3,
          category: "relationship"
        },
        {
          text: "組織の方針に従わないと、自分は悪い人間だと思う",
          level: 0,
          category: "bias",
          bias_type: "self_blame"
        }
      ]
    }
  ],
  aq: [
    {
      id: "aq_001",
      type: "change",
      text: "急激な環境変化に直面した。あなたは？",
      answers: [
        {
          text: "新しい環境に適応するため、まず現状を理解する",
          level: 4,
          category: "adaptability"
        },
        {
          text: "これまでのやり方を続けることで、安定を保つ",
          level: 1,
          category: "adaptability"
        },
        {
          text: "変化に対応するため、複数の対応策を検討する",
          level: 3,
          category: "adaptability"
        },
        {
          text: "変化の原因を分析し、長期的な対応を計画する",
          level: 3,
          category: "adaptability"
        },
        {
          text: "変化は避けられないので、流れに身を任せる",
          level: 0,
          category: "bias",
          bias_type: "fatalism"
        }
      ]
    },
    {
      id: "aq_002",
      type: "learning",
      text: "新しいスキルを習得する必要がある。あなたは？",
      answers: [
        {
          text: "効果的な学習方法を探し、計画的に習得する",
          level: 4,
          category: "learning"
        },
        {
          text: "基本を学んだら、実践で習得する",
          level: 3,
          category: "learning"
        },
        {
          text: "自分には習得できないと考える",
          level: 0,
          category: "bias",
          bias_type: "fixed_mindset"
        },
        {
          text: "他の人に頼って、習得を避ける",
          level: 1,
          category: "learning"
        },
        {
          text: "時間をかけて、ゆっくり習得する",
          level: 2,
          category: "learning"
        }
      ]
    },
    {
      id: "aq_003",
      type: "resilience",
      text: "大きな失敗を経験した。あなたは？",
      answers: [
        {
          text: "失敗から学べることを探し、次に活かす",
          level: 4,
          category: "resilience"
        },
        {
          text: "失敗の原因を分析し、再発防止策を立てる",
          level: 3,
          category: "resilience"
        },
        {
          text: "失敗は自分の能力不足だと考える",
          level: 0,
          category: "bias",
          bias_type: "self_blame"
        },
        {
          text: "失敗を忘れて、前に進む",
          level: 2,
          category: "resilience"
        },
        {
          text: "失敗は環境のせいだと考える",
          level: 1,
          category: "resilience"
        }
      ]
    },
    {
      id: "aq_004",
      type: "perspective",
      text: "異なる視点や意見に出会った。あなたは？",
      answers: [
        {
          text: "異なる視点を理解し、自分の考えを見直す機会にする",
          level: 4,
          category: "perspective"
        },
        {
          text: "異なる視点の良い点を取り入れる",
          level: 3,
          category: "perspective"
        },
        {
          text: "自分の考えが正しいと信じ、異なる視点を受け入れない",
          level: 0,
          category: "bias",
          bias_type: "confirmation"
        },
        {
          text: "異なる視点に興味を持つが、判断は保留する",
          level: 3,
          category: "perspective"
        },
        {
          text: "異なる視点は間違っていると考える",
          level: 1,
          category: "perspective"
        }
      ]
    },
    {
      id: "aq_005",
      type: "uncertainty",
      text: "不確実な状況で判断を求められた。あなたは？",
      answers: [
        {
          text: "不確実性を認めながら、判断に必要な情報を整理する",
          level: 4,
          category: "uncertainty"
        },
        {
          text: "不確実性を受け入れ、複数のシナリオを検討する",
          level: 3,
          category: "uncertainty"
        },
        {
          text: "不確実な状況では判断できないと言う",
          level: 1,
          category: "uncertainty"
        },
        {
          text: "一般的な答えを選んで、判断する",
          level: 2,
          category: "uncertainty"
        },
        {
          text: "不確実な状況は避けられないので、直感で判断する",
          level: 0,
          category: "bias",
          bias_type: "impulsivity"
        }
      ]
    },
    {
      id: "aq_006",
      type: "innovation",
      text: "従来のやり方では通用しない状況が出た。あなたは？",
      answers: [
        {
          text: "新しいアプローチを試し、効果を検証する",
          level: 4,
          category: "innovation"
        },
        {
          text: "従来のやり方を工夫して、対応する",
          level: 2,
          category: "innovation"
        },
        {
          text: "新しいアプローチは危険だと考える",
          level: 0,
          category: "bias",
          bias_type: "risk_aversion"
        },
        {
          text: "他の人の成功事例を参考にする",
          level: 3,
          category: "innovation"
        },
        {
          text: "新しいアプローチを試すが、失敗を恐れる",
          level: 1,
          category: "innovation"
        }
      ]
    },
    {
      id: "aq_007",
      type: "feedback",
      text: "自分の弱点を指摘された。あなたは？",
      answers: [
        {
          text: "指摘を受け入れ、改善方法を考える",
          level: 4,
          category: "learning"
        },
        {
          text: "指摘の内容を検証し、改善が必要か判断する",
          level: 3,
          category: "learning"
        },
        {
          text: "指摘は間違っていると考える",
          level: 0,
          category: "bias",
          bias_type: "confirmation"
        },
        {
          text: "指摘に落ち込むが、時間をかけて受け入れる",
          level: 2,
          category: "learning"
        },
        {
          text: "指摘した人は自分を嫌っていると考える",
          level: 1,
          category: "learning"
        }
      ]
    },
    {
      id: "aq_008",
      type: "complexity",
      text: "複雑な問題に直面した。あなたは？",
      answers: [
        {
          text: "問題を分解し、段階的に対応する",
          level: 4,
          category: "problem_solving"
        },
        {
          text: "複雑さの原因を理解し、根本的な解決を目指す",
          level: 3,
          category: "problem_solving"
        },
        {
          text: "複雑な問題は解決できないと考える",
          level: 0,
          category: "bias",
          bias_type: "fixed_mindset"
        },
        {
          text: "複雑さを避け、簡単な部分から始める",
          level: 1,
          category: "problem_solving"
        },
        {
          text: "専門家に頼る",
          level: 2,
          category: "problem_solving"
        }
      ]
    },
    {
      id: "aq_009",
      type: "speed",
      text: "変化のスピードが速い環境にいる。あなたは？",
      answers: [
        {
          text: "変化を追いながら、自分のペースを保つ",
          level: 4,
          category: "adaptability"
        },
        {
          text: "変化に対応するため、継続的に学習する",
          level: 3,
          category: "adaptability"
        },
        {
          text: "変化が速すぎて、対応できないと感じる",
          level: 0,
          category: "bias",
          bias_type: "overwhelm"
        },
        {
          text: "変化に合わせて、急いで対応する",
          level: 2,
          category: "adaptability"
        },
        {
          text: "変化から逃げたいと考える",
          level: 1,
          category: "adaptability"
        }
      ]
    },
    {
      id: "aq_010",
      type: "growth",
      text: "自分の成長について、あなたは？",
      answers: [
        {
          text: "継続的に成長する必要があると考え、行動する",
          level: 4,
          category: "learning"
        },
        {
          text: "成長の機会を探し、チャレンジする",
          level: 3,
          category: "learning"
        },
        {
          text: "自分は成長できないと考える",
          level: 0,
          category: "bias",
          bias_type: "fixed_mindset"
        },
        {
          text: "成長は重要だが、時間がないと考える",
          level: 1,
          category: "learning"
        },
        {
          text: "成長は自然に起こると考える",
          level: 2,
          category: "learning"
        }
      ]
    }
  ],
  sq: [
    {
      id: "sq_001",
      type: "harmony",
      text: "チーム内に意見の相違がある。あなたは？",
      answers: [
        {
          text: "各人の意見の背景にある価値観を理解し、共通点を探す",
          level: 4,
          category: "harmony"
        },
        {
          text: "チーム全体の目標を優先し、妥協点を見つける",
          level: 3,
          category: "harmony"
        },
        {
          text: "自分の意見が正しいと主張する",
          level: 1,
          category: "harmony"
        },
        {
          text: "対立を避けるため、意見を言わない",
          level: 2,
          category: "harmony"
        },
        {
          text: "多数派の意見に合わせる",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    },
    {
      id: "sq_002",
      type: "purpose",
      text: "チームの目標と個人の目標が異なる場合、あなたは？",
      answers: [
        {
          text: "チームの目標と個人の目標の関係を理解し、両立を目指す",
          level: 4,
          category: "purpose"
        },
        {
          text: "チームの目標を優先する",
          level: 3,
          category: "purpose"
        },
        {
          text: "個人の目標を優先する",
          level: 1,
          category: "purpose"
        },
        {
          text: "どちらの目標も重要だと考えるが、判断に迷う",
          level: 2,
          category: "purpose"
        },
        {
          text: "目標は上司が決めるものだと考える",
          level: 0,
          category: "bias",
          bias_type: "authority"
        }
      ]
    },
    {
      id: "sq_003",
      type: "contribution",
      text: "自分の役割と責任について、あなたは？",
      answers: [
        {
          text: "自分の役割を理解し、チーム全体への貢献を考える",
          level: 4,
          category: "contribution"
        },
        {
          text: "自分の役割を果たし、チームに貢献する",
          level: 3,
          category: "contribution"
        },
        {
          text: "自分の役割だけに集中する",
          level: 1,
          category: "contribution"
        },
        {
          text: "自分の役割が何かよくわからない",
          level: 2,
          category: "contribution"
        },
        {
          text: "自分の役割は上司が決めるべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "sq_004",
      type: "culture",
      text: "組織の文化や価値観について、あなたは？",
      answers: [
        {
          text: "組織の文化を理解し、自分の価値観とのバランスを取る",
          level: 4,
          category: "culture"
        },
        {
          text: "組織の文化に適応する",
          level: 3,
          category: "culture"
        },
        {
          text: "組織の文化に反発する",
          level: 1,
          category: "culture"
        },
        {
          text: "組織の文化をあまり気にしない",
          level: 2,
          category: "culture"
        },
        {
          text: "組織の文化に完全に従うべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    },
    {
      id: "sq_005",
      type: "communication",
      text: "チーム内のコミュニケーションについて、あなたは？",
      answers: [
        {
          text: "相手の話を聞き、理解した上で、自分の考えを伝える",
          level: 4,
          category: "communication"
        },
        {
          text: "定期的にコミュニケーションを取る",
          level: 3,
          category: "communication"
        },
        {
          text: "必要な時だけコミュニケーションを取る",
          level: 2,
          category: "communication"
        },
        {
          text: "コミュニケーションは時間の無駄だと考える",
          level: 1,
          category: "communication"
        },
        {
          text: "相手の反応を気にして、本当のことが言えない",
          level: 0,
          category: "bias",
          bias_type: "approval_seeking"
        }
      ]
    },
    {
      id: "sq_006",
      type: "diversity",
      text: "異なるバックグラウンドを持つ人と働く場合、あなたは？",
      answers: [
        {
          text: "相手の背景を理解し、その視点から学ぶ",
          level: 4,
          category: "diversity"
        },
        {
          text: "相手の違いを認め、協力する",
          level: 3,
          category: "diversity"
        },
        {
          text: "相手の違いに戸惑う",
          level: 2,
          category: "diversity"
        },
        {
          text: "相手の違いを受け入れられない",
          level: 1,
          category: "diversity"
        },
        {
          text: "自分と同じ背景を持つ人とだけ働きたい",
          level: 0,
          category: "bias",
          bias_type: "in_group"
        }
      ]
    },
    {
      id: "sq_007",
      type: "leadership",
      text: "リーダーシップについて、あなたは？",
      answers: [
        {
          text: "チームの目標達成と個人の成長の両方を支援する",
          level: 4,
          category: "leadership"
        },
        {
          text: "チームの目標達成を優先する",
          level: 3,
          category: "leadership"
        },
        {
          text: "リーダーシップは必要ないと考える",
          level: 1,
          category: "leadership"
        },
        {
          text: "リーダーシップは上司の責任だと考える",
          level: 2,
          category: "leadership"
        },
        {
          text: "リーダーシップは権力を持つことだと考える",
          level: 0,
          category: "bias",
          bias_type: "authority"
        }
      ]
    },
    {
      id: "sq_008",
      type: "conflict",
      text: "チーム内で対立が生じた場合、あなたは？",
      answers: [
        {
          text: "対立の根本原因を理解し、解決策を探す",
          level: 4,
          category: "conflict"
        },
        {
          text: "対立する両者の話を聞き、妥協点を見つける",
          level: 3,
          category: "conflict"
        },
        {
          text: "対立を避け、何もしない",
          level: 1,
          category: "conflict"
        },
        {
          text: "どちらかの側に付く",
          level: 2,
          category: "conflict"
        },
        {
          text: "対立は避けられないので、力で決める",
          level: 0,
          category: "bias",
          bias_type: "dominance"
        }
      ]
    },
    {
      id: "sq_009",
      type: "trust",
      text: "チーム内の信頼関係について、あなたは？",
      answers: [
        {
          text: "相手を信頼し、相手にも信頼されるよう行動する",
          level: 4,
          category: "trust"
        },
        {
          text: "信頼関係を築くために、定期的にコミュニケーションを取る",
          level: 3,
          category: "trust"
        },
        {
          text: "信頼関係は必要ないと考える",
          level: 1,
          category: "trust"
        },
        {
          text: "信頼関係は時間とともに自然に築かれると考える",
          level: 2,
          category: "trust"
        },
        {
          text: "相手は信頼できないと考える",
          level: 0,
          category: "bias",
          bias_type: "suspicion"
        }
      ]
    },
    {
      id: "sq_010",
      type: "collective",
      text: "集団の利益と個人の利益が対立する場合、あなたは？",
      answers: [
        {
          text: "両者の利益を理解し、最適なバランスを探す",
          level: 4,
          category: "collective"
        },
        {
          text: "集団の利益を優先する",
          level: 3,
          category: "collective"
        },
        {
          text: "個人の利益を優先する",
          level: 1,
          category: "collective"
        },
        {
          text: "どちらを優先すべきか、判断に迷う",
          level: 2,
          category: "collective"
        },
        {
          text: "多数派の意見に従う",
          level: 0,
          category: "bias",
          bias_type: "conformity"
        }
      ]
    }
  ],
  xq: [
    {
      id: "xq_001",
      type: "reflection",
      text: "失敗から学ぶために、あなたは？",
      answers: [
        {
          text: "失敗の原因を深く分析し、本質的な学びを得る",
          level: 4,
          category: "reflection"
        },
        {
          text: "失敗から何を学べるか、考える",
          level: 3,
          category: "reflection"
        },
        {
          text: "失敗は忘れて、前に進む",
          level: 1,
          category: "reflection"
        },
        {
          text: "失敗から学ぶことは難しいと考える",
          level: 2,
          category: "reflection"
        },
        {
          text: "失敗は避けるべきものだと考える",
          level: 0,
          category: "bias",
          bias_type: "avoidance"
        }
      ]
    },
    {
      id: "xq_002",
      type: "integration",
      text: "経験を統合し、新しい知識を作る場合、あなたは？",
      answers: [
        {
          text: "過去の経験と新しい知識を結びつけ、新しい理解を作る",
          level: 4,
          category: "integration"
        },
        {
          text: "新しい知識を既存の知識に組み込む",
          level: 3,
          category: "integration"
        },
        {
          text: "新しい知識は既存の知識と関係ないと考える",
          level: 1,
          category: "integration"
        },
        {
          text: "新しい知識を学ぶのに時間がかかる",
          level: 2,
          category: "integration"
        },
        {
          text: "新しい知識を学ぶ必要はないと考える",
          level: 0,
          category: "bias",
          bias_type: "fixed_mindset"
        }
      ]
    },
    {
      id: "xq_003",
      type: "perspective",
      text: "複数の視点から物事を見る場合、あなたは？",
      answers: [
        {
          text: "複数の視点を統合し、より深い理解を得る",
          level: 4,
          category: "perspective"
        },
        {
          text: "異なる視点を理解し、自分の考えを広げる",
          level: 3,
          category: "perspective"
        },
        {
          text: "自分の視点が正しいと考える",
          level: 1,
          category: "perspective"
        },
        {
          text: "複数の視点を見るのは混乱する",
          level: 2,
          category: "perspective"
        },
        {
          text: "自分の視点だけで十分だと考える",
          level: 0,
          category: "bias",
          bias_type: "confirmation"
        }
      ]
    },
    {
      id: "xq_004",
      type: "meaning",
      text: "人生や仕事の意味について、あなたは？",
      answers: [
        {
          text: "自分の価値観に基づいて、意味を見つける",
          level: 4,
          category: "meaning"
        },
        {
          text: "人生や仕事の意味について、考えることがある",
          level: 3,
          category: "meaning"
        },
        {
          text: "人生や仕事の意味は重要ではないと考える",
          level: 1,
          category: "meaning"
        },
        {
          text: "人生や仕事の意味について、よくわからない",
          level: 2,
          category: "meaning"
        },
        {
          text: "人生や仕事の意味は他の人が決めるべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "xq_005",
      type: "growth",
      text: "自分の成長について、あなたは？",
      answers: [
        {
          text: "自分の成長を継続的に追求し、実現する",
          level: 4,
          category: "growth"
        },
        {
          text: "成長の機会を探し、チャレンジする",
          level: 3,
          category: "growth"
        },
        {
          text: "成長は重要ではないと考える",
          level: 1,
          category: "growth"
        },
        {
          text: "成長は重要だが、時間がないと考える",
          level: 2,
          category: "growth"
        },
        {
          text: "自分は成長できないと考える",
          level: 0,
          category: "bias",
          bias_type: "fixed_mindset"
        }
      ]
    },
    {
      id: "xq_006",
      type: "purpose",
      text: "人生の目的について、あなたは？",
      answers: [
        {
          text: "自分の人生の目的を明確にし、それに向かって行動する",
          level: 4,
          category: "purpose"
        },
        {
          text: "人生の目的について、考えることがある",
          level: 3,
          category: "purpose"
        },
        {
          text: "人生の目的は重要ではないと考える",
          level: 1,
          category: "purpose"
        },
        {
          text: "人生の目的について、よくわからない",
          level: 2,
          category: "purpose"
        },
        {
          text: "人生の目的は他の人が決めるべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "xq_007",
      type: "wisdom",
      text: "人生経験から得た知恵について、あなたは？",
      answers: [
        {
          text: "人生経験から得た知恵を、他の人に伝える",
          level: 4,
          category: "wisdom"
        },
        {
          text: "人生経験から得た知恵を、自分の判断に活かす",
          level: 3,
          category: "wisdom"
        },
        {
          text: "人生経験から学ぶことはないと考える",
          level: 1,
          category: "wisdom"
        },
        {
          text: "人生経験から得た知恵について、よくわからない",
          level: 2,
          category: "wisdom"
        },
        {
          text: "人生経験は関係ないと考える",
          level: 0,
          category: "bias",
          bias_type: "dismissal"
        }
      ]
    },
    {
      id: "xq_008",
      type: "contribution",
      text: "社会への貢献について、あなたは？",
      answers: [
        {
          text: "自分の能力を活かして、社会に貢献する",
          level: 4,
          category: "contribution"
        },
        {
          text: "社会への貢献について、考えることがある",
          level: 3,
          category: "contribution"
        },
        {
          text: "社会への貢献は重要ではないと考える",
          level: 1,
          category: "contribution"
        },
        {
          text: "社会への貢献について、よくわからない",
          level: 2,
          category: "contribution"
        },
        {
          text: "社会への貢献は他の人がするべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    },
    {
      id: "xq_009",
      type: "balance",
      text: "人生のバランスについて、あなたは？",
      answers: [
        {
          text: "仕事と人生のバランスを意識的に取る",
          level: 4,
          category: "balance"
        },
        {
          text: "仕事と人生のバランスについて、考えることがある",
          level: 3,
          category: "balance"
        },
        {
          text: "仕事が最優先だと考える",
          level: 1,
          category: "balance"
        },
        {
          text: "バランスを取るのは難しいと考える",
          level: 2,
          category: "balance"
        },
        {
          text: "バランスは重要ではないと考える",
          level: 0,
          category: "bias",
          bias_type: "dismissal"
        }
      ]
    },
    {
      id: "xq_010",
      type: "legacy",
      text: "人生の遺産について、あなたは？",
      answers: [
        {
          text: "自分がどのような遺産を残すか、意識的に考える",
          level: 4,
          category: "legacy"
        },
        {
          text: "人生の遺産について、考えることがある",
          level: 3,
          category: "legacy"
        },
        {
          text: "人生の遺産は重要ではないと考える",
          level: 1,
          category: "legacy"
        },
        {
          text: "人生の遺産について、よくわからない",
          level: 2,
          category: "legacy"
        },
        {
          text: "人生の遺産は他の人が決めるべきだと考える",
          level: 0,
          category: "bias",
          bias_type: "externalization"
        }
      ]
    }
  ]
};
