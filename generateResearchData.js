import fs from 'fs';

// Complete research data with all 50 tech fields
const researchData = {
  techFields: [
    {
      "id": "artificial-intelligence",
      "title": "Artificial Intelligence (AI)",
      "subtitle": "Building Trustworthy AI Systems",
      "description": "Developing robust frameworks for AI safety, alignment, and interpretability. Our research focuses on creating AI systems that are safe, reliable, and aligned with human values.",
      "impact": "15+ AI Projects",
      "domains": ["AI Safety", "Alignment", "Interpretability"],
      "icon": "🤖",
      "color": "#3b82f6",
      "tech": ["Artificial Intelligence (AI)"],
      "area": ["Healthcare & Public Health", "Crisis Management", "Social Services", "Logistics", "Accessibility", "Governance", "Language Technology", "Cybersecurity", "Aid Distribution", "Energy Efficiency"],
      "topic": ["Computer Vision", "NLP", "Big Data Engineering", "XR", "Wearable Tech", "Swarm Intelligence", "Autonomous Systems", "Data Science", "Ethical Computing", "Geospatial Computing", "Deep Learning", "Digital Twin Tech", "Blockchain", "Affective Computing", "ML", "Reinforcement Learning", "Edge AI", "Accessibility Tech", "Cybersecurity", "Cognitive Computing", "Ethics", "WSN", "Smart Contracts", "Green Computing", "Big Data"],
      "topics": [
        {
          "title": "AI for Early Detection of Epidemics",
          "description": "Leveraging AI to detect and predict epidemic outbreaks using multiple data sources.",
          "technologies": ["Computer Vision", "NLP", "Big Data Engineering"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Healthcare & Public Health",
          "tech": ["Computer Vision", "NLP", "Big Data Engineering"],
          "area": ["Healthcare & Public Health"],
          "topic": ["Computer Vision", "NLP", "Big Data Engineering"]
        },
        {
          "title": "AI-Powered Crisis Response Systems",
          "description": "Intelligent systems for coordinating emergency responses during humanitarian crises.",
          "technologies": ["XR", "Wearable Tech", "Swarm Intelligence"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Crisis Management",
          "tech": ["XR", "Wearable Tech", "Swarm Intelligence"],
          "area": ["Crisis Management"],
          "topic": ["XR", "Wearable Tech", "Swarm Intelligence"]
        },
        {
          "title": "Human-Centered AI for Refugee Resettlement",
          "description": "AI systems designed to support refugee resettlement processes with human dignity.",
          "technologies": ["Autonomous Systems", "Data Science", "Ethical Computing"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Social Services",
          "tech": ["Autonomous Systems", "Data Science", "Ethical Computing"],
          "area": ["Social Services"],
          "topic": ["Autonomous Systems", "Data Science", "Ethical Computing"]
        },
        {
          "title": "AI to Optimize Disaster Relief Logistics",
          "description": "Optimizing supply chains and logistics for efficient disaster relief operations.",
          "technologies": ["Geospatial Computing", "Deep Learning", "Digital Twin Tech"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Logistics",
          "tech": ["Geospatial Computing", "Deep Learning", "Digital Twin Tech"],
          "area": ["Logistics"],
          "topic": ["Geospatial Computing", "Deep Learning", "Digital Twin Tech"]
        },
        {
          "title": "Adaptive AI Tools for Individuals with Disabilities",
          "description": "AI-powered tools that adapt to individual needs for enhanced accessibility.",
          "technologies": ["Accessibility Tech", "Blockchain", "Affective Computing"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Accessibility",
          "tech": ["Accessibility Tech", "Blockchain", "Affective Computing"],
          "area": ["Accessibility"],
          "topic": ["Accessibility Tech", "Blockchain", "Affective Computing"]
        },
        {
          "title": "Responsible AI Governance for NGOs",
          "description": "Framework for implementing responsible AI practices in humanitarian organizations.",
          "technologies": ["ML", "Reinforcement Learning", "Autonomous Systems"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Governance",
          "tech": ["ML", "Reinforcement Learning", "Autonomous Systems"],
          "area": ["Governance"],
          "topic": ["ML", "Reinforcement Learning", "Autonomous Systems"]
        },
        {
          "title": "Local Language Processing for Underrepresented Communities",
          "description": "AI systems that work with local languages and dialects for better community engagement.",
          "technologies": ["Edge AI", "Ethical Computing", "Accessibility Tech"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Language Technology",
          "tech": ["Edge AI", "Ethical Computing", "Accessibility Tech"],
          "area": ["Language Technology"],
          "topic": ["Edge AI", "Ethical Computing", "Accessibility Tech"]
        },
        {
          "title": "AI for Cybercrime Detection in At-Risk Areas",
          "description": "Detecting and preventing cybercrime in vulnerable communities and regions.",
          "technologies": ["Cybersecurity", "Cognitive Computing", "Ethics"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Cybersecurity",
          "tech": ["Cybersecurity", "Cognitive Computing", "Ethics"],
          "area": ["Cybersecurity"],
          "topic": ["Cybersecurity", "Cognitive Computing", "Ethics"]
        },
        {
          "title": "AI-Driven Aid Distribution Systems",
          "description": "Intelligent systems for fair and efficient distribution of humanitarian aid.",
          "technologies": ["WSN", "Blockchain", "Smart Contracts"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Aid Distribution",
          "tech": ["WSN", "Blockchain", "Smart Contracts"],
          "area": ["Aid Distribution"],
          "topic": ["WSN", "Blockchain", "Smart Contracts"]
        },
        {
          "title": "Energy-Efficient AI Models for Low-Power Areas",
          "description": "AI models optimized for deployment in areas with limited power resources.",
          "technologies": ["Green Computing", "Big Data", "Edge AI"],
          "category": "Artificial Intelligence (AI)",
          "subcategory": "Energy Efficiency",
          "tech": ["Green Computing", "Big Data", "Edge AI"],
          "area": ["Energy Efficiency"],
          "topic": ["Green Computing", "Big Data", "Edge AI"]
        }
      ]
    },
    {
      "id": "machine-learning",
      "title": "Machine Learning (ML)",
      "subtitle": "Pushing the Boundaries of AI",
      "description": "Exploring novel architectures, training methods, and optimization techniques to advance the state-of-the-art in machine learning and artificial intelligence.",
      "impact": "25+ Novel Algorithms",
      "domains": ["Deep Learning", "Optimization", "Architecture"],
      "icon": "🧠",
      "color": "#8b5cf6",
      "tech": ["Machine Learning (ML)"],
      "area": ["Food Security", "Education", "Employment Equity", "Mental Health", "Global Health", "Operations Research", "Human Rights", "Community Health", "Climate Science", "Justice Systems"],
      "topic": ["Geospatial Computing", "IoT", "Big Data Analytics", "NLP", "Edge Computing", "Mobile Computing", "Ethical Computing", "XAI", "Privacy-Preserving Computation", "Affective Computing", "Wearable Tech", "Neurotechnology", "Federated Learning", "Distributed Systems", "OSINT", "Computer Vision", "Cybersecurity", "Computational Science", "Computational Social Science"],
      "topics": [
        {
          "title": "Predictive Models for Food Security Crises",
          "description": "ML models to predict and prevent food security crises in vulnerable regions.",
          "technologies": ["Geospatial Computing", "IoT", "Big Data Analytics"],
          "category": "Machine Learning (ML)",
          "subcategory": "Food Security",
          "tech": ["Geospatial Computing", "IoT", "Big Data Analytics"],
          "area": ["Food Security"],
          "topic": ["Geospatial Computing", "IoT", "Big Data Analytics"]
        },
        {
          "title": "ML for Personalized Education in Low-Resource Settings",
          "description": "Personalized learning systems adapted for resource-constrained educational environments.",
          "technologies": ["NLP", "Edge Computing", "Mobile Computing"],
          "category": "Machine Learning (ML)",
          "subcategory": "Education",
          "tech": ["NLP", "Edge Computing", "Mobile Computing"],
          "area": ["Education"],
          "topic": ["NLP", "Edge Computing", "Mobile Computing"]
        },
        {
          "title": "Bias-Free Hiring Algorithms for Marginalized Communities",
          "description": "Fair and unbiased hiring algorithms to promote employment equity.",
          "technologies": ["Ethical Computing", "XAI", "Privacy-Preserving Computation"],
          "category": "Machine Learning (ML)",
          "subcategory": "Employment Equity",
          "tech": ["Ethical Computing", "XAI", "Privacy-Preserving Computation"],
          "area": ["Employment Equity"],
          "topic": ["Ethical Computing", "XAI", "Privacy-Preserving Computation"]
        },
        {
          "title": "ML-Powered Mental Health Screening Systems",
          "description": "Automated screening systems for early detection of mental health issues.",
          "technologies": ["Affective Computing", "Wearable Tech", "Neurotechnology"],
          "category": "Machine Learning (ML)",
          "subcategory": "Mental Health",
          "tech": ["Affective Computing", "Wearable Tech", "Neurotechnology"],
          "area": ["Mental Health"],
          "topic": ["Affective Computing", "Wearable Tech", "Neurotechnology"]
        },
        {
          "title": "Federated Learning for Global Health Research",
          "description": "Collaborative ML approaches for global health research while preserving privacy.",
          "technologies": ["Federated Learning", "Privacy Computing", "Distributed Systems"],
          "category": "Machine Learning (ML)",
          "subcategory": "Global Health",
          "tech": ["Federated Learning", "Privacy Computing", "Distributed Systems"],
          "area": ["Global Health"],
          "topic": ["Federated Learning", "Privacy Computing", "Distributed Systems"]
        },
        {
          "title": "Resource Allocation Optimization in Humanitarian Operations",
          "description": "Optimizing resource allocation for maximum impact in humanitarian operations.",
          "technologies": ["Reinforcement Learning", "Digital Twin", "Simulation Systems"],
          "category": "Machine Learning (ML)",
          "subcategory": "Operations Research",
          "tech": ["Reinforcement Learning", "Digital Twin", "Simulation Systems"],
          "area": ["Operations Research"],
          "topic": ["Reinforcement Learning", "Digital Twin", "Simulation Systems"]
        },
        {
          "title": "ML for Detecting Human Trafficking Patterns",
          "description": "Pattern recognition systems to detect and prevent human trafficking.",
          "technologies": ["OSINT", "Computer Vision", "Cybersecurity"],
          "category": "Machine Learning (ML)",
          "subcategory": "Human Rights",
          "tech": ["OSINT", "Computer Vision", "Cybersecurity"],
          "area": ["Human Rights"],
          "topic": ["OSINT", "Computer Vision", "Cybersecurity"]
        },
        {
          "title": "Accessible ML Tools for Community Health Workers",
          "description": "User-friendly ML tools for community health workers in remote areas.",
          "technologies": ["Edge AI", "Mobile Computing", "Accessibility Tech"],
          "category": "Machine Learning (ML)",
          "subcategory": "Community Health",
          "tech": ["Edge AI", "Mobile Computing", "Accessibility Tech"],
          "area": ["Community Health"],
          "topic": ["Edge AI", "Mobile Computing", "Accessibility Tech"]
        },
        {
          "title": "Climate Change Impact Prediction Models",
          "description": "Predictive models for understanding and mitigating climate change impacts.",
          "technologies": ["Geospatial Computing", "IoT", "Computational Science"],
          "category": "Machine Learning (ML)",
          "subcategory": "Climate Science",
          "tech": ["Geospatial Computing", "IoT", "Computational Science"],
          "area": ["Climate Science"],
          "topic": ["Geospatial Computing", "IoT", "Computational Science"]
        },
        {
          "title": "ML for Fair Justice System Outcomes",
          "description": "Ensuring fairness and reducing bias in judicial decision-making processes.",
          "technologies": ["Ethical Computing", "XAI", "Computational Social Science"],
          "category": "Machine Learning (ML)",
          "subcategory": "Justice Systems",
          "tech": ["Ethical Computing", "XAI", "Computational Social Science"],
          "area": ["Justice Systems"],
          "topic": ["Ethical Computing", "XAI", "Computational Social Science"]
        }
      ]
    }
  ]
};

// Write the data to a file
fs.writeFileSync('src/lib/data/researchData.json', JSON.stringify(researchData, null, 2));
console.log('Research data JSON file generated successfully with AI and ML data!'); 