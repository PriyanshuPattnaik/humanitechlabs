<script>
  import { onMount } from 'svelte';
  
  let sectionRef;
  let isVisible = false;
  
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

<section class="final-cta-section" bind:this={sectionRef}>
  <div class="cta-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
  
  <div class="container">
    <div class="cta-content" class:visible={isVisible}>
      <div class="cta-badge">
        <span class="badge-icon">🚀</span>
        <span>Ready to Transform?</span>
      </div>
      
      <h2 class="cta-title">
        Start Your AI Journey
        <span class="gradient-text">Today</span>
      </h2>
      
      <p class="cta-description">
        Join hundreds of businesses that have already transformed their operations with our AI solutions. 
        Get started with a free consultation and discover how AI can revolutionize your business.
      </p>
      
      <div class="cta-stats">
        <div class="stat">
          <div class="stat-number">500+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat">
          <div class="stat-number">98%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
        <div class="stat">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Support Available</div>
        </div>
      </div>
      
      <div class="cta-actions">
        <a href="/services/ngos" class="cta-button primary">
          <span>Start Free Consultation</span>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/research" class="cta-button secondary">
          <span>View Our Research</span>
          <svg class="external" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
      
      <div class="trust-indicators">
        <div class="trust-item">
          <div class="trust-icon">🔒</div>
          <span>Enterprise Security</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">⚡</div>
          <span>Fast Implementation</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">🎯</div>
          <span>Proven Results</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">🤝</div>
          <span>Ongoing Support</span>
        </div>
      </div>
    </div>
    
    <div class="cta-visual" class:visible={isVisible}>
      <div class="ai-network">
        <div class="network-node node-1">
          <div class="node-pulse"></div>
          <span>AI</span>
        </div>
        <div class="network-node node-2">
          <div class="node-pulse"></div>
          <span>ML</span>
        </div>
        <div class="network-node node-3">
          <div class="node-pulse"></div>
          <span>NLP</span>
        </div>
        <div class="network-node node-4">
          <div class="node-pulse"></div>
          <span>CV</span>
        </div>
        <div class="network-node node-5">
          <div class="node-pulse"></div>
          <span>DL</span>
        </div>
        
        <div class="connection-line line-1"></div>
        <div class="connection-line line-2"></div>
        <div class="connection-line line-3"></div>
        <div class="connection-line line-4"></div>
        <div class="connection-line line-5"></div>
        <div class="connection-line line-6"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .final-cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .cta-background {
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
    animation: float 8s ease-in-out infinite;
  }
  
  .orb-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    top: -10%;
    left: -10%;
    animation-delay: 0s;
  }
  
  .orb-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #a8edea, #fed6e3);
    top: 50%;
    right: -10%;
    animation-delay: 3s;
  }
  
  .orb-3 {
    width: 350px;
    height: 350px;
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    bottom: -10%;
    left: 50%;
    animation-delay: 6s;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  .cta-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cta-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .cta-badge {
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
    margin-bottom: 2rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .cta-title {
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
  
  .cta-description {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2.5rem;
  }
  
  .cta-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .stat {
    text-align: center;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffd89b;
    display: block;
  }
  
  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }
  
  .cta-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
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
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button.secondary {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.2);
  }
  
  .arrow, .external {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover .arrow {
    transform: translateX(4px);
  }
  
  .cta-button:hover .external {
    transform: translate(2px, -2px);
  }
  
  .trust-indicators {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
  }
  
  .trust-icon {
    font-size: 1.2rem;
  }
  
  .cta-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .cta-visual.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .ai-network {
    position: relative;
    width: 400px;
    height: 400px;
  }
  
  .network-node {
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    position: relative;
    animation: nodeFloat 4s ease-in-out infinite;
  }
  
  .node-pulse {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid rgba(255, 216, 155, 0.6);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .node-1 { 
    top: 10%; 
    left: 50%; 
    transform: translateX(-50%);
    animation-delay: 0s;
  }
  
  .node-2 { 
    top: 30%; 
    right: 10%;
    animation-delay: 0.8s;
  }
  
  .node-3 { 
    bottom: 30%; 
    right: 20%;
    animation-delay: 1.6s;
  }
  
  .node-4 { 
    bottom: 10%; 
    left: 50%; 
    transform: translateX(-50%);
    animation-delay: 2.4s;
  }
  
  .node-5 { 
    top: 30%; 
    left: 10%;
    animation-delay: 3.2s;
  }
  
  .connection-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 216, 155, 0.6), rgba(25, 84, 123, 0.6));
    animation: flow 4s ease-in-out infinite;
  }
  
  .line-1 {
    top: 25%;
    left: 45%;
    width: 80px;
    transform: rotate(25deg);
    animation-delay: 0s;
  }
  
  .line-2 {
    top: 40%;
    right: 25%;
    width: 60px;
    transform: rotate(-30deg);
    animation-delay: 0.5s;
  }
  
  .line-3 {
    bottom: 35%;
    right: 30%;
    width: 70px;
    transform: rotate(45deg);
    animation-delay: 1s;
  }
  
  .line-4 {
    bottom: 25%;
    left: 45%;
    width: 80px;
    transform: rotate(-25deg);
    animation-delay: 1.5s;
  }
  
  .line-5 {
    top: 40%;
    left: 25%;
    width: 60px;
    transform: rotate(30deg);
    animation-delay: 2s;
  }
  
  .line-6 {
    top: 50%;
    left: 30%;
    width: 40%;
    transform: translateY(-50%);
    animation-delay: 2.5s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
  }
  
  @keyframes nodeFloat {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-10px) scale(1.05); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.5; }
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
    
    .cta-title {
      font-size: 2.5rem;
    }
    
    .cta-stats {
      justify-content: center;
    }
    
    .trust-indicators {
      grid-template-columns: 1fr;
    }
    
    .ai-network {
      width: 300px;
      height: 300px;
    }
    
    .network-node {
      width: 60px;
      height: 60px;
      font-size: 0.8rem;
    }
  }
</style>