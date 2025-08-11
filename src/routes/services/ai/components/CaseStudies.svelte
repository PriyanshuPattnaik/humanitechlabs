<script>
  import { onMount } from 'svelte';
  
  let sectionRef;
  let isVisible = false;
  let activeCase = 0;
  
  const caseStudies = [
    {
      title: 'Healthcare AI Diagnostics',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes were time-consuming and prone to human error, leading to delayed treatments and increased costs.',
      solution: 'Implemented computer vision AI for medical imaging analysis, reducing diagnosis time by 70% and improving accuracy by 25%.',
      results: [
        '70% faster diagnosis',
        '25% improved accuracy',
        '$2M annual cost savings',
        '95% patient satisfaction'
      ],
      technologies: ['Computer Vision', 'TensorFlow', 'Medical Imaging', 'Cloud AI'],
      image: '🏥',
      color: '#667eea'
    },
    {
      title: 'Smart Manufacturing Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues were impacting profitability and customer satisfaction.',
      solution: 'Deployed predictive maintenance AI and quality inspection systems using computer vision and IoT sensors.',
      results: [
        '40% reduced downtime',
        '30% quality improvement',
        '$5M cost savings',
        '99.5% defect detection'
      ],
      technologies: ['Predictive Analytics', 'Computer Vision', 'IoT', 'Machine Learning'],
      image: '🏭',
      color: '#764ba2'
    },
    {
      title: 'Financial Fraud Detection',
      client: 'National Bank',
      industry: 'Financial Services',
      challenge: 'Traditional fraud detection systems had high false positive rates and missed sophisticated fraud patterns.',
      solution: 'Built advanced ML models for real-time fraud detection with behavioral analysis and anomaly detection.',
      results: [
        '85% fraud detection rate',
        '60% reduced false positives',
        '$10M prevented losses',
        '2ms response time'
      ],
      technologies: ['Anomaly Detection', 'Real-time ML', 'Behavioral Analysis', 'Deep Learning'],
      image: '🏦',
      color: '#f093fb'
    }
  ];
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef) observer.observe(sectionRef);
    
    // Auto-rotate case studies
    const interval = setInterval(() => {
      activeCase = (activeCase + 1) % caseStudies.length;
    }, 5000);
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  });
</script>

<section id="case-studies" class="case-studies-section" bind:this={sectionRef}>
  <div class="container">
    <div class="section-header" class:visible={isVisible}>
      <div class="section-badge">
        <span class="badge-icon">📊</span>
        <span>Success Stories</span>
      </div>
      <h2 class="section-title">
        Real Results from
        <span class="gradient-text">AI Implementation</span>
      </h2>
      <p class="section-description">
        Discover how our AI solutions have transformed businesses across industries, 
        delivering measurable results and competitive advantages.
      </p>
    </div>
    
    <div class="case-studies-container" class:visible={isVisible}>
      <div class="case-navigation">
        {#each caseStudies as study, index}
          <button 
            class="nav-item" 
            class:active={activeCase === index}
            on:click={() => activeCase = index}
          >
            <div class="nav-icon">{study.image}</div>
            <div class="nav-content">
              <div class="nav-title">{study.title}</div>
              <div class="nav-industry">{study.industry}</div>
            </div>
          </button>
        {/each}
      </div>
      
      <div class="case-content">
        {#each caseStudies as study, index}
          <div class="case-study" class:active={activeCase === index} style="--color: {study.color}">
            <div class="case-header">
              <div class="case-icon">{study.image}</div>
              <div class="case-meta">
                <h3 class="case-title">{study.title}</h3>
                <div class="case-client">{study.client}</div>
                <div class="case-industry-tag">{study.industry}</div>
              </div>
            </div>
            
            <div class="case-body">
              <div class="challenge-solution">
                <div class="challenge">
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div class="solution">
                  <h4>Solution</h4>
                  <p>{study.solution}</p>
                </div>
              </div>
              
              <div class="results-section">
                <h4>Results</h4>
                <div class="results-grid">
                  {#each study.results as result}
                    <div class="result-item">
                      <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                      <span>{result}</span>
                    </div>
                  {/each}
                </div>
              </div>
              
              <div class="technologies-section">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  {#each study.technologies as tech}
                    <span class="tech-tag">{tech}</span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="case-indicators">
      {#each caseStudies as _, index}
        <button 
          class="indicator" 
          class:active={activeCase === index}
          on:click={() => activeCase = index}
        ></button>
      {/each}
    </div>
  </div>
</section>

<style>
  .case-studies-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    position: relative;
    overflow: hidden;
  }
  
  .case-studies-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .section-header.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a202c;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .case-studies-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .case-studies-container.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .case-navigation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border: 2px solid transparent;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
  }
  
  .nav-item:hover {
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateX(5px);
  }
  
  .nav-item.active {
    border-color: #667eea;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  }
  
  .nav-icon {
    font-size: 2rem;
    width: 50px;
    text-align: center;
  }
  
  .nav-content {
    flex: 1;
  }
  
  .nav-title {
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.25rem;
  }
  
  .nav-industry {
    font-size: 0.9rem;
    color: #4a5568;
  }
  
  .case-content {
    position: relative;
    min-height: 600px;
  }
  
  .case-study {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .case-study.active {
    opacity: 1;
    transform: translateX(0);
  }
  
  .case-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .case-icon {
    font-size: 3rem;
    width: 80px;
    text-align: center;
  }
  
  .case-meta {
    flex: 1;
  }
  
  .case-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
  }
  
  .case-client {
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 0.75rem;
  }
  
  .case-industry-tag {
    display: inline-block;
    background: var(--color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .case-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .challenge-solution {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .challenge, .solution {
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  .challenge {
    background: rgba(239, 68, 68, 0.05);
    border-left: 4px solid #ef4444;
  }
  
  .solution {
    background: rgba(34, 197, 94, 0.05);
    border-left: 4px solid #22c55e;
  }
  
  .challenge h4, .solution h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: #1a202c;
  }
  
  .challenge p, .solution p {
    line-height: 1.6;
    color: #4a5568;
  }
  
  .results-section h4, .technologies-section h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .result-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(34, 197, 94, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(34, 197, 94, 0.1);
  }
  
  .check-icon {
    width: 20px;
    height: 20px;
    color: #22c55e;
    flex-shrink: 0;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .tech-tag {
    background: var(--color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .case-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(102, 126, 234, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .indicator.active {
    background: #667eea;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    .case-studies-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .case-navigation {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 1rem;
    }
    
    .nav-item {
      min-width: 200px;
    }
    
    .challenge-solution {
      grid-template-columns: 1fr;
    }
    
    .results-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .case-study {
      padding: 1.5rem;
    }
  }
</style>