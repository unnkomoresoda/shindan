// Main Application Logic

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
    xq: 0
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
    document.getElementById('diagnosticTitle').textContent = '5Q診断';
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
    
    // Update buttons
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
        const score = calculateScore(allAnswers[diagnostic]);
        allScores[diagnostic] = score;
    });
    
    // Show results
    showResults();
}

// Show results
function showResults() {
    // Calculate category scores for type determination
    const categoryScores = {};
    
    // Generate score cards
    const scoresContainer = document.getElementById('scoresContainer');
    scoresContainer.innerHTML = '';
    
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
    
    // Calculate integrated type
    const integratedType = getIntegratedType(allScores);
    document.getElementById('integratedType').textContent = integratedType;
    
    // Generate details
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = '';
    
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
                categoryCounts[answer.category] = (categoryCounts[answer.category] || 0) + 1;
            });
            const topCategory = Object.keys(categoryCounts).reduce((a, b) => 
                categoryCounts[a] > categoryCounts[b] ? a : b
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
            
            type = typeMap[diagnostic][topCategory];
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
                </div>
                <div>
                    <h5>改善点</h5>
                    <ul class="detail-list">
                        ${typeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
                <div class="reference-persons">
                    <h5>参考人物</h5>
                    ${typeDetails.referencePersons.map(p => `
                        <div class="person-item">
                            <span class="person-name">${p.name}</span>：${p.reason}
                        </div>
                    `).join('')}
                </div>
            `;
            detailsContainer.appendChild(section);
        }
    });
    
    showScreen('resultsScreen');
}

// Show detail screen
function showDetail(diagnostic) {
    const score = allScores[diagnostic];
    const diagnosticData = RESULTS_DATA[diagnostic];
    const rankData = diagnosticData.ranks.find(r => score >= r.min && score <= r.max);
    
    let type = rankData.type;
    if (!type) {
        const answers = allAnswers[diagnostic];
        const categoryCounts = {};
        answers.forEach(answer => {
            categoryCounts[answer.category] = (categoryCounts[answer.category] || 0) + 1;
        });
        const topCategory = Object.keys(categoryCounts).reduce((a, b) => 
            categoryCounts[a] > categoryCounts[b] ? a : b
        );
        
        const typeMap = {
            iq: { logic: '論理構築型', pattern: 'パターン発見型', verbal: '言語分析型', inference: '推論型', processing: '総合処理型' },
            eq: { selfAwareness: '自己認識型', selfControl: '自己制御型', empathy: '共感型', adjustment: '調整型', relationship: '関係構築型' },
            aq: { recovery: '修復型', persistence: '粘り強さ型', analysis: '分析型', adaptation: '適応型', ownership: '責任感型' },
            sq: { atmosphere: '雰囲気読み型', power: '影響力型', role: '役割認識型', structure: '構造理解型', influence: '影響力行使型' },
            xq: { learning: '学習型', abstraction: '抽象化型', transfer: '転移型', reproducibility: '再現性型', growth: '成長型' }
        };
        
        type = typeMap[diagnostic][topCategory];
    }
    
    const typeDetails = getTypeDetails(diagnostic, type);
    
    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML = `
        <div class="detail-header">
            <h2>${diagnosticData.name}</h2>
            <p>${diagnosticData.description}</p>
            <div class="score">スコア: ${score}/100</div>
            <div class="score-rank">ランク: ${rankData.rank}</div>
            <div class="score-type">タイプ: ${type}</div>
        </div>
        
        <div class="detail-section">
            <h4>あなたのタイプ：${type}</h4>
            <p>${typeDetails.description || ''}</p>
        </div>
        
        <div class="detail-section">
            <h4>強み</h4>
            <ul class="detail-list">
                ${typeDetails.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h4>改善点</h4>
            <ul class="detail-list">
                ${typeDetails.weaknesses.map(w => `<li>${w}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h4>改善方法</h4>
            <ul class="detail-list">
                ${typeDetails.improvements.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h4>適した環境</h4>
            <p>${typeDetails.environment}</p>
        </div>
        
        <div class="detail-section">
            <h4>参考人物</h4>
            <div class="reference-persons">
                ${typeDetails.referencePersons.map(p => `
                    <div class="person-item">
                        <span class="person-name">${p.name}</span><br>
                        ${p.reason}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    showScreen('detailScreen');
}

// Back to results
function backToResults() {
    showScreen('resultsScreen');
}

// Show/hide screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Download results
function downloadResults() {
    let csv = '5Q診断結果\n\n';
    csv += 'IQ（思考知能）,' + allScores.iq + '\n';
    csv += 'EQ（感情知能）,' + allScores.eq + '\n';
    csv += 'AQ（逆境知能）,' + allScores.aq + '\n';
    csv += 'SQ（社会知能）,' + allScores.sq + '\n';
    csv += 'XQ（経験知能）,' + allScores.xq + '\n';
    
    const link = document.createElement('a');
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    link.download = '5Q診断結果.csv';
    link.click();
}

// Retake diagnostic
function retakeDiagnostic() {
    currentDiagnostic = null;
    currentQuestionIndex = 0;
    allAnswers = { iq: [], eq: [], aq: [], sq: [], xq: [] };
    allScores = { iq: 0, eq: 0, aq: 0, sq: 0, xq: 0 };
    
    showScreen('startScreen');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showScreen('startScreen');
});
