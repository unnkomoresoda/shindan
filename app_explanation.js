
// Add this after line 299 in showResults function:
    // Display integrated explanation
    const explanationContainer = document.getElementById('explanationContainer');
    if (explanationContainer && explanation) {
        explanationContainer.innerHTML = `
            <div class="explanation-section">
                <h3>${explanation.title}</h3>
                <div class="explanation-content">
                    <p class="explanation-text">${explanation.explanation}</p>
                    <p class="explanation-challenge">${explanation.challenge}</p>
                    <p class="explanation-recommendation">${explanation.recommendation}</p>
                </div>
                <div class="explanation-summary">
                    <div class="summary-item">
                        <h4>強み</h4>
                        <p>${explanation.strength}</p>
                    </div>
                    <div class="summary-item">
                        <h4>ボトルネック</h4>
                        <p>${explanation.bottleneck}</p>
                    </div>
                    <div class="summary-item">
                        <h4>成長提案</h4>
                        <p>${explanation.growthFocus}</p>
                    </div>
                </div>
            </div>
        `;
    }
