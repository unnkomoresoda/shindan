// 5Q診断 - 高度化された設問データ
// 社会的望ましさバイアスを排除し、複雑なトレードオフ設計を採用

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
          text: "予想が外れたことより、今後の対応方法を考える",
          level: 1,
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
          text: "特に気にしていない",
          level: 1,
          category: "selfAwareness"
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
          level: 3,
          category: "adjustment"
        },
        {
          text: "自分の感情や価値観を大切にしながら、判断する",
          level: 4,
          category: "selfAwareness"
        },
        {
          text: "他の人の意見に従う",
          level: 1,
          category: "selfAwareness"
        }
      ]
    },
    {
      id: "eq_009",
      type: "celebration",
      text: "チームが成功したとき、あなたは？",
      answers: [
        {
          text: "次の課題に向けて、すぐに気持ちを切り替える",
          level: 1,
          category: "relationship"
        },
        {
          text: "チーム全体で成功を喜び、各メンバーの貢献を認める",
          level: 4,
          category: "relationship"
        },
        {
          text: "成功の要因を分析し、次に活かす方法を考える",
          level: 2,
          category: "adjustment"
        },
        {
          text: "自分の貢献を評価してもらうことを期待する",
          level: 1,
          category: "selfAwareness"
        }
      ]
    },
    {
      id: "eq_010",
      type: "diversity",
      text: "自分と異なる価値観を持つ人と働くとき、あなたは？",
      answers: [
        {
          text: "その人の価値観を理解し、違いから学ぶ",
          level: 4,
          category: "empathy"
        },
        {
          text: "自分の価値観が正しいと考え、相手を説得しようとする",
          level: 1,
          category: "empathy"
        },
        {
          text: "違いを認めつつ、共通点を見つけようとする",
          level: 3,
          category: "relationship"
        },
        {
          text: "関わりを最小限にする",
          level: 1,
          category: "relationship"
        }
      ]
    }
  ],
  aq: [
    {
      id: "aq_001",
      type: "failure",
      text: "重要なプロジェクトが失敗した。あなたは？",
      answers: [
        {
          text: "失敗の原因を徹底的に分析し、次に活かす",
          level: 4,
          category: "analysis"
        },
        {
          text: "失敗を受け入れ、すぐに新しい計画を立てる",
          level: 3,
          category: "recovery"
        },
        {
          text: "失敗の責任を他に転嫁する",
          level: 1,
          category: "ownership"
        },
        {
          text: "失敗から立ち直るのに時間がかかる",
          level: 1,
          category: "recovery"
        }
      ]
    },
    {
      id: "aq_002",
      type: "change",
      text: "急激な環境変化に直面した。あなたは？",
      answers: [
        {
          text: "変化に抵抗し、従来の方法を守ろうとする",
          level: 1,
          category: "adaptation"
        },
        {
          text: "変化の原因を理解し、新しい対応策を考える",
          level: 4,
          category: "adaptation"
        },
        {
          text: "変化に対応するため、柔軟に行動する",
          level: 3,
          category: "adaptation"
        },
        {
          text: "変化に戸惑い、判断ができない",
          level: 1,
          category: "adaptation"
        }
      ]
    },
    {
      id: "aq_003",
      type: "criticism",
      text: "厳しい批判を受けた。あなたは？",
      answers: [
        {
          text: "批判を真摯に受け止め、改善点を検討する",
          level: 4,
          category: "recovery"
        },
        {
          text: "批判者の意図を理解しようとする",
          level: 3,
          category: "analysis"
        },
        {
          text: "批判に反発し、自分の正当性を主張する",
          level: 1,
          category: "recovery"
        },
        {
          text: "批判されたことで、落ち込んでしまう",
          level: 1,
          category: "recovery"
        }
      ]
    },
    {
      id: "aq_004",
      type: "uncertainty",
      text: "先行きが不透明な状況で、あなたは？",
      answers: [
        {
          text: "不確実性を受け入れ、現在できることに集中する",
          level: 3,
          category: "persistence"
        },
        {
          text: "不確実性の中で、複数のシナリオを想定する",
          level: 4,
          category: "analysis"
        },
        {
          text: "不確実性に不安を感じ、判断ができない",
          level: 1,
          category: "persistence"
        },
        {
          text: "確実性が得られるまで、行動を待つ",
          level: 2,
          category: "persistence"
        }
      ]
    },
    {
      id: "aq_005",
      type: "responsibility",
      text: "自分の判断ミスが、大きな損失を招いた。あなたは？",
      answers: [
        {
          text: "責任を認め、改善策を実行する",
          level: 4,
          category: "ownership"
        },
        {
          text: "状況の複雑さを理由に、責任を軽減しようとする",
          level: 1,
          category: "ownership"
        },
        {
          text: "ミスから学び、同じ過ちを繰り返さない",
          level: 3,
          category: "ownership"
        },
        {
          text: "ミスを後悔し、自信を失う",
          level: 1,
          category: "recovery"
        }
      ]
    },
    {
      id: "aq_006",
      type: "pressure",
      text: "高いプレッシャーの中で、あなたは？",
      answers: [
        {
          text: "プレッシャーを感じながらも、冷静に対応する",
          level: 3,
          category: "persistence"
        },
        {
          text: "プレッシャーを成長の機会と捉える",
          level: 4,
          category: "persistence"
        },
        {
          text: "プレッシャーでパニックになり、判断ができない",
          level: 1,
          category: "persistence"
        },
        {
          text: "プレッシャーから逃げたいと思う",
          level: 1,
          category: "persistence"
        }
      ]
    },
    {
      id: "aq_007",
      type: "learning",
      text: "新しいスキルを習得する必要がある。あなたは？",
      answers: [
        {
          text: "習得に時間がかかることを理由に、避ける",
          level: 1,
          category: "adaptation"
        },
        {
          text: "段階的に学び、実践を通じて習得する",
          level: 3,
          category: "adaptation"
        },
        {
          text: "習得の過程で失敗することを想定し、対策を立てる",
          level: 4,
          category: "analysis"
        },
        {
          text: "他の人に任せる",
          level: 1,
          category: "adaptation"
        }
      ]
    },
    {
      id: "aq_008",
      type: "conflict",
      text: "対立する利害関係者の間で、調整が必要だ。あなたは？",
      answers: [
        {
          text: "対立を避け、どちらかの側に付く",
          level: 1,
          category: "analysis"
        },
        {
          text: "各利害関係者の立場を理解し、共通点を見つける",
          level: 4,
          category: "analysis"
        },
        {
          text: "妥協点を見つけ、調整する",
          level: 3,
          category: "adaptation"
        },
        {
          text: "対立を解決するのは難しいと考える",
          level: 1,
          category: "analysis"
        }
      ]
    },
    {
      id: "aq_009",
      type: "resource",
      text: "限られたリソースで、大きな目標を達成する必要がある。あなたは？",
      answers: [
        {
          text: "リソースが不足しているので、目標を下げる",
          level: 1,
          category: "adaptation"
        },
        {
          text: "リソースの制約の中で、最大の効果を生み出す方法を考える",
          level: 4,
          category: "analysis"
        },
        {
          text: "必要なリソースを確保するよう、交渉する",
          level: 3,
          category: "adaptation"
        },
        {
          text: "リソースが足りないことに、不満を言う",
          level: 1,
          category: "recovery"
        }
      ]
    },
    {
      id: "aq_010",
      type: "growth",
      text: "困難な経験から、あなたは？",
      answers: [
        {
          text: "できるだけ忘れようとする",
          level: 1,
          category: "recovery"
        },
        {
          text: "経験から教訓を引き出し、次に活かす",
          level: 4,
          category: "analysis"
        },
        {
          text: "経験を受け入れ、前に進む",
          level: 3,
          category: "recovery"
        },
        {
          text: "経験について、他の人に相談する",
          level: 2,
          category: "recovery"
        }
      ]
    }
  ],
  sq: [
    {
      id: "sq_001",
      type: "atmosphere",
      text: "会議の雰囲気が微妙だ。あなたは？",
      answers: [
        {
          text: "雰囲気を読み、発言のタイミングを調整する",
          level: 4,
          category: "atmosphere"
        },
        {
          text: "雰囲気に関係なく、自分の意見を述べる",
          level: 1,
          category: "atmosphere"
        },
        {
          text: "雰囲気が悪い理由を推測し、改善しようとする",
          level: 3,
          category: "atmosphere"
        },
        {
          text: "雰囲気に気づかない",
          level: 1,
          category: "atmosphere"
        }
      ]
    },
    {
      id: "sq_002",
      type: "influence",
      text: "チーム内で意見が分かれている。あなたは？",
      answers: [
        {
          text: "自分の意見を強く主張し、他を説得する",
          level: 2,
          category: "power"
        },
        {
          text: "各意見の背景を理解し、共通点を見つける",
          level: 4,
          category: "influence"
        },
        {
          text: "多数派の意見に従う",
          level: 1,
          category: "influence"
        },
        {
          text: "リーダーの判断に委ねる",
          level: 2,
          category: "influence"
        }
      ]
    },
    {
      id: "sq_003",
      type: "role",
      text: "チーム内での自分の役割について、あなたは？",
      answers: [
        {
          text: "与えられた役割を果たすことに専念する",
          level: 2,
          category: "role"
        },
        {
          text: "チーム全体の目標を考え、柔軟に役割を調整する",
          level: 4,
          category: "role"
        },
        {
          text: "自分の役割を超えて、他のことはしない",
          level: 1,
          category: "role"
        },
        {
          text: "自分の役割が不明確で、困惑している",
          level: 1,
          category: "role"
        }
      ]
    },
    {
      id: "sq_004",
      type: "structure",
      text: "組織の構造や権力関係について、あなたは？",
      answers: [
        {
          text: "構造を理解し、効果的に働きかける",
          level: 4,
          category: "structure"
        },
        {
          text: "構造に関係なく、自分の方法で行動する",
          level: 1,
          category: "structure"
        },
        {
          text: "構造に従い、指示を待つ",
          level: 2,
          category: "structure"
        },
        {
          text: "構造を理解していない",
          level: 1,
          category: "structure"
        }
      ]
    },
    {
      id: "sq_005",
      type: "network",
      text: "人間関係のネットワークについて、あなたは？",
      answers: [
        {
          text: "必要な人間関係を意図的に構築する",
          level: 3,
          category: "influence"
        },
        {
          text: "人間関係は自然に形成されるものと考える",
          level: 1,
          category: "influence"
        },
        {
          text: "人間関係の価値を理解し、維持する",
          level: 4,
          category: "influence"
        },
        {
          text: "人間関係に興味がない",
          level: 1,
          category: "influence"
        }
      ]
    },
    {
      id: "sq_006",
      type: "politics",
      text: "職場の政治的な動きについて、あなたは？",
      answers: [
        {
          text: "政治的な動きを避け、仕事に集中する",
          level: 1,
          category: "atmosphere"
        },
        {
          text: "政治的な動きを理解し、適切に対応する",
          level: 4,
          category: "atmosphere"
        },
        {
          text: "政治的な動きに巻き込まれないよう、注意する",
          level: 2,
          category: "atmosphere"
        },
        {
          text: "政治的な動きに参加し、自分の利益を優先する",
          level: 2,
          category: "atmosphere"
        }
      ]
    },
    {
      id: "sq_007",
      type: "communication",
      text: "異なる立場の人と、効果的にコミュニケーションするには？",
      answers: [
        {
          text: "相手の立場を理解し、相手に合わせて伝える",
          level: 4,
          category: "influence"
        },
        {
          text: "自分の伝え方を変えない",
          level: 1,
          category: "influence"
        },
        {
          text: "相手の言語や文化を学ぶ",
          level: 3,
          category: "influence"
        },
        {
          text: "共通言語を見つけ、その中で伝える",
          level: 3,
          category: "influence"
        }
      ]
    },
    {
      id: "sq_008",
      type: "leadership",
      text: "リーダーシップを発揮するとき、あなたは？",
      answers: [
        {
          text: "自分の権限を使い、指示を出す",
          level: 2,
          category: "power"
        },
        {
          text: "メンバーの価値観や動機を理解し、導く",
          level: 4,
          category: "power"
        },
        {
          text: "リーダーシップは必要ないと考える",
          level: 1,
          category: "power"
        },
        {
          text: "リーダーシップを発揮することに不安がある",
          level: 1,
          category: "power"
        }
      ]
    },
    {
      id: "sq_009",
      type: "collaboration",
      text: "異なるチーム間での協力が必要だ。あなたは？",
      answers: [
        {
          text: "各チームの目標や制約を理解し、調整する",
          level: 4,
          category: "structure"
        },
        {
          text: "自分のチームの利益を優先する",
          level: 1,
          category: "structure"
        },
        {
          text: "全体の目標を優先し、妥協する",
          level: 3,
          category: "structure"
        },
        {
          text: "協力は難しいと考える",
          level: 1,
          category: "structure"
        }
      ]
    },
    {
      id: "sq_010",
      type: "influence",
      text: "組織全体に影響を与えるには、あなたは？",
      answers: [
        {
          text: "権力を使い、強制する",
          level: 1,
          category: "power"
        },
        {
          text: "信頼と共感を基盤に、影響を与える",
          level: 4,
          category: "power"
        },
        {
          text: "組織全体に影響を与えることはできないと考える",
          level: 1,
          category: "power"
        },
        {
          text: "少数の有力者に働きかける",
          level: 3,
          category: "power"
        }
      ]
    }
  ],
  xq: [
    {
      id: "xq_001",
      type: "learning",
      text: "新しい分野を学ぶとき、あなたは？",
      answers: [
        {
          text: "基礎から体系的に学ぶ",
          level: 3,
          category: "learning"
        },
        {
          text: "実践を通じて、必要な知識を習得する",
          level: 3,
          category: "learning"
        },
        {
          text: "既存の知識と関連付けながら、理解を深める",
          level: 4,
          category: "learning"
        },
        {
          text: "学習に時間がかかるので、避ける",
          level: 1,
          category: "learning"
        }
      ]
    },
    {
      id: "xq_002",
      type: "abstraction",
      text: "複数の経験から、共通パターンを見つけるとき、あなたは？",
      answers: [
        {
          text: "表面的な共通点を見つける",
          level: 1,
          category: "abstraction"
        },
        {
          text: "深い構造的な共通点を見つける",
          level: 4,
          category: "abstraction"
        },
        {
          text: "共通点と例外の両方を理解する",
          level: 3,
          category: "abstraction"
        },
        {
          text: "共通パターンを見つけることは難しいと考える",
          level: 1,
          category: "abstraction"
        }
      ]
    },
    {
      id: "xq_003",
      type: "transfer",
      text: "ある分野で学んだことを、別の分野に応用するとき、あなたは？",
      answers: [
        {
          text: "直接的に応用する",
          level: 2,
          category: "transfer"
        },
        {
          text: "応用の前に、異なる分野の特性を理解する",
          level: 4,
          category: "transfer"
        },
        {
          text: "応用は難しいと考える",
          level: 1,
          category: "transfer"
        },
        {
          text: "応用の可能性を探索する",
          level: 3,
          category: "transfer"
        }
      ]
    },
    {
      id: "xq_004",
      type: "reproducibility",
      text: "成功した経験を、別の状況で再現するとき、あなたは？",
      answers: [
        {
          text: "同じ方法を繰り返す",
          level: 1,
          category: "reproducibility"
        },
        {
          text: "成功の本質を理解し、状況に合わせて応用する",
          level: 4,
          category: "reproducibility"
        },
        {
          text: "成功の要因を分析する",
          level: 3,
          category: "reproducibility"
        },
        {
          text: "再現は難しいと考える",
          level: 1,
          category: "reproducibility"
        }
      ]
    },
    {
      id: "xq_005",
      type: "reflection",
      text: "経験から学ぶために、あなたは？",
      answers: [
        {
          text: "経験をそのまま受け入れる",
          level: 1,
          category: "learning"
        },
        {
          text: "経験を振り返り、教訓を引き出す",
          level: 4,
          category: "learning"
        },
        {
          text: "経験を他の人と共有し、議論する",
          level: 3,
          category: "learning"
        },
        {
          text: "経験から学ぶことは難しいと考える",
          level: 1,
          category: "learning"
        }
      ]
    },
    {
      id: "xq_006",
      type: "growth",
      text: "成長の機会について、あなたは？",
      answers: [
        {
          text: "成長の機会を積極的に探す",
          level: 4,
          category: "growth"
        },
        {
          text: "成長の機会が与えられるのを待つ",
          level: 1,
          category: "growth"
        },
        {
          text: "成長の機会を認識し、活用する",
          level: 3,
          category: "growth"
        },
        {
          text: "成長は必要ないと考える",
          level: 1,
          category: "growth"
        }
      ]
    },
    {
      id: "xq_007",
      type: "adaptation",
      text: "新しい環境に適応するとき、あなたは？",
      answers: [
        {
          text: "環境に合わせて、自分を変える",
          level: 2,
          category: "transfer"
        },
        {
          text: "環境を理解し、自分の強みを活かす方法を見つける",
          level: 4,
          category: "transfer"
        },
        {
          text: "環境に抵抗する",
          level: 1,
          category: "transfer"
        },
        {
          text: "環境に適応するのに時間がかかる",
          level: 2,
          category: "transfer"
        }
      ]
    },
    {
      id: "xq_008",
      type: "knowledge",
      text: "知識を習得するとき、あなたは？",
      answers: [
        {
          text: "暗記する",
          level: 1,
          category: "learning"
        },
        {
          text: "理解し、応用できるようにする",
          level: 4,
          category: "learning"
        },
        {
          text: "必要な知識だけを習得する",
          level: 2,
          category: "learning"
        },
        {
          text: "知識習得は効率的ではないと考える",
          level: 1,
          category: "learning"
        }
      ]
    },
    {
      id: "xq_009",
      type: "innovation",
      text: "既存の方法を改善するとき、あなたは？",
      answers: [
        {
          text: "既存の方法を尊重し、小さな改善をする",
          level: 2,
          category: "abstraction"
        },
        {
          text: "根本的な原因を理解し、革新的な改善を考える",
          level: 4,
          category: "abstraction"
        },
        {
          text: "既存の方法を変えることに抵抗がある",
          level: 1,
          category: "abstraction"
        },
        {
          text: "改善の可能性を探索する",
          level: 3,
          category: "abstraction"
        }
      ]
    },
    {
      id: "xq_010",
      type: "mastery",
      text: "専門性を深めるために、あなたは？",
      answers: [
        {
          text: "現在のレベルで満足する",
          level: 1,
          category: "growth"
        },
        {
          text: "継続的に学習し、専門性を高める",
          level: 4,
          category: "growth"
        },
        {
          text: "必要な専門性は既に習得したと考える",
          level: 1,
          category: "growth"
        },
        {
          text: "専門性を高めるための計画を立てる",
          level: 3,
          category: "growth"
        }
      ]
    }
  ]
};
