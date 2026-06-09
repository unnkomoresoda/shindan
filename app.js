
let currentDiagnostic = null;
let currentQuestionIndex = 0;
let allAnswers = {
    iq: [],
    eq: [],
    aq: [],
    sq: [],
    xq: []
};
let allScores = {
    iq: 0,
    eq: 0,
    aq: 0,
    sq: 0,
    xq: 0,
    bq: 0
};

const diagnosticOrder = ['iq', 'eq', 'aq', 'sq', 'xq'];
let shuffledQuestions = []; // All questions shuffled together
let questionMapping = []; // Maps shuffled index to {diagnostic, questionIndex}

// Start diagnostic
function startDiagnostic(diagnostic) {
    // Create shuffled question list from all 5 diagnostics
    shuffledQuestions = [];
    questionMapping = [];
    
    // Collect all questions with their diagnostic type
    const allQuestions = [];
    diagnosticOrder.forEach(diag => {
        QUESTIONS[diag].forEach((question, index) => {
            allQuestions.push({
                diagnostic: diag,
                questionIndex: index,
                question: question
            });
        });
    });
    
    // Shuffle using Fisher-Yates algorithm
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // Store shuffled questions and mapping
    allQuestions.forEach(item => {
        shuffledQuestions.push(item.question);
        questionMapping.push({
            diagnostic: item.diagnostic,
            questionIndex: item.questionIndex
        });
    });
    
    currentQuestionIndex = 0;
    currentDiagnostic = diagnostic;
    
    // Initialize all answer arrays
    diagnosticOrder.forEach(d => {
        allAnswers[d] = new Array(QUESTIONS[d].length).fill(null);
    });
    
    showScreen('diagnosticScreen');
    loadQuestion();
}

// Load and display current question
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    const mapping = questionMapping[currentQuestionIndex];
    
    // Update header - don't show which diagnostic this is
    document.getElementById('diagnosticTitle').textContent = '5Q+BQ診断';
    document.getElementById('diagnosticDescription').textContent = '質問に答えてください';
    
    // Update progress - show total of all 50 questions
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = shuffledQuestions.length;
    
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Display question
    document.getElementById('questionText').textContent = question.text;
    
    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.innerHTML = `
            <input type="radio" id="answer${index}" name="answer" value="${index}" onchange="selectAnswer(${index})">
            <label for="answer${index}">${answer.text}</label>
        `;
        answersContainer.appendChild(optionDiv);
    });
    
    // Update buttons - Next button ABOVE Back button to prevent misclicks
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextBtn.textContent = '完了';
    } else {
        nextBtn.textContent = '次へ';
    }
    
    // Restore previous answer if exists
    if (allAnswers[mapping.diagnostic][mapping.questionIndex]) {
        const previousAnswer = allAnswers[mapping.diagnostic][mapping.questionIndex];
        document.getElementById(`answer${previousAnswer.answerIndex}`).checked = true;
    }
}

// Select answer
function selectAnswer(answerIndex) {
    const question = shuffledQuestions[currentQuestionIndex];
    const mapping = questionMapping[currentQuestionIndex];
    const answer = question.answers[answerIndex];
    
    allAnswers[mapping.diagnostic][mapping.questionIndex] = {
        answerIndex: answerIndex,
        level: answer.level,
        category: answer.category
    };
}

