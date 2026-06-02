// 5Q診断 - 高度化された設問データ
// 社会的望ましさバイアスを排除し、複雑なトレードオフ設計を採用

const questions = {
  IQ: [
    {
      id: "iq_001",
      type: "judgment",
      text: "新しいプロジェクトの企画書を読んだ。提案内容は魅力的だが、前提条件に矛盾を感じた。あなたは？",
      choices: [
        {
          text: "矛盾を指摘して、修正を求める前に、提案者の意図を詳しく聞く",
          level: 3
        },
        {
          text: "矛盾点をリストアップし、メールで具体的に質問する",
          level: 4
        },
        {
          text: "魅力的な部分が大きいので、矛盾は運用で対応できると判断する",
          level: 1
        },
        {
          text: "矛盾の背景にある前提条件の変化を、業界トレンドから推測する",
          level: 3
        }
      ]
    },
    {
      id: "iq_002",
      type: "pattern",
      text: "データ分析の結果、予想と逆の傾向が出た。あなたの最初の行動は？",
      choices: [
        {
          text: "分析方法に誤りがないか、まず手法を検証する",
          level: 4
        },
        {
          text: "結果が正しいと仮定して、新しい仮説を立てる",
          level: 3
        },
        {
          text: "データ収集の時期や対象に偏りがなかったか確認する",
          level: 3
        },
        {
          text: "予想が外れたことより、今後の対応方法を考える",
          level: 1
        }
      ]
    },
    {
      id: "iq_003",
      type: "abstraction",
      text: "複数の失敗事例を見ている。共通パターンを見つけたが、例外もある。あなたは？",
      choices: [
        {
          text: "共通パターンを優先し、例外は後で分析する",
          level: 2
        },
        {
          text: "例外を含めた全体像を理解してから、パターンを定義する",
          level: 4
        },
        {
          text: "例外ケースの理由を深掘りして、より正確なパターンを作る",
          level: 4
        },
        {
          text: "共通パターンと例外の両方を並行して対策する",
          level: 3
        }
      ]
    },
    {
      id: "iq_004",
      type: "reverse_trap",
      text: "複雑な問題について、シンプルな解釈と複雑な解釈の両方が成立する。あなたは？",
      choices: [
        {
          text: "シンプルな解釈を採用し、実装を優先する",
          level: 3
        },
        {
          text: "複雑な解釈が正しいと考え、詳細に分析する",
          level: 2
        },
        {
          text: "両者の違いが実務的に影響するかを確認してから選ぶ",
          level: 4
        },
        {
          text: "シンプルさと正確さのバランスを取った解釈を作る",
          level: 3
        }
      ]
    },
    {
      id: "iq_005",
      type: "tradeoff",
      text: "提案Aは論理的だが実装が難しい。提案Bは実装しやすいが仮定が多い。あなたは？",
      choices: [
        {
          text: "実装可能性を優先し、Bで始めて改善する",
          level: 3
        },
        {
          text: "論理的厳密性を優先し、Aの実装方法を工夫する",
          level: 2
        },
        {
          text: "Bの仮定が妥当かを検証してから、どちらかを選ぶ",
          level: 4
        },
        {
          text: "AとBの要素を組み合わせた第三案を作る",
          level: 3
        }
      ]
    },
    {
      id: "iq_006",
      type: "judgment",
      text: "ある理論が一般的だが、自分の経験では異なる。あなたは？",
      choices: [
        {
          text: "自分の経験が特殊ケースか、理論が不完全かを区別する",
          level: 4
        },
        {
          text: "一般的な理論を信頼し、自分の経験を再検討する",
          level: 2
        },
        {
          text: "自分の経験を優先し、理論を疑う",
          level: 1
        },
        {
          text: "両者の違いから、新しい視点を得られないか考える",
          level: 3
        }
      ]
    },
    {
      id: "iq_007",
      type: "pattern",
      text: "情報が不足しているが、判断を求められている。あなたは？",
      choices: [
        {
          text: "必要な情報を明確にして、判断を遅延させる",
          level: 3
        },
        {
          text: "不足情報を補う仮定を明示した上で、判断を提示する",
          level: 4
        },
        {
          text: "現在の情報で最善の判断を示す",
          level: 2
        },
        {
          text: "判断を避け、さらなる情報収集を提案する",
          level: 1
        }
      ]
    },
    {
      id: "iq_008",
      type: "abstraction",
      text: "細部の議論が続いている。全体像を見直すべきか判断に迷う。あなたは？",
      choices: [
        {
          text: "細部を詰めることが全体の精度を高めると考える",
          level: 1
        },
        {
          text: "全体像を確認し、細部の優先順位を整理する",
          level: 4
        },
        {
          text: "細部と全体の関係性を明確にしてから進める",
          level: 4
        },
        {
          text: "細部の議論を続けつつ、時々全体を確認する",
          level: 2
        }
      ]
    },
    {
      id: "iq_009",
      type: "reverse_trap",
      text: "自分の分析結果が、多くの人の直感と異なる。あなたは？",
      choices: [
        {
          text: "自分の分析を信頼し、結果を提示する",
          level: 2
        },
        {
          text: "多くの人の直感が正しい可能性を考慮する",
          level: 3
        },
        {
          text: "分析と直感の両者が何を見ているか、理解してから判断する",
          level: 4
        },
        {
          text: "直感を無視して、分析結果を優先する",
          level: 1
        }
      ]
    },
    {
      id: "iq_010",
      type: "judgment",
      text: "複数の専門家の意見が対立している。あなたは？",
      choices: [
        {
          text: "各専門家の前提条件や視点の違いを理解する",
          level: 4
        },
        {
          text: "最も信頼できる専門家の意見に従う",
          level: 2
        },
        {
          text: "対立の理由を分析し、統合的な見方を作る",
          level: 4
        },
        {
          text: "意見の多数派を採用する",
          level: 1
        }
      ]
    }
  ],

  EQ: [
    {
      id: "eq_001",
      type: "situation",
      text: "同僚が失敗して落ち込んでいる。あなたは？",
      choices: [
        {
          text: "励ましの言葉をかけ、前向きになるよう促す",
          level: 2
        },
        {
          text: "失敗の原因と対策を一緒に整理する",
          level: 3
        },
        {
          text: "まず、落ち込みの理由を詳しく聞く",
          level: 3
        },
        {
          text: "同じような失敗を自分も経験したことを話す",
          level: 2
        }
      ]
    },
    {
      id: "eq_002",
      type: "tradeoff",
      text: "部下が意見を言わなくなった。理由を聞きたいが、プレッシャーになるかもしれない。あなたは？",
      choices: [
        {
          text: "本人が話したくなるまで、静かに見守る",
          level: 2
        },
        {
          text: "定期的に1対1の時間を作り、話しやすい環境を整える",
          level: 4
        },
        {
          text: "直接、何か悩んでいないか聞く",
          level: 2
        },
        {
          text: "部下の行動の変化から、理由を推測する",
          level: 3
        }
      ]
    },
    {
      id: "eq_003",
      type: "reverse_trap",
      text: "チーム内に意見の対立がある。全員が納得する解を作ろうとしている。あなたは？",
      choices: [
        {
          text: "全員の意見を聞いて、共通点を見つける",
          level: 2
        },
        {
          text: "対立の背景にある価値観の違いを理解する",
          level: 4
        },
        {
          text: "妥協点を作り、全員が受け入れられる案を提示する",
          level: 3
        },
        {
          text: "対立が健全だと判断し、異なる意見を並行させる",
          level: 3
        }
      ]
    },
    {
      id: "eq_004",
      type: "failure",
      text: "自分の判断ミスで、チームに迷惑をかけた。あなたは？",
      choices: [
        {
          text: "ミスを認め、改善策を提示する",
          level: 3
        },
        {
          text: "ミスの原因を分析し、同じ過ちを防ぐ仕組みを作る",
          level: 4
        },
        {
          text: "チームメンバーの負担を軽くするために、自分で対応する",
          level: 2
        },
        {
          text: "ミスの背景にあった状況を説明する",
          level: 2
        }
      ]
    },
    {
      id: "eq_005",
      type: "observation",
      text: "会議で、ある人が沈黙している。あなたは？",
      choices: [
        {
          text: "その人の意見を聞く機会を作る",
          level: 3
        },
        {
          text: "沈黙の理由が、反対意見か、単なる思考中かを見極める",
          level: 4
        },
        {
          text: "沈黙を尊重し、無理に話させない",
          level: 2
        },
        {
          text: "その人の表情や身体言語から、感情を読み取る",
          level: 3
        }
      ]
    },
    {
      id: "eq_006",
      type: "priority",
      text: "プロジェクトが遅れている。チームのモチベーションも低い。優先すべきは？",
      choices: [
        {
          text: "スケジュール回復を優先し、チームを鼓舞する",
          level: 2
        },
        {
          text: "モチベーション低下の原因を理解し、対策を立てる",
          level: 4
        },
        {
          text: "遅れの理由を分析し、現実的な新スケジュールを作る",
          level: 3
        },
        {
          text: "チームメンバーの疲労を軽くするため、一時的に負荷を減らす",
          level: 2
        }
      ]
    },
    {
      id: "eq_007",
      type: "tradeoff",
      text: "上司の指示と、チームの意見が対立している。あなたは？",
      choices: [
        {
          text: "上司の指示に従い、チームを説得する",
          level: 1
        },
        {
          text: "チームの意見を尊重し、上司に相談する",
          level: 3
        },
        {
          text: "両者の立場と理由を理解してから、どう進めるか判断する",
          level: 4
        },
        {
          text: "上司とチームの両者と話し、折衷案を作る",
          level: 3
        }
      ]
    },
    {
      id: "eq_008",
      type: "judgment",
      text: "チームメンバーが、個人的な悩みを相談してきた。あなたは？",
      choices: [
        {
          text: "話を聞き、共感を示す",
          level: 2
        },
        {
          text: "相談内容が仕事に影響するかを理解する",
          level: 3
        },
        {
          text: "話を聞きつつ、相手が何を求めているか確認する",
          level: 4
        },
        {
          text: "プロとしての距離を保ち、仕事に集中させる",
          level: 1
        }
      ]
    },
    {
      id: "eq_009",
      type: "reverse_trap",
      text: "チームが一致団結して、ある方針に賛成している。あなたは？",
      choices: [
        {
          text: "チームの結束を大切にし、方針を支持する",
          level: 1
        },
        {
          text: "チームの意見が、本当に全員の意見か確認する",
          level: 4
        },
        {
          text: "異なる意見がないか、静かに探る",
          level: 3
        },
        {
          text: "チームの判断を信頼し、進める",
          level: 2
        }
      ]
    },
    {
      id: "eq_010",
      type: "situation",
      text: "自分が間違っていたことに気づいた。相手に謝るべきか、黙っているべきか迷う。あなたは？",
      choices: [
        {
          text: "相手に謝り、誤解を解く",
          level: 3
        },
        {
          text: "謝るタイミングと方法を考えてから行動する",
          level: 4
        },
        {
          text: "相手が気づいていなければ、言わない",
          level: 1
        },
        {
          text: "今後の関係を考えて、謝るかどうか判断する",
          level: 2
        }
      ]
    }
  ],

  AQ: [
    {
      id: "aq_001",
      type: "situation",
      text: "急な方針変更が起きた。あなたは？",
      choices: [
        {
          text: "変更理由と影響範囲を確認し、対応の優先順位を決める",
          level: 4
        },
        {
          text: "現場の混乱を最小化するため、まず周囲を落ち着かせる",
          level: 2
        },
        {
          text: "既存計画との差分を見て、最小限の変更で対応する",
          level: 3
        },
        {
          text: "変更に納得できるまで、背景を確認する",
          level: 1
        }
      ]
    },
    {
      id: "aq_002",
      type: "failure",
      text: "立てた計画が、途中で通用しなくなった。あなたは？",
      choices: [
        {
          text: "計画を修正し、新しい目標を設定する",
          level: 4
        },
        {
          text: "計画が失敗した理由を分析する",
          level: 3
        },
        {
          text: "元の計画に戻すか、新計画にするか、慎重に判断する",
          level: 2
        },
        {
          text: "計画の失敗に落ち込み、対応を遅延させる",
          level: 1
        }
      ]
    },
    {
      id: "aq_003",
      type: "tradeoff",
      text: "既存の方法では対応できない問題が出た。新しい方法を試すか、既存方法を工夫するか？",
      choices: [
        {
          text: "既存方法の工夫を優先し、新方法は最後の手段にする",
          level: 2
        },
        {
          text: "新方法の有効性を検証しながら、段階的に導入する",
          level: 4
        },
        {
          text: "新方法を試す前に、既存方法の限界を明確にする",
          level: 3
        },
        {
          text: "新方法に切り替える",
          level: 2
        }
      ]
    },
    {
      id: "aq_004",
      type: "reverse_trap",
      text: "困難な状況だが、時間をかけて対応すれば解決できそう。あなたは？",
      choices: [
        {
          text: "時間をかけて、最善の対応を探る",
          level: 2
        },
        {
          text: "時間的余裕があるか確認し、対応速度を決める",
          level: 4
        },
        {
          text: "早期に対応し、その後の改善に備える",
          level: 3
        },
        {
          text: "完璧な対応を目指し、時間をかける",
          level: 1
        }
      ]
    },
    {
      id: "aq_005",
      type: "priority",
      text: "複数の問題が同時に起きた。あなたは？",
      choices: [
        {
          text: "緊急度と影響度で優先順位を決め、順番に対応する",
          level: 4
        },
        {
          text: "すべての問題に同時に対応する",
          level: 2
        },
        {
          text: "最も簡単に解決できる問題から始める",
          level: 1
        },
        {
          text: "問題の根本原因を見つけ、一度に解決する方法を探る",
          level: 3
        }
      ]
    },
    {
      id: "aq_006",
      type: "judgment",
      text: "予想外の結果が出た。対応を急ぐべきか、原因を調べるべきか？",
      choices: [
        {
          text: "原因を調べてから対応する",
          level: 2
        },
        {
          text: "緊急性に応じて、対応と調査を並行させる",
          level: 4
        },
        {
          text: "まず対応し、その後原因を調べる",
          level: 3
        },
        {
          text: "原因が分かるまで、対応を待つ",
          level: 1
        }
      ]
    },
    {
      id: "aq_007",
      type: "observation",
      text: "環境が大きく変わった。対応が必要か、様子を見るべきか？",
      choices: [
        {
          text: "変化の影響を評価してから、対応を決める",
          level: 4
        },
        {
          text: "変化に先制的に対応する",
          level: 3
        },
        {
          text: "様子を見て、問題が出たら対応する",
          level: 2
        },
        {
          text: "変化を無視し、既存の方法を続ける",
          level: 1
        }
      ]
    },
    {
      id: "aq_008",
      type: "tradeoff",
      text: "安定性と成長のどちらを優先するか、判断に迷う。あなたは？",
      choices: [
        {
          text: "安定性を優先する",
          level: 1
        },
        {
          text: "成長を優先する",
          level: 2
        },
        {
          text: "状況に応じて、バランスを調整する",
          level: 4
        },
        {
          text: "安定性を保ちながら、成長の機会を探る",
          level: 3
        }
      ]
    },
    {
      id: "aq_009",
      type: "reverse_trap",
      text: "失敗から学べることが多い状況。失敗を受け入れるべきか？",
      choices: [
        {
          text: "失敗を避け、安全な方法を選ぶ",
          level: 1
        },
        {
          text: "失敗を学習機会と捉え、挑戦する",
          level: 3
        },
        {
          text: "失敗のコストと学習価値を比較してから判断する",
          level: 4
        },
        {
          text: "失敗は避けられないと考え、対応策を準備する",
          level: 3
        }
      ]
    },
    {
      id: "aq_010",
      type: "situation",
      text: "自分の予測が外れた。あなたは？",
      choices: [
        {
          text: "予測モデルを改善する",
          level: 4
        },
        {
          text: "予測が外れた理由を分析する",
          level: 3
        },
        {
          text: "予測の失敗から、今後の対応を考える",
          level: 3
        },
        {
          text: "予測の失敗を受け入れ、次に進む",
          level: 2
        }
      ]
    }
  ],

  SQ: [
    {
      id: "sq_001",
      type: "observation",
      text: "会議の雰囲気が微妙に変わった。あなたは？",
      choices: [
        {
          text: "変化に気づき、その理由を探る",
          level: 4
        },
        {
          text: "雰囲気の変化を感じるが、議論を続ける",
          level: 2
        },
        {
          text: "誰かの発言が影響したと推測する",
          level: 3
        },
        {
          text: "雰囲気の変化に気づかない",
          level: 1
        }
      ]
    },
    {
      id: "sq_002",
      type: "judgment",
      text: "グループ内に、言葉では言わない不満がある。あなたは？",
      choices: [
        {
          text: "不満を言葉にして、オープンに話し合う",
          level: 3
        },
        {
          text: "不満の対象と理由を理解し、対応を考える",
          level: 4
        },
        {
          text: "不満を察知するが、触れない",
          level: 2
        },
        {
          text: "不満があるかどうか、確認する",
          level: 2
        }
      ]
    },
    {
      id: "sq_003",
      type: "reverse_trap",
      text: "全員が同意しているように見える。あなたは？",
      choices: [
        {
          text: "全員の同意を信頼し、進める",
          level: 1
        },
        {
          text: "本当に全員が同意しているか、確認する",
          level: 4
        },
        {
          text: "異なる意見がないか、探る",
          level: 3
        },
        {
          text: "同意の質（納得度）を評価する",
          level: 3
        }
      ]
    },
    {
      id: "sq_004",
      type: "influence",
      text: "意見を変えてもらう必要がある。あなたは？",
      choices: [
        {
          text: "相手の立場と価値観を理解してから、話す",
          level: 4
        },
        {
          text: "論理的に説得する",
          level: 2
        },
        {
          text: "相手が聞き入れやすいタイミングを選ぶ",
          level: 3
        },
        {
          text: "相手の感情に訴える",
          level: 2
        }
      ]
    },
    {
      id: "sq_005",
      type: "tradeoff",
      text: "本音と建前が異なる状況。どう対応するか？",
      choices: [
        {
          text: "建前を尊重し、本音は言わない",
          level: 1
        },
        {
          text: "本音を優先し、率直に話す",
          level: 2
        },
        {
          text: "本音と建前の両者を理解し、状況に応じて対応する",
          level: 4
        },
        {
          text: "本音を察知し、それに対応する",
          level: 3
        }
      ]
    },
    {
      id: "sq_006",
      type: "situation",
      text: "チーム内に派閥がある。あなたは？",
      choices: [
        {
          text: "派閥を無視し、全員を公平に扱う",
          level: 1
        },
        {
          text: "派閥の存在と理由を理解する",
          level: 4
        },
        {
          text: "派閥間の対立を避ける",
          level: 2
        },
        {
          text: "派閥の影響を最小化する工夫をする",
          level: 3
        }
      ]
    },
    {
      id: "sq_007",
      type: "priority",
      text: "個人の利益と組織の利益が対立している。あなたは？",
      choices: [
        {
          text: "組織の利益を優先する",
          level: 2
        },
        {
          text: "個人の利益を優先する",
          level: 1
        },
        {
          text: "両者の利益を理解し、折衷点を探る",
          level: 4
        },
        {
          text: "個人が納得できる形で、組織の利益を実現する",
          level: 3
        }
      ]
    },
    {
      id: "sq_008",
      type: "observation",
      text: "ある人が、グループから距離を置いている。あなたは？",
      choices: [
        {
          text: "その人に話しかけ、理由を聞く",
          level: 2
        },
        {
          text: "その人が距離を置く理由を推測する",
          level: 3
        },
        {
          text: "その人の背景と心理を理解しようとする",
          level: 4
        },
        {
          text: "その人の選択を尊重し、無理に近づかない",
          level: 2
        }
      ]
    },
    {
      id: "sq_009",
      type: "reverse_trap",
      text: "自分が言ったことが、予想と違う反応を呼んだ。あなたは？",
      choices: [
        {
          text: "自分の発言を正当化する",
          level: 1
        },
        {
          text: "相手の反応から、自分の発言がどう受け取られたか理解する",
          level: 4
        },
        {
          text: "相手の反応が予想外だったことに気づく",
          level: 2
        },
        {
          text: "相手の感情を考慮し、フォローアップする",
          level: 3
        }
      ]
    },
    {
      id: "sq_010",
      type: "judgment",
      text: "複数の利害関係者がいる。あなたは？",
      choices: [
        {
          text: "各利害関係者の立場と優先順位を理解する",
          level: 4
        },
        {
          text: "最も影響力のある人を優先する",
          level: 2
        },
        {
          text: "全員を公平に扱う",
          level: 1
        },
        {
          text: "利害関係者間の調整役になる",
          level: 3
        }
      ]
    }
  ],

  XQ: [
    {
      id: "xq_001",
      type: "learning",
      text: "新しい分野に取り組む。あなたは？",
      choices: [
        {
          text: "基礎から体系的に学ぶ",
          level: 3
        },
        {
          text: "実践しながら、必要な知識を学ぶ",
          level: 3
        },
        {
          text: "既存知識との関連性を見つけながら学ぶ",
          level: 4
        },
        {
          text: "成功事例から、パターンを学ぶ",
          level: 3
        }
      ]
    },
    {
      id: "xq_002",
      type: "abstraction",
      text: "複数の経験から、共通パターンを見つけた。あなたは？",
      choices: [
        {
          text: "パターンを一般化し、他の場面に応用する",
          level: 4
        },
        {
          text: "パターンが本当に通用するか、検証する",
          level: 3
        },
        {
          text: "パターンを記録し、今後の参考にする",
          level: 2
        },
        {
          text: "パターンが例外を含むか、確認する",
          level: 3
        }
      ]
    },
    {
      id: "xq_003",
      type: "reverse_trap",
      text: "失敗から学ぼうとしている。あなたは？",
      choices: [
        {
          text: "失敗の原因を徹底的に分析する",
          level: 3
        },
        {
          text: "失敗から、何が学べるかを考える",
          level: 4
        },
        {
          text: "失敗を反省し、二度と繰り返さないようにする",
          level: 2
        },
        {
          text: "失敗の背景にある前提条件を理解する",
          level: 3
        }
      ]
    },
    {
      id: "xq_004",
      type: "application",
      text: "学んだ知識を、新しい場面に応用する。あなたは？",
      choices: [
        {
          text: "そのまま応用する",
          level: 1
        },
        {
          text: "新しい場面に合わせて、調整してから応用する",
          level: 4
        },
        {
          text: "応用できるか、まず検証する",
          level: 3
        },
        {
          text: "新しい場面の特性を理解してから、応用方法を考える",
          level: 4
        }
      ]
    },
    {
      id: "xq_005",
      type: "tradeoff",
      text: "深い知識と広い知識のどちらを優先するか？",
      choices: [
        {
          text: "深い知識を優先する",
          level: 2
        },
        {
          text: "広い知識を優先する",
          level: 2
        },
        {
          text: "状況に応じて、バランスを調整する",
          level: 4
        },
        {
          text: "深さと広さの両立を目指す",
          level: 3
        }
      ]
    },
    {
      id: "xq_006",
      type: "judgment",
      text: "自分の経験が、一般的な知識と異なる。あなたは？",
      choices: [
        {
          text: "一般的な知識を信頼し、経験を再検討する",
          level: 1
        },
        {
          text: "経験を信頼し、知識を疑う",
          level: 2
        },
        {
          text: "両者の違いから、新しい理解を得る",
          level: 4
        },
        {
          text: "経験と知識の両者を統合する",
          level: 3
        }
      ]
    },
    {
      id: "xq_007",
      type: "observation",
      text: "他人の成功を見て、学べることがないか考える。あなたは？",
      choices: [
        {
          text: "成功の理由を分析する",
          level: 3
        },
        {
          text: "成功の背景にある、見えない工夫を理解する",
          level: 4
        },
        {
          text: "成功のパターンを、自分に応用できるか考える",
          level: 3
        },
        {
          text: "成功から、自分の課題を見つける",
          level: 3
        }
      ]
    },
    {
      id: "xq_008",
      type: "reverse_trap",
      text: "知識が増えると、判断が難しくなることがある。あなたは？",
      choices: [
        {
          text: "知識を増やし続ける",
          level: 1
        },
        {
          text: "知識の質を優先し、量は制限する",
          level: 2
        },
        {
          text: "知識を統合し、シンプルな理解を作る",
          level: 4
        },
        {
          text: "知識の複雑性を受け入れ、判断を工夫する",
          level: 3
        }
      ]
    },
    {
      id: "xq_009",
      type: "priority",
      text: "複数の学習機会がある。あなたは？",
      choices: [
        {
          text: "すべてを学ぼうとする",
          level: 1
        },
        {
          text: "最も興味のあるものを選ぶ",
          level: 2
        },
        {
          text: "現在の課題に最も役立つものを選ぶ",
          level: 3
        },
        {
          text: "長期的な成長と短期的な課題のバランスを考えて選ぶ",
          level: 4
        }
      ]
    },
    {
      id: "xq_010",
      type: "situation",
      text: "学んだことが、期待と異なる結果をもたらした。あなたは？",
      choices: [
        {
          text: "学習の失敗と考え、別の方法を試す",
          level: 2
        },
        {
          text: "期待と結果の違いから、新しい理解を得る",
          level: 4
        },
        {
          text: "学習の応用方法に問題があったと考える",
          level: 3
        },
        {
          text: "学習を続け、より深い理解を目指す",
          level: 2
        }
      ]
    }
  ]
};

// 質問をシャッフルして返す関数
function getShuffledQuestions(category) {
  const categoryQuestions = questions[category];
  return categoryQuestions.sort(() => Math.random() - 0.5);
}

// すべてのカテゴリの質問を取得
function getAllQuestions() {
  return questions;
}
