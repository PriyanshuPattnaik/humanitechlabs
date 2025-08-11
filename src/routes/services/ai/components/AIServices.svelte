<script>
  import { onMount } from 'svelte';
  
  let sectionRef;
  let isVisible = false;
  
  const services = [
    {
      icon: '🧠',
      title: 'Machine Learning Models',
      description: 'Custom ML models for prediction, classification, and pattern recognition tailored to your business needs.',
      features: ['Predictive Analytics', 'Classification Systems', 'Anomaly Detection', 'Recommendation Engines'],
      color: '#667eea'
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding applications.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Summarization', 'Language Translation'],
      color: '#764ba2'
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Intelligent image and video analysis for automation, quality control, and visual recognition.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Medical Imaging'],
      color: '#f093fb'
    },
    {
      icon: '🔄',
      title: 'Process Automation',
      description: 'Intelligent automation solutions that streamline workflows and reduce manual intervention.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Decision Making'],
      color: '#f5576c'
    },
    {
      icon: '📊',
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Custom Dashboards', 'Performance Metrics'],
      color: '#4facfe'
    },
    {
      icon: '🔮',
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance on AI adoption, implementation roadmaps, and digital transformation.',
      features: ['AI Readiness Assessment', 'Implementation Strategy', 'ROI Analysis', 'Change Management'],
      color: '#43e97b'
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
    
    return () => observer.disconnect();
  });
</script>

<section id="ai-services" class="services-section" bind:this={sectionRef}>
  <div class="container">
    <div class="section-header" class:visible={isVisible}>
      <div class="section-badge">
        <span class="badge-icon">⚡</span>
        <span>AI Solutions</span>
      </div>
      <h2 class="section-title">
        Comprehensive AI Services for
        <span class="gradient-text">Modern Businesses</span>
      </h2>
      <p class="section-description">
        From machine learning models to intelligent automation, we provide end-to-end AI solutions 
        that drive innovation and efficiency across your organization.
      </p>
    </div>
    
    <div class="services-grid" class:visible={isVisible}>
      {#each services as service, index}
        <div class="service-card" style="--delay: {index * 0.1}s; --color: {service.color}">
          <div class="card-background"></div>
          <div class="card-content">
            <div class="service-icon">{service.icon}</div>
            <h3 class="service-title">{service.title}</h3>
            <p class="service-description">{service.description}</p>
            
            <div class="service-features">
              {#each service.features as feature}
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </div>
              {/each}
            </div>
            
            <div class="card-footer">
              <button class="learn-more-btn">
                <span>Learn More</span>
                <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    position: relative;
    overflow: hidden;
  }
  
  .services-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.5;
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
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .services-grid.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .service-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .service-card:hover .card-glow {
    opacity: 1;
  }
  
  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color), transparent);
  }
  
  .card-content {
    position: relative;
    z-index: 1;
  }
  
  .service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  .service-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
  }
  
  .service-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 2rem;
  }
  
  .service-features {
    margin-bottom: 2rem;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: #2d3748;
  }
  
  .check-icon {
    width: 16px;
    height: 16px;
    color: var(--color);
    flex-shrink: 0;
  }
  
  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .learn-more-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--color);
    font-weight: 600;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
  }
  
  .learn-more-btn:hover {
    gap: 0.75rem;
  }
  
  .arrow {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  .learn-more-btn:hover .arrow {
    transform: translateX(4px);
  }
  
  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--color), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    filter: blur(20px);
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .service-card {
      padding: 1.5rem;
    }
  }
</style>