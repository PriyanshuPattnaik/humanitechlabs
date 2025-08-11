<script>
  import { onMount } from 'svelte';
  
  let heroRef;
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    if (heroRef) observer.observe(heroRef);
    
    return () => observer.disconnect();
  });
</script>

<section class="hero ai-services-page" bind:this={heroRef}>
  <div class="hero-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
  
  <div class="container">
    <div class="hero-content" class:visible={isVisible}>
      <div class="hero-badge">
        <span class="badge-icon">🤖</span>
        <span>AI Integration Services</span>
      </div>
      
      <h1 class="hero-title">
        Transform Your Business with
        <span class="gradient-text">Intelligent AI Solutions</span>
      </h1>
      
      <p class="hero-description">
        Harness the power of artificial intelligence to automate processes, gain insights, 
        and create exceptional user experiences. Our AI integration services help you stay 
        ahead in the digital transformation era.
      </p>
      
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">50+</div>
          <div class="stat-label">AI Models Deployed</div>
        </div>
        <div class="stat">
          <div class="stat-number">95%</div>
          <div class="stat-label">Accuracy Rate</div>
        </div>
        <div class="stat">
          <div class="stat-number">40%</div>
          <div class="stat-label">Cost Reduction</div>
        </div>
      </div>
      
      <div class="hero-actions">
        <a href="#ai-services" class="cta-button primary">
          <span>Explore AI Solutions</span>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#case-studies" class="cta-button secondary">
          <span>View Case Studies</span>
        </a>
      </div>
    </div>
    
    <div class="hero-visual" class:visible={isVisible}>
      <div class="ai-visualization">
        <div class="neural-network">
          <div class="node node-1"></div>
          <div class="node node-2"></div>
          <div class="node node-3"></div>
          <div class="node node-4"></div>
          <div class="connection connection-1"></div>
          <div class="connection connection-2"></div>
          <div class="connection connection-3"></div>
        </div>
        <div class="floating-elements">
          <div class="element element-1">ML</div>
          <div class="element element-2">AI</div>
          <div class="element element-3">NLP</div>
          <div class="element element-4">CV</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  
  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;
  }
  
  .orb-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .orb-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #a8edea, #fed6e3);
    top: 60%;
    right: 20%;
    animation-delay: 2s;
  }
  
  .orb-3 {
    width: 250px;
    height: 250px;
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    bottom: 20%;
    left: 60%;
    animation-delay: 4s;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-description {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .stat {
    text-align: center;
  }
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #ffd89b;
  }
  
  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .cta-button.primary {
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    color: white;
  }
  
  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover .arrow {
    transform: translateX(4px);
  }
  
  .hero-visual {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .hero-visual.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .ai-visualization {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .neural-network {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .node {
    position: absolute;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .node-1 { top: 20%; left: 20%; animation-delay: 0s; }
  .node-2 { top: 20%; right: 20%; animation-delay: 0.5s; }
  .node-3 { bottom: 30%; left: 30%; animation-delay: 1s; }
  .node-4 { bottom: 30%; right: 30%; animation-delay: 1.5s; }
  
  .connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 216, 155, 0.6), rgba(25, 84, 123, 0.6));
    animation: flow 3s ease-in-out infinite;
  }
  
  .connection-1 {
    top: 35%;
    left: 25%;
    width: 50%;
    transform: rotate(15deg);
  }
  
  .connection-2 {
    top: 50%;
    left: 35%;
    width: 30%;
    transform: rotate(-45deg);
  }
  
  .connection-3 {
    bottom: 45%;
    left: 40%;
    width: 40%;
    transform: rotate(30deg);
  }
  
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .element {
    position: absolute;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    animation: float 4s ease-in-out infinite;
  }
  
  .element-1 { top: 10%; left: 10%; animation-delay: 0s; }
  .element-2 { top: 15%; right: 15%; animation-delay: 1s; }
  .element-3 { bottom: 20%; left: 15%; animation-delay: 2s; }
  .element-4 { bottom: 15%; right: 10%; animation-delay: 3s; }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
  
  @keyframes flow {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }
  
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-stats {
      justify-content: center;
    }
    
    .ai-visualization {
      height: 300px;
    }
  }
</style>