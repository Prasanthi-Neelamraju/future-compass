// roadmap.js - Complete with 20 Career Roadmaps

const careerRoadmaps = {
    /* ===== TECHNICAL CAREERS ===== */
    "AI/ML Engineer": `
        graph LR;
         %% Vertical Layout (LR = Left to Right)
            A[Foundation] --> A1[Python Programming]
            A --> A2[Linear Algebra]
            A --> A3[Probability/Statistics]
            
            B[Core ML] --> B1[Supervised Learning]
            B --> B2[Unsupervised Learning]
            B --> B3[Neural Networks]
            
            C[Deep Learning] --> C1[CNNs/RNNs]
            C --> C2[Transformer Architectures]
            C --> C3[GANs]
            
            D[Tools] --> D1[TensorFlow/PyTorch]
            D --> D2[Scikit-learn]
            D --> D3[HuggingFace]
            
            E[Deployment] --> E1[Flask/FastAPI]
            E --> E2[ONNX Runtime]
            E --> E3[Cloud AI Services]
    `,

    "Data Scientist": `
        graph LR;
            A[Core Skills] --> A1[Python/R]
            A --> A2[SQL]
            A --> A3[Statistics]
            
            B[Data Wrangling] --> B1[Pandas/NumPy]
            B --> B2[Data Cleaning]
            B --> B3[Feature Engineering]
            
            C[Analysis] --> C1[EDA]
            C --> C2[Hypothesis Testing]
            C --> C3[Predictive Modeling]
            
            D[Visualization] --> D1[Matplotlib/Seaborn]
            D --> D2[Tableau/PowerBI]
            D --> D3[Plotly/Dash]
            
            E[Big Data] --> E1[Spark]
            E --> E2[Hadoop]
            E --> E3[NoSQL Databases]
    `,

    "Software Developer": `
        graph LR;
            A[Core Skills] --> A1[Data Structures]
            A --> A2[Algorithms]
            A --> A3[System Design]
            
            B[Languages] --> B1[JavaScript/TypeScript]
            B --> B2[Python/Java]
            B --> B3[Go/Rust]
            
            C[Web Development] --> C1[React/Angular]
            C --> C2[Node.js/Django]
            C --> C3[REST/GraphQL]
            
            D[DevOps] --> D1[Docker/Kubernetes]
            D --> D2[CI/CD Pipelines]
            D --> D3[Cloud Platforms]
            
            E[Specializations] --> E1[Frontend]
            E --> E2[Backend]
            E --> E3[Full Stack]
    `,
"DevOps Engineer": `
    graph LR;
    A[Core Skills] --> B[Version Control]
    A --C[CI/CD]
    A --> D[Infrastructure as Code]
    A --> E[Monitoring]

    B --> B1[Git]
    B --> B2[GitHub/GitLab]
    B --> B3[Branching Strategies]

    C --> C1[Jenkins]
    C --> C2[GitHub Actions]
    C --> C3[ArgoCD]

    D --> D1[Terraform]
    D --> D2[Ansible]
    D --> D3[Pulumi]

    E --> E1[Docker]
    E --> E2[Kubernetes]
    E --> E3[Service Meshes]
    
    F[Cloud] --> F1[AWS]
    F --> F2[Azure]
    F --> F3[GCP]
    
    G[DevSecOps] --> G1[Vulnerability Scanning]
    G --> G2[Secrets Management]
    G --> G3[Compliance]
    `,

    "Cybersecurity Specialist": `
        graph LR;
            A[Core Skills] --> A1[Networking]
            A --> A2[Operating Systems]
            A --> A3[Cryptography]
            
            B[Threats] --> B1[Malware Analysis]
            B --> B2[Penetration Testing]
            B --> B3[Social Engineering]
            
            C[Tools] --> C1[Wireshark]
            C --> C2[Metasploit]
            C --> C3[Nmap]
            
            D[Defense] --> D1[Firewalls]
            D --> D2[SIEM]
            D --> D3[IDPS]
            
            E[Certifications] --> E1[CEH]
            E --> E2[CISSP]
            E --> E3[OSCP]
    `,

    /* ===== FINANCIAL CAREERS ===== */
    "Financial Analyst": `
        graph LR;
            A[Core Skills] --> A1[Accounting]
            A --> A2[Corporate Finance]
            A --> A3[Excel]
            
            B[Analysis] --> B1[Ratio Analysis]
            B --> B2[DCF Valuation]
            B --> B3[M&A Evaluation]
            
            C[Tools] --> C1[Bloomberg Terminal]
            C --> C2[Capital IQ]
            C --> C3[Python/R]
            
            D[Reporting] --> D1[Financial Statements]
            D --> D2[Investor Presentations]
            D --> D3[Regulatory Filings]
            
            E[Specializations] --> E1[Equity Research]
            E --> E2[Credit Analysis]
            E --> E3[FP&A]
    `,

    "Investment Banker": `
        graph LR;
            A[Core Skills] --> A1[Financial Modeling]
            A --> A2[Valuation]
            A --> A3[LBO Modeling]
            
            B[Deal Execution] --> B1[Pitch Books]
            B --> B2[Due Diligence]
            B --> B3[Regulatory Compliance]
            
            C[Products] --> C1[M&A]
            C --> C2[IPOs]
            C --> C3[Debt Issuance]
            
            D[Career Path] --> D1[Analyst → Associate]
            D --> D2[VP → Director]
            D --> D3[Managing Director]
            
            E[Specializations] --> E1[Industry Coverage]
            E --> E2[Product Groups]
            E --> E3[Regional Focus]
    `,

    "Risk Manager": `
        graph LR;
            A[Core Skills] --> A1[Risk Identification]
            A --> A2[Quantitative Analysis]
            A --> A3[Regulatory Knowledge]
            
            B[Risk Types] --> B1[Market Risk]
            B --> B2[Credit Risk]
            B --> B3[Operational Risk]
            
            C[Tools] --> C1[Value at Risk]
            C --> C2[Stress Testing]
            C --> C3[Scenario Analysis]
            
            D[Framework] --> D1[Basel Accords]
            D --> D2[COSO]
            D --> D3[ISO 31000]
            
            E[Certifications] --> E1[FRM]
            E --> E2[PRM]
            E --> E3[CRM]
    `,

    "Quantitative Analyst": `
        graph LR;
            A[Core Skills] --> A1[Advanced Mathematics]
            A --> A2[Probability Theory]
            A --> A3[Statistical Modeling]
            
            B[Programming] --> B1[Python]
            B --> B2[C++]
            B --> B3[SQL]
            
            C[Financial Knowledge] --> C1[Derivatives Pricing]
            C --> C2[Algorithmic Trading]
            C --> C3[Risk Models]
            
            D[Tools] --> D1[Pandas/NumPy]
            D --> D2[QuantLib]
            D --> D3[MATLAB]
            
            E[Specializations] --> E1[Front Office]
            E --> E2[Risk Management]
            E --> E3[Asset Management]
    `,

    /* ===== BUSINESS CAREERS ===== */
    "Product Manager": `
        graph LR;
            A[Core Skills] --> A1[Market Research]
            A --> A2[User Personas]
            A --> A3[Agile Methodologies]
            
            B[Execution] --> B1[PRDs]
            B --> B2[Roadmapping]
            B --> B3[Prioritization]
            
            C[Analytics] --> C1[OKRs/KPIs]
            C --> C2[A/B Testing]
            C --> C3[Funnel Analysis]
            
            D[Leadership] --> D1[Stakeholder Management]
            D --> D2[Team Collaboration]
            D --> D3[Executive Communication]
            
            E[Specializations] --> E1[B2B SaaS]
            E --> E2[Consumer Tech]
            E --> E3[Hardware Products]
    `,

    "Marketing Strategist": `
        graph LR;
            A[Core Skills] --> A1[Consumer Behavior]
            A --> A2[Brand Management]
            A --> A3[Market Research]
            
            B[Channels] --> B1[Digital Marketing]
            B --> B2[SEO/SEM]
            B --> B3[Social Media]
            
            C[Analytics] --> C1[Google Analytics]
            C --> C2[Customer Segmentation]
            C --> C3[ROI Analysis]
            
            D[Strategy] --> D1[Positioning]
            D --> D2[Messaging]
            D --> D3[Go-to-Market]
            
            E[Trends] --> E1[Content Marketing]
            E --> E2[Influencer Marketing]
            E --> E3[Marketing Automation]
    `,

    "Management Consultant": `
        graph LR;
            A[Core Skills] --> A1[Problem Solving]
            A --> A2[Business Acumen]
            A --> A3[Communication]
            
            B[Frameworks] --> B1[SWOT]
            B --> B2[Porter's 5 Forces]
            B --> B3[BCG Matrix]
            
            C[Process] --> C1[Discovery]
            C --> C2[Analysis]
            C --> C3[Recommendation]
            
            D[Specializations] --> D1[Strategy]
            D --> D2[Operations]
            D --> D3[Technology]
            
            E[Career Path] --> E1[Associate → Manager]
            E --> E2[Senior Manager → Director]
            E --> E3[Partner]
    `,

    /* ===== CREATIVE/TECH CAREERS ===== */
    "UX/UI Designer": `
        graph LR;
            A[Core Skills] --> A1[User Research]
            A --> A2[Wireframing]
            A --> A3[Prototyping]
            
            B[Design] --> B1[Color Theory]
            B --> B2[Typography]
            B --> B3[Information Architecture]
            
            C[Tools] --> C1[Figma/Sketch]
            C --> C2[Adobe XD]
            C --> C3[InVision]
            
            D[Development] --> D1[HTML/CSS Basics]
            D --> D2[Design Systems]
            D --> D3[Accessibility]
            
            E[Specializations] --> E1[Mobile Design]
            E --> E2[Web Design]
            E --> E3[VR/AR Interfaces]
    `,

    "Data Visualization Specialist": `
        graph LR;
            A[Core Skills] --> A1[Data Literacy]
            A --> A2[Visual Design]
            A --> A3[Storytelling]
            
            B[Tools] --> B1[Tableau]
            B --> B2[Power BI]
            B --> B3[D3.js]
            
            C[Techniques] --> C1[Chart Selection]
            C --> C2[Color Encoding]
            C --> C3[Interactive Design]
            
            D[Data] --> D1[Data Wrangling]
            D --> D2[Statistical Concepts]
            D --> D3[Big Data]
            
            E[Applications] --> E1[Business Reporting]
            E --> E2[Scientific Visualization]
            E --> E3[Journalism]
    `,

    "Technical Writer": `
        graph LR;
            A[Core Skills] --> A1[Technical Knowledge]
            A --> A2[Writing Proficiency]
            A --> A3[Research]
            
            B[Documentation] --> B1[API Docs]
            B --> B2[User Manuals]
            B --> B3[Release Notes]
            
            C[Tools] --> C1[Markdown]
            C --> C2[Git]
            C --> C3[XML/DITA]
            
            D[Process] --> D1[Information Gathering]
            D --> D2[Audience Analysis]
            D --> D3[Version Control]
            
            E[Specializations] --> E1[Software]
            E --> E2[Hardware]
            E --> E3[Medical/Technical]
    `,

    "Academic Professor": `
        graph LR;
            A[Core Skills] --> A1[Subject Expertise]
            A --> A2[Research Methodology]
            A --> A3[Teaching Ability]
            
            B[Research] --> B1[Literature Review]
            B --> B2[Experimentation]
            B --> B3[Publication]
            
            C[Teaching] --> C1[Course Design]
            C --> C2[Lecture Delivery]
            C --> C3[Student Assessment]
            
            D[Service] --> D1[Committee Work]
            D --> D2[Academic Advising]
            D --> D3[Community Engagement]
            
            E[Career Path] --> E1[Assistant Professor]
            E --> E2[Associate Professor]
            E --> E3[Full Professor]
    `,

    "Research Scientist": `
        graph LR;
            A[Core Skills] --> A1[Scientific Method]
            A --> A2[Experimental Design]
            A --> A3[Data Analysis]
            
            B[Research] --> B1[Hypothesis Formation]
            B --> B2[Literature Review]
            B --> B3[Peer Review]
            
            C[Publication] --> C1[Paper Writing]
            C --> C2[Conference Presentations]
            C --> C3[Grant Proposals]
            
            D[Tools] --> D1[Lab Equipment]
            D --> D2[Statistical Software]
            D --> D3[Simulation Tools]
            
            E[Specializations] --> E1[Basic Research]
            E --> E2[Applied Research]
            E --> E3[Clinical Research]
    `,

    "Cloud Architect": `
        graph LR;
            A[Core Skills] --> A1[Cloud Concepts]
            A --> A2[Networking]
            A --> A3[Security]
            
            B[Platforms] --> B1[AWS]
            B --> B2[Azure]
            B --> B3[GCP]
            
            C[Design] --> C1[Scalability]
            C --> C2[High Availability]
            C --> C3[Disaster Recovery]
            
            D[Automation] --> D1[Terraform]
            D --> D2[Ansible]
            D --> D3[CloudFormation]
            
            E[Certifications] --> E1[Solutions Architect]
            E --> E2[DevOps Engineer]
            E --> E3[Security Specialty]
    `,

    "Blockchain Developer": `
        graph LR;
            A[Core Skills] --> A1[Cryptography]
            A --> A2[Distributed Systems]
            A --> A3[Smart Contracts]
            
            B[Platforms] --> B1[Ethereum]
            B --> B2[Hyperledger]
            B --> B3[Solana]
            
            C[Development] --> C1[Solidity]
            C --> C2[Web3.js]
            C --> C3[Truffle]
            
            D[Concepts] --> D1[Consensus Algorithms]
            D --> D2[Tokenomics]
            D --> D3[DeFi]
            
            E[Applications] --> E1[DApps]
            E --> E2[NFTs]
            E --> E3[DAOs]
    `,

    "Game Developer": `
        graph LR;
            A[Core Skills] --> A1[Game Design]
            A --> A2[Programming]
            A --> A3[Mathematics]
            
            B[Engines] --> B1[Unity]
            B --> B2[Unreal]
            B --> B3[Godot]
            
            C[Development] --> C1[Physics]
            C --> C2[AI]
            C --> C3[Networking]
            
            D[Art] --> D1[3D Modeling]
            D --> D2[Animation]
            D --> D3[Shaders]
            
            E[Specializations] --> E1[AAA Games]
            E --> E2[Mobile Games]
            E --> E3[VR/AR Games]
    `
};
// roadmap.js - Fixed with error handling

function loadRoadmap() {
    const container = document.getElementById("roadmap-container");
    const career = localStorage.getItem("selectedCareer");

    // Debug output
    console.log("Attempting to load roadmap for:", career);
    console.log("Available roadmaps:", Object.keys(careerRoadmaps));

    if (!career || !careerRoadmaps[career]) {
        container.innerHTML = `
            <div class="error">
                <h2>Roadmap Not Available</h2>
                <p>We couldn't find the requested career path.</p>
                <a href="results.html">← Back to Results</a>
                <p>Technical details: ${career ? `"${career}" not found` : "No career selected"}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h2>${career} Roadmap</h2>
        <div class="mermaid">${careerRoadmaps[career]}</div>
        <button onclick="window.history.back()">← Back</button>
    `;

    // Reinitialize Mermaid if available
    if (typeof mermaid !== 'undefined') {
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    } else {
        console.error("Mermaid.js not loaded!");
    }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", loadRoadmap);