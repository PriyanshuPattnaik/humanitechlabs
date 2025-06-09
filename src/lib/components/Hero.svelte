<script>
  import { onMount } from 'svelte';
  let visible = false;
  let currentWordIndex = 0;
  let isAnimating = false;
  
  // More impactful rotating words
  const rotatingWords = [
    'HUMANITY',
    'IMPACT', 
    'CHANGE',
    'PROGRESS',
    'TOMORROW'
  ];
  
  // Typing effect for subtitle
  let typedText = '';
  const fullText = 'Architecting ethical AI, scalable solutions, and inclusive ecosystems to empower the next billion minds.';
  let typeIndex = 0;
  
  onMount(() => {
    visible = true;
    
    // Word rotation with smooth animation
    const rotateWords = () => {
      isAnimating = true;
      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
        isAnimating = false;
      }, 200);
    };
    
    const wordInterval = setInterval(rotateWords, 3500);
    
    // Typing effect
    const typeText = () => {
      if (typeIndex < fullText.length) {
        typedText += fullText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeText, 50);
      }
    };
    
    setTimeout(typeText, 1500);
    
    return () => clearInterval(wordInterval);
  });
  
  // Particle system for background
  /** @typedef {{id: number, x: number, y: number, delay: number}} Particle */
  
  /** @type {Particle[]} */
  let particles = [];
  
  onMount(() => {
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      });
    }
    particles = particles;
  });
</script>

