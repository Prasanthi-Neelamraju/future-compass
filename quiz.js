const questions = [
    // Master's Background Questions (Education & Interests)
    { question: "What is your master's degree field?", options: ["Computer Science", "Finance", "Marketing", "None"] },
    { question: "Did you specialize in any particular area during your master's?", options: ["Artificial Intelligence / Machine Learning", "Data Analytics / Business Intelligence", "Management / Leadership", "None"] },
    { question: "Did you complete any projects or thesis during your master's?", options: ["Yes, research-based", "Yes, industry-focused", "No, coursework-based", "None"] },
    { question: "Did you do any certifications along with your master's?", options: ["Technical Certifications (AWS, Google, CFA, etc.)", "Management Certifications (PMP, Six Sigma, etc.)", "Marketing Certifications (Google Ads, SEO, etc.)", "None"] },
    { question: "How do you prefer working?", options: ["I like solving complex problems and coding", "I enjoy analyzing data and making decisions", "I like interacting with people and selling ideas", "None"] },
    
    // Work Experience & Skills
    { question: "Did you work before or during your master's?", options: ["Yes, in a technical role", "Yes, in a managerial role", "Yes, in a customer-facing role", "No work experience"] },
    { question: "Which type of work excites you the most?", options: ["Research & Development", "Financial Analysis & Investing", "Business Strategy & Growth", "None"] },
    { question: "Have you participated in any internships?", options: ["Yes, tech-based internship", "Yes, finance/business internship", "Yes, marketing/sales internship", "No internship experience"] },
    { question: "What kind of environment do you prefer working in?", options: ["Corporate MNCs", "Startups", "Academia & Research", "None"] },
    { question: "What is your level of comfort with coding/programming?", options: ["Very comfortable (advanced skills)", "Somewhat comfortable (basic knowledge)", "Not comfortable (prefer non-technical roles)", "None"] },
    
    // Future Preferences
    { question: "Would you prefer to continue in your master's field?", options: ["Yes, I want to stay in this field", "No, I am open to switching careers", "Not sure yet", "None"] },
    { question: "What type of career do you see yourself in?", options: ["Technical (Software, Data Science, AI, etc.)", "Financial (Banking, Investments, Risk Analysis)", "Business/Marketing (Sales, Product Management)", "None"] },
    { question: "Do you enjoy working with numbers and statistics?", options: ["Yes, I love working with data", "Somewhat, I can handle analytics", "No, I prefer creative work", "None"] },
    { question: "Are you interested in leadership/managerial roles?", options: ["Yes, I want to be a leader", "Maybe in the future", "No, I prefer individual roles", "None"] },
    { question: "Do you want to work abroad?", options: ["Yes, I am actively looking for international opportunities", "Maybe, if the opportunity arises", "No, I prefer working in my home country", "None"] },
    
    // Personal Skills & Interests
    { question: "What is your approach to problem-solving?", options: ["Logical and analytical thinking", "Data-driven decision-making", "Creative and strategic thinking", "None"] },
    { question: "Do you like working in a team or independently?", options: ["Teamwork excites me", "I prefer working alone", "I am flexible with both", "None"] },
    { question: "Which industry are you most curious about?", options: ["IT & Software Development", "Finance & Investments", "Marketing & Business Strategy", "None"] },
    { question: "What motivates you the most in a job?", options: ["Technical challenges and problem-solving", "Financial growth and high earnings", "Creativity and brand-building", "None"] },
    { question: "Where do you see yourself in 5 years?", options: ["In a senior technical role", "Managing a business or startup", "Working in finance or investment sector", "None"] }
];

const questionContainer = document.getElementById("question-container");

// Generate Questions
questions.forEach((q, index) => {
    let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
        questionHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
    });
    questionContainer.innerHTML += questionHTML + "<br>";
});

// Handle Form Submission
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedAnswers = [];
    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        selectedAnswers.push(selected ? selected.value : "None");
    });

    localStorage.setItem("userAnswers", JSON.stringify(selectedAnswers));
    window.location.href = "results.html";
}); 