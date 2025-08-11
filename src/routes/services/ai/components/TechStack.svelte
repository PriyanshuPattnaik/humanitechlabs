<script>
  import { onMount } from 'svelte';
  
  let sectionRef;
  let isVisible = false;
  
  const techCategories = [
    {
      title: 'Machine Learning',
      icon: '🤖',
      technologies: [
        { name: 'TensorFlow', logo: '🔥', description: 'Deep learning framework' },
        { name: 'PyTorch', logo: '⚡', description: 'Neural network library' },
        { name: 'Scikit-learn', logo: '🔬', description: 'ML algorithms' },
        { name: 'Keras', logo: '🧠', description: 'High-level neural networks' }
      ]
    },
    {
      title: 'Natural Language Processing',
      icon: '💬',
      technologies: [
        { name: 'OpenAI GPT', logo: '🚀', description: 'Language models' },
        { name: 'Hugging Face', logo: '🤗', description: 'Transformers library' },
        { name: 'spaCy', logo: '📝', description: 'Industrial NLP' },
        { name: 'NLTK', logo: '📚', description: 'Natural language toolkit' }
      ]
    },
    {
      title: 'Computer Vision',
      icon: '👁️',
      technologies: [
        { name: 'OpenCV', logo: '👀', description: 'Computer vision library' },
        { name: 'YOLO', logo: '🎯', description: 'Object detection' },
        { name: 'MediaPipe', logo: '📹', description: 'Perception pipeline' },
        { name: 'Detectron2', logo: '🔍', description: 'Object detection platform' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      technologies: [
        { name: 'AWS SageMaker', logo: '🌐', description: 'ML platform' },
        { name: 'Google Cloud AI', logo: '🔵', description: 'AI services' },
        { name: 'Azure ML', logo: '🔷', description: 'Machine learning service' },
        { name: 'Docker', logo: '🐳', description: 'Containerization' }
      ]
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

<section class="tech-stack-section" bind:this={sectionRef}>
  <div class="container">
    <div class="section-header" class:visible={isVisible}>
      <div class="section-badge">
        <span class="badge-icon">🛠️</span>
        <span>Technology Stack</span>
      </div>
      <h2 class="section-title">
        Powered by
        <span class="gradient-text">Cutting-Edge Technologies</span>
      </h2>
      <p class="section-description">
        We leverage the latest AI frameworks, libraries, and cloud platforms to deliver 
        robust, scalable, and efficient AI solutions.
      </p>
    </div>
    
    <div class="tech-grid" class:visible={isVisible}>
      {#each techCategories as category, categoryIndex}
        <div class="tech-category" style="--delay: {categoryIndex * 0.1}s">
          <div class="category-header">
            <div class="category-icon">{category.icon}</div>
            <h3 class="category-title">{category.title}</h3>
          </div>
          
          <div class="technologies-list">
            {#each category.technologies as tech, techIndex}
              <div class="tech-item" style="--tech-delay: {(categoryIndex * 4 + techIndex) * 0.05}s">
                <div class="tech-logo">{tech.logo}</div>
                <div class="tech-info">
                  <div class="tech-name">{tech.name}</div>
                  <div class="tech-description">{tech.description}</div>
                </div>
                <div class="tech-glow"></div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    
    <div class="integration-showcase" class:visible={isVisible}>
      <div class="showcase-content">
        <h3 class="showcase-title">Seamless Integration</h3>
        <p class="showcase-description">
          Our AI solutions integrate seamlessly with your existing systems and workflows, 
          ensuring minimal disruption and maximum efficiency.
        </p>
        <div class="integration-features">
          <div class="feature">
            <div class="feature-icon">🔗</div>
            <span>API Integration</span>
          </div>
          <div class="feature">
            <div class="feature-icon">📊</div>
            <span>Real-time Analytics</span>
          </div>
          <div class="feature">
            <div class="feature-icon">🔒</div>
            <span>Enterprise Security</span>
          </div>
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <span>High Performance</span>
          </div>
        </div>
      </div>
      <div class="showcase-visual">
        <div class="integration-diagram">
          <div class="central-hub">AI Core</div>
          <div class="connection-point point-1">API</div>
          <div class="connection-point point-2">DB</div>
          <div class="connection-point point-3">UI</div>
          <div class="connection-point point-4">Cloud</div>
          <div class="connection-line line-1"></div>
          <div class="connection-line line-2"></div>
          <div class="connection-line line-3"></div>
          <div class="connection-line line-4"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .tech-stack-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .tech-stack-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
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
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .tech-grid.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .tech-category {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .category-icon {
    font-size: 2rem;
  }
  
  .category-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
  
  .technologies-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .tech-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--tech-delay);
  }
  
  .tech-item:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .tech-item:hover .tech-glow {
    opacity: 1;
  }
  
  .tech-logo {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
  }
  
  .tech-info {
    flex: 1;
  }
  
  .tech-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .tech-description {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  
  .tech-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .integration-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  }
  
  .integration-showcase.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .showcase-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .showcase-description {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .integration-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .feature-icon {
    font-size: 1.5rem;
  }
  
  .showcase-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .integration-diagram {
    position: relative;
    width: 300px;
    height: 300px;
  }
  
  .central-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .connection-point {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .point-1 { top: 10%; left: 50%; transform: translateX(-50%); }
  .point-2 { top: 50%; right: 10%; transform: translateY(-50%); }
  .point-3 { bottom: 10%; left: 50%; transform: translateX(-50%); }
  .point-4 { top: 50%; left: 10%; transform: translateY(-50%); }
  
  .connection-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.6));
    animation: flow 3s ease-in-out infinite;
  }
  
  .line-1 {
    top: 25%;
    left: 50%;
    width: 60px;
    transform: translateX(-50%) rotate(-45deg);
  }
  
  .line-2 {
    top: 50%;
    right: 25%;
    width: 60px;
    transform: translateY(-50%) rotate(45deg);
  }
  
  .line-3 {
    bottom: 25%;
    left: 50%;
    width: 60px;
    transform: translateX(-50%) rotate(45deg);
  }
  
  .line-4 {
    top: 50%;
    left: 25%;
    width: 60px;
    transform: translateY(-50%) rotate(-45deg);
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
  }
  
  @keyframes flow {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }
  
  @media (max-width: 768px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }
    
    .integration-showcase {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }
    
    .integration-features {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
  }
</style>