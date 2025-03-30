// results.js - Complete Career Results Implementation

// Career matching configuration (20 careers)
const careerMatcher = {
    /* ===== TECHNICAL CAREERS ===== */
    "AI/ML Engineer": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:1, a:"Artificial Intelligence / Machine Learning"}, 
            {q:4, a:"I like solving complex problems and coding"},
            {q:9, a:"Very comfortable (advanced skills)"}
        ],
        description: "Develop intelligent systems,algorithms"
    },

    "Data Scientist": {
        matches: [
            {q:1, a:"Data Analytics / Business Intelligence"},
            {q:12, a:"Yes, I love working with data"},
            {q:4, a:"I enjoy analyzing data and making decisions"}
        ],
        description: "Extract insights from complex datasets"
    },

    "Software Developer": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:4, a:"I like solving complex problems and coding"},
            {q:9, a:"Very comfortable (advanced skills)"}
        ],
        description: "Build applications and systems"
    },

    "DevOps Engineer": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:4, a:"I like solving complex problems and coding"},
            {q:9, a:"Somewhat comfortable (basic knowledge)"}
        ],
        description: "Bridge development and operations"
    },

    "Cybersecurity Specialist": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:6, a:"Research & Development"},
            {q:16, a:"Logical and analytical thinking"}
        ],
        description: "Protect systems from digital attacks"
    },

    /* ===== FINANCIAL CAREERS ===== */
    "Financial Analyst": {
        matches: [
            {q:0, a:"Finance"},
            {q:6, a:"Financial Analysis & Investing"},
            {q:12, a:"Somewhat, I can handle analytics"}
        ],
        description: "Analyze financial data and trends"
    },

    "Investment Banker": {
        matches: [
            {q:0, a:"Finance"},
            {q:13, a:"Yes, I want to be a leader"},
            {q:18, a:"Financial growth and high earnings"}
        ],
        description: "Advise on high-value financial transactions"
    },

    "Risk Manager": {
        matches: [
            {q:0, a:"Finance"},
            {q:6, a:"Financial Analysis & Investing"},
            {q:16, a:"Data-driven decision-making"}
        ],
        description: "Identify and mitigate financial risks"
    },

    /* ===== BUSINESS CAREERS ===== */
    "Product Manager": {
        matches: [
            {q:1, a:"Management / Leadership"},
            {q:4, a:"I like interacting with people and selling ideas"},
            {q:13, a:"Yes, I want to be a leader"}
        ],
        description: "Guide products from conception to launch"
    },

    "Marketing Strategist": {
        matches: [
            {q:0, a:"Marketing"},
            {q:4, a:"I like interacting with people and selling ideas"},
            {q:18, a:"Creativity and brand-building"}
        ],
        description: "Develop marketing campaigns and strategies"
    },

    /* ===== CREATIVE/OTHER CAREERS ===== */
    "UX/UI Designer": {
        matches: [
            {q:4, a:"I like interacting with people and selling ideas"},
            {q:12, a:"No, I prefer creative work"},
            {q:18, a:"Creativity and brand-building"}
        ],
        description: "Design user-friendly digital experiences"
    },

    "Data Visualization Specialist": {
        matches: [
            {q:1, a:"Data Analytics / Business Intelligence"},
            {q:12, a:"Yes, I love working with data"},
            {q:18, a:"Creativity and brand-building"}
        ],
        description: "Transform data into compelling visual stories"
    },

    "Technical Writer": {
        matches: [
            {q:4, a:"I like interacting with people and selling ideas"},
            {q:9, a:"Somewhat comfortable (basic knowledge)"},
            {q:12, a:"No, I prefer creative work"}
        ],
        description: "Create clear technical documentation"
    },

    "Academic Professor": {
        matches: [
            {q:3, a:"Technical Certifications (AWS, Google, CFA, etc.)"},
            {q:6, a:"Research & Development"},
            {q:14, a:"No, I prefer working in my home country"}
        ],
        description: "Teach and conduct academic research"
    },

    "Research Scientist": {
        matches: [
            {q:1, a:"Artificial Intelligence / Machine Learning"},
            {q:6, a:"Research & Development"},
            {q:11, a:"Technical (Software, Data Science, AI, etc.)"}
        ],
        description: "Advance knowledge through scientific research"
    },

    "Cloud Architect": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:3, a:"Technical Certifications (AWS, Google, CFA, etc.)"},
            {q:9, a:"Very comfortable (advanced skills)"}
        ],
        description: "Design and implement cloud solutions"
    },

    "Blockchain Developer": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:4, a:"I like solving complex problems and coding"},
            {q:6, a:"Research & Development"}
        ],
        description: "Build decentralized applications"
    },

    "Game Developer": {
        matches: [
            {q:0, a:"Computer Science"},
            {q:4, a:"I like solving complex problems and coding"},
            {q:18, a:"Creativity and brand-building"}
        ],
        description: "Create interactive gaming experiences"
    },

    "Quantitative Analyst": {
        matches: [
            {q:0, a:"Finance"},
            {q:1, a:"Data Analytics / Business Intelligence"},
            {q:9, a:"Very comfortable (advanced skills)"}
        ],
        description: "Develop complex financial models"
    },

    "Management Consultant": {
        matches: [
            {q:1, a:"Management / Leadership"},
            {q:13, a:"Yes, I want to be a leader"},
            {q:17, a:"Teamwork excites me"}
        ],
        description: "Help organizations improve performance"
    }
};

// Get top 3 career matches
function recommendCareers(answers) {
    const scoredCareers = Object.entries(careerMatcher).map(([career, data]) => {
        const score = data.matches.reduce((total, {q, a}) => 
            answers[q] === a ? total + 1 : total, 0);
        return { 
            career, 
            score, 
            description: data.description,
            matchPercentage: Math.round((score / data.matches.length) * 100)
        };
    });

    return scoredCareers
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Display results when page loads
document.addEventListener('DOMContentLoaded', function() {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    const topCareers = recommendCareers(userAnswers);

    const resultsContainer = document.getElementById("career-results");
    resultsContainer.innerHTML = `
        <h2>Your Top Career Matches</h2>
        <div class="career-grid">
            ${topCareers.map(career => `
                <div class="career-card" onclick="viewRoadmap('${career.career.replace(/'/g, "\\'")}')">
                    <h3>${career.career}</h3>
                    <p>${career.description}</p>
                    <div class="match-score">
                        <div class="score-bar" style="width: ${career.matchPercentage}%"></div>
                        <span>${career.matchPercentage}% Match</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listener for roadmap button
    document.getElementById("view-roadmap").addEventListener("click", function() {
        if (topCareers.length > 0) {
            localStorage.setItem("selectedCareer", topCareers[0].career);
            window.location.href = "roadmap.html";
        }
    });
});

// View roadmap for specific career
function viewRoadmap(career) {
    localStorage.setItem("selectedCareer", career);
    window.location.href = "roadmap.html";
}