<section class="hero" class:visible>
  <!-- Animated background particles -->
  <div class="particles">
    {#each particles as particle}
      <div 
        class="particle" 
        style="left: {particle.x}%; top: {particle.y}%; animation-delay: {particle.delay}s;"
      ></div>
    {/each}
  </div>
  
  <div class="hero-background">
    <div class="gradient-overlay"></div>
  </div>
  
  <div class="container">
    <div class="hero-content">
      <!-- Enhanced title with better hierarchy -->
      <div class="title-wrapper">
        <h1 class="hero-title">
          <span class="word primary">TECH</span>
          <span class="word secondary">FOR</span>
          <span class="word rotating" class:animating={isAnimating}>
            {rotatingWords[currentWordIndex]}
          </span>
          <span class="word accent">UPLIFTING.</span>
        </h1>
        
        <!-- Animated underline -->
        <div class="title-underline"></div>
      </div>
      
      <!-- Enhanced subtitle with typing effect -->
      <div class="subtitle-container">
        <p class="hero-subtitle typing">
          {typedText}<span class="cursor">|</span>
        </p>
        
        <p class="hero-description">
          Transforming global challenges through breakthrough research, 
          open-source innovation, and technology that serves humanity first.
        </p>
        
        <!-- Enhanced tags with icons -->
        <div class="tags">
          <span class="tag">
            <span class="tag-icon">🔬</span>
            Breakthrough Research
          </span>
          <span class="tag">
            <span class="tag-icon">⚡</span>
            Ethical AI Systems
          </span>
          <span class="tag">
            <span class="tag-icon">🌍</span>
            Global Impact Focus
          </span>
        </div>
      </div>
      
      <!-- Enhanced CTA section -->
      <div class="cta-container">
        <div class="primary-cta">
          <a href="#contact" class="cta-button primary">
            <span>Start Building</span>
            <span class="button-arrow">→</span>
          </a>
          <a href="#research" class="cta-button secondary">
            <span>Explore Research</span>
          </a>
        </div>
        
        <!-- Enhanced profile card -->
        <div class="profile-card">
          <div class="profile-icon-wrapper">
            <img src="/images/4.png" alt="Hume AI" class="profile-icon" />
            <div class="status-indicator"></div>
          </div>
          <div class="profile-text">
            <strong>Meet Hume</strong>
            <span>Your AI research companion ready to solve tomorrow's challenges</span>
          </div>
        </div>
      </div>
      
      <!-- Impact metrics -->
      <div class="metrics">
        <div class="metric">
          <span class="metric-number">20+</span>
          <span class="metric-label">Impact Domains</span>
        </div>
        <div class="metric">
          <span class="metric-number">100%</span>
          <span class="metric-label">Open Source</span>
        </div>
        <div class="metric">
          <span class="metric-number">∞</span>
          <span class="metric-label">Potential Impact</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="scroll-indicator">
    <div class="scroll-text">Scroll to explore</div>
    <div class="scroll-arrow">↓</div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    color: var(--color-jet-black);
    position: relative;
    overflow: hidden;
    padding: 2rem;
    padding-top: 6rem;
  }

  /* Animated particles */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: linear-gradient(45deg, #C0C0C0, #E8E8E8);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) opacity(0.3); }
    50% { transform: translateY(-20px) opacity(0.8); }
  }

  .hero-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-image: url('/images/hero.png');
    background-size: cover;
    background-position: center right;
    z-index: 0;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      rgba(255,255,255,0.9) 0%, 
      rgba(255,255,255,0.7) 40%,
      rgba(255,255,255,0.3) 70%,
      transparent 100%
    );
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-content {
    max-width: 800px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .visible .hero-content {
    opacity: 1;
    transform: translateY(0);
  }

  /* Enhanced title styling */
  .title-wrapper {
    position: relative;
    margin-bottom: 3rem;
  }

  .hero-title {
    font-size: clamp(3.5rem, 12vw, 10rem);
    line-height: 0.9;
    font-family: var(--font-headers);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .word {
    display: block;
    position: relative;
    margin-bottom: 0.1em;
    animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
    transform: translateY(50px);
  }

  .word.primary {
    color: var(--color-jet-black);
    animation-delay: 0.2s;
  }

  .word.secondary {
    color: #666;
    font-size: 0.6em;
    animation-delay: 0.4s;
  }

  .word.rotating {
    background: linear-gradient(135deg, #000000 0%, #C0C0C0 50%, #E8E8E8 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    animation-delay: 0.6s;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .word.rotating.animating {
    transform: translateY(-10px) scale(1.05);
    filter: blur(1px);
  }

  .word.accent {
    color: var(--color-jet-black);
    animation-delay: 0.8s;
    position: relative;
  }

  .word.accent::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #000000, #C0C0C0);
    animation: expandLine 1s ease-out 1.5s forwards;
  }

  .title-underline {
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #C0C0C0, #E8E8E8);
    animation: expandUnderline 1.5s ease-out 1s forwards;
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expandLine {
    to { width: 100px; }
  }

  @keyframes expandUnderline {
    to { width: 200px; }
  }

  /* Enhanced subtitle */
  .subtitle-container {
    margin-bottom: 4rem;
  }

  .hero-subtitle {
    font-size: 1.75rem;
    font-family: var(--font-hero);
    color: var(--color-jet-black);
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .cursor {
    animation: blink 1s infinite;
    color: #C0C0C0;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .hero-description {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  /* Enhanced tags */
  .tags {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-radius: 50px;
    font-size: 0.9rem;
    font-family: var(--font-body);
    color: var(--color-charcoal-gray);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .tag:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .tag-icon {
    font-size: 1.1em;
  }

  /* Enhanced CTA */
  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .primary-cta {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    text-decoration: none;
    border-radius: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
  }

  .cta-button.primary {
    background: var(--color-jet-black);
    color: var(--color-pure-white);
  }

  .cta-button.primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
  }

  .cta-button.primary:hover::before {
    left: 100%;
  }

  .cta-button.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .cta-button.secondary {
    background: transparent;
    color: var(--color-jet-black);
    border: 2px solid var(--color-jet-black);
  }

  .cta-button.secondary:hover {
    background: var(--color-jet-black);
    color: var(--color-pure-white);
    transform: translateY(-3px);
  }

  .button-arrow {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .button-arrow {
    transform: translateX(5px);
  }

  /* Enhanced profile card */
  .profile-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-radius: 16px;
    max-width: 500px;
    color: var(--color-jet-black);
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
  }

  .profile-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .profile-icon-wrapper {
    position: relative;
  }

  .profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #C0C0C0;
  }

  .status-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    background: #00ff88;
    border-radius: 50%;
    border: 2px solid white;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(0, 255, 136, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0); }
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .profile-text strong {
    font-size: 1.1rem;
    color: var(--color-jet-black);
  }

  .profile-text span {
    font-size: 0.95rem;
    color: #666;
  }

  /* Impact metrics */
  .metrics {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .metric-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-jet-black);
    line-height: 1;
  }

  .metric-label {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Scroll indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.7;
    animation: bounce 2s infinite;
  }

  .scroll-text {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scroll-arrow {
    font-size: 1.2rem;
    color: #C0C0C0;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
      padding-top: 5rem;
    }

    .hero-title {
      font-size: clamp(2.5rem, 8vw, 4rem);
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1.1rem;
    }

    .primary-cta {
      flex-direction: column;
    }

    .cta-button {
      text-align: center;
      justify-content: center;
    }

    .profile-card {
      font-size: 0.9rem;
      padding: 1.25rem 1.5rem;
    }

    .metrics {
      gap: 2rem;
      justify-content: center;
    }

    .hero-background {
      width: 100%;
      opacity: 0.3;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .hero-title {
      font-size: clamp(3rem, 10vw, 6rem);
    }
  }
</style>