// Next question
function nextQuestion() {
    const mapping = questionMapping[currentQuestionIndex];
    if (!allAnswers[mapping.diagnostic][mapping.questionIndex]) {
        alert('答えを選択してください');
        return;
    }
    
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        // All questions complete
        completeDiagnostic();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Complete all diagnostics
function completeDiagnostic() {
    // Calculate scores for all diagnostics
    diagnosticOrder.forEach(diagnostic => {
        const result = calculateScore(allAnswers[diagnostic], diagnostic);
        allScores[diagnostic] = result.score;
    });
    
    // Calculate BQ (Bias Quotient)
    allScores.bq = calculateBQ(allAnswers);
    
    // Show results
    showResults();
}

// Show results
function showResults() {
    // Generate score cards for 5Q + BQ
    const scoresContainer = document.getElementById('scoresContainer');
    scoresContainer.innerHTML = '';
    
    // Display 5Q scores
    diagnosticOrder.forEach(diagnostic => {
        const score = allScores[diagnostic];
        const diagnosticData = RESULTS_DATA[diagnostic];
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        
        const card = document.createElement('div');
        card.className = 'score-card';
        card.innerHTML = `
            <h3>${diagnostic.toUpperCase()}</h3>
            <div class="score-value">${score}</div>
            <div class="score-rank">${rankData.rank}</div>
        `;
        card.onclick = () => showDetail(diagnostic);
        scoresContainer.appendChild(card);
    });
    
    // Display BQ score
    const bqScore = allScores.bq;
    const bqData = RESULTS_DATA.bq;
    const bqRankData = bqData.ranks.find(r => bqScore >= r.min && bqScore <= r.max);
    
    const bqCard = document.createElement('div');
    bqCard.className = 'score-card bq-card';
    bqCard.innerHTML = `
        <h3>BQ</h3>
        <div class="score-value">${bqScore}</div>
        <div class="score-rank">${bqRankData.rank}</div>
    `;
    bqCard.onclick = () => showDetail('bq');
    scoresContainer.appendChild(bqCard);
    
    // Calculate integrated type (including BQ)
    const integratedType = getIntegratedType(allScores);
    document.getElementById('integratedType').textContent = integratedType;
    
    // Get integrated explanation
    const explanation = getIntegratedExplanation(allScores);
    
    // Display integrated explanation
    const explanationContainer = document.getElementById('explanationContainer');
    explanationContainer.innerHTML = `
        <h3>${explanation.title}</h3>
        <p>${explanation.explanation}</p>
        <p><strong>課題：</strong>${explanation.challenge}</p>
        <p><strong>推奨：</strong>${explanation.recommendation}</p>
        <p><strong>強み：</strong>${explanation.strength}</p>
        ${explanation.bqNote ? `<p><strong>BQに関する注記：</strong>${explanation.bqNote}</p>` : ''}
    `;
    
    // Generate details
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = '';
    
    // Generate 5Q details
    diagnosticOrder.forEach(diagnostic => {
        const score = allScores[diagnostic];
        const diagnosticData = RESULTS_DATA[diagnostic];
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        
        let type = rankData.type;
        if (!type) {
            // Determine type based on highest answer category
            const answers = allAnswers[diagnostic];
            const categoryCounts = {};
            answers.forEach(answer => {
                if (answer && answer.category !== 'bias') {
                    categoryCounts[answer.category] = (categoryCounts[answer.category] || 0) + 1;
                }
            });
            const topCategory = Object.keys(categoryCounts).length > 0 
                ? Object.keys(categoryCounts).reduce((a, b) => 
                    categoryCounts[a] > categoryCounts[b] ? a : b
                )
                : 'general';
            
            const typeMap = {
                iq: {
                    judgment: '論理構築型',
                    pattern: 'パターン発見型',
                    verbal: '言語分析型',
                    inference: '推論型',
                    processing: '総合処理型',
                    general: '総合処理型'
                },
                eq: {
                    selfAwareness: '自己認識型',
                    selfControl: '自己制御型',
                    empathy: '共感型',
                    adjustment: '調整型',
                    relationship: '関係構築型',
                    general: '調整型'
                },
                aq: {
                    recovery: '修復型',
                    persistence: '粘り強さ型',
                    analysis: '分析型',
                    adaptability: '適応型',
                    learning: '学習型',
                    general: '適応型'
                },
                sq: {
                    harmony: '雰囲気読み型',
                    purpose: '目的認識型',
                    contribution: '貢献型',
                    culture: '文化適応型',
                    communication: 'コミュニケーション型',
                    general: '雰囲気読み型'
                },
                xq: {
                    reflection: '反省型',
                    integration: '統合型',
                    perspective: '視点拡張型',
                    meaning: '意味探求型',
                    growth: '成長型',
                    general: '成長型'
                }
            };
            
            type = typeMap[diagnostic][topCategory] || '総合型';
        }
        
        const typeDetails = getTypeDetails(diagnostic, type);
        
        if (typeDetails) {
            const section = document.createElement('div');
            section.className = 'detail-section';
            section.innerHTML = `
                <h4>${diagnosticData.name} - ${type}</h4>
                <div>
                    <h5>強み</h5>
                    <ul class="detail-list">
                        ${typeDetails.strengths.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <h5>課題</h5>
                    <ul class="detail-list">
                        ${typeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                    <h5>改善方法</h5>
                    <ul class="detail-list">
                        ${typeDetails.improvements.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                    <h5>最適環境</h5>
                    <p>${typeDetails.environment}</p>
                    <h5>参考人物</h5>
                    <ul class="detail-list">
                        ${typeDetails.referencePersons.map(p => `<li><strong>${p.name}</strong>: ${p.reason}</li>`).join('')}
                    </ul>
                </div>
            `;
            detailsContainer.appendChild(section);
        }
    });
    
    // Generate BQ details
    const bqScore2 = allScores.bq;
    const bqData2 = RESULTS_DATA.bq;
    const bqRankData2 = bqData2.ranks.find(r => bqScore2 >= r.min && bqScore2 <= r.max);
    let bqType = bqRankData2.type;
    
    const bqTypeDetails = getTypeDetails('bq', bqType);
    if (bqTypeDetails) {
        const section = document.createElement('div');
        section.className = 'detail-section bq-detail';
        section.innerHTML = `
            <h4>${bqData2.name} - ${bqType}</h4>
            <div>
                <h5>強み</h5>
                <ul class="detail-list">
                    ${bqTypeDetails.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <h5>課題</h5>
                <ul class="detail-list">
                    ${bqTypeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
                <h5>改善方法</h5>
                <ul class="detail-list">
                    ${bqTypeDetails.improvements.map(i => `<li>${i}</li>`).join('')}
                </ul>
                <h5>最適環境</h5>
                <p>${bqTypeDetails.environment}</p>
                <h5>参考人物</h5>
                <ul class="detail-list">
                    ${bqTypeDetails.referencePersons.map(p => `<li><strong>${p.name}</strong>: ${p.reason}</li>`).join('')}
                </ul>
            </div>
        `;
        detailsContainer.appendChild(section);
    }
    
    showScreen('resultsScreen');
}

// Show detail view
function showDetail(diagnostic) {
    const detailScreen = document.getElementById('detailScreen');
    detailScreen.innerHTML = '';
    
    if (diagnostic === 'bq') {
        const score = allScores.bq;
        const diagnosticData = RESULTS_DATA.bq;
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        
        const type = rankData.type;
        const typeDetails = getTypeDetails('bq', type);
        
        if (typeDetails) {
            detailScreen.innerHTML = `
                <h3>${diagnosticData.name}</h3>
                <p>${diagnosticData.description}</p>
                <p><strong>スコア: ${score}</strong></p>
                <p><strong>ランク: ${rankData.rank}</strong></p>
                <p><strong>タイプ: ${type}</strong></p>
                <h4>強み</h4>
                <ul>
                    ${typeDetails.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <h4>課題</h4>
                <ul>
                    ${typeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
                <h4>改善方法</h4>
                <ul>
                    ${typeDetails.improvements.map(i => `<li>${i}</li>`).join('')}
                </ul>
                <h4>最適環境</h4>
                <p>${typeDetails.environment}</p>
                <h4>参考人物</h4>
                <ul>
                    ${typeDetails.referencePersons.map(p => `<li><strong>${p.name}</strong>: ${p.reason}</li>`).join('')}
                </ul>
            `;
        }
    } else {
        const score = allScores[diagnostic];
        const diagnosticData = RESULTS_DATA[diagnostic];
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        
        let type = rankData.type;
        if (!type) {
            const answers = allAnswers[diagnostic];
            const categoryCounts = {};
            answers.forEach(answer => {
                if (answer && answer.category !== 'bias') {
                    categoryCounts[answer.category] = (categoryCounts[answer.category] || 0) + 1;
                }
            });
            const topCategory = Object.keys(categoryCounts).length > 0 
                ? Object.keys(categoryCounts).reduce((a, b) => 
                    categoryCounts[a] > categoryCounts[b] ? a : b
                )
                : 'general';
            
            const typeMap = {
                iq: { judgment: '論理構築型', pattern: 'パターン発見型', general: '総合処理型' },
                eq: { empathy: '共感型', adjustment: '調整型', general: '調整型' },
                aq: { adaptability: '適応型', learning: '学習型', general: '適応型' },
                sq: { harmony: '雰囲気読み型', communication: 'コミュニケーション型', general: '雰囲気読み型' },
                xq: { growth: '成長型', reflection: '反省型', general: '成長型' }
            };
            
            type = typeMap[diagnostic][topCategory] || '総合型';
        }
        
        const typeDetails = getTypeDetails(diagnostic, type);
        
        if (typeDetails) {
            detailScreen.innerHTML = `
                <h3>${diagnosticData.name}</h3>
                <p>${diagnosticData.description}</p>
                <p><strong>スコア: ${score}</strong></p>
                <p><strong>ランク: ${rankData.rank}</strong></p>
                <p><strong>タイプ: ${type}</strong></p>
                <h4>強み</h4>
                <ul>
                    ${typeDetails.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <h4>課題</h4>
                <ul>
                    ${typeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
                <h4>改善方法</h4>
                <ul>
                    ${typeDetails.improvements.map(i => `<li>${i}</li>`).join('')}
                </ul>
                <h4>最適環境</h4>
                <p>${typeDetails.environment}</p>
                <h4>参考人物</h4>
                <ul>
                    ${typeDetails.referencePersons.map(p => `<li><strong>${p.name}</strong>: ${p.reason}</li>`).join('')}
                </ul>
            `;
        }
    }
    
    showScreen('detailScreen');
}

// Back to results
function backToResults() {
    showScreen('resultsScreen');
}

// Show screen
function showScreen(screenName) {
    const screens = ['startScreen', 'diagnosticScreen', 'resultsScreen', 'detailScreen'];
    screens.forEach(screen => {
        document.getElementById(screen).style.display = 'none';
    });
    document.getElementById(screenName).style.display = 'block';
}

// Download results
function downloadResults() {
    let csv = '5Q+BQ診断結果\n';
    csv += `実施日時,${new Date().toLocaleString('ja-JP')}\n`;
    csv += `\n`;
    
    // Scores section
    csv += '=== スコア ===\n';
    csv += 'メトリクス,スコア,ランク\n';
    
    diagnosticOrder.forEach(diagnostic => {
        const score = allScores[diagnostic];
        const diagnosticData = RESULTS_DATA[diagnostic];
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        csv += `${diagnostic.toUpperCase()},${score},${rankData.rank}\n`;
    });
    
    const bqScore = allScores.bq;
    const bqData = RESULTS_DATA.bq;
    const bqRankData = bqData.ranks.find(r => bqScore >= r.min && bqScore <= r.max);
    csv += `BQ,${bqScore},${bqRankData.rank}\n`;
    
    csv += `\n`;
    
    // Integrated Type
    csv += '=== 統合タイプ ===\n';
    const integratedType = getIntegratedType(allScores);
    csv += `タイプ,${integratedType}\n`;
    csv += `\n`;
    
    // Integrated Explanation
    csv += '=== 総合考察 ===\n';
    const explanation = getIntegratedExplanation(allScores);
    csv += `タイトル,${explanation.title}\n`;
    csv += `\n考察\n${explanation.explanation}\n`;
    csv += `\n課題\n${explanation.challenge}\n`;
    csv += `\n推奨\n${explanation.recommendation}\n`;
    csv += `\n強み\n${explanation.strength}\n`;
    if (explanation.bqNote) {
        csv += `\nBQ注記\n${explanation.bqNote}\n`;
    }
    csv += `\n`;
    
    // Detailed Analysis for each diagnostic
    csv += '=== 詳細分析 ===\n';
    
    diagnosticOrder.forEach(diagnostic => {
        const score = allScores[diagnostic];
        const diagnosticData = RESULTS_DATA[diagnostic];
        const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
        
        let type = rankData.type;
        if (!type) {
            const answers = allAnswers[diagnostic];
            const categoryCounts = {};
            answers.forEach(answer => {
                if (answer && answer.category !== 'bias') {
                    categoryCounts[answer.category] = (categoryCounts[answer.category] || 0) + 1;
                }
            });
            const topCategory = Object.keys(categoryCounts).length > 0 
                ? Object.keys(categoryCounts).reduce((a, b) => 
                    categoryCounts[a] > categoryCounts[b] ? a : b
                )
                : 'general';
            
            const typeMap = {
                iq: { judgment: '論理構築型', pattern: 'パターン発見型', general: '総合処理型' },
                eq: { empathy: '共感型', adjustment: '調整型', general: '調整型' },
                aq: { adaptability: '適応型', learning: '学習型', general: '適応型' },
                sq: { harmony: '雰囲気読み型', communication: 'コミュニケーション型', general: '雰囲気読み型' },
                xq: { growth: '成長型', reflection: '反省型', general: '成長型' }
            };
            
            type = typeMap[diagnostic][topCategory] || '総合型';
        }
        
        const typeDetails = getTypeDetails(diagnostic, type);
        
        csv += `\n--- ${diagnosticData.name} ---\n`;
        csv += `スコア,${score}\n`;
        csv += `ランク,${rankData.rank}\n`;
        csv += `タイプ,${type}\n`;
        csv += `\n強み\n`;
        typeDetails.strengths.forEach(s => {
            csv += `・${s}\n`;
        });
        csv += `\n課題\n`;
        typeDetails.weaknesses.forEach(w => {
            csv += `・${w}\n`;
        });
        csv += `\n改善方法\n`;
        typeDetails.improvements.forEach(i => {
            csv += `・${i}\n`;
        });
        csv += `\n最適環境\n${typeDetails.environment}\n`;
        csv += `\n参考人物\n`;
        typeDetails.referencePersons.forEach(p => {
            csv += `・${p.name}：${p.reason}\n`;
        });
    });
    
    // BQ Detailed Analysis
    csv += `\n--- ${RESULTS_DATA.bq.name} ---\n`;
    csv += `スコア,${bqScore}\n`;
    csv += `ランク,${bqRankData.rank}\n`;
    csv += `タイプ,${bqRankData.type}\n`;
    
    const bqTypeDetails = getTypeDetails('bq', bqRankData.type);
    if (bqTypeDetails) {
        csv += `\n強み\n`;
        bqTypeDetails.strengths.forEach(s => {
            csv += `・${s}\n`;
        });
        csv += `\n課題\n`;
        bqTypeDetails.weaknesses.forEach(w => {
            csv += `・${w}\n`;
        });
        csv += `\n改善方法\n`;
        bqTypeDetails.improvements.forEach(i => {
            csv += `・${i}\n`;
        });
        csv += `\n最適環境\n${bqTypeDetails.environment}\n`;
        csv += `\n参考人物\n`;
        bqTypeDetails.referencePersons.forEach(p => {
            csv += `・${p.name}：${p.reason}\n`;
        });
    }
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `5Q_BQ_diagnosis_${new Date().getTime()}.csv`;
    link.click();
}

// Retake diagnostic
function retakeDiagnostic() {
    // Reset all scores and answers
    allAnswers = {
        iq: [],
        eq: [],
        aq: [],
        sq: [],
        xq: []
    };
    allScores = {
        iq: 0,
        eq: 0,
        aq: 0,
        sq: 0,
        xq: 0,
        bq: 0
    };
    
    // Return to start screen
    showScreen('startScreen');
}

// Show intelligence detail modal
function showIntelligenceDetail(intelligence) {
    const modal = document.getElementById('intelligenceModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    
    const intelligenceData = {
        iq: {
            title: 'IQ（思考知能）',
            description: '論理的思考、パターン認識、言語分析、推論能力。複雑な問題を分析し、本質を見抜く力です。'
        },
        eq: {
            title: 'EQ（感情知能）',
            description: '自己認識、自己制御、共感、調整、関係構築。人の気持ちを理解し、信頼関係を築く力です。'
        },
        aq: {
            title: 'AQ（逆境知能）',
            description: '変化への適応、学習能力、回復力、革新性。困難に耐え、変化に対応する力です。'
        },
        sq: {
            title: 'SQ（社会知能）',
            description: '組織理解、人間関係、協調性、社会的認識。組織や社会の構造を理解し、適応する力です。'
        },
        xq: {
            title: 'XQ（経験知能）',
            description: '学習能力、知恵の統合、人生の意味、成長志向。経験から学び、継続的に成長する力です。'
        },
        bq: {
            title: 'BQ（認知バイアス耐性）',
            description: '認知バイアスの影響を受けにくさ、思考の客観性、判断の信頼性。思い込みや先入観に左右されない力です。'
        }
    };
    
    const data = intelligenceData[intelligence];
    if (data) {
        title.textContent = data.title;
        description.textContent = data.description;
        modal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('intelligenceModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('intelligenceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
